import React, {CSSProperties, FC} from 'react';
import {TouchableOpacity, Image, StyleSheet, Text, ImageStyle, ViewStyle, ImageSourcePropType} from 'react-native';
import {colors, family, size} from '../../shared/exporter'

interface Props{
    icon: ImageSourcePropType;
    iconStyle?: any;
    buttonStyle?: ViewStyle;
    onPress: () => void;
    title?: string;
    titleStyle?: ViewStyle;
    disabled?: boolean;
}

export const IconButton: FC<Props> = ({
  icon,
  iconStyle,
  buttonStyle,
  onPress,
  title,
  titleStyle,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.buttonStyle, buttonStyle]}>
      <Image source={icon} style={[styles.iconStyle, iconStyle]} />
      {title && <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 10,
    backgroundColor: colors.blue,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  iconStyle: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  titleStyle: {
    fontFamily: family.Poppins_SemiBold,
    fontSize: size.normal,
    color: colors.black,
  },
});
