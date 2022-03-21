import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const handleSignup = async () => {
    try {
      setLoading(true);
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result);
      toast.success("user created sucessfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);
    } catch (error) {
      toast.error("user registration failed" + error.message, {
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
    <div>{loading ? ("loading") : ( <section className="vh-80 " id="reg-back">
    <div className="mask d-flex align-items-center h-100 ">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100 mt-5">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" id="reg-card">
              <div className="card-body p-2 ">
                <h2 className="text-uppercase text-center mb-5 ">
                  Create an account
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
                      onClick={handleSignup}
                    >
                      Register
                    </button>
                  </div>

                  <p className="text-center text-muted mt-2 mb-0 ">
                    Have already an account?
                    <Link to="/login" className="fw-bold text-body">
                      <u>Login here</u>
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
  </section>)}
     
    </div>
  );
}

export default Register;
