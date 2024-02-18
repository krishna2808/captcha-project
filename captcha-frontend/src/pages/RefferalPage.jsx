import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

import referalImg1 from "../images/referal_img1.png";
import { Link } from "react-router-dom";
const RefferalPage = () => {
  const { currentUserData } = useContext(UserContext);
  console.log({ currentUserData });
  return (
    <div
      className="user-profile-main"
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="header">
        <img src={referalImg1} alt="user img" />
      </div>
      <span className="heading-1-referral">My Refferal Code</span>
      <span className="ref-code">
        {currentUserData ? currentUserData.data.refferal_code : ""}
      </span>
      <span className="ref-btm">
        Your refferal code has been used for
        <b style={{ fontSize: "30px", margin: "0px 3px" }}>
          {currentUserData ? currentUserData.data.times_reffered : ""}
        </b>{" "}
        times
      </span>

      <div className="header">
        <Link to={"/dashboard"} className="go-to-dashboard">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default RefferalPage;
