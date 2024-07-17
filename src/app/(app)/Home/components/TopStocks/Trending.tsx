import React from "react";
import TopStocks from "./TopStocks";
import { Container, Saperator } from "./styles";

const Trending = () => {
  return (
    <Container>
      <TopStocks />
      <Saperator/>
      <TopStocks />
      <Saperator/>
      <TopStocks />
      <Saperator/>
      <TopStocks />
      <Saperator/>
      <TopStocks />
    </Container>
  );
};

export default Trending;
