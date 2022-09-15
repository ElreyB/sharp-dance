import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
// import { Button } from "../Button";
// import { Input } from "../Input";
import { Form } from "../Form";
import { Label } from "../Label";

// const StyledInput = styled(Input).attrs({ size: "8", marginBottom: "S" })`
//   font-size: 16px;
//   background-color: ${({ theme }) => theme.colors.white};
//   border: 1px solid ${({ theme }) => theme.colors.black};
// `;

const StyledInput2 = styled.input`
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  height: 40px;
  width: 100%;
  padding-left: 12px;
`;

const StyledGrid = styled.div`
  background-color: black;
  width: 100%;
`;

// const StyledButton = styled(Button).attrs({
//   align: "center",
//   padding: "0",
//   margin: "0",
//   marginBottom: "S",
//   marginLeft: "0",
// })`
//   font-size: 16px;
//   background-color: ${({ theme }) => theme.colors.blue};
//   border: 1px solid ${({ theme }) => theme.colors.black};
// `;

const StyledButton2 = styled.button`
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  padding: 5px 25px;
`;

const StyledForm = styled(Form)``;

const HiddenWrapper = styled.div`
  position: absolute;
  left: -5000px;
`;

const StyledLabel = styled(Label)`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
`;

export function Mailchimp() {
  const [formData, setFormData] = useState({});

  const handleInput = (e) => {
    const copyFormData = { ...formData };
    copyFormData[e.target.name] = e.target.value;
    setFormData(copyFormData);
  };

  const { EMAIL } = formData;
  return (
    <StyledGrid>
      <StyledForm
        action="https://sharpdance.us2.list-manage.com/subscribe/post?u=43b5092106df2ef610d002684&amp;id=986bbed649&amp;f_id=006041e0f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        noValidate
        size="8"
      >
        <StyledLabel htmlFor="mce-EMAIL">Join our mailing list!</StyledLabel>
        <InputContainer>
          <StyledInput2
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
            <StyledInput2
              type="text"
              name="b_43b5092106df2ef610d002684_986bbed649"
              tabindex="-1"
              value=""
            />
          </HiddenWrapper>
          <StyledButton2
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
          >
            Subscribe
          </StyledButton2>
        </InputContainer>
      </StyledForm>
    </StyledGrid>
  );
}
