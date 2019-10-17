import React from "react";
import { Grid } from "gymnast";

/**TODO: replace with Diane's paypal donation button */

export const DonationButton = () => {
  return (
    <Grid size="fit" justify="center">
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_blank"
      >
        <Grid>
          <input type="hidden" name="cmd" value="_s-xclick" />
        </Grid>
        <Grid>
          <input type="hidden" name="hosted_button_id" value="BD6MEHQFPGX2S" />
        </Grid>
        <Grid>
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
        </Grid>
        <Grid>
          <img
            alt="Donatation button"
            border="0"
            src="https://www.paypal.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </Grid>
      </form>
    </Grid>
  );
};
