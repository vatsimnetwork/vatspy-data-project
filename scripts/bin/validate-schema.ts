import {fileURLToPath} from 'url';
import {readFileSync} from 'fs';
import {join} from 'path';
import Ajv from "ajv/dist/2020.js";
import {isValidCoordinates, parseDatFile} from "../utils/index.ts";
import type {FeatureCollection, MultiPolygon} from 'geojson'

const path = fileURLToPath(new URL(import.meta.url).toString());
const schema = JSON.parse(readFileSync(join(path, '../../../schema.json'), 'utf-8'))
const boundaries: FeatureCollection<MultiPolygon> = JSON.parse(readFileSync(join(path, '../../../Boundaries.geojson'), 'utf-8'))
const dat = readFileSync(join(path, '../../../VATSpy.dat'), 'utf-8')

const ajv = new Ajv()

const validate = ajv.compile(schema)

const valid = validate(boundaries)
if (!valid) throw validate.errors;

console.info('Schema is valid');

const datBoundaries = new Set<string>()

const parsedDat = parseDatFile({
    sections: {
        firs: {
            title: 'FIRs',
            children: {
                icao: true,
                name: true,
                callsign: true,
                boundary: true,
            },
        }
    },
    dat,
});

for (const fir of parsedDat.firs) {
    if (fir.boundary)
        datBoundaries.add(fir.boundary)
}

for (const boundary of boundaries.features) {
    if (!datBoundaries.has(boundary.properties.id)) throw new Error(`Definition is missing in .dat file for ${boundary.properties.id}`)

    for (const root of boundary.geometry.coordinates) {
        for (const root2 of root) {
            for (const coords of root2) {
                if (!isValidCoordinates(coords)) throw new Error(`Invalid coordinates in ${boundary.properties.id}`)
            }
        }
    }
}
