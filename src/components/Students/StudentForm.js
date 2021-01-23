import React, { useState, useEffect } from "react";
import { useFirestore } from "react-redux-firebase";
import { useParams, useHistory } from "react-router-dom";

const StudentForm = () => {
  const [Student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    rid: "",
  });

  const firestore = useFirestore();
  const { name, email, phone, address, rid } = Student;
  let history = useHistory();
  const { id } = useParams();
  const docRef = id ? firestore.collection("students").doc(id) : null;

  const handleChange = (e) => {
    const value = e.target.value;
    setStudent({
      ...Student,
      [e.target.name]: value,
    });
  };
  const submit = async (e) => {
    e.preventDefault();

    if (id) {
      await docRef.update({
        ...Student,
        updatedAt: firestore.FieldValue.serverTimestamp(),
      });
    } else {
      firestore
        .collection("students")
        .add({ ...Student, createdAt: firestore.FieldValue.serverTimestamp() });
    }
    history.push("/");
  };

  const loadStudent = async () => {
    try {
      const result = await docRef.get();
      if (result.exists) {
        setStudent(result.data());
      } else {
        alert("There exists no student for that roll number");
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    if (id) {
      loadStudent();
    }
  }, [id]);

  return (
    <div className="container">
      <div className="container-xl">
        <div className="py-4">
          <div className="row">
            <div className="card shadow col-md-12">
              <h1 className="card-header">Student Details</h1>
              <div className="card-body">
                <form onSubmit={submit}>
                  <div className="form-row  ">
                    <div className="col-md-6  mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6  mb-4">
                      <input
                        placeholder="Enter Roll Number"
                        className="form-control"
                        name="rid"
                        value={rid}
                        onChange={handleChange}
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
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6  mb-4">
                      <input
                        type="email"
                        placeholder="Enter Email"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-12 mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Address"
                        name="address"
                        value={address}
                        onChange={handleChange}
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
