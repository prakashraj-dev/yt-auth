export function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

export function getOtpHtml(otp) {
    return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>OTP</title></head>
<body style="font-family:Arial,sans-serif;text-align:center;padding:40px;">
    <div style="background:#fff;padding:20px;border-radius:8px;display:inline-block;box-shadow:0 0 10px rgba(0,0,0,0.1)">
        <h2>Your OTP Code</h2>
        <p style="font-size:28px;font-weight:bold;color:#333">${otp}</p>
        <p>Use this code to verify your email address.</p>
    </div>
</body>
</html>`;
}