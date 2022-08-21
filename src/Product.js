import axios from 'axios';
import "./Product.css";
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Product() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  // const productData = [
  //   {
  //     id:1,
  //     image: "https://static.toiimg.com/img/78637928/Master.jpg",
  //     title: "I Mac",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   },
  //   {
  //     id:2,
  //     image:
  //       "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg",
  //     title: "Mac Book Pro",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   },

  //   {
  //     id:3,
  //     image:
  //       "https://techunwrapped.com/wp-content/uploads/2022/02/The-design-of-the-iPhone-14-in-images-and-7.jpeg",
  //     title: "I Phone",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   },
  //   {
  //     id:4,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDbNz_bv5Jd9h46NJU4m053uBepAJkdtCST-EchygCkM5ZTzZPZOHEqdr36bH0pvgJFq8&usqp=CAU",
  //     title: "I Pad",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   },
  //   {
  //     id:5,
  //     image: "https://i.redd.it/39r7h8smmof61.jpg",
  //     title: "I Watch",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   },
  //   {
  //     id:6,
  //     image:
  //       "https://images.squarespace-cdn.com/content/v1/5aef2fad9d5abb57b704f0e2/1608260781895-S8ENVI3SXAGTHJ3HTI9D/Airpods+Max.png?format=750w",
  //     title: "Air Pod Max",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   },

  //   {
  //     id:7,
  //     image:
  //       "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1632861342000",
  //     title: "Air Pod",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   },
  //   {
  //     id:8,
  //     image:
  //       "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202104_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=1617137945000https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202104_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=1617137945000",
  //     title: "I Tv",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   },
  // ];
  async function getProductData() {
    try {
      let data = await fetch(
        "https://628f2b780e69410599d693ab.mockapi.io/product"
      );
      let productsData = await data.json();
      // console.log(productsData)
      setProducts(productsData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductData();
  }, []);

  let handleDelete = async (productId) => {
    let ask = window.confirm("Do you want to delete this user?");
    if (ask) {
      await axios.delete(
        `https://628f2b780e69410599d693ab.mockapi.io/product/${productId}`
      );
      getProductData();
    }
  };
  return (
    <div id="cards_landscape_wrap-2">
    <div class="container-fluid">
      <h1 class="h3 mb-2 text-gray-800">Tables</h1>
        <p class="mb-4">
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the{" "}
          <a target="_blank" href="https://datatables.net">
            official DataTables documentation
          </a>
          .
        </p>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <Link
            to="/products/createproducts"
            class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            onClick={() => navigate("/products/createproducts")}
          >
            <i class="fas fa-download fa-sm text-white-50"></i> Create Product
          </Link>
          
        </div>
        <div className="row">
            {products.map((data, index) => (
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3" key={index}>
                <div className="card-container">
                  <div className="text-box">
                    <div className="image-box">
                      <img src={data.image} alt={data.title} />
                    </div>
                    <div className="text-container">
                      <h6>{data.title}</h6>
                      <p>{data.content}</p>
                     
                      <Link
                        to={`/products/editdata/${data.id}`}
                        className="btn btn-sm mt-3 mx-1 btn-info"  
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(data.id)}
                        className="btn btn-sm mt-3 mx-1 btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </div>
    </div>
  )
}

export default Product