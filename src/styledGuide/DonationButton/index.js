import React from "react";

/**TODO: replace with Diane's paypal donation button */

export const DonationButton = () => {
  return (
    <div size="fit" justify="center">
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_blank"
      >
        <div>
          <input type="hidden" name="cmd" value="_s-xclick" />
        </div>
        <div>
          <input type="hidden" name="hosted_button_id" value="BD6MEHQFPGX2S" />
        </div>
        <div>
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
        </div>
        <div>
          <img
            alt="Donatation button"
            border="0"
            src="https://www.paypal.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </div>
      </form>
    </div>
  );
};
