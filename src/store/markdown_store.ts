import { defineStore } from "pinia";
import { marked } from "marked";

export const useMarkdown = defineStore("Markdown", {
  state: () => ({
    editModeEnabled: true,
    rawText: "",
  }),
  getters: {
    markdownText: (state) => marked(state.rawText),
    editorMode: (state) => state.editModeEnabled,
  },
  actions: {
    toggleView() {
      this.editModeEnabled = !this.editModeEnabled;
    },
    insertSnippet(toInsert: string, textArea: HTMLTextAreaElement | null) {
      const cursorPosition = textArea!.selectionStart;
      const output = [
        this.rawText.slice(0, cursorPosition),
        toInsert,
        this.rawText.slice(cursorPosition),
      ].join("");

      this.rawText = output;

      alert(cursorPosition);
    },
  },
});
