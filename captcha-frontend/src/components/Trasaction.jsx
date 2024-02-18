import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { axiosInstance } from "../utils/fetchUtitls";
import { useNavigate } from "react-router-dom";

const TransactionForm = ({amount,setAmount} ) => {
  // const [memberId, setMemberId] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  //const [amount, setAmount] = useState("");
  const [refferal_id, setRefferalId] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      transactionId,
      mobileNumber,
      amount,
    });
    // Add your logic for handling form data (e.g., send data to a server)

    // .post("/api/select-plan/", { // this is not longer required
    axiosInstance
      .post("/api/add-funds/", {
        transactionId,
        refferal_id,
        mobileNumber,
        amount,
        selectedImage
      },
      {headers: {
        'Content-Type': 'multipart/form-data'
      }}
      )
      .then((res) => {
        debugger;
        console.log({ "select-plan response": res });
        navigate("/user-wallet");
      })
      .catch((err) => {
        console.log({ "select-plan error": err });
      });
  };

  return (
    <Container component="main" maxWidth="xs" className="transc-form">
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="UPI Transaction ID"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Amount"
                value={amount}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} // Only accepts numbers
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Refferal ID"
                value={refferal_id}
                onChange={(e) => setRefferalId(e.target.value)}
                required
              />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Mobile Number"
                value={mobileNumber}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} // Only accepts numbers
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <div
                style={{
                  border: "1px solid #D3D3D3",
                  borderRadius: "3px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center !important",
                }}
              >
                <Typography
                  variant="body1"
                  component="label"
                  htmlFor="fileInput"
                  style={{
                    fontSize: "18px",
                    marginTop: "10px",
                  }}
                >
                  Payment ScreenShot
                </Typography>
                <input
                  style={{
                    textAlign: "center",
                    maxWidth: "200px",
                  }}
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </div>
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "20px" }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default TransactionForm;
