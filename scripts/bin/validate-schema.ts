import {fileURLToPath} from 'url';
import {readFileSync} from 'fs';
import {join} from 'path';
import Ajv from "ajv/dist/2020.js";
import {parseDatFile} from "../utils/index.ts";

const path = fileURLToPath(new URL(import.meta.url).toString());
const schema = JSON.parse(readFileSync(join(path, '../../../schema.json'), 'utf-8'))
const boundaries = JSON.parse(readFileSync(join(path, '../../../Boundaries.geojson'), 'utf-8'))
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
    if(fir.boundary)
    datBoundaries.add(fir.boundary)
}

for (const boundary of (boundaries as any).features) {
    if(!datBoundaries.has(boundary.properties.id)) console.error(`Definition is missing in .dat file for ${boundary.properties.id}`)
}
