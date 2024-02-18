import { createTheme, ThemeProvider } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import React from "react";

const MyPopup = ({ popupOpen, handleClose, popupErrors }) => {
  return (
    <Snackbar
      open={popupOpen}
      autoHideDuration={4000}
      onClose={handleClose}
      style={{
        position: "fixed",
        bottom: "100px", // Adjust the distance from the bottom as needed
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Alert
        onClose={handleClose}
        severity={popupErrors.type ? popupErrors.type : "error"}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {popupErrors.msg}
      </Alert>
    </Snackbar>
  );
};

export default MyPopup;
