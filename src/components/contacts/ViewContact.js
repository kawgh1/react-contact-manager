import React from "react";
import { Link } from "react-router-dom";

const ViewContact = () => {
    return (
        <div>
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
            {/* View Contact */}
            <section className="view-contact mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                src="https://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png"
                                alt="user"
                                className="img-fluid contact-img my-5"
                            />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item action">
                                Name: <span className="fw-bold">Rajan</span>
                            </li>
                            <li className="list-group-item list-group-item action">
                                Mobile:{" "}
                                <span className="fw-bold">987-987-9879</span>
                            </li>
                            <li className="list-group-item list-group-item action">
                                Email:{" "}
                                <span className="fw-bold">raj@gmail.com</span>
                            </li>
                            <li className="list-group-item list-group-item action">
                                Company: <span className="fw-bold">Rajan</span>
                            </li>
                            <li className="list-group-item list-group-item action">
                                Title:{" "}
                                <span className="fw-bold">987-987-9879</span>
                            </li>
                            <li className="list-group-item list-group-item action">
                                Group:{" "}
                                <span className="fw-bold">raj@gmail.com</span>
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
        </div>
    );
};

export default ViewContact;
