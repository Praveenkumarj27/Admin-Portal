import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";

function EditProduct() {
  let navigate = useNavigate();
  let { productId } = useParams();

  let formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      content: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.title) {
        errors.name = "please enter title";
      }
      if (!values.image) {
        errors.image = "please add image";
      }
      if (!values.content) {
        errors.content = "please enter content";
      }

      return errors;
    },

    onSubmit: async (values) => {
      try {
        let data = await axios.put(
          `https://628f2b780e69410599d693ab.mockapi.io/product/${productId}`,values);
          
        alert("Data Updated Successfully");

        navigate("/products");
      } catch (error) {
        console.log(error);
      }
    },
  });

  async function getProductEditData() {
    try {
      let editProductData = await fetch(
        `https://628f2b780e69410599d693ab.mockapi.io/product/${productId}`
      );
      let editProductDatas = await editProductData.json();

      formik.setValues(editProductDatas);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductEditData();
  }, []);

  return (
    <>
      <div className="container">
        <h2>Edit User</h2>

        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  name="title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                  type="text"
                  className={`form-control ${
                    formik.errors.title ? "error-border" : " "
                  }`}
                  placeholder=""
                  id="name"
                />
                {formik.errors.title ? (
                  <span style={{ color: "red" }}>{formik.errors.title}</span>
                ) : null}
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label htmlFor="image">image</label>
                <input
                  name="image"
                  onChange={formik.handleChange}
                  value={formik.values.image}
                  type="text"
                  className={`form-control ${
                    formik.errors.image ? "error-border" : ""
                  }`}
                  placeholder=""
                  id="position"
                />
                {formik.errors.image ? (
                  <span style={{ color: "red" }}>{formik.errors.image}</span>
                ) : null}
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <input
                  name="content"
                  onChange={formik.handleChange}
                  value={formik.values.content}
                  type="text"
                  className={`form-control ${
                    formik.errors.content ? "error-border" : ""
                  }`}
                  placeholde=""
                  id="content"
                />
                {formik.errors.content ? (
                  <span style={{ color: "red" }}>{formik.errors.content}</span>
                ) : null}
              </div>
            </div>
          </div>
          <input type={"submit"} value="submit" className="btn btn-primary" />
        </form>
      </div>
    </>
  );
}

export default EditProduct;
