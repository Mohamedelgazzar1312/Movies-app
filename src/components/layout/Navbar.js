import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FileX } from "react-bootstrap-icons";
export default function Navbar() {
  const counter = useSelector(state => state.counter.counter)


  return (
    <nav className="navbar navbar-expand-lg  " style={{ background:"#290A2A", height: "50px" }}   >
      <div className="container-fluid "   >
        <div className="navbar-brand" style={{ color: '#FE6CFE', fontSize: "25px", fontWeight: "800" }}  >
          Movies App
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup"    >
          <div className="navbar-nav" style={{ color: '06FE9B' }}  >
            <NavLink
              className={({ isActive, isPending, isTransitioning }) =>
                [isActive ? "nav-link" : "nav-link",
                isPending ? "pending" : "",
                isActive ? "active" : "",
                isTransitioning ? "transitioning" : "",
                ].join(" ")
              }
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  padding:"20px 40px",
                  fontSize: "20px",
                  paddingBottom: "10px",
                  color: '#06FE9B ',
                  textDecoration:isActive? "underline":"none",
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#FDD1FF" : "#FDD1FF",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}

              aria-current="page" to="/"  >
              Movies
            </NavLink>


            <NavLink
              className={({ isActive, isPending, isTransitioning }) =>
                [isActive ? "nav-link" : "nav-link",
                isPending ? "pending" : "",
                isActive ? "active" : "",
                isTransitioning ? "transitioning" : "",
                ].join(" ")
              }
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  
                 position:"absolute",
                 left:"910px",
                 top:"12px",
                  color: '#212529', fontWeight: '700', position: 'relative',
                  textDecoration: isActive ? "underline" : "underline",
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#FDD1FF" : "#FDD1FF",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}


              to="/watchList" >

              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" fill="#FDD1FF" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
              </svg>
              <sup style={{fontSize: '13px', position: 'absolute', top: '6px', right: '-9px', width: '20px', height: '20px', backgroundColor: 'red', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>{counter}</sup>
            </NavLink>


            <NavLink
              className={({ isActive, isPending, isTransitioning, isarabic }) =>
                [
                  isActive ? "nav-link" : "nav-link",
                  isPending ? "pending" : "",
                  isActive ? "active" : "",
                  isTransitioning ? "transitioning" : "",
                ].join(" ")
              }
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  position:"absolute",
                  right:"30px",
                  
                  top:"-1px",
                  fontSize: "25px",
                  textDecoration: isActive ? "underline" : "none",
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#FDD1FF" : "#FDD1FF",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}

              to="/login"    >
              login
            </NavLink>
           

          </div>
        </div>
      </div>

    </nav>
  );
}



