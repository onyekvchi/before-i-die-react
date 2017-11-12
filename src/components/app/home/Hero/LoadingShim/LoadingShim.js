import React, { Component } from "react";
import { Shimmer, ShimmerWrap } from "./LoadingShim.styled";

export default class LoadingShim extends Component {
  render() {
    return (
      <ShimmerWrap>
        <Shimmer top={0} left={0} height={30} width={15} />
        <Shimmer top={45} left={0} height={60} width={100} />
        <Shimmer top={115} left={0} height={60} width={45} />
      </ShimmerWrap>
    );
  }
}
