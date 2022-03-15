import axios from "axios";

export class ContactService {
    static serverURL = `http://localhost:3006`;

    // used in ContactList
    static getAllContacts() {
        const dataURL = `${this.serverURL}/contacts`;
        return axios.get(dataURL);
    }

    // used in ViewContact
    static getContact(contactId) {
        const dataURL = `${this.serverURL}/contacts/${contactId}`;
        return axios.get(dataURL);
    }

    // used in AddContact
    static createContact(contact) {
        const dataURL = `${this.serverURL}/contacts`;
        return axios.post(dataURL, contact);
    }

    // used in EditContact
    static updateContact(contact, contactId) {
        const dataURL = `${this.serverURL}/contacts/${contactId}`;
        return axios.put(dataURL, contact);
    }

    // used in ContactList
    static deleteContact(contactId) {
        const dataURL = `${this.serverURL}/contacts/${contactId}`;
        return axios.delete(dataURL)

    }
}
