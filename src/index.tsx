import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Game, Home } from "@screens";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

// SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = useFonts({
        "Delius-Regular": require("../assets/fonts/Delius-Regular.ttf"),
        "DeliusUnicase-Bold": require("../assets/fonts/DeliusUnicase-Bold.ttf"),
        "DeliusUnicase-Regular": require("../assets/fonts/DeliusUnicase-Regular.ttf")
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.preventAutoHideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 35, fontFamily: "Delius-Regular" }}>Delius-Regular</Text>
            <Text style={{ fontSize: 35, fontFamily: "DeliusUnicase-Bold" }}>
                DeliusUnicase-Bold
            </Text>
            <Text style={{ fontSize: 35, fontFamily: "DeliusUnicase-Regular" }}>
                DeliusUnicase-Regular
            </Text>
            <Text style={{ fontSize: 35 }}>May Allah Bless You.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
