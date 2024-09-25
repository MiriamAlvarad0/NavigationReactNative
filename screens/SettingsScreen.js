import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const SettingsScreen = () => {
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20, 
        backgroundColor: '#f5f5f5',

    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    image: {
        width: '100%', 
        height: 700,  
        borderRadius: 10, 
        marginBottom: 70,
        resizeMode: 'contain', 
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 28,
        textAlign: 'justify', 
        marginBottom: 20, 
        color: '#444', 
    },
});

export default SettingsScreen;