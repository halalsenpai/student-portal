import React from "react";

import { Link } from "react-router-dom";

const Students = () => {
  return (
    <div>
      <div className="container-xl ">
        <div className="py-4">
          <div className="row">
            {new Array(12).fill("").map((item, index) => (
              <div className="col-lg-3 col-md-6 col-6 mb-4" key={index}>
                <div className=" card-hover card shadow text-center py-3">
                  <div className="card-body">
                    <h5 className="card-title mb-0">Student Name</h5>
                    <p className="text-muted small">Student Roll No.</p>
                    <img
                      src="https://placeimg.com/200/200/people"
                      alt="avatar"
                      style={{ borderRadius: "200px" }}
                      width="70%"
                      height="70%"
                      className="mb-3"
                    />
                    <Link
                      to={`/student/${index}`}
                      className="btn btn-primary btn-profile w-100 "
                    >
                      View Profile
                    </Link>
                    <button className="btn btn-edit">
                      <span className="material-icons">delete_outline</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
