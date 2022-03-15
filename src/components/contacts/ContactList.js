import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContactService } from "../../services/ContactService";
import Spinner from "../spinner/Spinner";

const ContactList = () => {
    const [state, setState] = useState({
        loading: false,
        contacts: [],
        errorMessage: "",
    });

    const fetchData = async () => {
        try {
            // loading starts
            setState({ ...state, loading: true });
            const response = await ContactService.getAllContacts();
            console.log(response.data);
            setState({ ...state, loading: false, contacts: response.data });
        } catch (error) {
            console.log(error);
            setState({
                ...state,
                loading: false,
                errorMessage: error.message,
            });
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const { loading, contacts, errorMessage } = state;

    return (
        <div>
            {/* Content, Search */}
            <section className="contact-search p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3 fw-bold">
                                    Contact Manager{" "}
                                    <Link
                                        to={"/contacts/add"}
                                        className="btn btn-primary ms-2"
                                    >
                                        <i className="fa fa-plus-circle me-2" />
                                        New Contact
                                    </Link>
                                </p>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Perferendis repudiandae
                                    maiores, molestiae voluptatibus inventore
                                    libero est atque fugit?
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form className="row">
                                    <div className="col">
                                        <div className="mb-2">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search"
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-2">
                                            <button
                                                type="submit"
                                                className="btn btn-outline-dark"
                                            >
                                                Search
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact List */}

            {loading ? (
                <Spinner />
            ) : (
                <>
                    <section className="contact-list">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row align-items-center d-flex justify-content-around">
                                                <div className="col-md-4">
                                                    <img
                                                        src="https://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png"
                                                        alt="user"
                                                        className="img-fluid contact-img"
                                                    />
                                                </div>
                                                <div className="col-md-7">
                                                    <ul className="list-group">
                                                        <li className="list-group-item list-group-item action">
                                                            Name:{" "}
                                                            <span className="fw-bold">
                                                                Rajan
                                                            </span>
                                                        </li>
                                                        <li className="list-group-item list-group-item action">
                                                            Mobile:{" "}
                                                            <span className="fw-bold">
                                                                987-987-9879
                                                            </span>
                                                        </li>
                                                        <li className="list-group-item list-group-item action">
                                                            Email:{" "}
                                                            <span className="fw-bold">
                                                                raj@gmail.com
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-1 d-flex flex-column align-items-center">
                                                    <Link
                                                        to={`/contacts/view/:contactId`}
                                                        className="btn btn-success my-1"
                                                    >
                                                        <i className="fa fa-eye"></i>
                                                    </Link>
                                                    <Link
                                                        to={`/contacts/edit/:contactId`}
                                                        className="btn btn-warning my-1"
                                                    >
                                                        <i className="fa fa-pen text-white"></i>
                                                    </Link>
                                                    <button className="btn btn-danger my-1">
                                                        <i className="fa fa-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </div>
    );
};

export default ContactList;
