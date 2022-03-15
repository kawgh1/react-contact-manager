import React, { useEffect, useState } from "react";
// useNavigate is the new useHistory in React Router 6
import { Link, useNavigate } from "react-router-dom";
import { ContactService } from "../../services/ContactService";
import { GroupService } from "../../services/GroupService";

const AddContact = () => {
    const navigate = useNavigate();

    const [state, setState] = useState({
        loading: false,
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

    const updateInput = (event) => {
        setState({
            ...state,
            contact: {
                ...state.contact,
                [event.target.name]: event.target.value,
            },
        });
    };

    // get groups for select
    const getGroups = async () => {
        try {
            setState({ ...state, loading: true });
            const response = await GroupService.getGroups();
            setState({ ...state, groups: response.data });
        } catch (error) {
            console.log(error);
            setState({ ...state, loading: false });
        }
    };

    useEffect(() => {
        getGroups();
    }, []);

    const submitForm = async (event) => {
        event.preventDefault();
        try {
            const response = await ContactService.createContact(state.contact);
            // if successful response
            if (response) {
                navigate("/contacts/list", { replace: true });
            }
        } catch (error) {
            console.log(error);
            setState({ ...state, errorMessage: error.message });
            navigate("/contact/add", { replace: false });
        }
    };

    const { loading, contact, groups, errorMessage } = state;

    return (
        <div>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <pre>{JSON.stringify(contact)}</pre>
                            <p className="h4 text-success fw-bold">
                                Create Contact
                            </p>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form onSubmit={submitForm}>
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        required={true}
                                        name="name"
                                        value={contact.name}
                                        onChange={updateInput}
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Photo URL"
                                        required={true}
                                        name="photo"
                                        value={contact.photo}
                                        onChange={updateInput}
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Mobile"
                                        required={true}
                                        name="mobile"
                                        value={contact.mobile}
                                        onChange={updateInput}
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        required={true}
                                        name="email"
                                        value={contact.email}
                                        onChange={updateInput}
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Company"
                                        required={true}
                                        name="company"
                                        value={contact.company}
                                        onChange={updateInput}
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Title"
                                        required={true}
                                        name="title"
                                        value={contact.title}
                                        onChange={updateInput}
                                    />
                                </div>
                                <div className="mb-2">
                                    <select
                                        className="form-control"
                                        required={true}
                                        name="groupId"
                                        value={contact.groupId}
                                        onChange={updateInput}
                                    >
                                        <option value="">Select a Group</option>
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
                                <button className="btn btn-success me-2 mt-2">
                                    Create
                                </button>
                                <Link
                                    to={"/contacts/list"}
                                    className="btn btn-dark me-2 mt-2"
                                >
                                    Cancel
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddContact;
