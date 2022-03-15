import React, { useEffect, useState } from "react";
// useParams is used to send contactId to server to populate contactData on ViewContact
import { Link, useParams } from "react-router-dom";
import { ContactService } from "../../services/ContactService";
import { GroupService } from "../../services/GroupService";
import Spinner from "../spinner/Spinner";

const ViewContact = () => {
    const { contactId } = useParams();

    const [state, setState] = useState({
        loading: false,
        contact: {},
        errorMessage: "",
        group: {},
    });

    const fetchData = async () => {
        try {
            setState({ ...state, loading: true });
            // get contact
            const response = await ContactService.getContact(contactId);
            const contact = response.data;
            console.log(contact);
            // get Group
            const groupResponse = await GroupService.getGroup(contact);

            setState({
                ...state,
                contact: response.data,
                loading: false,
                group: groupResponse.data,
            });
        } catch (error) {
            console.log(error);
            setState({ ...state, loading: false, errorMessage: error.message });
        }
    };
    useEffect(() => {
        fetchData();
    }, [contactId]);

    const { loading, contact, errorMessage, group } = state;

    return (
        <div>
            <pre>{JSON.stringify(contact)}</pre>
            {/* Content */}
            <section className="view-contact-intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-success fw-bold">
                                View Contact
                            </p>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {loading ? (
                <Spinner />
            ) : (
                <>
                    {/* Check if we have a contact object and a group object */}
                    {Object.keys(contact).length > 0 &&
                        Object.keys(group).length > 0 && (
                            <section className="view-contact mt-3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            {/* <h2>{contactId}</h2> */}
                                            <img
                                                src={contact.photo}
                                                alt={contact.name}
                                                className="img-fluid contact-img my-5"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <ul className="list-group">
                                            <li className="list-group-item list-group-item action">
                                                Name:{" "}
                                                <span className="fw-bold">
                                                    {contact.name}
                                                </span>
                                            </li>
                                            <li className="list-group-item list-group-item action">
                                                Mobile:{" "}
                                                <span className="fw-bold">
                                                    {contact.mobile}
                                                </span>
                                            </li>
                                            <li className="list-group-item list-group-item action">
                                                Email:{" "}
                                                <span className="fw-bold">
                                                    {contact.email}
                                                </span>
                                            </li>
                                            <li className="list-group-item list-group-item action">
                                                Company:{" "}
                                                <span className="fw-bold">
                                                    {contact.company}
                                                </span>
                                            </li>
                                            <li className="list-group-item list-group-item action">
                                                Title:{" "}
                                                <span className="fw-bold">
                                                    {contact.title}
                                                </span>
                                            </li>
                                            {/* Group uses GroupService  */}
                                            <li className="list-group-item list-group-item action">
                                                Group:{" "}
                                                <span className="fw-bold">
                                                    {/* {contact.groupId} */}
                                                    {group.name}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Link
                                                to={"/contacts/list"}
                                                className="btn btn-success my-3"
                                            >
                                                Back
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}
                    {/* View Contact */}
                </>
            )}
        </div>
    );
};

export default ViewContact;
