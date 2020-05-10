import React, { useState } from "react";
import styled, {css} from "styled-components";
import { P } from "../P";
import { Button } from "../Button";
import { Input } from "../Input";
import { Form } from "../Form";
import { Grid } from "gymnast";

const whiteBorders = css`
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.white};
`;

const StyledP = styled(P)`
  justify-content: center;
`;

const StyledInput = styled(Input).attrs({ padding: "S" })`
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledGrid = styled(Grid).attrs({})`
  background-color: black;
`;

const StyledButton = styled(Button)`
  font-size: 16px;
  justify-content: center;
  line-height: 30px;
  background-color: ${({ theme }) => theme.colors.blue};
  border: 1px solid ${({ theme }) => theme.colors.blue};
`;

const StyledForm = styled(Form)`
  ${whiteBorders};
`;

const Message = styled(P)`
  margin-top: 20px;
  justify-content: center;
`;

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
        `https://v1.nocodeapi.com/elreyb/google_sheets/${process.env.REACT_APP_SHEET_ID}`,
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
      setMessage("Thank you for joining our mailing list!");
    } catch (error) {
      console.error("Error:", error);


      setMessage("Error");
    }
  };

  if (message) {
    return(
      <Message padding="S">{message}</Message>
    );
  }

  return (
    <Grid paddingTop="L">
      <StyledForm
        id="contact"
        name="contact"
        required
        onSubmit={sendData}
        padding="M"
      >
        <StyledP>Fill out the form below to Join our mailing list!</StyledP>
        <StyledGrid>
          <StyledGrid size={{default: 6, mobile: 12}} margin="M">
            <StyledInput
              name="fName"
              type="text"
              placeholder="First Name"
              required
              onChange={handleInput}
            />
          </StyledGrid>
          <StyledGrid size={{default: 6, mobile: 12}} margin="M">
            <StyledInput
              name="lName"
              type="text"
              placeholder="Last Name"
              required
              onChange={handleInput}
            />
          </StyledGrid>
        </StyledGrid>
        <StyledGrid margin="M">
          <StyledInput
            name="email"
            type="email"
            placeholder="Email"
            required
            onChange={handleInput}
          />
        </StyledGrid>
        <StyledGrid margin="M">
          <StyledInput
            name="address"
            type="text"
            placeholder="Address"
            required
            onChange={handleInput}
          />
        </StyledGrid>

        <StyledGrid>
          <StyledGrid size={{default: 4, mobile: 12}} margin="M">
            <StyledInput
              name="city"
              type="text"
              placeholder="City"
              required
              onChange={handleInput}
            />
          </StyledGrid>
          <StyledGrid size={{default: 4, mobile: 12}} margin="M">
            <StyledInput
              name="state"
              type="text"
              placeholder="State"
              required
              onChange={handleInput}
            />
          </StyledGrid>
          <StyledGrid size={{default: 4, mobile: 12}} margin="M">
            <StyledInput
              name="zip"
              type="text"
              placeholder="Zip Code"
              required
              onChange={handleInput}
            />
          </StyledGrid>
        </StyledGrid>

        <StyledButton type="submit" size="fill">
          Join Mailing List
        </StyledButton>
      </StyledForm>
    </Grid>
  );
}
