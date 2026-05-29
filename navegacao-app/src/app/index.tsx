import { View, Text, TouchableOpacity } from "react-native";

import { router } from "expo-router";

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
          fontSize:30,
          marginBottom:30
        }}
      >
        Tela Home
      </Text>

      <TouchableOpacity

        onPress={() => router.push("/perfil")}

        style={{
          backgroundColor:"blue",
          padding:15,
          borderRadius:10,
          marginBottom:20
        }}
      >

        <Text style={{color:"white"}}>
          Ir para Perfil
        </Text>

      </TouchableOpacity>

      <TouchableOpacity

        onPress={() => router.push("/configuracoes")}

        style={{
          backgroundColor:"green",
          padding:15,
          borderRadius:10
        }}
      >

        <Text style={{color:"white"}}>
          Ir para Configurações
        </Text>

      </TouchableOpacity>

    </View>

  );

}