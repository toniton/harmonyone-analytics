import React from "react";
import styled from "styled-components";
import { MainLayout } from "../layout/main";
import {
  Section,
  Heading4,
  CardComponent,
  Badge,
  Heading6,
  Spacing,
  Body1,
} from "../styles/global";

const Filter = styled(CardComponent)`
  display: inline-flex;
  width: 100%;
  flex-direction: row;
  gap: 8px;
  padding: 15px;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 15px;
  ${CardComponent} {
    padding: 15px;
    margin: 0px;
  }
`;

const ProductImage = styled.div`
  background: #f3f3f3;
  width: 100%;
  height: 240px;
  border-radius: 15px;
`;

const DAppsPage = () => {
  return (
    <MainLayout>
      <Section>
        <Heading4>NFT Marketplace</Heading4>
        <Filter>
          <Badge>All</Badge>
          <Badge>Arts</Badge>
          <Badge>Celebrities</Badge>
          <Badge>Music</Badge>
          <Badge>Sports</Badge>
          <Badge>Gaming</Badge>
        </Filter>
        <ProductList>
          <CardComponent>
            <Spacing vertical gap="6px">
              <ProductImage />
              <Heading6>Kopor ke</Heading6>
              <Body1>56k Arts sold</Body1>
            </Spacing>
          </CardComponent>
          <CardComponent>
            <Spacing vertical gap="6px">
              <ProductImage />
              <Heading6>Kopor ke</Heading6>
              <Body1>56k Arts sold</Body1>
            </Spacing>
          </CardComponent>
          <CardComponent>
            <Spacing vertical gap="6px">
              <ProductImage />
              <Heading6>Kopor ke</Heading6>
              <Body1>56k Arts sold</Body1>
            </Spacing>
          </CardComponent>
          <CardComponent>
            <Spacing vertical gap="6px">
              <ProductImage />
              <Heading6>Kopor ke</Heading6>
              <Body1>56k Arts sold</Body1>
            </Spacing>
          </CardComponent>
          <CardComponent>
            <Spacing vertical gap="6px">
              <ProductImage />
              <Heading6>Kopor ke</Heading6>
              <Body1>56k Arts sold</Body1>
            </Spacing>
          </CardComponent>
          <CardComponent>
            <Spacing vertical gap="6px">
              <ProductImage />
              <Heading6>Kopor ke</Heading6>
              <Body1>56k Arts sold</Body1>
            </Spacing>
          </CardComponent>
        </ProductList>
      </Section>
    </MainLayout>
  );
};

export default DAppsPage;
