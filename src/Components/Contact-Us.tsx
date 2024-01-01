import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function ContactUs() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");


  const history = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    history("/home");
  };

  return (
    <div>
      <div className="col-6">
        <div className="m-3">
          <TextField
            label="Name"
            autoComplete="off"
            fullWidth
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="m-3">
          <TextField
            label="Mobile"
            autoComplete="off"
            fullWidth
            type="mobile"
            placeholder="Enter Mobile"
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="m-3">
          <TextField
            label="Email"
            autoComplete="off"
            fullWidth
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="m-3">
          <TextField
            label="Message"
            autoComplete="off"
            type="text"
            fullWidth
            placeholder="About us"
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>
        <div>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
