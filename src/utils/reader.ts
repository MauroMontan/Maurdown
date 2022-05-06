export class Reader {
    constructor() {}

    static loadFile = (content: any, file: File) => {
        const reader = new FileReader();

        content = reader.onload = (event) => {
            return event.target!.result!;
        };

        reader.readAsText(file);
    };
}
