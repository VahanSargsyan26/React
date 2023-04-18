import { useState } from "react";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    setIsValidEmail(pattern.test(inputEmail));
  };

  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
      {!isValidEmail && (
        <p style={{ color: "red" }}>Please enter a valid email address</p>
      )}
    </div>
  );
};

export default EmailForm;
