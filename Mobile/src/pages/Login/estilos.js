import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25,
    paddingHorizontal: 20,
  },
  background: {
    position:'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%'
  },
  botao: {
    height: 40,
    width: "100%",
    borderRadius: 5,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  textoBotao: {
    fontSize: 15,
    fontWeight: "700",
    color: "#fff",
    fontFamily: 'Arial'
  }
});