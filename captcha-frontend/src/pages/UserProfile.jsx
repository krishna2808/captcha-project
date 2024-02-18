import React, { useContext } from "react";
import { CiUser } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { UserContext } from "../Contexts/UserContext";
import { FaCoins } from "react-icons/fa6";

const UserProfile = () => {
  const { currentUserData } = useContext(UserContext);
  return (
    <div className="user-profile-main">
      <div className="header">
        <FaRegUser className="icon1" />
        <span>User Profile</span>
      </div>
      <hr
        style={{
          border: "none",
          borderTop: "2px dotted black",
          width: "100%", // Adjust the width as needed
          margin: "10px 0", // Adjust margin as needed
        }}
      />
      <div className="user-info">
        <div className="tab">
          <span className="label">Email</span>
          <span className="value">
            {currentUserData ? currentUserData.data.email : ""}
          </span>
        </div>
        <div className="tab">
          <span className="label">First Name</span>
          <span className="value">
            {currentUserData ? currentUserData.data.first_name : ""}
          </span>
        </div>
        <div className="tab">
          <span className="label">Last Name</span>
          <span className="value">
            {currentUserData ? currentUserData.data.last_name : ""}
          </span>
        </div>
        <div className="tab">
          <span className="label">Phone</span>
          <span className="value">
            {currentUserData ? currentUserData.data.mobile_number : ""}
          </span>
        </div>
      </div>

      <div className="header">
        <FaCoins className="icon1" />
        <span>Balance & Plan</span>
      </div>
      <hr
        style={{
          border: "none",
          borderTop: "2px dotted black",
          width: "100%", // Adjust the width as needed
          margin: "10px 0", // Adjust margin as needed
        }}
      />
      <div className="user-info">
        <div className="tab">
          <span className="label">Account Balance</span>
          <span className="value">
            ₹{currentUserData ? currentUserData.data.current_balance : ""}
          </span>
        </div>
        <div className="tab">
          <span className="label">Plan Name</span>
          <span className="value">
            {currentUserData ? currentUserData.data.plan_name : ""}
          </span>
        </div>
        <div className="tab">
          <span className="label">Total Captchas Filled</span>
          <span className="value">
            {currentUserData ? currentUserData.data.total_captcha_filled : ""}
          </span>
        </div>
        <div className="tab">
          <span className="label">Captcha Daily Limit</span>
          <span className="value">
            {currentUserData ? currentUserData.data.captcha_limit : ""}
          </span>
        </div>
      </div>
      {/* 
      <div style={{margin:"auto",color:"green",fontWeight:'bolder',fontSize:'25px',marginTop:"20px"}}>
        <FaCoins className="icon1" />
        <span>Withdraw Money</span>
      </div> */}
    </div>
  );
};

export default UserProfile;
