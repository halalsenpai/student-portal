import React from "react";

import { Link } from "react-router-dom";
import { useFirestoreConnect, useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";

const Students = () => {
  const firestore = useFirestore();
  const students = useSelector((state) => state.firestore.ordered.students);
  useFirestoreConnect([
    {
      collection: "students",
    },
  ]);

  if (!students) {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border mt-5 text-light" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  const deleteStudent = async (id) => {
    try {
      await firestore.collection("students").doc(id).delete();
    } catch (error) {
      console.log("error deleting record" + error);
    }
  };
  return (
    <div>
      <div className="container-xl ">
        <div className="py-4">
          <div className="row">
            {students.map((student, id) => (
              <div className="col-lg-3 col-md-6 col-6 mb-4" key={student.id}>
                <div className=" card-hover card shadow text-center py-3">
                  <div className="card-body">
                    <h5 className="card-title mb-0">{student.name}</h5>
                    <p className="fw-bolder h5">{student.rid}</p>
                    <img
                      src={`https://i.pravatar.cc/150?img=${1}`}
                      alt="avatar"
                      style={{ borderRadius: "200px" }}
                      width="70%"
                      height="70%"
                      className="mb-3"
                    />
                    <Link
                      to={`/student/${student.id}`}
                      className="btn btn-primary btn-profile w-100 "
                    >
                      View Profile
                    </Link>
                    <button
                      className="btn btn-edit"
                      onClick={() => deleteStudent(student.id)}
                    >
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
