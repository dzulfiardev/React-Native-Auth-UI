import { StyleSheet } from "react-native";
import COLORS from "../const/color";

const STYLES = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  inputIcon: {
    marginTop: 5,
    position: "absolute",
  },
  input: {
    color: COLORS.dark,
    paddingLeft: 30,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: COLORS.light,
    flex: 1,
    fontSize: 18,
  },
  btnPrimary: {
    backgroundColor: COLORS.primary,
    height: 50,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  line: {
    height: 1,
    width: 30,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
  },
});

export default STYLES;
