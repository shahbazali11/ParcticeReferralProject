import React, {CSSProperties, FC} from 'react';
import {Text, View, StyleSheet, ViewStyle, ImageSourcePropType} from 'react-native';
import {Input as RNInput, IconProps, Icon} from 'react-native-elements';
import {useStore} from 'react-redux';
import {colors, family, HP, size, WP} from '../../shared/exporter';

interface Props{
    placeholder: string,
    leftIcon?: Element,
    rightIcon?: boolean,
    secureTextEntry?: boolean,
    renderErrorMessage?: boolean,
    errorMessage?: string,
    onChangeText: (txt: string) => void;
    disableFullscreenUI?: boolean;
    autoCapitalize?: undefined;
    blurOnSubmit?: boolean;
    onBlur?: ()=> void;
    value: string;
    onSubmitEditing?: () => void;
    editable?: boolean;
    inputContainerStyle?: ViewStyle;
    label: string;
    labelStyle?: any;
    containerStyle?: ViewStyle;
    inputStyle?: ViewStyle;
    placeholderTextColor?: undefined;
    multiline?: boolean;
    maxLength?: number;
    keyboardType?: any;

}

const Input: FC<Props> = ({
  placeholder,
  leftIcon,
  rightIcon,
  secureTextEntry,
  renderErrorMessage,
  errorMessage,
  onChangeText,
  disableFullscreenUI,
  autoCapitalize,
  blurOnSubmit,
  onBlur,
  value,
  onSubmitEditing,
  editable,
  inputContainerStyle,
  label,
  labelStyle,
  containerStyle,
  inputStyle,
  placeholderTextColor,
  multiline,
  maxLength,
  keyboardType,
}) => {
  const [showPass, setShowPass] = React.useState(secureTextEntry);

  return (
    <RNInput
      label={label}
      labelStyle={[styles.labelStyle, labelStyle]}
      placeholder={placeholder}
      placeholderTextColor={
        placeholderTextColor ? placeholderTextColor : colors.g1
      }
      secureTextEntry={showPass}
      inputContainerStyle={[styles.inputContainerStyle, inputContainerStyle]}
      inputStyle={[styles.inputStyle, inputStyle]}
      leftIcon={leftIcon}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      disableFullscreenUI={disableFullscreenUI}
      autoCapitalize={autoCapitalize}
      blurOnSubmit={blurOnSubmit}
      editable={editable}
      containerStyle={[styles.containerStyle, containerStyle]}
      rightIcon={
        secureTextEntry ? (
          <Icon
            onPress={() => {
              setShowPass(!showPass);
            }}
            name={!showPass ? 'eye-outline' : 'eye-off-outline'}
            type={'material-community'}
            size={22}
            color={colors.g1}
            //tvParallaxProperties={undefined}
          />
        ) : (
          rightIcon
        )
      }
      errorMessage={errorMessage}
      renderErrorMessage={false}
      //autoCompleteType={undefined}
      onSubmitEditing={onSubmitEditing}
      multiline={multiline}
      maxLength={maxLength}
      keyboardType={keyboardType}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingVertical: HP('1'),
  },
  inputStyle: {
    fontFamily: family.OpenSans_Regular,
    fontSize: size.small,
    borderBottomWidth: 0,
    paddingHorizontal: WP('1.5'),
    color: colors.black,
  },
  inputContainerStyle: {
    borderRadius: 7,
    backgroundColor: colors.g9,
    borderBottomWidth: 0,
    paddingHorizontal: WP('5'),
  },
  labelStyle: {
    color: colors.black,
    fontSize: size.xsmall,
    fontFamily: family.Poppins_Light,
    marginLeft: HP('0.5'),
  },
});

export {Input};
