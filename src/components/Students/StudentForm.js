import React, { useState } from "react";
import { useParams } from "react-router-dom";

const StudentForm = () => {
  const [Student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    id: "bitch",
  });

  const { name, email, phone, address } = Student;

  const { id } = useParams();
  if (id == null) {
    const { id } = Student;
  }

  console.log(id);
  return (
    <div className="container">
      <div className="container-xl">
        <div className="py-4">
          <div className="row">
            <div className="card shadow col-md-12">
              <h1 className="card-header">Student Details</h1>
              <div className="card-body">
                <form>
                  <div className="form-row  ">
                    <div className="col-md-6  mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                        name="name"
                        value={name}
                      />
                    </div>
                    <div className="col-md-6  mb-4">
                      <input
                        placeholder="Enter Roll Number"
                        className="form-control"
                        name="id"
                        value={id}
                      />
                    </div>
                  </div>
                  <div className="form-row  ">
                    <div className="col-md-6  mb-4">
                      <input
                        type="text"
                        placeholder="Enter Phone"
                        className="form-control"
                        name="phone"
                        value={phone}
                      />
                    </div>
                    <div className="col-md-6  mb-4">
                      <input
                        type="email"
                        placeholder="Enter Email"
                        className="form-control"
                        name="standard"
                        value={email}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-12 mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Address"
                        name="address1"
                        value={address}
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    {id ? "Update Student" : "Add Student"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
