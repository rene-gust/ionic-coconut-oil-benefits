import {AdMobFreeBannerConfig, AdMobFree, AdMobFreeInterstitialConfig} from '@ionic-native/admob-free';

export class AdMobBanner {

    static readonly adMobFree = new AdMobFree();

    static readonly bannerConfig:AdMobFreeBannerConfig = {
        id: 'ca-app-pub-9450457991119200/7981816788',
        autoShow: true,
        isTesting: false,
        offsetTopBar: true
    };

    static readonly interstitialConfig: AdMobFreeInterstitialConfig = {
        isTesting: false,
        autoShow: true,
        id: 'ca-app-pub-9450457991119200/9751596399'
    };

    static pageOpenedCount = 0;

    public static async showBannerAd() {
        try {
            AdMobBanner.adMobFree.banner.config(AdMobBanner.bannerConfig);
            await AdMobBanner.adMobFree.banner.prepare();
        }
        catch (e) {
        }
    }

    public static pageOpened() {
        AdMobBanner.pageOpenedCount++;
        if (AdMobBanner.pageOpenedCount % 5 == 0) {
            AdMobBanner.showInterstitial();
        }
    }

    public static async showInterstitial() {
        try {
            AdMobBanner.adMobFree.interstitial.config(AdMobBanner.interstitialConfig);
            AdMobBanner.adMobFree.interstitial.prepare().then(() => {});
        }
        catch (e) {
        }


    }
}