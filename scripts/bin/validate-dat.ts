import {fileURLToPath} from 'url';
import {readFileSync} from 'fs';
import {join} from 'path';
import Ajv from "ajv/dist/2020.js";

const path = fileURLToPath(new URL(import.meta.url).toString());
const schema = JSON.parse(readFileSync(join(path, '../../../schema.json'), 'utf-8'))
const boundaries = JSON.parse(readFileSync(join(path, '../../../Boundaries.geojson'), 'utf-8'))

const ajv = new Ajv()

const validate = ajv.compile(schema)

const valid = validate(boundaries)
if (!valid) throw validate.errors;

console.info('Schema is valid');

