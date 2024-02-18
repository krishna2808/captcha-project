import React,{ useRef } from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { axiosInstance } from "../utils/fetchUtitls";
import QrCode from "../images/demo_qr.png";
import All_upi_icons from "../images/all_upi_icons.png"
import TransactionForm from "../components/Trasaction";
import PhonePeLogo from '../images/phonepe_logo.png'
import PaytmLogo from '../images/paytm_logo.png'
import GpayLogo from '../images/gpay_logo.png'	
import {merchantId,merchantName,currency,note,purpose,minAddFunds} from '../utils/constants'
import { isMobile } from 'react-device-detect';
const icon_style = {
    width:"60px",
}
const AddFunds = () => {
  const textRef = useRef(null);
    const [amount, setAmount] = useState(null);

function generateTransactionId() {
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substr(2, 9); // Generate a random string

  return `${timestamp}-${randomString}`;
}
function isValidPositiveNumber(str) {
  // Use regular expression to check if the string represents a positive number
  return /^\d*\.?\d+$/.test(str) && parseFloat(str) > 0;
}



const handleUpiAppPayment = (p)=>{
  debugger
  if (amount && parseFloat(amount)>minAddFunds){
    if (p === 'phonepe'){
       if (isValidPositiveNumber(amount) && parseFloat(amount) > 0){
           let url = ''
           const transactionId = generateTransactionId();
           if (isMobile) {
           url = `phonepe://pay?pa=${merchantId}&pn=${merchantName}&am=${parseFloat(amount)}&tr=${transactionId}&mc=8931&cu=${currency}&tn=${note}`;
            window.location.href = url;
            }
           
         }
       else{ alert(`Please select a valid amount greater than ${minAddFunds}`)}
     }
    else  if (p === 'gpay'){
     
         if (isValidPositiveNumber(amount) && parseFloat(amount) > 0){
           let url = ''
           const transactionId = generateTransactionId();
           if (isMobile) {
            url = `tez://upi/pay?pa=${merchantId}&pn=${merchantName}&purpose=${purpose}&am=${parseFloat(amount)}`;
            window.location.href = url;
            }

         }
       else{ alert(`Please select a valid amount greater than ${minAddFunds}`)}

     }
    else  if (p === 'paytm'){

          if (isValidPositiveNumber(amount) && parseFloat(amount) > 0){
           let url = ''
           const transactionId = generateTransactionId();
           if (isMobile) {
            url = `paytmmp://pay/?pa=${merchantId}&pn=99Captchas&purpose=00&am=${parseFloat(amount)}`
            window.location.href = url;
            }

         }
       else{ alert(`Please select a valid amount greater than ${minAddFunds}`)}

     }
  }else{
    alert(`Please select a valid amount greater than ${minAddFunds}`)
  }
}


const copyToClipboard = () => {
    const textToCopy = textRef.current.innerText;
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(textToCopy);
      return;
    }
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Text copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  const fallbackCopyTextToClipboard = (textToCopy) => {
    var textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
      console.log('Text copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }

    document.body.removeChild(textArea);
  };

  const navigate = useNavigate();
  // const [planData, setPlanData] = useState({
  //   planName: "",
  //   planPrice: "",
  //   planReferrals: "",
  //   planDailyLimit: "",
  // });
  // const { paramValue } = useParams(); // if not found then renavigate to plans page
  // console.log({paramValue});
  // if (!paramValue) {
  //   console.log("no plans selected");
  //   navigate("/plans");
  // }


  // useEffect(() => {
  //   // call the backend to provide plan details
  //   axiosInstance
  //     .get(`api/plan-details?planId=${paramValue}`, { planId: paramValue })
  //     .then((res) => {
  //       //we got to load this page with selected plan details here
  //       setPlanData(res.data);
  //     })
  //     .catch((err) => {
  //       debugger
  //       console.log({ err });
  //     });
  // }, [paramValue]);
  // console.log({ planData });

  return (
    <div className="purchase-plan">
      <div className="wrapper">
        <div className = "upi-wrapper">        <span className="number" ref={textRef}>{merchantId}</span> <button onClick={copyToClipboard}>Copy UPI-ID</button> </div>
        <span className="info">Use Any UPI App for payment using above Id  OR select any from   </span>

      <div style={{display:"flex",justifyContent:"space-between",width:"100%",padding:"10px",border: '2px solid #CCCCCC',borderRadius: '8px',marginTop:"10px"}} >
          <img style={icon_style} src={PhonePeLogo} alt="phonePe" onClick = {()=>handleUpiAppPayment('phonepe')} />
          <img  style={icon_style}   src={PaytmLogo} alt="paytm" onClick = {()=>handleUpiAppPayment('paytm')} />
          <img  style={icon_style}  src={GpayLogo} alt="Gpay" onClick = {()=>handleUpiAppPayment('gpay')} />
          </div>
      </div>
      <div className="user-form">
        <TransactionForm setAmount={setAmount} amount= {amount} />
      </div>
    </div>
  );
};

export default AddFunds;
