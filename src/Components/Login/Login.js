import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink, useNavigate } from "react-router-dom";
import "../Login/Login.css";

const Login = () => {
  const history = useNavigate();
  const [show, setShow] = useState(false);

  const [inpVal, setInpVal] = useState({
    email: "",
    password: "",
  });

  const handelShow = () => {
    setShow(!show);
  };


  const getData = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpVal(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getUserArr = localStorage.getItem("useryoutube");
    console.log(getUserArr);

    const { email, password } = inpVal;
    if (email === "") {
      alert("Email Field is requried");
    } else if (!email.includes("@")) {
      alert("Please enter vaild email");
    } else if (password === "") {
      alert("password Field is requried");
    } else if (password.length < 5) {
      alert("password length greater five");
    } else {
      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr);
        const userlogin = userData.filter((el, k) => {
          return el.email === email && el.password === password;
        });
        if (userlogin.length === 0) {
          alert("invaild details");
        } else {
          console.log("user login successfuli");
          localStorage.setItem("user_login", JSON.stringify(getUserArr));
          history("/Home");
        }
      }
    }
  };

  return (
    <>
      <div className="box  bg_login">
        <section className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div class="top">
                <h3 className="text-center mb-5 text-white">Login</h3>
              </div>
              <div className="left_data mt-3 p-3 position-relative">
                <Form>
                  <Form.Group
                    className="mb-3 input-field"
                    controlId="formBasicEmail"
                  >
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      className="input"
                      onChange={getData}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 input-field"
                    controlId="formBasicPassword"
                  >
                    <Form.Control
                      type={show ? "text" : "password"}
                      name="password"
                      className="input "
                      placeholder="Password"
                      onChange={getData}
                    />
                    <div onClick={handelShow} className="eye position-absolute">
                      {show ? (
                        <i className="fa-solid fa-eye-slash"></i>
                      ) : (
                        <i className="fa-solid fa-eye "></i>
                      )}
                    </div>
                  </Form.Group>
                  <Button
                    variant="primary"
                    className="submit"
                    type="submit"
                    onClick={addData}
                  >
                    Submit
                  </Button>
                </Form>
                <p className="mt-3 text-white">
                  Already Have an Account
                  <NavLink
                    className="text-decoration-none text-black p-2"
                    to="/"
                  >
                    Sign In
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
