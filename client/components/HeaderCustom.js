import React, { Component } from "react";
import { Left, Body, Right, Button, Icon, Title } from "native-base";

import { MarijuanaText } from "../components/StyledText";

export default () => (
  <>
    <Body style={{ flex: 1, zIndex: 100 }}>
      <MarijuanaText style={{ fontSize: 70, color: "green" }}>
        Store Name
      </MarijuanaText>
    </Body>
  </>
);
