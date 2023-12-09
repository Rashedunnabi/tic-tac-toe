import { Text, SafeAreaView } from "react-native";
import React, { ReactElement } from "react";
import { GradientBackground } from "@components";
import styles from "./single-player-game.styles";
import { Board } from "@components";

export default function Game(): ReactElement {
    return (
        <GradientBackground>
            <SafeAreaView>
                <Board
                    onCellPressed={index => {
                        alert(index);
                    }}
                    state={["x", "o", "x", "x", "o", null, "x", "o", null]}
                    size={300}
                />
            </SafeAreaView>
        </GradientBackground>
    );
}
