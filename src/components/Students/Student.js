import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useFirestore } from "react-redux-firebase";

const Student = () => {
  const firestore = useFirestore();
  const { id } = useParams();
  const [student, setstudent] = useState(null);

  const loadStudent = async () => {
    try {
      const docRef = firestore.collection("students").doc(id);
      const result = await docRef.get();
      if (result.exists) {
        setstudent(result.data());
      } else {
        alert("There exists no student for that roll number");
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    loadStudent();
  }, []);

  if (!student) {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border mt-5 text-light" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="container py-4">
      <Card>
        <h1 class="card-header">Student Profile</h1>
        <div className="row p-4">
          <div className="col-md-4 ">
            <img
              src={`https://i.pravatar.cc/150?img=${id}`}
              alt="avatar"
              style={{ width: "100%" }}
              className="mb-3"
            />
          </div>
          <div className=" col-md-5 col-lg-6">
            <div className="card-body shadow-sm">
              <h2>{student.name}</h2>
              <h2 className="user-select-all">{student.rid}</h2>
              <hr />
              <h3>{student.email}</h3>
              <h3>{student.phone}</h3>
              <h3>{student.address}</h3>
            </div>
          </div>
          <div className="col-md-3 col-lg-2 ">
            <Link to={`/studentform/${id}`}>
              <button className="btn btn-danger w-100 mt-1">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Student;
