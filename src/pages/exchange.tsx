import React from "react";
import styled from "styled-components";
import { MainLayout } from "../layout/main";
import {
  Section,
  Heading4,
  CardComponent,
  Heading6,
  Spacing,
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
const InfoSocial = styled.div``;

const ExchangePage = () => {
  return (
    <MainLayout>
      <Section>
        <Heading4>Exchange</Heading4>
        <CardComponent>
          <GridContainer>
            <GridItem>
              <Spacing horizontal gap="6px">
                <InfoImage small />
                <InfoSocial>
                  <Heading6>Binance</Heading6>
                </InfoSocial>
              </Spacing>
            </GridItem>
            <GridItem>
              <Spacing horizontal gap="6px">
                <InfoImage small />
                <InfoSocial>
                  <Heading6>Crypto.com</Heading6>
                </InfoSocial>
              </Spacing>
            </GridItem>
            <GridItem>
              <Spacing horizontal gap="6px">
                <InfoImage small />
                <InfoSocial>
                  <Heading6>Kucoin</Heading6>
                </InfoSocial>
              </Spacing>
            </GridItem>
            <GridItem>
              <Spacing horizontal gap="6px">
                <InfoImage small />
                <InfoSocial>
                  <Heading6>Gate.io</Heading6>
                </InfoSocial>
              </Spacing>
            </GridItem>
            <GridItem>
              <Spacing horizontal gap="6px">
                <InfoImage small />
                <InfoSocial>
                  <Heading6>Bitmax</Heading6>
                </InfoSocial>
              </Spacing>
            </GridItem>
          </GridContainer>
        </CardComponent>
      </Section>
    </MainLayout>
  );
};

export default ExchangePage;
