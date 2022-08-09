import React from "react";
import styled from "styled-components/macro";
import { SocialIcons } from "..";
import { OrganizationsContext } from "../../Providers";

const DesktopSocialIcons = styled(SocialIcons)`
  display: block;
  margin: 64px auto;
  text-align: center;
  max-width: ${({ theme: { breakpoints } }) => breakpoints.lg};
`;

const StyledFooter = styled.footer`
  background-color: white;
  /* margin-bottom: 100px; */
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

export function Footer() {
  const orgs = React.useContext(OrganizationsContext);

  return (
    <>
      <DesktopSocialIcons />
      <StyledFooter>
        <StyledFooterContent>
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
      </StyledFooter>
    </>
  );
}
