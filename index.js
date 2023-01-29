const yargs = require('yargs');
const { addContacts, showContact, removeContact, findContact } = require('./contacts');

yargs.scriptName("contact-manager");

yargs.command({
    command: "create",
    describe: "create contact",
    aliases: '[c]',
    builder: {
        fullname: {
            describe: "contact fullname",
            demandOption: true,
            type: 'string',
            alias: "f"
        },
        phone: {
            describe: "contact phone number",
            alias: 'p',
            demandOption: true,
            type: 'number'
        },
        email: {
            describe: "contact email addres",
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
    describe: "show contact's list",
    handler() {
        showContact()
    }
})

yargs.command({
    command: "remove",
    describe: "remove contact",
    aliases: "[r]",
    builder: {
        fullname: {
            demandOption: true,
            describe: "enter contact fullname for remove...",
            type: "string",
            alias: 'f'
        }
    },
    handler({ fullname }) {
        removeContact(fullname);
    }
})

yargs.command({
    command: 'find',
    describe: "find contact detail",
    aliases: "[f]",
    builder: {
        fullname: {
            describe: "give fullname contact to get contact detail",
            demandOption: true,
            alias: "f",
            type: "string"
        }
    },
    handler({ fullname }) {
        findContact(fullname);
    }
})
yargs.parse(); 