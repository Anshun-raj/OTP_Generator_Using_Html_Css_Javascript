function generateOtp() {
  let otpLen = 6;

  const otp = Math.floor(Math.random() * Math.pow(10, otpLen));

  document.getElementById("txt").innerText = otp;
}



document.getElementById("btn").addEventListener("click", generateOtp);
