import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../utils/fetchUtitls";

const ConfirmPlan = () => {
  const [referralCode, setReferralCode] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const navigate = useNavigate();
  const [planData, setPlanData] = useState({
    planName: null,
    planPrice: null,
  });

  const { paramValue } = useParams(); // if not found then renavigate to plans page
  console.log({ paramValue });
  if (!paramValue) {
    console.log("no plans selected");
    navigate("/plans");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Submitted referral code:", referralCode);
    axiosInstance
      .post("api/select-plan/", {
        referral_id: referralCode,
        plan_id: paramValue,
      })
      .then((res) => {
        debugger;
        if (res.status === 204) {
          // this means low balance hence urge user to add funds
          debugger;
          alert("User already enrolled in a plan");
          debugger;
          navigate("/dashboard");
        } else if (res.status === 205) {
          // this means low balance hence urge user to add funds
          debugger;
          alert("Insufficient balance , Please add Funds to your Wallet");
          debugger;
          navigate("/add-funds");
        }   
        else{
         // now if plan selection was successful navigate to dashboard
          navigate("/dashboard")}
      });
  };
  useEffect(() => {
    // call the backend to provide plan details
    axiosInstance
      .get(`api/plan-details?planId=${paramValue}`, { planId: paramValue })
      .then((res) => {
        //we got to load this page with selected plan details here
        debugger;
        console.log(res.data);
        const amount = res.data.amount;
        const name = res.data.name;
        setPlanData({ planName: name, planPrice: amount });
      })
      .catch((err) => {
        debugger;
        console.log({ err });
      });
  }, [paramValue]);
  return (
    <form onSubmit={handleSubmit} className="plan-select-form">
      <TextField
        variant="outlined"
        fullWidth
        label="Plan Name"
        value={planData.planName}
        InputLabelProps={{ shrink: true }}
        InputProps={{ readOnly: true }}
        margin="normal"
      />
      <TextField
        // variant="outlined"
        fullWidth
        label="Plan Price"
        value={planData.planPrice}
        InputLabelProps={{ shrink: true }}
        InputProps={{ readOnly: true }}
        margin="normal"
      />
      <TextField
        // variant="outlined"
        fullWidth
        label="Referral Code"
        value={referralCode}
        onChange={(e) => setReferralCode(e.target.value)}
        margin="normal"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
            color="primary"
          />
        }
        label="I confirm that I have reviewed all details"
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={!confirmed} // Disable button if checkbox is not checked
      >
        Submit
      </Button>
    </form>
  );
};

export default ConfirmPlan;
