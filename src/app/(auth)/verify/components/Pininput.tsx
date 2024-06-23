import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { OtpInput } from "react-native-otp-entry";
import { ThemeContext } from 'styled-components/native';
import { Font } from '@/src/constants/theme';


const Pininput = () => {
    const themeContext = useContext(ThemeContext);

  return (
    <OtpInput
        numberOfDigits={6}
        // blurOnFilled
        autoFocus
        focusColor={themeContext?.colors?.primary}
        focusStickBlinkingDuration={500}
        onTextChange={(text) => console.log(text)}
        onFilled={(text) => console.log(`OTP is ${text}`)}
        textInputProps={{
          placeholder: "-",
          accessibilityLabel: "One-Time Password",
          placeholderTextColor: "white",
        }}
        theme={{
          containerStyle: styles.Codecontainer,
          pinCodeContainerStyle: {
            ...styles.pinCodeContainer,
            borderColor: themeContext?.colors?.text + 80,
          },
          pinCodeTextStyle: {
            fontSize: 24,
            color: themeContext?.colors?.text,
            fontFamily: Font.Regular,
            marginBottom: -5,
          },
          focusStickStyle: { backgroundColor: themeContext?.colors?.primary },
          focusedPinCodeContainerStyle: styles.activePinCodeContainer,
        }}
      />
  )
}

export default Pininput

const styles = StyleSheet.create({
    Codecontainer: {
      marginTop: 30,
      marginBottom: 20,
      // borderWidth: 1,
    },
    pinCodeContainer: {
      borderWidth: 1,
      // paddingHorizontal:15
    },
    focusStick: {
      // backgroundColor: Colors.light.tint,
    },
    activePinCodeContainer: {
      borderWidth: 1,
    },
    pinCodeText: {
      fontSize: 24,
      // color: Colors.light.Surface2,
      // fontFamily: Fonts.Regular,
      marginBottom: -5,
    },
  });