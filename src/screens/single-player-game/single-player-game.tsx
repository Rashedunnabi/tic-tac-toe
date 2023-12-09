import { SafeAreaView } from "react-native";
import React, { ReactElement, useState } from "react";
import { GradientBackground } from "@components";
import styles from "./single-player-game.styles";
import { Board } from "@components";
import {
    printFormattedBoard,
    BoardState,
    isEmpty,
    isFull,
    getAvailableMoves,
    isTerminal,
    getBestMove
} from "@utils";

export default function Game(): ReactElement {
    // prettier-ignore
    const [state, setState] = useState<BoardState>([
        null,"x",null,
        "o",null,"x",
        "o","o","x"
    ])
    console.log("getBestMove", getBestMove(state, true));
    const handleOnCellPressed = (cell: number): void => {
        const stateCopy: BoardState = [...state];
        if (stateCopy[cell] || isTerminal(stateCopy)) return;
        stateCopy[cell] = "x";
        setState(stateCopy);
    };

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <Board
                    disabled={Boolean(isTerminal(state))}
                    onCellPressed={cell => {
                        handleOnCellPressed(cell);
                    }}
                    state={state}
                    size={300}
                />
            </SafeAreaView>
        </GradientBackground>
    );
}
