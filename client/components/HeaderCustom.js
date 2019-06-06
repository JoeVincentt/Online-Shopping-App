import React, { Component } from "react";
import { Body } from "native-base";

import { MarijuanaText } from "../components/StyledText";
import colors from "../constants/Colors";

export default () => (
  <>
    <Body style={{ flex: 1, zIndex: 100 }}>
      <MarijuanaText style={{ fontSize: 70, color: colors.secondary }}>
        Store Name
      </MarijuanaText>
    </Body>
  </>
);
