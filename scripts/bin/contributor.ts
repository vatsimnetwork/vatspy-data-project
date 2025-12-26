import {parseArgs} from "node:util";
import {parse} from 'csv-parse/sync'

const {values: {login, failWhenMissing}} = parseArgs({
    args: process.argv,
    allowPositionals: true,
    options: {
        login: {
            type: 'string',
        },
        failWhenMissing: {
            type: 'boolean'
        }
    },
});

const csv = await (await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRHzHhKz4icslNkd3I6mF1Mp_6gan4muRcWZb8fCYL8_S0C6GDpG409xQGTmPAXLPupEWWws3euNK7O/pub?gid=0&single=true&output=csv')).text()

const result = parse<{
    username: string;
    expiry: string;
    cid: string;
    name: string;
    region: string;
    role: string;
    approvingCid: string;
    approvingStaff: string;
}>(csv, {
    columns: ['username', 'expiry', 'cid', 'name', 'region', 'role', 'approvingCid', 'approvingStaff'],
    skip_empty_lines: true,
})

const user = result.find(x => x.username.toLowerCase() === login?.toLowerCase());

if (!user) {
    if (failWhenMissing) throw new Error(`Contributor with login ${login} was not found`)
    else console.log('not found')
} else {
    console.log(`Contributor data:\n- CID: ${user.cid}\n- Name: ${user.name}\n- Region: ${user.region}\n- Role: ${user.role}\n- Approving CID: ${user.approvingCid}\n- Approving staff: ${user.approvingStaff}`)
}

