import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { IoLogoFreebsdDevil } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import { TbCoinRupee } from "react-icons/tb";
import { GiTwoCoins } from "react-icons/gi";
import { axiosInstance } from "../utils/fetchUtitls";
import { useEffect } from "react";
import { UserContext } from "../Contexts/UserContext";
import { FaMoneyBillAlt } from "react-icons/fa";

const pages = [
  { url: "/plans", name: "Plans" },
  { url: "/dashboard", name: "Dashboard" },
  { url: "/user-profile", name: "My Account" },
  { url: "/user-wallet", name: "My Wallet" },
  { url: "/user-refferal", name: "Refferals" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar2() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { currentUserData } = React.useContext(UserContext);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#006666" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <IoLogoFreebsdDevil className="laptop-appbar-icon" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            99Captchas
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                  backgroundColor: "rgba(0, 100, 100, 0.5)",
                },
              }}
            >
              {Object.keys(pages).map((key) => (
                <MenuItem key={pages[key].url} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      className="appbar-btns"
                      style={{
                        color: "teal",
                        fontWeight: "bolder",
                        fontSize: "1.5rem",
                      }}
                      to={pages[key].url}
                    >
                      {pages[key].name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <IoLogoFreebsdDevil className="mobile-appbar-icon" />
          <Typography
            variant={{ xs: 'body1', md: 'h5' }}
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              //letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: { xs: '16px', md: 'large' }
            }}
          >
            99Captchas
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {Object.keys(pages).map((key) => (
              <Link
                key={pages[key].url}
                to={pages[key].url}
                className="appbar-btns"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  backgroundColor: "red",
                  marginRight: "1rem",
                }}
              >
                {pages[key].name}
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
            <div className="balance-container">
              <FaMoneyBillAlt className="coin-icon" />
              <span className="balance-amount">
                ₹{currentUserData ? currentUserData.data.current_balance : " ..."}
              </span>
            </div>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar2;
