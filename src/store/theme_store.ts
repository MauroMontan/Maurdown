import { defineStore } from "pinia";

export const useTheme = defineStore("Theme", {
  state: () => ({
    isDarkMode: true,
    darkTheme: {
      background: "#22272e",
      color: "#9aa6b2",

      selectionTheme: {
        background: "white",
        color: "black",
      },

      codeTheme: {
        background: "#2d333b",
        color: "white",
      },
    },

    lightTheme: {
      background: "#e2e4e9",
      color: "#38434f",

      selectionTheme: {
        background: "back",
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
