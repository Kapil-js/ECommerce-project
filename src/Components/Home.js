import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import "../Components/Login/Login.css"

function Home() {
  const [show, setShow] = useState(false);
  const [inpVal, setInpVal] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  const [data, setData] = useState([]);
  const handelShow = () => {
    setShow(!show);
  };

  console.log(inpVal);
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

    const { name, email, date, password } = inpVal;
    if (name === "") {
      alert("Name Field is requried");
    } else if (email === "") {
      alert("Email Field is requried");
    } else if (!email.includes("@")) {
      alert("Please enter vaild email");
    } else if (date === "") {
      alert("date Field is requried");
    } else if (password === "") {
      alert("password Field is requried");
    } else if (password.length < 5) {
      alert("password length greater five");
    } else {
      console.log("data add successful");
      localStorage.setItem("useryoutube", JSON.stringify([...data, inpVal]));
    }
  };

  return (
    <>
      <div className="box  bg_login">
        <section className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div className="left_data mt-3 p-3">
                <h3 className="text-center mb-5 text-white">Sign Up</h3>
                <Form>
                  <Form.Group
                    className="mb-3 input-field"
                    controlId="formBasicEmail"
                  >
                    <Form.Control
                      type="text"
                      name="name"
                      className="input"
                      placeholder="Enter Your Name"
                      onChange={getData}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 input-field"
                    controlId="formBasicEmail"
                  >
                    <Form.Control
                      type="email"
                      name="email"
                      className="input"
                      placeholder="Enter email"
                      onChange={getData}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 input-field"
                    controlId="formBasicEmail"
                  >
                    <Form.Control name="date" type="date" onChange={getData} />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 input-field"
                    controlId="formBasicPassword"
                  >
                    <Form.Control
                      type={show ? "text" : "password"}
                      name="password"
                      className="input"
                      placeholder="Password"
                      onChange={getData}
                    />
                    <div
                      onClick={handelShow}
                      className="eye_2 position-absolute"
                    >
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
                  Already Have an Account{" "}
                  <span className="">
                    <NavLink
                      className="text-decoration-none text-black p-1"
                      to="/login"
                    >
                      Sign In
                    </NavLink>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
