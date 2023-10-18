import React, { memo, useEffect, useState } from "react";
import "./Products.scss";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Products = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(
        `https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products`
      );
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const Filter = (event) => {
    setPosts(
      posts.filter((f) => f.name.toLowerCase().includes(event.target.value))
    );
  };

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = posts.slice(firstIndex, lastIndex);
  const npage = Math.ceil(posts.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function prePage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to Delete?");
    if (confirm) {
      axios
        .delete(
          `https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products/` + id
        )
        .then((res) => {
          location.reload();
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="Products">
      <div className="container">
        <div className="big">
          <div className="table">
            {posts.length > 0 && (
              <div className="head">
                <h2>Все товары (5)</h2>
                <input
                  type="email"
                  className="search"
                  placeholder="search..."
                  onChange={Filter}
                />
              </div>
            )}
            <div className="line"></div>
            {posts.length > 0 && (
              <table>
                <thead>
                  <tr>
                    <th>
                      <img src="../table-icon.png" alt="icon" />
                    </th>
                    <th>имя</th>
                    <th className="first">Артикул</th>
                    <th>Бренд</th>
                    <th>Цена</th>
                    <th>Цена со скидкой</th>
                  </tr>
                </thead>

                {records.map((post, index) => (
                  <tbody key={index}>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="chekbox"
                          id="chekbox"
                          className="form-check-input checkbox "
                        />
                      </th>

                      <td className="item">
                        {" "}
                        <Link to={`/Details/${post.id}`}> {post.name}</Link>
                      </td>

                      <td>{post.code}</td>
                      <td>{post.brand}</td>
                      <td>{post.price} $</td>
                      <td>{post.priceSale}$</td>
                      <td>
                        <Link to={`/edit/${post.id}`}>
                          <button className="edit">
                            <img src="edit.png" alt="icon" />
                          </button>
                        </Link>
                        <button
                          className="delete"
                          onClick={(e) =>
                            handleDelete(
                              post.id,
                              toast("Product deleting", {
                                position: "top-right",
                                autoClose: 1200,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark",
                              })
                            )
                          }
                        >
                          
                          <img src="delete.png" alt="icon" />
                        </button>
                        <ToastContainer />
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            )}
          </div>

          <div className="foter">
            {posts.length > 1 && (
              <select name="15">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
            )}
            <div className="pagination">
              {posts.length > 1 && (
                <button className="paginations" onClick={prePage}>
                  <img src="../page-left.png" alt="icon" />
                </button>
              )}
              {numbers.map((n, i) => (
                <button
                  className={`pagination-btn ${
                    currentPage === n ? "active" : ""
                  }`}
                  key={i}
                  onClick={() => changeCPage(n)}
                >
                  {n}
                </button>
              ))}
              {posts.length > 1 && (
                <button className="paginations" onClick={nextPage}>
                  <img src="../page-right.png" alt="icon" />
                </button>
              )}
            </div>
          </div>

          {posts.length < 1 && (
            <div className="free">
              <h2>Вы пока не создали ни одного товара</h2>
              <img src="./free.png" alt="img" />
              <NavLink to={"/add"}>
                <button className="add">Создать первый товар</button>
              </NavLink>
            </div>
          )}
        </div>
        {posts.length > 0 && (
          <footer>
            <NavLink to={"/add"}>
              <button className="new">+ Новый товар</button>
            </NavLink>
            <p>© Anymarket 2022</p>
          </footer>
        )}
        {posts.length < 1 && (
          <footer className="free-footer">
            <p>© Anymarket 2022</p>
          </footer>
        )}
      </div>
    </div>
  );
};

export default memo(Products);
