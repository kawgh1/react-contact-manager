import React from "react";
import "./App.css";
// no switch in React Router 6, now called Switches
import { Routes, Route, Navigate } from "react-router-dom";
// components
import Navbar from "../src/components/navbar/Navbar";
import ContactList from "./components/contacts/ContactList";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import ViewContact from "./components/contacts/ViewContact";
import Spinner from "./components/spinner/Spinner";

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route
                    path={"/"}
                    element={<Navigate to={"/contacts/list"} />}
                />
                <Route path={"/contacts/list"} element={<ContactList />} />
                <Route path={"/contacts/add"} element={<AddContact />} />
                <Route
                    path={"/contacts/view/:contactId"}
                    element={<ViewContact />}
                />
                <Route
                    path={"/contacts/edit/:contactId"}
                    element={<EditContact />}
                />
            </Routes>
        </div>
    );
};

export default App;
