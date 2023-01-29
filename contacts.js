const fs = require('fs');
// const chalk = require('chalk');

const addContacts = ( fullname, phone, email ) => {
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
    const data= JSON.stringify(contacts)
    fs.writeFileSync('contacts.json', data);

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
    addContacts
}