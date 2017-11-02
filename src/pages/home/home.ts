import {Component, ViewChild, ElementRef} from '@angular/core';
import {IncreaseYourEnegryPage} from "../increase-your-enegry/increase-your-enegry";
import {BoostYourImmuneSystemPage} from "../boost-your-immune-system/boost-your-immune-system";
import {BoostYourBrainFunctionPage} from "../boost-your-brain-function/boost-your-brain-function";
import {HairTreatmentPage} from "../hair-treatment/hair-treatment";
import {HealingWoundsPage} from "../healing-wounds/healing-wounds";
import {SkinCarePage} from "../skin-care/skin-care";
import {TreatmentsForIllnessesPage} from "../treatments-for-illnesses/treatments-for-illnesses";
import {CookingPage} from "../cooking/cooking";
import {PetsPage} from "../pets/pets";
import {FurniturePolishPage} from "../furniture-polish/furniture-polish";
import {HouseholdApplicationPage} from "../household-application/household-application";
import {HowToBuyPage} from "../how-to-buy/how-to-buy";
import {NavController} from "ionic-angular";
import { AdMobBanner } from "../admobbanner";
import {MarketingManager} from "../marketingmanager";
import {AppRateManager} from "../appratemanager";



@Component({
    selector: 'home',
    templateUrl: 'home.html'
})

export class HomePage {

    constructor(public navCtrl: NavController) {
        AdMobBanner.showBannerAd();
        MarketingManager.pageOpened();
    }

    showOpened() {
        var input= document.getElementById("text") as HTMLInputElement;
        input.value=AppRateManager.pageOpenedCount.toString();
    }

    goEnergy() {
        this.navCtrl.push(IncreaseYourEnegryPage);
    }

    goImmune() {
        this.navCtrl.push(BoostYourImmuneSystemPage);
    }

    goBrain() {
        this.navCtrl.push(BoostYourBrainFunctionPage);
    }

    goHair() {
        this.navCtrl.push(HairTreatmentPage);
    }

    goWounds() {
        this.navCtrl.push(HealingWoundsPage);
    }

    goSkin() {
        this.navCtrl.push(SkinCarePage);
    }

    goIllnesses() {
        this.navCtrl.push(TreatmentsForIllnessesPage);
    }

    goCooking() {
        this.navCtrl.push(CookingPage);
    }

    goPets() {
        this.navCtrl.push(PetsPage);
    }

    goFurniture() {
        this.navCtrl.push(FurniturePolishPage);
    }

    goHousehold() {
        this.navCtrl.push(HouseholdApplicationPage);
    }

    goBuy() {
        this.navCtrl.push(HowToBuyPage);
    }
}
