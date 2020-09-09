import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import { P } from "../P";
import { Button } from "../Button";
import { Input } from "../Input";
import { Form } from "../Form";
import { Label } from "../Label";
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
  border: 2px solid ${({ theme }) => theme.colors.black};
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

const MailChimp = styled.div`
  background-color: #fff;
  clear: left;
  font: 14px Helvetica, Arial, sans-serif;
`;

const HiddenWrapper = styled.div`
  position: absolute;
  left: -5000px;
`;

const StyledLabel = styled(Label).attrs({ margin: "S" })`
  color: ${({ theme }) => theme.colors.white};
`;

export function MailingListForm() {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    const copyFormData = { ...formData };
    copyFormData[e.target.name] = e.target.value;
    setFormData(copyFormData);
  };

  const sendData = async (e) => {
    e.preventDefault();
    const { fName, lName, email, address, city, state, zip } = formData;
    try {
      const response = await fetch(
        `https://v1.nocodeapi.com/elreyb/google_sheets/${process.env.REACT_APP_SHEET_ID}`,
        {
          method: "post",
          body: JSON.stringify([
            [fName, lName, email, address, city, state, zip],
          ]),
          headers: {
            "Content-Type": "application/json",
          },
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
    return <Message padding="S">{message}</Message>;
  }
  const { EMAIL } = formData;
  return (
    <StyledGrid paddingTop="L">
      <MailChimp>
        <StyledForm
          action="https://gmail.us4.list-manage.com/subscribe/post?u=364f26570f2fb7eb199685aae&amp;id=0217eb61c3"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <StyledGrid>
            <StyledLabel htmlFor="mce-EMAIL">
              Join our mailing list!
            </StyledLabel>
            <StyledInput
              type="email"
              value={EMAIL}
              name="EMAIL"
              className="email"
              id="mce-EMAIL"
              placeholder="email address"
              required
              onChange={handleInput}
            />
            {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
            <HiddenWrapper aria-hidden="true">
              <StyledInput
                type="text"
                name="b_364f26570f2fb7eb199685aae_0217eb61c3"
                tabindex="-1"
                value=""
              />
            </HiddenWrapper>
            <StyledButton
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            >
              Subscribe
            </StyledButton>
          </StyledGrid>
        </StyledForm>
      </MailChimp>
    </StyledGrid>
  );
}
