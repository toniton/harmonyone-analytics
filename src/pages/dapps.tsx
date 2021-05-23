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

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const GridItem = styled.div``;

const DappsPage = () => {
  return (
    <MainLayout>
      <Section>
        <Heading4>
          DApps <Small1>(Decentralized Applications)</Small1>
        </Heading4>
        <CardComponent>
          <GridContainer>
            <GridItem>
              <Spacing vertical gap="6px">
                <InfoImage />
                <Heading6>Polymarket</Heading6>
                <Body1>Bet on outcomes. Trade on information markets.</Body1>
                <Stats>
                  <InfoItem>
                    <Small1>DEPLOYS</Small1>
                    <Body1>3,808</Body1>
                  </InfoItem>
                  <InfoItem>
                    <Small1>TRANSACTIONS</Small1>
                    <Body1>$103,128,808</Body1>
                  </InfoItem>
                  <InfoItem>
                    <Small1>ACCOUNTS</Small1>
                    <Body1>1808</Body1>
                  </InfoItem>
                </Stats>
              </Spacing>
            </GridItem>
            <GridItem>
              <Spacing vertical gap="6px">
                <InfoImage />
                <Heading6>Polymarket</Heading6>
                <Body1>Bet on outcomes. Trade on information markets.</Body1>
                <Stats>
                  <InfoItem>
                    <Small1>DEPLOYS</Small1>
                    <Body1>3,808</Body1>
                  </InfoItem>
                  <InfoItem>
                    <Small1>TRANSACTIONS</Small1>
                    <Body1>$103,128,808</Body1>
                  </InfoItem>
                  <InfoItem>
                    <Small1>ACCOUNTS</Small1>
                    <Body1>1808</Body1>
                  </InfoItem>
                </Stats>
              </Spacing>
            </GridItem>
            <GridItem>
              <Spacing vertical gap="6px">
                <InfoImage />
                <Heading6>Polymarket</Heading6>
                <Body1>Bet on outcomes. Trade on information markets.</Body1>
                <Stats>
                  <InfoItem>
                    <Small1>DEPLOYS</Small1>
                    <Body1>3,808</Body1>
                  </InfoItem>
                  <InfoItem>
                    <Small1>TRANSACTIONS</Small1>
                    <Body1>$103,128,808</Body1>
                  </InfoItem>
                  <InfoItem>
                    <Small1>ACCOUNTS</Small1>
                    <Body1>1808</Body1>
                  </InfoItem>
                </Stats>
              </Spacing>
            </GridItem>
            <GridItem>
              <Spacing vertical gap="6px">
                <InfoImage />
                <Heading6>Polymarket</Heading6>
                <Body1>Bet on outcomes. Trade on information markets.</Body1>
                <Stats>
                  <InfoItem>
                    <Small1>DEPLOYS</Small1>
                    <Body1>3,808</Body1>
                  </InfoItem>
                  <InfoItem>
                    <Small1>TRANSACTIONS</Small1>
                    <Body1>$103,128,808</Body1>
                  </InfoItem>
                  <InfoItem>
                    <Small1>ACCOUNTS</Small1>
                    <Body1>1808</Body1>
                  </InfoItem>
                </Stats>
              </Spacing>
            </GridItem>
            <GridItem>
              <Spacing vertical gap="6px">
                <InfoImage />
                <Heading6>Polymarket</Heading6>
                <Body1>Bet on outcomes. Trade on information markets.</Body1>
                <Stats>
                  <InfoItem>
                    <Small1>DEPLOYS</Small1>
                    <Body1>3,808</Body1>
                  </InfoItem>
                  <InfoItem>
                    <Small1>TRANSACTIONS</Small1>
                    <Body1>$103,128,808</Body1>
                  </InfoItem>
                  <InfoItem>
                    <Small1>ACCOUNTS</Small1>
                    <Body1>1808</Body1>
                  </InfoItem>
                </Stats>
              </Spacing>
            </GridItem>
            <GridItem>
              <Spacing vertical gap="6px">
                <InfoImage />
                <Heading6>Polymarket</Heading6>
                <Body1>Bet on outcomes. Trade on information markets.</Body1>
                <Stats>
                  <InfoItem>
                    <Small1>DEPLOYS</Small1>
                    <Body1>3,808</Body1>
                  </InfoItem>
                  <InfoItem>
                    <Small1>TRANSACTIONS</Small1>
                    <Body1>$103,128,808</Body1>
                  </InfoItem>
                  <InfoItem>
                    <Small1>ACCOUNTS</Small1>
                    <Body1>1808</Body1>
                  </InfoItem>
                </Stats>
              </Spacing>
            </GridItem>
          </GridContainer>
        </CardComponent>
      </Section>
    </MainLayout>
  );
};

export default DappsPage;
