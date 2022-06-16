import { sampleSize } from "lodash-es";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { TICKETS } from "../../constants";
import { MediaContext, PagesContext } from "../../Providers";
import { FullPageVideo } from "../../styledGuide";
import { Footer } from "../../styledGuide/Footer";
import Loading from "../Loading";

const CustomPage = styled.div``;

const Main = styled.main`
  margin: 24px auto;
  padding: 0 48px;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.black};
  font-weight: 700;
  font-size: 18px;
  line-height: 36.57px;
  max-width: ${({ theme: { breakpoints } }) => breakpoints.lg};
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-top: 72px;
  margin-bottom: 96px;
`;
const Li = styled.li`
  list-style: none;
  display: flex;
  width: 25%;
`;
const AnchorButton = styled(NavLink)`
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors } }) => colors.black};
  text-decoration: none;
  padding: 20px 0;
  width: 100%;
  border: 1px solid white;
`;
const StyledA = styled.a`
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors } }) => colors.black};
  text-decoration: none;
  margin-top: 32px;
  padding: 10px 80px;
  width: 100%;
`;

const ImageSection = styled.section`
  display: flex;
  height: 250px;
  justify-content: center;
  background-color: ${({ theme: { colors } }) => colors.black};
`;
const BuyTicketsSection = styled.section`
  text-align: center;
  background-color: ${({ theme: { colors } }) => colors.primaryColors.sliver};
  color: ${({ theme: { colors } }) => colors.black};
  font-weight: 700;
  font-size: 16px;
  line-height: 36.57px;
  padding: 32px;
  margin-bottom: 64px;
`;
const SectionContent = styled.div`
  margin: 0 auto;
  max-width: ${({ theme: { breakpoints } }) => breakpoints.lg};
`;

export default function Home() {
  const { getPage } = React.useContext(PagesContext);
  const media = React.useContext(MediaContext);

  const page = getPage("home");

  if (!page) {
    return <Loading />;
  }

  const { options = {} } = page;
  const urls = sampleSize(
    media.flatMap(({ images }) => images).map(({ src }) => src),
    5
  );

  // https://vimeo.com/252107468

  return (
    <CustomPage>
      <FullPageVideo src={options.video} />
      <Main>
        <div>
          The mission of SHARP Dance Co. is to translate raw human emotion
          utilizing contemporary movement to connect the audience through
          individual interpretation. SHARP strives to foster ongoing artistic
          collaborations between innovative visual, literary and performing
          artists.
        </div>
        <Ul>
          <Li>
            <AnchorButton to="/about">Learn more</AnchorButton>
          </Li>
          <Li>
            <AnchorButton to="/press">Press Kit</AnchorButton>
          </Li>
          <Li>
            <AnchorButton to="/bios">Sharp Family</AnchorButton>
          </Li>
        </Ul>
      </Main>
      <ImageSection>
        {urls.map((src) => (
          <img alt="" key={src} src={src} />
        ))}
      </ImageSection>
      <BuyTicketsSection>
        <SectionContent>
          <p>Charity Performance for the Tree of Life Synagogue families</p>
          <p>
            Featuring SHARP repertory &amp;“669” the Story of Nicholas Winton
            who saved 669 children from the Holocaust.
          </p>
          <br />
          <p>
            The Hillman Center for the Performing Arts - 423 Fox Chapel Rd,
            Pittsburgh, PA 15238
          </p>
          <p>February, 16 8:00 PM</p>
          <br />
          <StyledA href={TICKETS}>Buy Tickets</StyledA>
        </SectionContent>
      </BuyTicketsSection>
      <Footer />
    </CustomPage>
  );
}
