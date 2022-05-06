import { defineStore } from "pinia";
import { useMarkdown } from "./markdown_store";

export const useFile = defineStore("file store", {
    state: () => ({
        currentFile: null as string | null,
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
    },
});
