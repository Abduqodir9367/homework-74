import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
// import Login from "./pages/login/Login";
// import Products from "./pages/products/Products";
import "bootstrap/dist/css/bootstrap.min.css";
// import Add from "./pages/add/Add";
// import Details from "./pages/details/Details";
// import Edit from "./pages/edit/Edit";
// import Profile from "./pages/profile/Profile";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";
import Edit from "./pages/edit/Edit";
import NotFound from "./components/NotFound";
const Login = lazy(() => import("./pages/login/Login"));
const Add = lazy(() => import("./pages/add/Add"));
const Details = lazy(() => import("./pages/details/Details"));
const Profile = lazy(() => import("./pages/profile/Profile"));
const Products = lazy(() => import("./pages/products/Products"));

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading></Loading>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="products"
          element={
            <Suspense fallback={<Loading></Loading>}>
              <Products />
            </Suspense>
          }
        ></Route>
        <Route
          path="add"
          element={
            <Suspense fallback={<Loading></Loading>}>
              <Add />
            </Suspense>
          }
        ></Route>
        <Route
          path="/Details/:id"
          element={
            <Suspense fallback={<Loading></Loading>}>
              <Details />
            </Suspense>
          }
        ></Route>
        <Route
          path="/edit/:id"
          element={
            <Suspense fallback={<Loading></Loading>}>
              <Edit />
            </Suspense>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <Suspense fallback={<Loading></Loading>}>
              <Profile />
            </Suspense>
          }
        ></Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
