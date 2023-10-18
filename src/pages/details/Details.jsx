import "./Details.scss";
import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const param = useParams();
  const [product, setProduct] = useState([]);
  const paramId = param.id * 1;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products/" +
            paramId
        );
        setProduct([response.data]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [paramId]);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to Delete?");
    if (confirm) {
      axios
        .delete(
          `https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products/` + id
        )
        .then((res) => {
          navigate("/products");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      {product.map((el) => {
        return (
          <div className="Details" key={el.id}>
            <section className="details">
              <div className="container">
                <div className="par">
                  <h1>Product Detail</h1>
                </div>

                <div className="big">
                  <div className="cart">
                    <div className="left">
                      <img src={el.image} alt="img" />
                    </div>
                    <div className="card-content">
                      <div className="name">
                        <h3>Name: </h3>
                        <p>{el.name}</p>
                      </div>
                      <div className="name">
                        <h3>Brand: </h3>
                        <p>{el.brand}</p>
                      </div>
                      <div className="name">
                        <h3>About: </h3>
                        <p>{el.description}</p>
                      </div>
                      <div className="name">
                        <h3>Price: </h3>
                        <p>{el.price}</p>
                      </div>
                      <div className="name">
                        <h3>PriceSale: </h3>
                        <p>{el.priceSale}</p>
                      </div>
                      <div className="card-footer">
                        <div className="btns">
                          <Link to={`/edit/${el.id}`}>
                            <button className="btn btn-warning">
                              <img src="../edit.png" alt="icon" />
                            </button>
                          </Link>
                          <button
                            className="btn btn-danger"
                            onClick={(e) => handleDelete(el.id)}
                          >
                            <img src="../delete.png" alt="icon" />
                          </button>
                          <Link to={"../products"}>
                            <button class="btn btn-primary">
                              Exit <img src="../Exit.png" alt="icon" />
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default memo(Details);
