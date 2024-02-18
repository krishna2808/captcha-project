// contain all money related details and functionality here
import React, { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import { FaCoins } from "react-icons/fa6";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { axiosInstance } from "../utils/fetchUtitls";
import { useNavigate } from "react-router-dom";

const WithDrawPopupForm = ({ onSubmit, setWdrPopupOpen, withdrLimit }) => {
  // is withdrw limit is null ,that can means user is not enrolled in a plan hence not allowed to withdraw
  const [amount, setAmount] = useState("");
  const [upiId, setUpiId] = useState("");
  const [bankAccountId, setBankAccountId] = useState("");
  debugger;
  if (!withdrLimit) {
    alert("Withdrawls are only allowed during the Plan is active!");
    setWdrPopupOpen(false);
  }
  const onSubmitPopup = () => {
    // Perform actions with the submitted data
    if (!amount || !upiId || !bankAccountId) {
      alert("Please fill in all required fields."); // Show an alert or handle validation error
      return;
    }
    console.log("Submitted Data:", { amount, upiId, bankAccountId });

    // Pass the submitted data to the parent component
    onSubmit({ amount, upiId, bankAccountId });
  };

  const todayDate = new Date().toISOString().split("T")[0];

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div
          style={{
            backgroundColor: "lightcoral",
            padding: "2px 10px",
            borderRadius: "5px",
            marginBottom: "5px",
          }}
        >
          <p>Withdraw will be done on balance greater than {withdrLimit}</p>
        </div>
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Withdraw Amount
        </div>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <label>
          UPI ID:
          <input
            type="text"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
          />
        </label>
        <label>
          Bank Account ID:
          <input
            type="text"
            value={bankAccountId}
            onChange={(e) => setBankAccountId(e.target.value)}
          />
        </label>
        <label>
          Date:
          <input type="text" value={todayDate} readOnly />
        </label>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "20px 0px",
          }}
        >
          <button type="submit" onClick={onSubmitPopup}>
            Submit
          </button>
          <button
            style={{ backgroundColor: "blue" }}
            onClick={() => setWdrPopupOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const WalletPage = () => {
  const { currentUserData, isLoading } = useContext(UserContext);
  const [isWdrPopupOpen, setWdrPopupOpen] = useState(false);
  const navigate = useNavigate();
  const onWtdrSubmit = ({ amount, upiId, bankAccountId }) => {
    // Handle the submitted data
    console.log("Form Data in App:", { amount, upiId, bankAccountId });
    if (
      amount > currentUserData ? currentUserData.data.plan_withdraw_limit : 0
    ) {
      alert("Select amount less or equal to daily Withdrawl Limit");
      return;
    }
    axiosInstance
      .post("/api/withdraw-amount/", {
        amount,
        upi_id: upiId,
        bank_id: bankAccountId,
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload(); 
      })
      .catch((err) => {
        console.log({ err });
        alert("Something went wrong with Your transaction please try again!");
      });
    setWdrPopupOpen(false);
    //window.location.reload();
    // Perform any other actions based on the submitted data
  };
  const navigateToAddFunds = () => {
    navigate("/add-funds");
  };
  if (isLoading) {
    return (<div className="loader">

<div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height
      }}
    >
      <div
        style={{
          textAlign: 'center',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        }}
      >
        <p>Content is Loading...</p>
        <p>Please refresh if not.</p>
      </div>
    </div>

    </div>)
  }
  return (
    <div className="user-profile-main">
      {isWdrPopupOpen && (
        <WithDrawPopupForm
          onSubmit={onWtdrSubmit}
          setWdrPopupOpen={setWdrPopupOpen}
          withdrLimit={
            currentUserData ? currentUserData.data.plan_withdraw_limit : 0
          }
        />
      )}
      <div className="header">
        <FaCoins className="icon1" />
        <span>Wallet Details </span>
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
          <span className="label">Active Plan</span>
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
      </div>

      <div className="wallet-btns">
        <div
          className="add-main"
          onClick={navigateToAddFunds}
          style={{ cursor: "pointer" }}
        >
          <IoIosAddCircle className="btns" />
          <span>Add Funds</span>
        </div>
        <div
          className="wtdr-main"
          onClick={() => setWdrPopupOpen(true)}
          style={{ cursor: "pointer" }}
        >
          <FaMoneyBillTrendUp className="btns" />
          <span>Withdraw Funds</span>
        </div>
      </div>

      <div className="header">
        <MdOutlinePayment className="icon1" />
        <span>Payment History</span>
      </div>
      <div className="heading-table">
        <span>Id</span>
        <span>Account</span>
        <span>Status</span>
      </div>
      <hr
        style={{
          border: "none",
          borderTop: "2px dotted black",
          width: "100%", // Adjust the width as needed
          margin: "10px 0", // Adjust margin as needed
        }}
      />
      {/* include following details in userContext */}
      {currentUserData ? (
        <div className="payment_history_comp">
          {currentUserData.data.payment_history.map((record) => (
            <div className="payment_row" key={record.id}>
              <span>{record.id}</span>
              <span>{record.amount}</span>
              <span>{record.status}</span>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ color: "teal" }}>No records were found!</div>
      )}

      <div className="header">
        <BiMoneyWithdraw className="icon1" />
        <span>Withdraw History</span>
      </div>
      <div className="heading-table">
        <span>Id</span>
        <span>Account</span>
        <span>Status</span>
      </div>
      <hr
        style={{
          border: "none",
          borderTop: "2px dotted black",
          width: "100%", // Adjust the width as needed
          margin: "10px 0", // Adjust margin as needed
        }}
      />
      {currentUserData ? (
        <div className="payment_history_comp">
          {currentUserData.data.withdraw_history.map((record) => (
            <div className="payment_row" key={record.id}>
              <span>{record.id}</span>
              <span>{record.amount}</span>
              <span>{record.status}</span>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ color: "teal" }}>No records were found!</div>
      )}
    </div>
  );
};

export default WalletPage;
