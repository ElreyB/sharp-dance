import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import { Button } from "../Button";
import { Input } from "../Input";
import { Form } from "../Form";
import { Label } from "../Label";
import { Grid } from "gymnast";

const whiteBorders = css`
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.white};
`;

const StyledInput = styled(Input).attrs({ size: "8", marginBottom: "S" })`
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

const StyledGrid = styled(Grid).attrs({})`
  background-color: black;
`;

const StyledButton = styled(Button).attrs({
  align: "center",
  padding: "0",
  margin: "0",
  marginBottom: "S",
  marginLeft: "0",
})`
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.blue};
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

const StyledForm = styled(Form)`
  ${whiteBorders};
`;

const HiddenWrapper = styled.div`
  position: absolute;
  left: -5000px;
`;

const StyledLabel = styled(Label).attrs({ margin: "S" })`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export function MailingListForm() {
  const [formData, setFormData] = useState({});

  const handleInput = (e) => {
    const copyFormData = { ...formData };
    copyFormData[e.target.name] = e.target.value;
    setFormData(copyFormData);
  };

  const { EMAIL } = formData;
  return (
    <StyledGrid paddingTop="L" justify="center">
      <StyledForm
        action="https://gmail.us4.list-manage.com/subscribe/post?u=364f26570f2fb7eb199685aae&amp;id=0217eb61c3"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
        size="8"
      >
        <StyledGrid>
          <StyledLabel htmlFor="mce-EMAIL" justify="center" margin="0">
            Join our mailing list!
          </StyledLabel>
          <StyledGrid justify="center">
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
        </StyledGrid>
      </StyledForm>
    </StyledGrid>
  );
}
