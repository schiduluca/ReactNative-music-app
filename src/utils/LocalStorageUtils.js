import { NativeModules } from 'react-native';


class LocalStorageUtils {

    constructor() {
        this.LocalStorage = NativeModules.LocalStorage;
    }

    readFromFile() {
        return this.asyncRead();
    }

    async asyncRead()  {
        try {
            console.log("Hey there sddf");
            messaage =  await this.LocalStorage.readFromFile();
            console.log(messaage);
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    writeToFile(file) {

    }

}

const localStorageUtils = new LocalStorageUtils();


export default localStorageUtils;