import React from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Student = () => {
  const { id } = useParams();
  return (
    <div className="container py-4">
      <Card>
        <h1 class="card-header">Student Profile</h1>
        <div className="row p-4">
          <div className="col-md-4 ">
            <img
              src="https://placeimg.com/200/200/people"
              alt="avatar"
              style={{ width: "100%" }}
              className="mb-3"
            />
          </div>
          <div className=" col-md-5 col-lg-6">
            <div className="card-body shadow-sm">
              <h2>Student Name</h2>
              <h2 className="user-select-all">Roll Number</h2>
              <hr />
              <h3>Email</h3>
              <h3>Contact</h3>
              <h3>Address</h3>
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
