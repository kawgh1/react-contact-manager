### React Contact Manager

-   based on project https://www.youtube.com/watch?v=ZfqnUm7w6ig by UiBrains Technologies

-   basic CRUD app, passing data through routes, axios, etc.
-   npm install bootstrap
-   npm install @fortawesome/fontawesome-free
-   fontawesome cdn in html link
    -   https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css
-   npm install axios
-   npm install react-router-dom

### "Backend"

-   json-server

    -   npm install json-server
    -   http://localhost:3006/
    -   "scripts": {
        "start": "json-server -p 3006 --watch db.json"
        },

-   ### API
    -   GET all contacts: -> GET http://localhost:3006/contacts
    -   GET single contact: -> GET http://localhost:3006/contacts/{id}
    -   Create a contact: -> POST http://localhost:3006/contacts
    -   Update a contact: -> PUT http://localhost:3006/contacts/{id}
    -   Delete a contact: -> DELETE http://localhost:3006/contacts/{id}
