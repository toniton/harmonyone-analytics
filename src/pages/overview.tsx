import React, { useContext, useEffect, useRef } from "react";
import { createChart, IChartApi } from "lightweight-charts";
import styled, { ThemeContext } from "styled-components";
import {
  Badge,
  Body1,
  CardComponent,
  FeaturedStats,
  Heading4,
  InfoItem,
  Section,
  Small1,
  Spacing,
} from "../styles/global";
import { MainLayout } from "../layout/main";

const GraphContainer = styled.div`
  width: 100%;
  margin-top: 15px;
  border-radius: 15px;
  flex-wrap: wrap;
`;

const OverviewPage = () => {
  let chartRef = useRef<IChartApi | null>(null);
  const performanceRef = useRef<HTMLDivElement>(null);
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    if (performanceRef.current && !chartRef.current) {
      chartRef.current = createChart(performanceRef.current, {
        height: 360,
        leftPriceScale: {
          scaleMargins: {
            top: 0.2,
            bottom: 0.2,
          },
          visible: true,
          borderVisible: false,
        },
        timeScale: {
          fixLeftEdge: true,
          rightOffset: 0,
          borderVisible: false,
        },
        rightPriceScale: {
          visible: false,
        },
        layout: {
          // backgroundColor: themeContext.graph.background,
          textColor: themeContext.graph.textolor,
        },
        grid: {
          horzLines: {
            color: "#ffffff",
          },
          vertLines: {
            color: "#ffffff",
          },
        },
        crosshair: {
          horzLine: {
            visible: false,
            labelVisible: false,
          },
          vertLine: {
            visible: true,
            style: 0,
            width: 2,
            color: "rgba(32, 38, 46, 0.1)",
            labelVisible: false,
          },
        },
      });
      const series = chartRef.current.addAreaSeries({
        lineColor: themeContext.graph.lineColor,
        lineWidth: 2,
      });
      series.setData([
        { time: "2019-04-1", value: 80.01 },
        { time: "2019-04-2", value: 96.63 },
        { time: "2019-04-3", value: 76.64 },
        { time: "2019-04-4", value: 81.89 },
        { time: "2019-04-5", value: 74.43 },
        { time: "2019-04-6", value: 80.01 },
        { time: "2019-04-7", value: 96.63 },
        { time: "2019-04-8", value: 76.64 },
        { time: "2019-04-9", value: 81.89 },
        { time: "2019-04-10", value: 74.43 },
        { time: "2019-04-11", value: 80.01 },
        { time: "2019-04-12", value: 96.63 },
        { time: "2019-04-13", value: 76.64 },
        { time: "2019-04-14", value: 81.89 },
        { time: "2019-04-15", value: 74.43 },
        { time: "2019-04-16", value: 80.01 },
        { time: "2019-04-17", value: 96.63 },
        { time: "2019-04-18", value: 76.64 },
        { time: "2019-04-19", value: 81.89 },
        { time: "2019-04-20", value: 74.43 },
      ]);
    }
  }, [chartRef, themeContext.graph]);

  return (
    <MainLayout>
      <Section>
        <Heading4>Overview</Heading4>
        <CardComponent>
          <Spacing>
            <Badge>Rank #34</Badge>
            <Body1>
              Harmony aims to build an open network of nodes operated and
              governed by a large community. This node community is called
              Pangaea. ‍ Are we decentralized yet? There’s no consensus without
              participation. There are now 1,000 Harmony nodes – so far 640 of
              them run by the community – in line with thousands of Bitcoin and
              Ethereum nodes. Pangaea consists of volunteers and validators from
              more than 100 countries and most of them have never run a node
              before.
            </Body1>
            <FeaturedStats>
              <InfoItem>
                <Small1>CURRENT PRICE</Small1>
                <Body1>$0.142</Body1>
              </InfoItem>
              <InfoItem>
                <Small1>MARKET CAP</Small1>
                <Body1>$1,160,532,332</Body1>
              </InfoItem>
              <InfoItem>
                <Small1>24HR VOLUME</Small1>
                <Body1>$103,128,808</Body1>
              </InfoItem>
            </FeaturedStats>
            <GraphContainer id="performance-graph" ref={performanceRef} />
          </Spacing>
        </CardComponent>
      </Section>
    </MainLayout>
  );
};

export default OverviewPage;
