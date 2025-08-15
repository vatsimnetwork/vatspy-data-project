import {fileURLToPath} from 'url';
import {readFileSync} from 'fs';
import {join} from 'path';
import {isValidCoordinates, parseDatFile} from "../utils/index.ts";

const path = fileURLToPath(new URL(import.meta.url).toString());
const dat = readFileSync(join(path, '../../../VATSpy.dat'), 'utf-8')
const boundaries = JSON.parse(readFileSync(join(path, '../../../Boundaries.geojson'), 'utf-8'))

const parsedDat = parseDatFile({
    sections: {
        countries: {
            title: 'Countries',
            children: {
                country: true,
                code: true,
                callsign: true,
            },
        },
        airports: {
            title: 'Airports',
            children: {
                icao: true,
                name: true,
                lat: true,
                lon: true,
                iata: true,
                fir: true,
                isPseudo: true,
            },
        },
        firs: {
            title: 'FIRs',
            children: {
                icao: true,
                name: true,
                callsign: true,
                boundary: true,
            },
        },
        uirs: {
            title: 'UIRs',
            children: {
                icao: true,
                name: true,
                firs: true,
            },
        },
        idl: {
            title: 'IDL',
            children: {
                first: true,
                last: true,
            }
        }
    },
    dat,
});

const counters: Record<string, Record<string, true>> = {}

function count(key: string, value: string, throwOnError = true) {
    counters[key] ??= {}
    if (counters[key][value]) {
        if (throwOnError)
            throw new Error(`Value ${value} in ${key} is duplicated`)
        else return false
    }

    counters[key][value] = true
    return true
}

for (const country of parsedDat.countries) {
    if (!country.country || !country.code || country.code.length !== 2) throw new Error(`Country ${country.code} validation failed`);
    if (country.callsign === undefined) throw new Error(`Country ${country.code} is missing callsign (should be at least empty)`);

    count('countries', country.code)
}

for (const airport of parsedDat.airports) {
    if (!airport.name || !airport.icao || !airport.fir) throw new Error(`Airport ${airport.icao} validation failed`)
    if (airport.icao.length !== 4) throw new Error(`Airport ${airport.icao} ICAO should be 4-length`)
    if (airport.fir.length !== 4) throw new Error(`Airport ${airport.icao} FIR should be 4-length`)

    if (!airport.lat) throw new Error(`Airport ${airport.icao} lat is missing`)
    if (!airport.lon) throw new Error(`Airport ${airport.icao} lon is missing`)
    if (!isValidCoordinates([Number(airport.lon), Number(airport.lat)])) throw new Error(`Airport ${airport.icao} coordinates are invalid`)

    if (airport.isPseudo !== '1' && airport.isPseudo !== '0') throw new Error(`Airport ${airport.isPseudo} should be 0 or 1`)

    const valid = count('airport-icao', airport.icao, false)

    if (!valid && !airport.isPseudo) {
        throw new Error(`Airport ${airport.icao} is duplicated`)
    }

    if (airport.iata)
        count('airport-iata', airport.iata)
}

for (const fir of parsedDat.firs) {
    if (!fir.icao || !fir.name || !fir.boundary) throw new Error(`Fir ${fir.icao} validation failed`)
    const boundary = boundaries.features.find((x: any) => x.properties.id === fir.boundary)
    if (!boundary) throw new Error(`Fir ${fir.icao} boundary was not found`)

    if (fir.callsign)
        count('fir-callsign-and-icao', fir.callsign + fir.icao)
    else count('fir-icao', fir.icao)
}

for (const fir of parsedDat.uirs) {
    if (!fir.icao || !fir.name || !fir.firs) throw new Error(`UIR ${fir.icao} validation failed`)
    const firs = fir.firs.split(',')
    const missing = firs.filter(x => !parsedDat.firs.some(y => y.icao === x))
    if (missing.length) throw new Error(`${missing} for UIR ${fir.icao} missing in FIRs`)

    count('uir', fir.icao)
}

for (const idl of parsedDat.idl) {
    if (!idl.first || !idl.last) throw new Error(`IDL validation failed`)
    if (isNaN(Number(idl.first)) || isNaN(Number(idl.last))) throw new Error(`IDL coordinates validation failed`)
}
