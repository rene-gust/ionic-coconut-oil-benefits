import {AppRateManager} from "./appratemanager";
import {AdMobBanner} from "./admobbanner";
export class MarketingManager {
    public static pageOpened() {
        try {
            AppRateManager.pageOpened();
            AdMobBanner.pageOpened();
        } catch (e) {

        }
    };
}
