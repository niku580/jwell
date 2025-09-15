 const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  
  // -------------------------otp login----------------------------------------------
   function openOtpLoginModal() {
    document.getElementById('otpLoginModal').classList.remove('hidden');
  }

  function closeOtpLoginModal() {
    document.getElementById('otpLoginModal').classList.add('hidden');
    document.getElementById('otpSection').classList.add('hidden');
    document.getElementById('verifyOtpBtn').classList.add('hidden');
    document.getElementById('sendOtpBtn').classList.remove('hidden');
  }

  function sendOtp() {
    const phone = document.getElementById('phoneInput').value;
    if (!phone.match(/^[6-9]\d{9}$/)) {
      alert('Enter a valid 10-digit Indian phone number.');
      return;
    }

    // Simulate OTP sent
    alert('OTP sent to ' + phone);

    // Show OTP input
    document.getElementById('otpSection').classList.remove('hidden');
    document.getElementById('verifyOtpBtn').classList.remove('hidden');
    document.getElementById('sendOtpBtn').classList.add('hidden');
  }

  function verifyOtp(e) {
    e.preventDefault();
    const otp = document.getElementById('otpInput').value;

    // Dummy check
    if (otp === "123456") {
      alert("Login successful!");
      closeOtpLoginModal();
    } else {
      alert("Invalid OTP");
    }
  }

 