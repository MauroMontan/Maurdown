import { defineStore } from "pinia";
import { useMarkdown } from "./markdown_store";
import { saveAs } from "file-saver";

export const useFile = defineStore("file store", {
    state: () => ({
        currentFile: "" as string | null,
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
            console.log(file.name);
            reader.readAsText(file);

        },

        fileSave() {
            const markdownStore = useMarkdown();
            const blob = new Blob([markdownStore.rawText], {
                type: "text/plain;charset=utf-8",
            });

            const tempName = this.filename.replace(/\s+/g, '')
            if (tempName !== "") {
                saveAs(blob, `${tempName}.md`);
            }
        },
    },
});
