import React, { memo, useEffect, useState } from "react";
import "./Edit.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  // const [data, setData] = useState([]);
  const { id } = useParams();
  const [values, setValues] = useState({
    name: "",
    brand: "",
    code: "",
    description: "",
    price: "",
    priceSale: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products/" + id)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.put(
        "https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products/" + id,
        values
      );
      console.log(res);
      navigate("/products");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="Edit">
      <div className="conatiner">
        <div className="big">
          <div className="add-content">
            <button className="head">Основные</button>

            <form onSubmit={handleEdit}>
              <div className="inpt">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control inpt1"
                  required
                  value={values.name}
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                />
              </div>
              <div className=" inpt2">
                <div className="in1">
                  <label htmlFor="brand">Brand</label>
                  <input
                    type="text"
                    name="brand"
                    className="form-control inpt1"
                    required
                    value={values.brand}
                    onChange={(e) =>
                      setValues({ ...values, brand: e.target.value })
                    }
                  />
                </div>

                <div className="in1">
                  <label htmlFor="code">Article</label>
                  <input
                    type="text"
                    name="code"
                    className="form-control inpt1"
                    required
                    value={values.code}
                    onChange={(e) =>
                      setValues({ ...values, code: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="inpt">
                <label htmlFor="comment">comment</label>
                <textarea
                  type="textarea"
                  name="description"
                  as="textarea"
                  className="form-control comment"
                  required
                  value={values.description}
                  onChange={(e) =>
                    setValues({ ...values, description: e.target.value })
                  }
                />
              </div>

              <div className="last">
                <div className="in1">
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    name="price"
                    className="form-control inpt1"
                    required
                    value={values.price}
                    onChange={(e) =>
                      setValues({ ...values, price: e.target.value })
                    }
                  />
                </div>

                <div className="in1">
                  <label htmlFor="priceSale">priceSale</label>
                  <input
                    type="text"
                    name="priceSale"
                    className="form-control inpt1"
                    required
                    value={values.priceSale}
                    onChange={(e) =>
                      setValues({ ...values, priceSale: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="btns">
                <button type="submit">Edit</button>
                <Link to={-1}>
                  <button>Cancel</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Edit);
