import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import React, { ReactElement } from "react";
import { Text, AppBootstrap } from "@components";

// SplashScreen.preventAutoHideAsync();

export default function App(): ReactElement {
    return (
        <AppBootstrap>
            <View style={styles.container}>
                <Text
                    onPress={() => {
                        alert(true);
                    }}
                    style={{ fontSize: 25 }}
                >
                    {" "}
                    Bismillah <Text weight="400"> doehrohreo</Text>
                </Text>
            </View>
        </AppBootstrap>
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
