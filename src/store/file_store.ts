import { defineStore } from "pinia";
import { useMarkdown } from "./markdown_store";
import { saveAs } from "file-saver";

export const useFile = defineStore("file store", {
    state: () => ({
        currentFile: null as string | null,
        filename: "" as string,
    }),
    getters: {},
    actions: {
        uploadFile(file: File) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const markdownStore = useMarkdown();
                this.currentFile = event.target!.result!.toString();
                markdownStore.rawText = this.currentFile;
            };

            reader.readAsText(file);
        },

        fileSave() {
            const markdownStore = useMarkdown();
            const blob = new Blob([markdownStore.rawText], {
                type: "text/plain;charset=utf-8",
            });
            saveAs(blob, `${this.filename}1.md`);
        },
    },
});
