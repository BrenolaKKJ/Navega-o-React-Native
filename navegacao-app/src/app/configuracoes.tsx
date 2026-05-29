import { View, Text } from "react-native";

export default function Configuracoes() {

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
        Tela Configurações
      </Text>

    </View>

  );

}