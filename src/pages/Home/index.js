// import { sampleSize } from "lodash-es";
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
// import { INTENSIVE } from "../../constants";
import { PagesContext } from "../../Providers";
// import { FullPageVideo } from "../../styledGuide";
import Loading from "../Loading";
import { OrganizationsContext } from "../../Providers";
import { BIOS, ABOUT, CLASSES } from "../../constants";
import { PerformancesContext } from "../../Providers";
import { groupPerformancesByYear, olderYearsFirst } from "../../utils";
import { Schedule } from "../../styledGuide";

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

const Section = styled.section`
  background-color: ${({ theme: { colors } }) => colors.primaryColors.sliver};
  color: ${({ theme: { colors } }) => colors.black};
  font-weight: 700;
  font-size: 16px;
  line-height: 36.57px;
  margin: 40px auto;

  display: flex;
  justify-content: center;
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

// const ImageSide = styled(ShowMain)`
//   background-repeat: no-repeat;
//   background-size: cover;
//   height: 100%;
//   background-image: url(${({ imageUrl }) => imageUrl});
// `;

const ShowSection = styled(Main)`
  justify-content: space-evenly;
  align-items: center;

  ${({ theme }) => theme.media.desktop`
      flex-direction: row;
    `}/* min-width: ${({ theme: { breakpoints } }) => breakpoints.lg}; */
`;

const ImageSection = styled.section`
  display: flex;
  ${({ theme }) => theme.media.mobile`
      flex-wrap: wrap;
    `}
`;

const ImageContainer = styled.div`
  flex: 25%;
  ${({ theme }) => theme.media.mobile`
      flex: 50%;
    `}
`;

// const H3 = styled.h3`
//   text-align: center;
// `;

const StyledSchedule = styled(Schedule)`
  margin-bottom: ${({ theme: { spacing } }) => spacing.L};
`;

export default function Home() {
  const { getPage } = React.useContext(PagesContext);
  const { upcomingPerformances } = React.useContext(PerformancesContext);
  const orgs = React.useContext(OrganizationsContext);
  // const [isLoading, setLoading] = React.useState(true);

  const page = getPage("home");

  if (!page) {
    return <Loading />;
  }

  const { images } = page;
  const currentShowImg = images.filter(({ title }) => title === "current-show");
  const imageSection = images.filter(({ title }) => title !== "current-show");

  // const imageTitles = [
  //   "/images/669-Adj.png",
  //   "/images/Retreat-Adj.png",
  //   "/images/RICHRYAN-Kate-Adg.png",
  //   "/images/SEVENWINDOWS-Mig&Wren-ADJ.png",
  // ];

  const renderPerformances = ([year, perfs]) =>
    perfs.length > 0 && (
      <Fragment key={year}>
        {
          perfs.map((perf, i) => {
            return (
              <>
                <StyledSchedule
                  {...perf}
                  key={`${year}-${perf.name}-${i}`}
                  currentShow
                />
                <StyledA
                  href={perf.purchaseUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Buy Tickets
                </StyledA>
              </>
            );
          })[0]
        }
      </Fragment>
    );

  const upcomingShow = Object.entries(
    groupPerformancesByYear(upcomingPerformances)
  )
    .sort(olderYearsFirst)
    .map(renderPerformances)[0];

  console.log({ images, currentShowImg });

  return (
    <CustomPage>
      {/* {isLoading ? <Loading /> : null} */}
      {/* {options.video && (
        <FullPageVideo
          src={
            "https://www.youtube.com/embed/17JusykEp_E?controls=0&autoplay=1&mute=1&loop=1&playlist=17JusykEp_E"
          }
          onReady={() => {
            setLoading(false);
            console.log("Video ready to play!");
          }}
        />
      )} */}
      <iframe
        id="video"
        width="100%"
        height="800"
        src="https://www.youtube.com/embed/17JusykEp_E?controls=0&autoplay=1&mute=1&loop=1&playlist=17JusykEp_E"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Main>
        <div>
          The mission of SHARP Dance Company is to connect people and
          communities to raw human emotion by presenting story-driven movement
          that is inspired by socially conscious issues.
        </div>
        <Ul>
          <Li>
            <AnchorButton to={ABOUT}>Learn more</AnchorButton>
          </Li>
          <Li>
            <AnchorButton
              to={`${process.env.PUBLIC_URL}/press-kit.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Press Kit
            </AnchorButton>
          </Li>
          <Li>
            <AnchorButton to={BIOS}>SHARP Family</AnchorButton>
          </Li>
        </Ul>
      </Main>
      <ImageSection>
        {imageSection.map(({ src, title }) => (
          <ImageContainer key={title}>
            <img alt={title} src={src} width="100%" />
          </ImageContainer>
        ))}
        {/* {imageTitles.map((src) => (
          <ImageContainer key={src}>
            <img alt="dance" src={process.env.PUBLIC_URL + src} width="100%" />
          </ImageContainer>
        ))} */}
      </ImageSection>
      <Section>
        <ShowSection>
          <ShowMain>
            <img
              src={currentShowImg[0].src}
              width="100%"
              alt={currentShowImg[0].title}
            />
          </ShowMain>
          <ShowMain>{upcomingShow}</ShowMain>
        </ShowSection>
      </Section>
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

      <Section>
        <ShowSection>
          <ShowMain>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/sharp-dance.appspot.com/o/pages%2F4%2Fimage?alt=media&token=0e35446b-f65e-4ca6-8f33-7c10c074e8a1"
              width="100%"
              alt="sharp dance"
            />
          </ShowMain>
          <ShowMain>
            <p>Open Company Classes</p>
            <p>Mondays from 10am-11am</p>
            <br />
            <p>Equilibrium Dance Academy 1802 S. Broad Street</p>
            <br />
            <AnchorButton to={CLASSES}>See more</AnchorButton>
          </ShowMain>
        </ShowSection>
      </Section>
    </CustomPage>
  );
}
