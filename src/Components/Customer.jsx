import React, { useContext } from "react";
import "../css/style.css";
import { dataContext } from "../Context/CreateContext";

const Customer = () => {
  const { registrationData, setRegistrationData } = useContext(dataContext);

  const handleData = (e) => {
    const { name, value } = e.target;

    setRegistrationData({
      ...registrationData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="custom_page">
        <div className="card_section">
          <div className="card m-auto">
            <div class="card-body">
              <h5 className="pt-3">Customer Registration </h5>
              <div className="inputs mt-3">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter FirstName"
                  name="firstName"
                  value={registrationData.firstName}
                  onChange={handleData}
                  required
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter LastName"
                  name="lastName"
                  value={registrationData.lastName}
                  onChange={(e) => handleData(e)}
                  required
                />
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Enter E-mail"
                  name="email"
                  value={registrationData.email}
                  onChange={(e) => handleData(e)}
                  required
                />
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Enter Password"
                  name="password"
                  value={registrationData.password}
                  onChange={(e) => handleData(e)}
                  required
                />
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Enter Confirm Password"
                  name="confirm_password"
                  value={registrationData.confirm_password}
                  onChange={(e) => handleData(e)}
                  required
                />
              </div>
              <div className="custom_checkbox flex flex-row gap-1 ">
                <input type="checkbox" />
                <span> I accept all terms & condition </span>
              </div>
              <div className="text-center m-2 ">
                <button className="registration_btn">Registration Now</button>
              </div>
              <div className="footer_text">
                <p className="text-center">
                  already have an account? <a href="/">Login Now </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
