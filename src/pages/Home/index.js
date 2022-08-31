import { sampleSize } from "lodash-es";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
// import { TICKETS } from "../../constants";
import { MediaContext, PagesContext } from "../../Providers";
import { FullPageVideo } from "../../styledGuide";
// import { Footer } from "../../styledGuide/Footer";
import Loading from "../Loading";
import { OrganizationsContext } from "../../Providers";

const CustomPage = styled.div``;

const Main = styled.main`
  margin: 24px auto;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.black};
  font-weight: 700;
  font-size: 18px;
  line-height: 36.57px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  border: 5px solid black;
  max-width: ${({ theme: { breakpoints } }) => breakpoints.lg};

  ${({ theme }) => theme.media.mobile`
       max-width: ${({ theme: { breakpoints } }) => breakpoints.md};
        border: none;
    `}
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-top: 72px;
  padding: 0;
`;
const Li = styled.li`
  list-style: none;
  display: flex;
`;
const AnchorButton = styled(NavLink)`
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors } }) => colors.black};
  text-decoration: none;
  padding: 5px 10px;
  width: 100%;
  border: 1px solid white;
  text-transform: uppercase;
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
  justify-content: space-between;
  overflow: hidden;
  height: 400px;
  background-color: ${({ theme: { colors } }) => colors.black};
`;
const BuyTicketsSection = styled.section`
  max-width: ${({ theme: { breakpoints } }) => breakpoints.lg};
  text-align: center;
  background-color: ${({ theme: { colors } }) => colors.primaryColors.sliver};
  color: ${({ theme: { colors } }) => colors.black};
  font-weight: 700;
  font-size: 16px;
  line-height: 36.57px;
  margin: 24px auto;
  /* padding: 32px; */
  /* margin-bottom: 64px;
  border: 5px solid;
  padding: 48px; */
  display: flex;
  /* flex-direction: column;
  justify-content: center;
  align-items: stretch; */
`;
// const SectionContent = styled.div`
//   margin: 0 auto;
//   min-width: ${({ theme: { breakpoints } }) => breakpoints.lg};
//   border: 5px solid;
//   padding: 48px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: stretch;
//   flex-shrink: 1;
// `;
const SponserTitle = styled.h2`
  text-align: center;
`;

const StyledFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-content: start;
  margin: 0;
  width: 100%;
`;

const StyledImage = styled.div`
  margin: 8px;
  background-size: contain;
  width: 200px;
  height: 200px;
  background-repeat: no-repeat;
  background-position: center;
`;
const StyledSponsors = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ShowMain = styled(Main)`
  border: 0;
`;

const ShowSection = styled.section`
  border: 5px solid black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: ${({ theme: { breakpoints } }) => breakpoints.lg};
`;

export default function Home() {
  const { getPage } = React.useContext(PagesContext);
  const media = React.useContext(MediaContext);
  const orgs = React.useContext(OrganizationsContext);

  const page = getPage("home");

  if (!page) {
    return <Loading />;
  }

  const { options = {} } = page;
  const urls = sampleSize(
    media.flatMap(({ images }) => images).map(({ src }) => src),
    50
  );

  // https://vimeo.com/252107468

  return (
    <CustomPage>
      {!options.video ? <Loading /> : <FullPageVideo src={options.video} />}
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
      <div>
        <ImageSection>
          {urls.map((src) => (
            <img alt="" key={src} src={src} />
          ))}
        </ImageSection>
      </div>
      <BuyTicketsSection>
        <ShowSection>
          <ShowMain>
            <p>Rochester Fringe Festival</p>
            <p>
              S.O.T.A.- School of the Arts 25 Prince Street Rochester, N.Y.
              14607
            </p>
            <p>Friday September 16 8:30 PM</p>
            <p>Sunday September 18 7:30 PM</p>
            <br />
            <StyledA
              href="https://www.rochesterfringe.com/tickets-and-shows/a-tie-that-binds"
              rel="noopener noreferrer"
              target="_blank"
            >
              Buy Tickets
            </StyledA>
          </ShowMain>
          <img
            src={process.env.PUBLIC_URL + "/images/rochesterfringe.jpeg"}
            width="50%"
            alt="sharp dance"
          />
        </ShowSection>
      </BuyTicketsSection>
      <StyledFooterContent>
        <SponserTitle>Affiliates and Donors</SponserTitle>
        <StyledSponsors>
          {orgs.map((org) => (
            <StyledImage
              key={org.id}
              alt={org.organization}
              style={{ backgroundImage: `url("${org.logo.src}")` }}
            />
          ))}
        </StyledSponsors>
      </StyledFooterContent>

      <BuyTicketsSection>
        <ShowSection>
          <ShowMain>
            <p>Open Company Classes</p>
            <p>Mondays from 6pm-7pm</p>
            <br />
            <p>Equilibrium Dance Academy 1802 S. Broad Street</p>
            <br />
          </ShowMain>
          <img
            src={process.env.PUBLIC_URL + "/images/black-logo-name.svg"}
            height="50%"
            alt="sharp dance"
          />
        </ShowSection>
      </BuyTicketsSection>

      {/* <Footer /> */}
    </CustomPage>
  );
}
