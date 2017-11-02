import {AppRate} from "@ionic-native/app-rate";
import {AppStorage} from "./appstorage";

export class AppRateManager {

    static readonly storeAppURL:Object = {
        ios: 'de.rene-gust.coconutoil.*',
        android: 'market://details?id=de.rene_gust.coconutoilbenefits_en'
    };

    static pageOpenedCount = 0;

    public static async showRateContainer() {
        try {
            let appRate = new AppRate();
            appRate.preferences.storeAppURL = AppRateManager.storeAppURL;

            appRate.promptForRating(true);
        }
        catch (e) {
        }
    }

    public static pageOpened() {
        AppRateManager.pageOpenedCount++;
        let rateContainerShown = false;
        AppStorage.getItem('rateContainerShown').then((data) => {
            rateContainerShown = data
            if (AppRateManager.pageOpenedCount % 7 == 0 && !rateContainerShown) {
                AppStorage.setItem('rateContainerShown', true);
                AppRateManager.showRateContainer();
            }
        });
    }
}
