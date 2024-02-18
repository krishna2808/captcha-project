import React from "react";
import { CiDollar } from "react-icons/ci";
import { MdArrowUpward } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { FaHourglassStart } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa";
import { IoTimer } from "react-icons/io5";
import m1 from "../images/m1.svg";
import m2 from "../images/m2.svg";

import { Link } from "react-router-dom";

export const MarketingPage = () => {
  return (
    <div className="marketing-main">
      <div className="marketing-cards">
        <div className="marketing-card">
          <div className="topbar">
            <CiDollar />
            Work for 99Captcha
          </div>
          <div className="card-body">
            <img src={m1} style={{ width: "100%" }} alt="..." />
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                padding: "10px",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <MdArrowUpward
                style={{
                  fontSize: "20",
                  backgroundColor: "#FFC75F",
                  borderRadius: "50%",
                  padding: "3px",
                }}
              />
              Home Data Entry Work
            </div>
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                padding: "10px",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <MdPayment
                style={{
                  fontSize: "20",
                  backgroundColor: "#FFC75F",
                  borderRadius: "50%",
                  padding: "3px",
                }}
              />{" "}
              Instant Payment
            </div>
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                padding: "10px",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <FaHourglassStart
                style={{
                  fontSize: "20",
                  backgroundColor: "#FFC75F",
                  borderRadius: "50%",
                  padding: "3px",
                }}
              />{" "}
              Easy To Start
            </div>
            <div className="btn-grp">
              <Link to={"/dashboard"} 
              className="start-btn"
              style={{ backgroundColor: "white", border: "3px solid #09a8d4",color:"#09a8d4" }}
              >
                Dashboard
              </Link>
              <Link to={"/plans"} 
              className="start-btn"
              style={{ border: "3px solid #09a8d4" }}
              >
                Let's Start
              </Link>
            </div>
          </div>
        </div>

        <div className="marketing-card">
          <div className="topbar">
            <FaChevronCircleRight />
            Captcha Solving Service
          </div>
          <div className="card-body">
            <img src={m2} style={{ width: "100%" }} alt="..." />
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                padding: "10px",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <FaRupeeSign
                style={{
                  fontSize: "20",
                  backgroundColor: "#FFC75F",
                  borderRadius: "50%",
                  padding: "3px",
                }}
              />
              Starting from 1₹ for every Captchas Solved
            </div>
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                padding: "10px",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <FaPuzzlePiece
                style={{
                  fontSize: "20",
                  backgroundColor: "#FFC75F",
                  borderRadius: "50%",
                  padding: "3px",
                }}
              />{" "}
              bypass API for Python, Go, Ruby
            </div>
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                padding: "10px",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <IoTimer
                style={{
                  fontSize: "20",
                  backgroundColor: "#FFC75F",
                  borderRadius: "50%",
                  padding: "3px",
                }}
              />{" "}
              Auto captcha solver response: less than 12 sec
            </div>
            <div className="btn-grp">
              <Link
                to={"/dashboard"}
                style={{ backgroundColor: "white", border: "3px solid #09a8d4",color:"#09a8d4" }}
                className="start-btn"
              >
                Try it!
              </Link>
              <Link to={"/plans"} 
              className="start-btn"
              style={{ border: "3px solid #09a8d4" }}
              >
                Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="marketing-stats">
        <div className="heading">Auto captcha solver customers online statistics</div>

 <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          marginBottom: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          width: '100%',
          padding: '10px',
        }}
      >
        <div style={{fontWeight:"bold",fontSize:"18px"}}>Rates</div>
        <div className="content">
          <span>₹1.0(0.01$)</span>
          <span> Per normal captchas</span>
          <br />
          <span>₹10.0(0.15$)</span>
          <span> Per JS captchas</span>
        </div>
      </div>
      <div
        style={{
          marginBottom: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          width: '100%',
          padding: '10px',
        }}
      >
        <div  style={{fontWeight:"bold",fontSize:"18px"}}>Captcha Watching Time</div>
        <div className="content">
          <span>₹1.0(0.01$)</span>
          <span> Per normal captchas</span>
          <br />
          <span>₹10.0(0.15$)</span>
          <span> Per JS captchas</span>
        </div>
      </div>
      <div
        style={{
          marginBottom: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          width: '100%',
          padding: '10px',
        }}
      >
        <div  style={{fontWeight:"bold",fontSize:"18px"}}>Workers Online</div>
        <div className="content">
          <span>1k+</span>
          <span> Right now</span>
          <br />
          <span>7k+ </span>
          <span>Registered</span>
        </div>
      </div>
    </div>

      </div>
    </div>
  );
};
