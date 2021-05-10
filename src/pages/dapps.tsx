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
} from "../styles/global";

const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 15px;
`;

const ProductImage = styled.div`
  background: #f3f3f3;
  width: 100%;
  height: 240px;
  border-radius: 15px;
`;

const NFTMarketplacePage = () => {
  return (
    <MainLayout>
      <Section>
        <Heading4>
          DApps <Small1>(Decentralized Applications)</Small1>
        </Heading4>
        <CardComponent>
          <ProductList>
            <li>
              <Spacing vertical gap="6px">
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
            </li>
            <li>
              <Spacing vertical gap="6px">
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
            </li>
            <li>
              <Spacing vertical gap="6px">
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
            </li>
            <li>
              <Spacing vertical gap="6px">
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
            </li>
            <li>
              <Spacing vertical gap="6px">
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
            </li>
            <li>
              <Spacing vertical gap="6px">
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
            </li>
          </ProductList>
        </CardComponent>
      </Section>
    </MainLayout>
  );
};

export default NFTMarketplacePage;
