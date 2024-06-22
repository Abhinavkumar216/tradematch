import { ThemedText1, ThemedText2 } from "@/src/components/ThemedText";
import {
    ThemedSurface1,
    ThemedSurface2
} from "@/src/components/ThemedView";
import { Colors } from "@/src/constants/Colors";
import { Fonts } from "@/src/constants/Fonts";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    View,
    useColorScheme
} from "react-native";

const statusBarHeight = Constants.statusBarHeight;

const Signin = () => {
  const theme = useColorScheme() ?? "light";

  return (
    <ThemedSurface2 style={styles.container}>
      <StatusBar animated style="auto" />
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/verified-blue.png")}
          style={[styles.image]}
        />
        <View>
          <ThemedText2 style={[styles.logoheading]}>Tradematch</ThemedText2>
          <ThemedText2 style={[styles.logosubheading]}>
            Trade For Every Match
          </ThemedText2>
        </View>
      </View>
      <View style={{ marginTop: 25 }}>
        <ThemedText2 style={styles.title}>Let's Begin</ThemedText2>
        <ThemedText1 style={styles.subtitle}>
          Tell us your mobile number to recieve a one-time password (OTP) for
          Verification.
        </ThemedText1>
      </View>

      <ThemedSurface1>

      <ThemedText1 style={styles.subtitle}>
          Tell us your mobile number to recieve a one-time password (OTP) for
          Verification.
        </ThemedText1>
      </ThemedSurface1>

    </ThemedSurface2>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight + 10,
    paddingHorizontal: 16,
    // justifyContent: "center",
    // alignItems: "center",
  },
  logoheading: {
    fontSize: 16,
    fontFamily: Fonts.SemiBold,
    // textAlign: "center",
    // display: "none",
  },
  image: { width: 40, height: 40, marginRight: 5 },
  logosubheading: {
    fontSize: 10,
    fontFamily: Fonts.Light,
    textAlign: "center",
  },
  inputStyle: {
    // borderWidth: 1,
    flex: 1,
    paddingVertical: 16,
    fontFamily: Fonts.Regular,
    paddingLeft: 12,
    fontSize: 16,
    marginBottom: -3,
  },
  inputSurface: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 12,
    // borderColor: "#2F2F46",
    //   backgroundColor:'#222232'
    //   height: 50,
  },
  countryCode: {
    fontFamily: Fonts.Regular,
    fontSize: 16,
    marginBottom: -3,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -6,
    marginTop: 10,
  },
  title: { fontSize: 28, fontFamily: Fonts.SemiBold },
  subtitle: { fontSize: 14, fontFamily: Fonts.Light, lineHeight: 24 },
});

// <ThemedSurface1 style={styles.inputSurface}>
//         <View style={{ padding: 18 }}>
//           <ThemedText2 style={styles.countryCode}>+91</ThemedText2>
//         </View>
//         <TextInput
//           style={[
//             styles.inputStyle,
//             {
//               color:
//                 theme === "light" ? Colors.light.dark : Colors.dark.white600,
//             },
//           ]}
//           placeholderTextColor={
//             theme === "light" ? Colors.light.dark : Colors.dark.white600
//           }
//           placeholder="Mobile Number"
//           dataDetectorTypes={"phoneNumber"}
//           keyboardType="phone-pad"
//           cursorColor={theme === "light" ? Colors.light.dark : Colors.dark.white600}
//           maxLength={10}
//           autoFocus
//         />
//       </ThemedSurface1>
