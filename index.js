const yargs = require('yargs');
const { addContacts } = require('./contacts');

yargs.command({
    command: "create",
    describe: "create person",
    builder: {
        fullname: {
            describe: "person fullname",
            demandOption: true,
            type: 'string',
            alias: "f"
        },
        phone: {
            describe: "person phone number",
            alias: 'p',
            demandOption: true,
            type: 'number'
        },
        email: {
            describe: "person email addres",
            alias: 'p',
            demandOption: true,
            type: 'string'
        }
    },
    handler({ fullname, phone, email }) {
        addContacts(fullname, phone, email);
    }
})


yargs.parse(); 