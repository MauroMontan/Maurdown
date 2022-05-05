import { defineStore } from "pinia";
import { marked } from "marked";

export const useMarkdown = defineStore("Markdown", {
    state: () => ({
        markdownSnippets: [
            { tooltip: "insert code", icon: "code", snippet: "```\n```" },
            {
                tooltip: "insert bullet list",
                icon: "format_list_bulleted",
                snippet:
                    "- First item\n- Second item\n- Third item\n- Fourth item",
            },

            {
                tooltip: "insert image",
                icon: "image",
                snippet: "![name](image url)",
            },
            {
                tooltip: "insert check list",
                icon: "checklist",
                snippet: "- [ ] item\n- [x] item\n- [x] item",
            },
            {
                tooltip: "insert table",
                icon: "table_chart",
                snippet:
                    "\n| Syntax      | Description |\n| ----------- | ----------- |\n| Header      | Title       |\n| Paragraph   | Text        |",
            },
            {
                tooltip: "insert date",
                icon: "calendar_today",
                snippet: new Date().toString(),
            },
        ],
        splitModeEnabled: true,
        rawText: "",
        textArea: null as HTMLTextAreaElement | null,
    }),
    getters: {
        markdownText: (state) => marked(state.rawText),
        editorMode: (state) => state.splitModeEnabled,
    },
    actions: {
        bindScroll(markdownArea: HTMLDivElement | null): void {
            this.textArea!.addEventListener("scroll", (_) => {
                markdownArea!.scrollTop = this.textArea!.scrollTop;
            });
        },

        toggleView(): void {
            this.splitModeEnabled = !this.splitModeEnabled;
        },
        setTextArea(textArea: HTMLTextAreaElement | null): void {
            this.textArea = textArea;
        },

        insertSnippet(toInsert: string): void {
            const cursorPosition = this.textArea!.selectionStart;
            const output = [
                this.rawText.slice(0, cursorPosition),
                toInsert,
                this.rawText.slice(cursorPosition),
            ].join("");

            this.rawText = output;
        },
    },
});
