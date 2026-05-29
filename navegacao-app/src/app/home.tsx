import { View, Text } from "react-native";

export default function Home() {

  return (

    <View
      style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"black"
      }}
    >

      <Text
        style={{
          color:"white",
          fontSize:30
        }}
      >
        Tela Home
      </Text>

    </View>

  );

}