import axios from "axios";

// Since contact.groupId is a number
// we have to use that number with the groups object from API to get "Friends" or "Family" etc.

// used in ViewContact

export class GroupService {
    static serverURL = `http://localhost:3006`;

    static getGroups() {
        const dataURL = `${this.serverURL}/groups`;
        return axios.get(dataURL);
    }

    static getGroup(contact) {
        const groupId = contact.groupId;
        const dataURL = `${this.serverURL}/groups/${groupId}`;
        return axios.get(dataURL);
    }
}
