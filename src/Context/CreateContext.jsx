import React, { createContext, useState } from "react";

export const dataContext = createContext(null);

const CreateContext = ({ children }) => {
  const [registrationData, setRegistrationData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  return (
    <dataContext.Provider
      value={{ registrationData, setRegistrationData, loginData, setLoginData }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default CreateContext;
