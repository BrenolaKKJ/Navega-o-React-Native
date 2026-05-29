import { View, Text } from "react-native";

export default function Perfil() {

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
        Tela Perfil
      </Text>

    </View>

  );

}