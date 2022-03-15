import React from "react";
import { Link } from "react-router-dom";
const EditContact = () => {
    return (
        <div>
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
                            <form>
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Photo URL"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Mobile"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Company"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Title"
                                    />
                                </div>
                                <div className="mb-2">
                                    <select
                                        name=""
                                        id=""
                                        className="form-control"
                                    >
                                        <option value="">Select a Group</option>
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
                                src="https://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png"
                                alt="user"
                                className="img-fluid contact-img my-5"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EditContact;
