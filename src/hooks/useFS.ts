import {Filesystem} from "@capacitor/core";

const DATA_STORAGE = "data";

export function useFS() {

    const listFiles = async (): Promise<string[]> => {
        let statResult = await Filesystem.stat({path:DATA_STORAGE});
        // await Filesystem.mkdir({path: DATA_STORAGE})
        console.log('lol')
        return Filesystem.readdir({path: DATA_STORAGE}).then(value => value.files);
    }

    const addFile = async (): Promise<void> => {
        return Filesystem.writeFile({path: Math.random().toString(), data: "kek"}).then()
    }
    return {

        listFiles,
        addFile
    }
}

export interface Photo {
    filepath: string;
    webviewPath?: string;
}

