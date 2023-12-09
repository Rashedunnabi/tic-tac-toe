import { SafeAreaView } from "react-native";
import React, { ReactElement } from "react";
import { GradientBackground } from "@components";
import styles from "./single-player-game.styles";
import { Board } from "@components";
import {
    printFormattedBoard,
    BoardState,
    isEmpty,
    isFull,
    getAvailableMoves,
    isTerminal
} from "@utils";

export default function Game(): ReactElement {
    // prettier-ignore
    const b: BoardState = [
        "x", "o", "x",
        "o", "x", "o",
        "o", "o", "x"
        ];
    printFormattedBoard(b);
    console.log(isTerminal(b));
    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <Board
                    onCellPressed={index => {
                        alert(index);
                    }}
                    state={b}
                    size={300}
                />
            </SafeAreaView>
        </GradientBackground>
    );
}
