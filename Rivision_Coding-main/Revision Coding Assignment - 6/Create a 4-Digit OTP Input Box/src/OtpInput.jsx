
import React, { useRef, useState } from 'react';
import './OtpInput.css';

const OtpInput = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "") {
        if (inputsRef.current[index - 1]) {
          inputsRef.current[index - 1].focus();
        }
      } else {
        setOtp([...otp.map((d, idx) => (idx === index ? "" : d))]);
      }
    }
  };

  const handlePaste = (e) => {
    const value = e.clipboardData.getData("text");
    if (isNaN(value) || value.length !== 4) return;
    const newOtp = value.split("");
    setOtp(newOtp);
    inputsRef.current[3].focus();
  };

  return (
    <div className="otp-container">
      <p>OTP</p>
      <div className="otp-inputs">
        {otp.map((data, index) => {
          return (
            <input
              className="otp-input"
              type="text"
              name="otp"
              maxLength="1"
              key={index}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={index === 0 ? handlePaste : null}
              ref={(el) => (inputsRef.current[index] = el)}
            />
          );
        })}
      </div>
      <div className="otp-buttons">
        <button className="otp-button clear" onClick={() => setOtp(new Array(4).fill(""))}>
          Clear OTP
        </button>
        <button className="otp-button verify" onClick={() => alert("OTP Verified!")}>
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default OtpInput;
