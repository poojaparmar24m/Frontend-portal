import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { dataContext } from "../Context/CreateContext";

const Admin_login = () => {
  const { loginData, setLoginData } = useContext(dataContext);

  const handleLogindata = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  return (
    <>
      <div className="Login_page">
        <div className="login_card_section">
          <div className="card m-auto">
            <h4 className="card-header login_card_header text-center">
              Login From
            </h4>
            <div className="card-body">
              <div className="inputs mt-3">
                <div class="input-group mb-3">
                  <span class="input-group-text login_icon">
                    <FaUser />
                  </span>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter Email"
                    name="email"
                    value={loginData.email}
                    onChange={(e) => handleLogindata(e)}
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text login_icon">
                    <FaLock />
                  </span>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Enter Password"
                    name="password"
                    value={loginData.password}
                    onChange={(e) => handleLogindata(e)}
                  />
                </div>
              </div>
              <div className="login_forgot">
                <span> Forgot Password? </span>
              </div>
              <div className="text-center m-2 ">
                <button className="login_btn">login</button>
              </div>
              <div className="login_footer">
                <p className="text-center">
                  Not a Member? <a href="/">SignUp Now </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin_login;
