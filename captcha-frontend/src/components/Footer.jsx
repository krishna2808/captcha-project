import React from 'react';
import { Container, Typography, Link, Grid } from '@mui/material';
import { CreditCard, AccountBalanceWallet } from '@mui/icons-material';
import { BsInfoCircle } from 'react-icons/bs';
import { SiPaypal } from 'react-icons/si';

const footerStyle = {
  // marginTop: '2rem',
  paddingTop: '2rem',
  backgroundColor: '#333', // Blue background color
  color: '#fff', // White text color
  marginTop:"auto",
};

const contactStyle = {
  marginBottom: '1rem',
};

const copyrightStyle = {
  marginTop: '1rem',
};

const paymentIconsStyle = {
  marginTop: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const paymentIconStyle = {
  fontSize: '40px',
  margin: '0.5rem',
};

const infoIconStyle = {
  fontSize: '40px',
  marginRight: '0.5rem',
};

const Footer = () => {
  return (
    <footer className='footer' style={footerStyle}>
      <Container>
        <Typography variant="h6" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="subtitle1" align="center" style={contactStyle}>
          Email: <Link href="mailto:info@99captcha.com">info@99captcha.com</Link>
        </Typography>

        <Typography variant="body2" align="center" style={copyrightStyle}>
          Copying any part of this website without the explicit permission of the website owner is illegal.
        </Typography>

        <Grid container spacing={2} style={paymentIconsStyle}>
          <Grid item style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <SiPaypal style={paymentIconStyle} /> PayPal
          </Grid>
          <Grid item  style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
            <CreditCard style={paymentIconStyle} /> Visa
          </Grid>
          <Grid item style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <AccountBalanceWallet style={paymentIconStyle} />UPI
          </Grid>
        </Grid>

        {/* <div style={infoIconStyle}>
          <BsInfoCircle style={infoIconStyle} />
          <span>Information</span>
        </div> */}
      </Container>
    </footer>
  );
};

export default Footer;
