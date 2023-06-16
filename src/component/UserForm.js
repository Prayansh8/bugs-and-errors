import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitForm } from "../action/actions";
import "./UserForm.css"; // Import the CSS file

const UserForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
      isValid = false;
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
      isValid = false;
    }

    if (!formData.age) {
      newErrors.age = "Age is required";
      isValid = false;
    }

    if (!formData.role) {
      newErrors.role = "Role is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      dispatch(submitForm(formData));
    }
  };

  return (
    <div className="mainContainer">
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="registerFormText">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input" // Apply a class name
          />
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
        </div>
        <div className="registerFormText">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="form-input" // Apply a class name
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div className="registerFormText">
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            className="form-input" // Apply a class name
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="registerFormText">
          <input
            type="text"
            name="phone"
            value={formData.phone}
            placeholder="Phone"
            onChange={handleChange}
            className="form-input" // Apply a class name
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div className="registerFormText">
          <input
            type="number"
            name="age"
            value={formData.age}
            placeholder="Age"
            onChange={handleChange}
            className="form-input" // Apply a class name
          />
          {errors.age && <span className="error">{errors.age}</span>}
        </div>
        <div className="registerFormText">
          <input
            type="text"
            name="role"
            value={formData.role}
            placeholder="Role"
            onChange={handleChange}
            className="form-input" // Apply a class name
          />
          {errors.role && <span className="error">{errors.role}</span>}
        </div>
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
