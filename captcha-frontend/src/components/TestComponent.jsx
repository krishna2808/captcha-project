	import React from 'react';
import { isMobile } from 'react-device-detect';

function TestComponent() {
  const openPhonePe = () => {
const merchantId = 'mab0450400a0162083@yesbank'; // Replace with your actual merchant ID
    const merchantName = 'Shop'; // Replace with your merchant name
    const amount = 398; // Replace with your desired amount
    const transactionId = 'H2MkMGf5olejI'; // Replace with your transaction ID
    const currency = 'INR'; // Replace with your currency code
    const note = 'shop'; // Replace with your transaction note
    const purpose = '00';
    let url = ''
    //let url = `https://phon.pe/${merchantId}?amount=${amount}`;
    //let url = 'phonepe://pay?pa=merchant1606034.augp@aubank&pn=Shop&am=398&tr=H2MkMGf5olejI&mc=8931&cu=INR&tn=shop'
    //let url = 'tez://upi/pay?pa=merchant1606034.augp@aubank&pn=Shop&purpose=00&am=398'

    // If the user is on a mobile device, attempt to open the PhonePe app
    if (isMobile) {
        // url = `phonepe://pay?pa=${merchantId}&pn=${merchantName}&am=${amount}&tr=${transactionId}&mc=8931&cu=${currency}&tn=${note}`;
      url = `tez://upi/pay?pa=${merchantId}&pn=${merchantName}&purpose=${purpose}&am=${amount}`;

    }

    window.location.href = url;
  };

  return (
    <div>
      <button onClick={openPhonePe}>Open PhonePe</button>
    </div>
  );
}

export { TestComponent};
