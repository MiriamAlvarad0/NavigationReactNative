import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"; // Asegúrate de importar correctamente react-native
import { useNavigation } from "@react-navigation/native";
import MyKeyboard from '../src/components/MyKeyboard'; // Importa el componente correctamente


const HomeScreen = () => {
    const navigation = useNavigation();
    return ( 
        <View>
            <Text 
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
            >
            </Text>
    
 



            <TouchableOpacity
                onPress={() => navigation.navigate("Stack")}
                style={{
                    backgroundColor: "purple",
                    width: 150,
                    height: 30,
                    borderRadius: 100,
                    justifyContent: "center",
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        textAlign: "center",
                        color: "white",
                    }}
                >
                    Go to Stack
                </Text>
            </TouchableOpacity>
        </View>
    );
}



export default HomeScreen;
