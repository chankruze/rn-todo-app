/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Jan 13 2022 14:08:22 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { palette } from "../../themes/palette";
import Text from "../modules/Text";
import Box from "../modules/Box";
import Card from "../modules/Card";

interface HeaderProps {
  title: string;
  toggleColorScheme?: any;
  leftButton?: any;
  goBack?: any;
}

const Header: React.FC<HeaderProps> = ({
  title,
  goBack,
  leftButton,
  toggleColorScheme,
}) => {
  return (
    <Card
      padding="s"
      flexDirection="row"
      alignItems="center"
      height={60}
      variant="elevated"
      backgroundColor="toolbarBackground"
    >
      {leftButton && (
        <TouchableOpacity onPress={goBack}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={28}
            color={palette.grey[500]}
          />
        </TouchableOpacity>
      )}
      <Box flex={1} paddingLeft="s">
        <Text variant="toolbarTitle" numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
      </Box>
      <TouchableOpacity onPress={toggleColorScheme}>
        <MaterialCommunityIcons
          name="theme-light-dark"
          size={28}
          color={palette.grey[500]}
        />
      </TouchableOpacity>
    </Card>
  );
};

export default Header;
