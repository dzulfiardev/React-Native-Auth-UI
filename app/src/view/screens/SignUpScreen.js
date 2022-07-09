import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../const/color";
import STYLES from "../../styles";

function SignUpScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row", marginTop: 60 }}>
          <Text
            style={{ fontWeight: "bold", fontSize: 22, color: COLORS.dark }}
          >
            Flight
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              color: COLORS.secondary,
            }}
          >
            Pad
          </Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <Text
            style={{ fontSize: 27, fontWeight: "bold", color: COLORS.dark }}
          >
            Welcome Back,
          </Text>
          <Text
            style={{ fontSize: 19, fontWeight: "bold", color: COLORS.light }}
          >
            Sign Up
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              size={20}
              color={COLORS.light}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="Email" style={STYLES.input} />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock-outline"
              size={20}
              color={COLORS.light}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Password"
              style={STYLES.input}
              secureTextEntry
            />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock-outline"
              size={20}
              color={COLORS.light}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Repeat Password"
              style={STYLES.input}
              secureTextEntry
            />
          </View>

          <TouchableOpacity>
            <View style={STYLES.btnPrimary}>
              <Text
                style={{
                  color: COLORS.white,
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Sign Up
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              marginVertical: 20,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={STYLES.line}></View>
            <Text>Or</Text>
            <View style={STYLES.line}></View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
            marginTop: 40,
            mariginBottom: 20,
          }}
        >
          <Text style={{ color: STYLES.light, fontWeight: "bold" }}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text
              style={{ color: COLORS.pink, fontWeight: "bold", marginLeft: 4 }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignUpScreen;
