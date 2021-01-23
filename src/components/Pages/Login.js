import React, { useState } from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const firebase = useFirebase();
  let history = useHistory();
  const [User, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setUser({
      ...User,
      [e.target.name]: value,
    });
  };
  const submit = async (e) => {
    e.preventDefault();
    await firebase.login(User);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="py-5">
        <div className="row mt-5">
          <div className="col-md-6 offset-md-3">
            <div className="card shadow">
              <div className="h4 card-header">Login</div>
              <div className="card-body">
                <form onSubmit={submit}>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Enter Your E-mail"
                      value={User.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Enter Your Password"
                      value={User.password}
                      onChange={handleChange}
                    />
                  </div>
                  <button className="btn btn-primary btn-block">
                    Login to dashboard
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
