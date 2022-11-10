// import { sampleSize } from "lodash-es";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
// import { TICKETS } from "../../constants";
import { PagesContext } from "../../Providers";
import { FullPageVideo } from "../../styledGuide";
import Loading from "../Loading";
import { OrganizationsContext } from "../../Providers";
import { BIOS, ABOUT, PRESS } from "../../constants";

const CustomPage = styled.div``;

const Main = styled.main`
  margin: 40px auto;
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

const BuyTicketsSection = styled.section`
  /* max-width: ${({ theme: { breakpoints } }) => breakpoints.lg}; */
  text-align: center;
  background-color: ${({ theme: { colors } }) => colors.primaryColors.sliver};
  color: ${({ theme: { colors } }) => colors.black};
  font-weight: 700;
  font-size: 16px;
  line-height: 36.57px;
  margin: 40px auto;
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

const SponserSection = styled.div`
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
  flex-basis: 50%;
`;

const ImageSide = styled(ShowMain)`
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  background-image: url(${({ imageUrl }) => imageUrl});
`;

const ShowSection = styled.section`
  border: 5px solid black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* min-width: ${({ theme: { breakpoints } }) => breakpoints.lg}; */
`;

const ImageSection = styled.section`
  display: flex;
  /* justify-content: space-between;
  overflow: hidden;
  height: 400px;
  background-color: ${({ theme: { colors } }) => colors.black}; */
`;

const ImageContainer = styled.div`
  flex: 25%;
`;

export default function Home() {
  const { getPage } = React.useContext(PagesContext);
  // const media = React.useContext(MediaContext);
  const orgs = React.useContext(OrganizationsContext);

  const page = getPage("home");

  if (!page) {
    return <Loading />;
  }

  const { options = {} } = page;
  // const urls = sampleSize(
  //   media.flatMap(({ images }) => images).map(({ src }) => src),
  //   50
  // );

  const imageTitles = [
    "/images/669-Adj.png",
    "/images/Retreat-Adj.png",
    "/images/RICHRYAN-Kate-Adg.png",
    "/images/SEVENWINDOWS-Mig&Wren-ADJ.png",
  ];
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
            <AnchorButton to={ABOUT}>Learn more</AnchorButton>
          </Li>
          <Li>
            <AnchorButton to={PRESS}>Press Kit</AnchorButton>
          </Li>
          <Li>
            <AnchorButton to={BIOS}>SHARP Family</AnchorButton>
          </Li>
        </Ul>
      </Main>
      <ImageSection>
        {imageTitles.map((src) => (
          <ImageContainer key={src}>
            <img alt="dance" src={process.env.PUBLIC_URL + src} width="100%" />
          </ImageContainer>
        ))}
      </ImageSection>
      <BuyTicketsSection>
        <ShowSection>
          <ShowMain>
            <p>SHARP home fall show</p>
            <p>20 N. American St Philadelphia, PA 19106</p>
            <p>Friday November 11 8 PM</p>
            <p>Saturday November 12 8 PM</p>
            <p>Sunday November 13 8 PM</p>
            <br />
            <StyledA
              href="https://christchurchphila.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Buy Tickets
            </StyledA>
          </ShowMain>
          <ShowMain>
            <img
              src={process.env.PUBLIC_URL + "/images/stories-fall-show.jpeg"}
              width="100%"
              alt="sharp dance"
            />
          </ShowMain>
        </ShowSection>
      </BuyTicketsSection>
      <SponserSection>
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
      </SponserSection>

      <BuyTicketsSection>
        <ShowSection>
          <ShowMain>
            <p>Open Company Classes</p>
            <p>Mondays from 6pm-7pm</p>
            <br />
            <p>Equilibrium Dance Academy 1802 S. Broad Street</p>
            <br />
            <AnchorButton to="/classes">See more</AnchorButton>
          </ShowMain>
          <ShowMain>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/sharp-dance.appspot.com/o/pages%2F4%2Fimage?alt=media&token=0e35446b-f65e-4ca6-8f33-7c10c074e8a1"
              width="100%"
              alt="sharp dance"
            />
          </ShowMain>
          {/* <ImageSide imageUrl="https://firebasestorage.googleapis.com/v0/b/sharp-dance.appspot.com/o/pages%2F4%2Fimage?alt=media&token=0e35446b-f65e-4ca6-8f33-7c10c074e8a1" /> */}
        </ShowSection>
      </BuyTicketsSection>
    </CustomPage>
  );
}
