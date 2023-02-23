import React, {FC, useState} from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { MainNavigationParamList } from '../../navigation'
import { AuthHeader, Input } from '../../components'
import { WP, colors, size,family, appIcons } from '../../shared/exporter'
import { useNavigation } from '@react-navigation/native'

const Feed = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const navigation= useNavigation<NativeStackNavigationProp<MainNavigationParamList, "Feed">>();
  return (
    <View style={styles.mainContainer}>
      <AuthHeader title='Sign In' containerStyle={styles.headerStyle}/>
      <Input 
          value={email}
          onChangeText={(txt) => setEmail(txt)}
          label={'Email Address'}
          placeholder={'Enter Your Email'}
          labelStyle={styles.labelStyle}
          inputContainerStyle={styles.inputContainerStyle}
          leftIcon={
            <Image source={appIcons.emailIcon} style={styles.iconStyle} />
          }
          keyboardType={'email-address'}
        />
        <Input
          value={password}
          onChangeText={txt => setPassword(txt)}
          label={'Password'}
          labelStyle={styles.labelStyle}
          placeholder={'Enter your password'}
          inputContainerStyle={styles.inputContainerStyle}
          secureTextEntry
          leftIcon={
            <Image source={appIcons.passwordIcon} style={styles.iconStyle} />
          }
        />
        <TouchableOpacity
          style={styles.forgotBtnStyle}
          onPress={() => navigation.navigate('Input')}>
          <Text style={styles.forgotTextStyle}>Forgot Password?</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Feed

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerStyle: {
    paddingVertical: WP('4')
  },
  labelStyle: {
    color: colors.b2,
    fontSize: size.xsmall,
    fontFamily: family.Poppins_Thin,
  },
  inputContainerStyle: {
    width: '95%',
  },
  iconStyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  forgotBtnStyle: {
    marginRight: WP('8'),
    alignSelf: 'flex-end',
  },
  forgotTextStyle: {
    textAlign: 'right',
    fontSize: size.tiny,
    fontFamily: family.Poppins_Regular,
    color: colors.b1,
  },
})