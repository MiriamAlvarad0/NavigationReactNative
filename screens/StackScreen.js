import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const StackScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>texto de una imagen</Text>
            <Text style={styles.paragraph}>
                soy una imagen
            </Text>
            <Text style={styles.paragraph}>
                soy una figura
            </Text>
            <Image
                source={require('../assets/icon.png')} 
                style={styles.image}
            />
        </ScrollView>
    );
    
    }

export default StackScreen;