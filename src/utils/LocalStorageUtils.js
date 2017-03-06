import { NativeModules } from 'react-native';


class LocalStorageUtils {

    constructor() {

        this.LocalStorage = NativeModules.LocalStorage;
    }

    async asyncRead()  {
        try {
            let message =  await this.LocalStorage.readFromFile();
            return message;
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    writeToFile(file) {
        this.LocalStorage.writeToFile("Hello world");
    }

}

const localStorageUtils = new LocalStorageUtils();


export default localStorageUtils;