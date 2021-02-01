import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { Grid, P } from "../../styledGuide";

const Form = styled.form`
  width: 100%;
`;

const Sentence = styled(P)`
  color: ${({ theme }) => theme.colors.blue};
`;

export const PaypayForm = ({ textAbove, textBelow }) => {
  return (
    <Grid margin="S 0">
      {textAbove && <Sentence>{textAbove}</Sentence>}
      <Grid>
        <Form
          target="paypal"
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
        >
          <Grid>
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="VJHTLFG2ZMY26"
            />
            <input type="hidden" name="on0" value="tickets" />
            <select
              name="os0"
              style={{ height: "25px", marginRight: "10px", fontSize: "16px" }}
            >
              <option value="General Admission">
                General Admission $25.00 USD
              </option>
              <option value="Discount Admission: Student / Senior / Artist">
                Discount Admission: Student / Senior / Artist $20.00 USD
              </option>
              <option value="Buy 3 General Admission Get one free">
                Buy 3 General Admission Get one free $75.00 USD
              </option>
            </select>
            <input type="hidden" name="currency_code" value="USD" />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
              border="0"
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </Grid>
        </Form>
      </Grid>
      {textBelow && <Sentence>{textBelow}</Sentence>}
    </Grid>
  );
};

PaypayForm.propTypes = {
  textAbove: PropTypes.string,
  textBelow: PropTypes.string,
};
