// import React from 'react'

// const PlansPage = () => {
//   return (
//     <div>PlansPage</div>
//   )
// }

// export default PlansPage
import React from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Select } from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { ListItem } from "@mui/material";
import { List } from "@mui/material";
import { Card } from "@mui/material";
import { Checkbox } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Link } from "@mui/material";
import { Button } from "@mui/material";
import { Chip } from "@mui/material";
import {useNavigate} from 'react-router-dom'


const standoutStyle = {
  fontFamily: "Your Custom Font, sans-serif",
  fontWeight: 700, // Adjust as needed
  fontSize: "1.2rem", // Adjust as needed
  color: "#ff4081", // Your preferred standout color
  // Add any additional styling properties here
};
const standoutStyleSmall = {
  fontFamily: "Your Custom Font, sans-serif",
  fontWeight: 700, // Adjust as needed
  fontSize: "1rem", // Adjust as needed
  color: "#ff4081", // Your preferred standout color
  // Add any additional styling properties here
};

export default function PlansPage() {
  const navigate = useNavigate()
  const handleNavigation = (id)=>{
    //id in numbers
    navigate(`/select-plan/${id}`)
  }
  return (
    <div className="plans-main">
      <Box
        sx={{
          backgroundColor: "transparent",
          padding: "30px",
          width: "100%",
          maxWidth: "1100px",
          display: "flex",
          flexDirection: "column",
          rowGap: "25px",
          color: "#484d59",
          "@media(max-width:479px)": { padding: "20px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "@media(max-width:991px)": {
              flexDirection: "column",
              alignItems: "center",
              rowGap: "20px",
            },
            "@media(max-width:479px)": {
              flexDirection: "column",
              alignItems: "center",
              rowGap: "20px",
            },
          }}
        >
          <Card
            sx={{
              width: "100vw",
              maxWidth: "290px",
              boxShadow: "none",
              border: "1px solid #e8ebf1",
              height: "fit-content",
            }}
          >
            <Stack
              sx={{
                padding: "24px",
                alignItems: "center",
                "@media(max-width:479px)": { padding: "20px" },
              }}
              gap="20px"
              direction="column"
            >
              <Stack gap="0px" direction="column">
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "40px",
                    "@media(max-width:991px)": { fontSize: "35px" },
                    "@media(max-width:479px)": { fontSize: "30px" },
                  }}
                  variant="subtitle"
                >
                  Essential
                </Typography>
                <Stack gap="0px" direction="row">
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: "22px",
                      "@media(max-width:991px)": { fontSize: "20px" },
                      "@media(max-width:479px)": { fontSize: "18px" },
                    }}
                    variant="subHeading"
                  >
                    4000+ users
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "8px",
                      "@media(max-width:479px)": {
                        marginTop: "4px",
                        fontSize: "14px",
                      },
                    }}
                    variant="subtitle"
                  >
                    /month
                  </Typography>
                </Stack>
              </Stack>
              <Typography
                sx={{
                  fontSize: "13px",
                  lineHeight: "normal",
                  "@media(max-width:479px)": { textAlign: "center" },
                }}
                variant="p"
                style={standoutStyleSmall}
              >
                +800 on Referals
              </Typography>
              <List
                sx={{ listStyleType: "disc", paddingLeft: "10px" }}
                listType="ul"
              >
                <ListItem sx={{ fontSize: "13px" }}>
                  <Typography variant="p">
                    Perfect for getting started with captcha filling.
                  </Typography>
                </ListItem>
                <ListItem sx={{ fontSize: "13px" }}>
                  <Typography variant="p">
                    Limited workload to fit your part-time schedule.
                  </Typography>
                </ListItem>
                <ListItem sx={{ fontSize: "13px" }}>
                  <Typography variant="p" style={standoutStyle}>
                    300 Captchas / Day
                  </Typography>
                </ListItem>
              </List>
              <Typography
                sx={{
                  fontSize: "23px",
                  "@media(max-width:479px)": { fontSize: "19px" },
                }}
                variant="p"
              >
                ₹3000
              </Typography>
              <Button
              onClick={()=>handleNavigation(1)}
                sx={{
                  backgroundColor: "#eef3fe",
                  fontWeight: "600",
                  border: "none",
                  fontSize: "13px",
                  padding: "10px 8px",
                  justifyContent: "center",
                  width: "100%",
                  color: "#2567f4",
                  textTransform: "uppercase",
                  
                }}
              >
                Seletct Plan
              </Button>
            </Stack>
          </Card>

          <Card
            sx={{
              width: "100vw",
              maxWidth: "290px",
              boxShadow: "none",
              border: "1px solid #e8ebf1",
              height: "fit-content",
            }}
          >
            <Stack
              sx={{
                padding: "24px",
                alignItems: "center",
                "@media(max-width:479px)": { padding: "20px" },
              }}
              gap="20px"
              direction="column"
            >
              <Stack gap="0px" direction="column">
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "40px",
                    "@media(max-width:991px)": { fontSize: "35px" },
                    "@media(max-width:479px)": { fontSize: "30px" },
                  }}
                  variant="subtitle"
                >
                  Deluxe
                </Typography>
                <Stack gap="0px" direction="row">
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: "22px",
                      "@media(max-width:991px)": { fontSize: "20px" },
                      "@media(max-width:479px)": { fontSize: "18px" },
                    }}
                    variant="subHeading"
                  >
                    1300+ users
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "8px",
                      "@media(max-width:479px)": {
                        marginTop: "4px",
                        fontSize: "14px",
                      },
                    }}
                    variant="subtitle"
                  >
                    /month
                  </Typography>
                </Stack>
              </Stack>
              <Typography
                sx={{
                  fontSize: "13px",
                  lineHeight: "normal",
                  "@media(max-width:479px)": { textAlign: "center" },
                }}
                variant="p"
                style={standoutStyleSmall}
              >
                +2000 on Referals
              </Typography>
              <List
                sx={{ listStyleType: "disc", paddingLeft: "10px" }}
                listType="ul"
              >
                <ListItem sx={{ fontSize: "13px" }}>
                  <Typography variant="p">
                    Ideal for users looking to increase their captcha filling
                    efficiency.
                  </Typography>
                </ListItem>
                <ListItem sx={{ fontSize: "13px" }}>
                  <Typography variant="p">
                    opportunities for earning.Diverse range of captcha
                    challenges.
                  </Typography>
                </ListItem>
                <ListItem sx={{ fontSize: "13px" }}>
                  <Typography variant="p" style={standoutStyle}>
                    700 Captchas / Day
                  </Typography>
                </ListItem>
              </List>
              <Typography
                sx={{
                  fontSize: "23px",
                  "@media(max-width:479px)": { fontSize: "19px" },
                }}
                variant="p"
              >
                ₹5000
              </Typography>
              <Button
              onClick={()=>handleNavigation(2)}
                sx={{
                  backgroundColor: "#eef3fe",
                  fontWeight: "600",
                  border: "none",
                  fontSize: "13px",
                  padding: "10px 8px",
                  justifyContent: "center",
                  width: "100%",
                  color: "#2567f4",
                  textTransform: "uppercase",
                }}
              >
                Select Plan
              </Button>
            </Stack>
          </Card>

          <Card
            sx={{
              width: "100vw",
              maxWidth: "290px",
              boxShadow: "none",
              border: "1px solid #e8ebf1",
              height: "fit-content",
            }}
          >
            <Stack
              sx={{
                padding: "24px",
                alignItems: "center",
                "@media(max-width:479px)": { padding: "20px" },
              }}
              gap="20px"
              direction="column"
            >
              <Stack gap="0px" direction="column">
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "40px",
                    "@media(max-width:991px)": { fontSize: "35px" },
                    "@media(max-width:479px)": { fontSize: "30px" },
                  }}
                  variant="subtitle"
                >
                  Premium
                </Typography>
                <Stack gap="0px" direction="row">
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: "22px",
                      "@media(max-width:991px)": { fontSize: "20px" },
                      "@media(max-width:479px)": { fontSize: "18px" },
                    }}
                    variant="subHeading"
                  >
                    100+ users
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "8px",
                      "@media(max-width:479px)": {
                        marginTop: "4px",
                        fontSize: "14px",
                      },
                    }}
                    variant="subtitle"
                  >
                    /month
                  </Typography>
                </Stack>
              </Stack>
              <Typography
                sx={{
                  fontSize: "13px",
                  lineHeight: "normal",
                  "@media(max-width:479px)": { textAlign: "center" },
                }}
                variant="p"
                style={standoutStyleSmall}
              >
                +3500 on Referals
              </Typography>
              <List
                sx={{ listStyleType: "disc", paddingLeft: "10px" }}
                listType="ul"
              >
                <ListItem sx={{ fontSize: "13px" }}>
                  <Typography variant="p">
                    Serious about maximizing your earnings? The Pro Plan is for
                    you.
                  </Typography>
                </ListItem>
                <ListItem sx={{ fontSize: "13px" }}>
                  <Typography variant="p">
                    High-capacity workload for dedicated part-time users.
                  </Typography>
                </ListItem>
                <ListItem sx={{ fontSize: "13px" }}>
                  <Typography variant="p" style={standoutStyle}>
                    1200 Captchas / Day
                  </Typography>
                </ListItem>
              </List>
              <Typography
                sx={{
                  fontSize: "23px",
                  "@media(max-width:479px)": { fontSize: "19px" },
                }}
                variant="p"
              >
                ₹10,000
              </Typography>
              <Button
              onClick={()=>handleNavigation(3)}
                sx={{
                  backgroundColor: "#eef3fe",
                  fontWeight: "600",
                  border: "none",
                  fontSize: "13px",
                  padding: "10px 8px",
                  justifyContent: "center",
                  width: "100%",
                  color: "#2567f4",
                  textTransform: "uppercase",
                }}
              >
                Select Plan
              </Button>
            </Stack>
          </Card>
        </Box>
      </Box>

      <div className="plans-footer">
        <div className="card">
          Make money by captcha typing work{" "}
          <span style={{ color: "#ff4a70" }}> in mobile</span>
        </div>
        <div className="card">
          Fill captcha and earn money
          <span style={{ color: "#68a51b" }}> without investment</span>
        </div>
        <div className="card">
          Online captcha work with
          <span style={{ color: "#ff7b1b" }}> instant payments</span>
        </div>
        <div className="card">
          Captcha entry jobs allows to easy earn online
          <span style={{ color: "#2573e4" }}> from home</span>{" "}
        </div>
      </div>
    </div>
  );
}
