/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Jan 25 2022 00:31:03 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import React from "react";
import Text from "../modules/Text";

const ErrorComponent: React.FC = ({ children }) => {
  return (
    <Text variant="error" textAlign="right">
      {children}
    </Text>
  );
};

export default ErrorComponent;
