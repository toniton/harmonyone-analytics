import React from "react";
import styled from "styled-components";
import { MainLayout } from "../layout/main";
import {
  Section,
  Heading4,
  CardComponent,
  Heading6,
  Spacing,
  Body1,
  Small1,
  InfoItem,
  Stats,
  InfoImage,
} from "../styles/global";

const GridContainer = styled.div`
  display: grid;
  align-items: flex-start;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-wrap: @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(auto-fill, 1fr);
  }
`;
const GridItem = styled.div``;
const InfoSocial = styled.div``;

const SocialsPage = () => {
  return (
    <MainLayout>
      <Section>
        <Heading4>Social Media</Heading4>
        <CardComponent>
          <GridContainer>
            <GridItem>
              <Spacing horizontal gap="6px">
                <InfoImage small />
                <InfoSocial>
                  <Heading6>Facebook</Heading6>
                  <Stats>
                    <InfoItem>
                      <Small1>Followers</Small1>
                      <Body1>3,808</Body1>
                    </InfoItem>
                    <InfoItem>
                      <Small1>Following</Small1>
                      <Body1>103,128</Body1>
                    </InfoItem>
                  </Stats>
                </InfoSocial>
              </Spacing>
            </GridItem>
            <GridItem>
              <Spacing horizontal gap="6px">
                <InfoImage small />
                <InfoSocial>
                  <Heading6>Twitter</Heading6>
                  <Stats>
                    <InfoItem>
                      <Small1>Followers</Small1>
                      <Body1>3,808</Body1>
                    </InfoItem>
                    <InfoItem>
                      <Small1>Following</Small1>
                      <Body1>145,128</Body1>
                    </InfoItem>
                  </Stats>
                </InfoSocial>
              </Spacing>
            </GridItem>
            <GridItem>
              <Spacing horizontal gap="6px">
                <InfoImage small />
                <InfoSocial>
                  <Heading6>Instagram</Heading6>
                  <Stats>
                    <InfoItem>
                      <Small1>Followers</Small1>
                      <Body1>3,808</Body1>
                    </InfoItem>
                    <InfoItem>
                      <Small1>Following</Small1>
                      <Body1>103,128</Body1>
                    </InfoItem>
                  </Stats>
                </InfoSocial>
              </Spacing>
            </GridItem>
            <GridItem>
              <Spacing horizontal gap="6px">
                <InfoImage small />
                <InfoSocial>
                  <Heading6>Youtube</Heading6>
                  <Stats>
                    <InfoItem>
                      <Small1>Subscribers</Small1>
                      <Body1>3,808</Body1>
                    </InfoItem>
                    <InfoItem>
                      <Small1>Likes</Small1>
                      <Body1>128,808</Body1>
                    </InfoItem>
                  </Stats>
                </InfoSocial>
              </Spacing>
            </GridItem>
          </GridContainer>
        </CardComponent>
      </Section>
    </MainLayout>
  );
};

export default SocialsPage;
