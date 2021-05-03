import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<any>`
    :root {
        --h1: 4.63vw;
        --h2: 4.8rem;
        --h3: 3.8rem;
        --h4: 2.2rem;
        --h5: 1.8rem;
        --h6: 1.6rem;
        --regular: 1.5rem;
    }

    body, html {
        height: 100%;
        overflow-x: hidden;
        position: relative;
        scroll-behavior: smooth;
    }
    
    body {
        margin: 0;
        padding: 0;
        background: ${(props) => props.theme.body.background};
        font-family: Open-Sans, Helvetica, Sans-Serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        min-height: 100%;
        width: 100vw;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        border: none;
        outline: none;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

`;

export const Section = styled.div`
  margin: 0px 30px;
`;

export const Spacing = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Badge = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 15px;
  border-radius: 15px;
  flex: none;
  font-size: 12px;
  background: ${(props) => props.theme.badge.background};
  color: ${(props) => props.theme.badge.color};
`;

export const CardComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  position: static;
  left: 0px;
  top: 0px;
  background: ${(props) => props.theme.card.background};
  box-shadow: 0px 23px 44px rgba(176, 183, 195, 0.14);
  border-radius: 15px;
  margin: 15px 0px;
`;

export const Heading6 = styled.h6`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: ${(props) => props.theme.typography.color};
`;

export const Body1 = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${(props) => props.theme.typography.color};
`;

export const Small1 = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: ${(props) => props.theme.typography.secondary};
`;

export const FeaturedStats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 15px 30px;
  background: #fafbfc;
  border-radius: 12px;
  width: 100%;
  flex-grow: 1;
  background: ${(props) => props.theme.card.featBackground};
  color: ${(props) => props.theme.typography.color};
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;
