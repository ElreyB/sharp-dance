import React, { useState } from "react";
import { P } from "../P";
import { Grid } from "gymnast";
import { Button } from "../Button";

export function MailingListForm() {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");

  const handleInput = e => {
    const copyFormData = { ...formData };
    copyFormData[e.target.name] = e.target.value;
    setFormData(copyFormData);
  };

  const sendData = async e => {
    e.preventDefault();
    const { fName, lName, email, address, city, state, zip } = formData;
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/elreyb/google_sheets/vKiwEROZjIPDwhSN?tabId=Sheet1",
        {
          method: "post",
          body: JSON.stringify([
            [fName, lName, email, address, city, state, zip]
          ]),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const json = await response.json();
      console.log("Success:", JSON.stringify(json));
      setMessage("Success");
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error");
    }
  };

  if (message) {
    return <P>{message}</P>;
  }

  return (
    <Grid>
      <form
        className="input-form"
        id="contact"
        name="contact"
        required
        onSubmit={sendData}
      >
        <Grid>
          <input
            name="fName"
            type="text"
            placeholder="First Name"
            required
            onChange={handleInput}
          />
        </Grid>
        <Grid>
          <input
            name="lName"
            type="text"
            placeholder="Last Name"
            required
            onChange={handleInput}
          />
        </Grid>
        <Grid>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            onChange={handleInput}
          />
        </Grid>
        <Grid>
          <input
            name="address"
            type="text"
            placeholder="Address"
            required
            onChange={handleInput}
          />
        </Grid>
        <Grid>
          <input
            name="city"
            type="text"
            placeholder="City"
            required
            onChange={handleInput}
          />
        </Grid>
        <Grid>
          <input
            name="state"
            type="text"
            placeholder="State"
            required
            onChange={handleInput}
          />
        </Grid>
        <Grid>
          <input
            name="zip"
            type="text"
            placeholder="Zip Code"
            required
            onChange={handleInput}
          />
        </Grid>
        <Button type="submit">Sumbit</Button>
      </form>
    </Grid>
  );
}
