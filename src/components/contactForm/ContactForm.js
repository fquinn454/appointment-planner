import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
    <label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Contact Name"
      />
    </label>
    <br />
    <label>
      <input
        type="tel"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        // regex is for UK mobile numbers
        pattern="[0][7-9]{2} [1-9][0-9]{7}"
        placeholder="Contact Phone (0## #######)"
      />
    </label>
    <br />
    <label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Contact Email"
      />
    </label>
    <br />
    <input type="submit" value="Add Contact" />
  </form>
  );
};

