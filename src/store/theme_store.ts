import { defineStore } from "pinia";

export const useTheme = defineStore("Theme", {
    state: () => ({
        isDarkMode: true,
        darkTheme: {
            background: "#22272e",
            color: "#c9d1d9",
            accentColor: "#bb86fc",

            selectionTheme: {
                background: "#bb86fc",
                color: "#22272e",
            },

            codeTheme: {
                background: "#2d333b",
                color: "white",
            },
        },

        lightTheme: {
            background: "#e2e4e9",
            color: "#38434f",
            accentColor: "#ceb5ed",

            selectionTheme: {
                background: "#ceb5ed",
                color: "white",
            },

            codeTheme: {
                background: "#f0f2f4",
                color: "black",
            },
        },
    }),
    getters: {
        themeMode: (state) =>
            state.isDarkMode === true ? state.darkTheme : state.lightTheme,
    },
    actions: {
        toggleTheme() {
            this.isDarkMode = !this.isDarkMode;
        },
    },
});
