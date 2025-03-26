import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About"
import Signin from "./Components/SignIn";
import Signup from "./Components/SignUp";

import Payments from "./Components/Payments";
import NotFound from "./Components/NotFound";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Addhaircut from "./Components/Addhaircut";
import Carousel from "./Components/Carousel";
import bb from "./Components/bb.png"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1>NELLY'S BARBERSHOP</h1>
          <img src={bb} alt="" /> <br />
        </header>

        <li className="menu-item">
          <span className="item-icon">
            <i className="bx bxs-dashboard"></i>
          </span>
          <span className="item-text">
            <nav className="nav">
              <Link to="/home" className="links">
                Home
              </Link>
              <Link to="/haircuts" className="links">
                Haircuts
              </Link>
            
              <Link to="/about" className="links">
                About
              </Link>
              <Link to="/signin" className="links">
                Signin
              </Link>
              <Link to="/signup" className="links">
                Signup
              </Link>
            </nav>
            <br />
          </span>
        </li>
        <br />
        <br />
        <br />
        <Carousel />
        <Routes>
          <Route path="/home" element={<Home />}>
            Home
          </Route>
          <Route path="/haircuts" element={<Addhaircut />}>
            About
          </Route>
          <Route path="/about" element={<About />}>
            About
          </Route>
          <Route path="/payments" element={<Payments />}>
            Signup
          </Route>
          <Route path="/signin" element={<Signin />}>
            Signin
          </Route>
          <Route path="/signup" element={<Signup />}>
            Signup
          </Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <br /> <br />
      <footer className="buda">
        <section class="row p-4 bg-info text-dark">
          <div class="col-md-4">
            <h4 class="text-center">About Us</h4>
            <p>
              Nelly's Barbershop is commited to transform a boy into a man since
              we provide the best haircuts in town.
            </p>
            <p>
              Our mission is to connect people with the best memories they can
              ever build with their close ones.
            </p>  
          </div>
          <div class="col-md-6">
            <h4 class="text-center">Get In Touch</h4>
            <form>
              <input
                type="email"
                placeholder="Enter Your Email"
                class="form-control mb-3"
                required
              />
              <textarea
                class="form-control mb-3"
                rows="5"
                placeholder="Leave a Comment"
                required
              ></textarea>
              <input
                type="submit"
                value="Send Message"
                class="btn btn-primary w-100"
              />
            </form>
           
          </div>
          <div className="col-md-6 w-5 h-3">
            <div className="bro"></div>
          </div>
        </section>
        <p>&copy; 2025 Fobbs Rolfenson. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
