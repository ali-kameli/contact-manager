const yargs = require('yargs');
const { addContacts, showContact} = require('./contacts');

yargs.scriptName("contact-manager");

yargs.command({
    command: "create",
    describe: "create person",
    aliases: '[c]',
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
            alias: 'e',
            demandOption: true,
            type: 'string'
        }
    },
    handler({ fullname, phone, email }) {
        addContacts(fullname, phone, email);
    }
})

yargs.command({
    command: "show",
    aliases: "[s]",
    describe: "show persons list",
    handler() {
        showContact()
    }
})

yargs.parse(); 