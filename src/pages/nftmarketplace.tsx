import React from "react";
import styled from "styled-components";
import {
  Section,
  Heading4,
  CardComponent,
  Badge,
  Heading6,
  Spacing,
} from "../styles/global";

const Filter = styled.div`
  display: inline-flex;
  gap: 8px;
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

export const NFTMarketplacePage = () => {
  return (
    <Section>
      <Heading4>NFT Marketplace</Heading4>
      <CardComponent>
        <Filter>
          <Badge>All</Badge>
          <Badge>Arts</Badge>
          <Badge>Celebrities</Badge>
          <Badge>Music</Badge>
          <Badge>Sports</Badge>
          <Badge>Gaming</Badge>
        </Filter>
      </CardComponent>
      <ProductList>
        <CardComponent>
          <Spacing>
            <ProductImage />
            <Heading6>Kopor ke</Heading6>
          </Spacing>
        </CardComponent>
        <CardComponent>
          <Spacing>
            <ProductImage />
            <Heading6>Kopor ke</Heading6>
          </Spacing>
        </CardComponent>
        <CardComponent>
          <Spacing>
            <ProductImage />
            <Heading6>Kopor ke</Heading6>
          </Spacing>
        </CardComponent>
        <CardComponent>
          <Spacing>
            <ProductImage />
            <Heading6>Kopor ke</Heading6>
          </Spacing>
        </CardComponent>
        <CardComponent>
          <Spacing>
            <ProductImage />
            <Heading6>Kopor ke</Heading6>
          </Spacing>
        </CardComponent>
        <CardComponent>
          <Spacing>
            <ProductImage />
            <Heading6>Kopor ke</Heading6>
          </Spacing>
        </CardComponent>
      </ProductList>
    </Section>
  );
};
