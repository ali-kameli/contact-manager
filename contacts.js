const fs = require('fs');
// const chalk = require('chalk');

const addContacts = (fullname, phone, email) => {
    const contacts = loadContacts();
    const duplicateContact = contacts.find(c => c.fullname === fullname);
    if (!duplicateContact) {
        contacts.push({ fullname, phone, email });
        savedContacts(contacts)
        console.log('contact added...');
    }
    else {
        console.log('contact already exist !!')
    };
    // console.log(chalk.green('contact added...'));
}

const savedContacts = contacts => {
    const data = JSON.stringify(contacts)
    fs.writeFileSync('contacts.json', data);

}

const showContact = () => {
    const contacts = loadContacts();
    if (contacts.length > 0) {
        console.table(contacts)
        // contacts.forEach(contact => {
        //     console.log(
        //         `\t${contact.fullname}\t${contact.phone}\t${contact.email}
        //         ----------------------------------
        //         `
        //     );
        // });
    } else {
        console.log('contact not found');
    }
}

const removeContact = (fullname) => {
    const contacts = loadContacts();
    const filteredContacts = contacts.filter(c => c.fullname !== fullname);
    console.log(`${fullname} has been deleted.`);
    savedContacts(filteredContacts);
}

const findContact = fullname => {
    const contacts = loadContacts();
    const filteredContact = contacts.filter(c => c.fullname === fullname);
    if (filteredContact) console.log(`youre contact found : ${JSON.stringify(filteredContact)}`);
    else console.log(`contact not found !!`);
}

const loadContacts = () => {
    try {
        const dataBuffer = fs.readFileSync("contacts.json");
        const data = dataBuffer.toString();
        return JSON.parse(data);
    } catch (err) {
        // console.log(err);
        return [];
    }
}

module.exports = {
    addContacts,
    showContact,
    removeContact,
    findContact
}