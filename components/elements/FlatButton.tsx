/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Jan 13 2022 14:32:20 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Box from "../modules/Box";
import Text from "../modules/Text";

interface FlatButtonProps {
  title: string;
  icon: any;
  iconColor?: any;
  iconSize?: any;
  onPress: any;
}

const FlatButton: React.FC<FlatButtonProps> = ({
  title,
  icon,
  iconColor = "blue",
  iconSize = 28,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        padding="s"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        backgroundColor="flatButtonBackground"
        borderRadius="s"
      >
        <Box marginRight="xs">
          <MaterialIcons name={icon} size={iconSize} color={iconColor} />
        </Box>
        <Text variant="flatButtonText">{title}</Text>
      </Box>
    </TouchableOpacity>
  );
};

export default FlatButton;
