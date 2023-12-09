import { StyleSheet, View } from "react-native";
import React, { ReactElement, ReactNode } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

type AppBootstrapProps = {
    children: ReactNode;
};

export default function AppBootstrap({ children }: AppBootstrapProps): ReactElement {
    const [fontsLoaded] = useFonts({
        DeliusUnicase_700Bold: require("./../../../assets/fonts/DeliusUnicase-Bold.ttf"),
        DeliusUnicase_400Regular: require("./../../../assets/fonts/DeliusUnicase-Regular.ttf")
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.preventAutoHideAsync();
        }
    }, [fontsLoaded]);

    return fontsLoaded ? <>{children}</> : <View />;
}
