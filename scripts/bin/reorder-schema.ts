import {fileURLToPath} from 'url';
import {readFileSync} from 'fs';
import {join} from 'path';
import {validateAlphabetPosition} from "../utils/index.ts";
import type {Feature, MultiPolygon} from 'geojson'
import {writeFileSync} from "node:fs";

const path = fileURLToPath(new URL(import.meta.url).toString());
const boundariesFile = readFileSync(join(path, '../../../Boundaries.geojson'), 'utf-8').split('\n')
const indexes: Array<string | false> = []

for (let i = 0; i < boundariesFile.length; i++) {
    let line = boundariesFile[i]?.trim();

    if (!line.trim().startsWith('{') || line === '{') {
        indexes.push(false);
        continue
    }

    if (line.endsWith(',')) line = line.slice(0, line.length - 1)

    const json = JSON.parse(line) as Feature<MultiPolygon>

    indexes.push(json.properties!.id)
}

for (let i = 0; i < boundariesFile.length; i++) {
    let origLine = boundariesFile[i];
    let line = origLine?.trim();

    if (!line.startsWith('{') || line === '{') {
        continue
    }

    if (line.endsWith(',')) line = line.slice(0, line.length - 1)

    const json = JSON.parse(line) as Feature<MultiPolygon>

    if (!validateAlphabetPosition('boundary', json.properties!.id, false)) {
        boundariesFile.splice(i, 1);
        indexes.splice(i, 1);

        let targetIndex = boundariesFile.length - 1;

        for (let j = 0; j < boundariesFile.length; j++) {
            if(indexes[j + 1] === false) continue

            if (typeof indexes[j + 1] === 'undefined' || (indexes[j + 1] as string).localeCompare(json.properties!.id) > 0) {
                targetIndex = j + 1;
                break;
            }
        }

        boundariesFile.splice(targetIndex, 0, line);
        indexes.splice(targetIndex, 0, json.properties!.id);

        console.log(`changed ${json.properties!.id} index from ${i} to ${targetIndex}`)
    }
}

writeFileSync(join(path, '../../../Boundaries.geojson'), boundariesFile.join('\n'), 'utf-8')