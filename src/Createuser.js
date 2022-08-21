import React from "react";
import { useFormik } from "formik";
import "./App.css";
import { useNavigate, useRoutes } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
function Createuser() {
  let navigation = useNavigate();
  let [isloading, setloading] = useState();
  let formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      age: "",
      office: "",
      startDate: "",
      salary: "",
    },
    validate: (values) => {
      let errors = {};
      let pattern = new RegExp(/^[a-zA-Z\-]+$/);
      if (!values.name) {
        errors.name = "Please enter the name";
      } else if (values.name.length < 5) {
        errors.name = "Length should be more than 5";
      } else if (values.name.length > 25) {
        errors.name = "Length should be less than 25";
      } else if (!pattern.test(formik.values.name)) {
        errors.name = "Username should not have numbers";
      }
      if (!values.position) {
        errors.position = "please enter position";
      }
      if (!values.age) {
        errors.age = "please enter age";
      }
      if (!values.office) {
        errors.office = "please enter office";
      }
      if (!values.startDate) {
        errors.startDate = "please enter startDate";
      }
      if (!values.salary) {
        errors.salary = "please enter salary";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        setloading(true);
        console.log(values);
        await axios.post("https://628f2b780e69410599d693ab.mockapi.io/users",values)
        navigation("/users");
      } catch (error) {}
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
            <input
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              type="text"
              className={`form-control ${
                formik.errors.name ? "error-border" : ""
              }`}
            />
            {/* {
                            formik.errors.name?<span className="color1">{formik.errors.name}</span>:null
                        } */}
          </div>
          <div className="col-lg-6">
            <label>Position</label>
            <input
              name="position"
              onChange={formik.handleChange}
              value={formik.values.position}
              type="text"
              className={`form-control ${
                formik.errors.position ? "error-border" : ""
              }`}
            />
            {/* {
                            formik.errors.position?<span className="color1">{formik.errors.position}</span>:null
                        } */}
          </div>
          <div className="col-lg-6">
            <label>Office</label>
            <input
              name="office"
              onChange={formik.handleChange}
              value={formik.values.office}
              type="text"
              className={`form-control ${
                formik.errors.office ? "error-border" : ""
              }`}
            />
            {/* {
                            formik.errors.office?<span className="color1">{formik.errors.office}</span>:null
                        } */}
          </div>
          <div className="col-lg-6">
            <label>Age</label>
            <input
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
              type="text"
              className={`form-control ${
                formik.errors.age ? "error-border" : ""
              }`}
            />
            {/* {
                            formik.errors.age?<span className="color1">{formik.errors.age}</span>:null
                        } */}
          </div>
          <div className="col-lg-6">
            <label>Start date</label>
            <input
              name="startDate"
              onChange={formik.handleChange}
              value={formik.values.startDate}
              type="date"
              className={`form-control ${
                formik.errors.startDate ? "error-border" : ""
              }`}
            />
            {/* {
                            formik.errors.startDate?<span className="color1">{formik.errors.startDate}</span>:null
                        } */}
          </div>
          <div className="col-lg-6">
            <label>Salary</label>
            <input
              name="salary"
              onChange={formik.handleChange}
              value={formik.values.salary}
              type="text"
              className={`form-control ${
                formik.errors.salary ? "error-border" : ""
              }`}
            />
            {/* {
                            formik.errors.salary?<span className="color1">{formik.errors.salary}</span>:null
                        } */}
          </div>
          <div className="col-lg-6">
            <input
              value="submit"
              type={"submit"}
              className="btn btn-primary mt-2"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Createuser;
