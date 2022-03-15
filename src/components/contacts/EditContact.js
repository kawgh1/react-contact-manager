import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContactService } from "../../services/ContactService";
import { GroupService } from "../../services/GroupService";
import Spinner from "../spinner/Spinner";
const EditContact = () => {
    // grab contactId from url params so we can update it
    const { contactId } = useParams();

    // useNavigate is the new useHistory in React Router 6
    const navigate = useNavigate();

    const [state, setState] = useState({
        loading: true,
        contact: {
            name: "",
            photo: "",
            mobile: "",
            email: "",
            company: "",
            title: "",
            groupId: "",
        },
        groups: [],
        errorMessage: "",
    });

    const getContact = async () => {
        try {
            setState({ ...state, loading: true });
            // get contact
            const response = await ContactService.getContact(contactId);
            // get groups
            const groupResponse = await GroupService.getGroups();
            setState({
                ...state,
                loading: false,
                contact: response.data,
                groups: groupResponse.data,
            });
        } catch (error) {
            console.log(error);
            setState({ ...state, loading: false, errorMessage: error.message });
        }
    };

    useEffect(() => {
        getContact();
    }, [contactId]);

    const updateInput = (event) => {
        setState({
            ...state,
            contact: {
                ...state.contact,
                [event.target.name]: event.target.value,
            },
        });
    };

    // dont forget, 'contactId' is coming from useParams()
    const formSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await ContactService.updateContact(
                state.contact,
                contactId
            );
            if (response) {
                navigate("/contacts/list", { replace: true });
            }
        } catch (error) {
            setState({ ...state, errorMessage: error.message });
            navigate(`contacts/edit/${contactId}`, { replace: false });
        }
    };
    const { loading, contact, groups, errorMessage } = state;

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <pre>{JSON.stringify(contact)}</pre>
                    <section className="add-contact p-3">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p className="h4 text-warning fw-bold">
                                        Edit Contact
                                    </p>
                                    <p className="fst-italic">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <form onSubmit={formSubmit}>
                                        <div className="mb-2">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Name"
                                                name="name"
                                                required={true}
                                                value={contact.name}
                                                onChange={updateInput}
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Photo URL"
                                                name="photo"
                                                required={true}
                                                value={contact.photo}
                                                onChange={updateInput}
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Mobile"
                                                name="mobile"
                                                required={true}
                                                value={contact.mobile}
                                                onChange={updateInput}
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                                name="email"
                                                required={true}
                                                value={contact.email}
                                                onChange={updateInput}
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Company"
                                                name="company"
                                                required={true}
                                                value={contact.company}
                                                onChange={updateInput}
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Title"
                                                name="title"
                                                required={true}
                                                value={contact.title}
                                                onChange={updateInput}
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <select
                                                className="form-control"
                                                name="groupId"
                                                required={true}
                                                value={contact.groupId}
                                                onChange={updateInput}
                                            >
                                                <option value="">
                                                    Select a Group
                                                </option>
                                                {groups.length > 0 &&
                                                    groups.map((group) => (
                                                        <option
                                                            key={group.id}
                                                            value={group.id}
                                                        >
                                                            {group.name}
                                                        </option>
                                                    ))}
                                            </select>
                                        </div>
                                        <button className="btn btn-warning me-2 mt-2">
                                            Update
                                        </button>
                                        <Link
                                            to={"/contacts/list"}
                                            className="btn btn-dark me-2 mt-2"
                                        >
                                            Cancel
                                        </Link>
                                    </form>
                                </div>
                                <div className="col-md-6">
                                    <img
                                        src={contact.photo}
                                        alt={contact.name}
                                        className="img-fluid contact-img my-5"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </div>
    );
};

export default EditContact;
