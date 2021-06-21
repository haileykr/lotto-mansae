import React, { Component } from "react";

import LottoRandomHeader from "./lotto/LottoRandomHeader";
import LottoRandomContent from "./lotto/LottoRandomContent";

import styled from "styled-components";


const LottoRandomTemplateBox = styled.div`
  margin: auto;
  width: auto;
  min-height: 100vh;
`;

const LottoRandomMain = styled.div`
  width: auto;

  .side {
    display: flex;
  }
`;

class LottoRandomTemplate extends Component {

  render() {
    return (
      <LottoRandomTemplateBox>
        <LottoRandomHeader />

        <LottoRandomMain>
          <h1> Random Generator </h1>
          <div className="side">
            <LottoRandomContent lottoNumbers={this.state.lottoNumbers} />
          </div>
        </LottoRandomMain>
      </LottoRandomTemplateBox>
    );
  }
}

export default LottoRandomTemplate;
