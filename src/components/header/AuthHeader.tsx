import React, { FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, StyleProp, ViewProps, Falsy, ViewStyle} from 'react-native';
import {Divider} from 'react-native-elements';
import {appIcons, colors, family, HP, size, WP} from '../../shared/exporter';
import { IconButton } from '../button/IconButton';

interface Props {
  title: string;
  withRightIcon?: boolean,
  onPressClose?: () => void; 
  containerStyle?: ViewStyle;
}

export const AuthHeader: FC<Props> = ({
  title,
  withRightIcon,
  onPressClose,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View>
        <Text style={styles.titleStyle}>{title}</Text>
        <Divider width={4} style={styles.dividerStyle} color={colors.blue} />
      </View>
      {withRightIcon && (
        <IconButton
          icon={appIcons.closeIcon}
          buttonStyle={styles.closeBtn}
          onPress={()=>onPressClose}
          iconStyle={styles.iconStyle}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: WP('6'),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  titleStyle: {
    color: colors.b1,
    fontSize: size.h5,
    fontFamily: family.Montserrat_Bold,
  },
  closeBtn: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: colors.g9,
    marginRight: WP('4'),
  },
  iconStyle: {
    height: HP('3'),
    width: HP('3'),
    resizeMode: 'contain',
  },
  dividerStyle: {
    borderRadius: 5,
  },
});
