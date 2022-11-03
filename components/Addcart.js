import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";

import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";



export const AddCart = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        // ...props,
      }}
    //   onPress={handlePress2}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Thêm vào giỏ hàng
      </Text>
    </TouchableOpacity>
  );
};
