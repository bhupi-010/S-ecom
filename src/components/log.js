import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../action";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const auth = getAuth();
  const handleLogin = async () => {
    try {
      setLoading(true);
     const user = await signInWithEmailAndPassword(auth, email, password);
     const userEmail = user.user.email;
     dispatch(addUser(user,userEmail));
          console.log(user);
          toast.success("login sucessful", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setLoading(false);
        }
     catch (error) {
      toast.error("login failed " + error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);
    }
  };
  return (
    <div>
      {loading ? ("loading") : (
        <section className="vh-80 " id="reg-back">
        <div className="mask d-flex align-items-center h-100 ">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100 mt-5">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" id="reg-card">
                  <div className="card-body p-2 ">
                    <h2 className="text-bold text-center mb-5 ">
                      Login
                    </h2>

                    <form>
                      <div className="form-outline ">
                        <input
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          className="form-control form-control-sm"
                        />

                        <label className="form-label">Your Email</label>
                      </div>

                      <div className="form-outline ">
                        <input
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          className="form-control form-control-sm"
                        />
                        <label className="form-label">Password</label>
                      </div>

                      <div className="d-flex justify-content-center form-control-sm">
                        <button
                          type="button"
                          className="btn btn-success btn-sm "
                          onClick={handleLogin}
                        >
                          Login
                        </button>
                      </div>

                      <p className="text-center text-muted mt-2 mb-0 ">
                        do not have account.
                        <Link to="/register" className="fw-bold text-body">
                          <u>register here</u>
                        </Link>
                      </p>
                    </form>
                    <ToastContainer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}
      
    </div>
  );
}

export default Login;
