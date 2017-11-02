import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {IncreaseYourEnegryPage} from "../pages/increase-your-enegry/increase-your-enegry";
import {BoostYourImmuneSystemPage} from "../pages/boost-your-immune-system/boost-your-immune-system";
import {BoostYourBrainFunctionPage} from "../pages/boost-your-brain-function/boost-your-brain-function";
import {HairTreatmentPage} from "../pages/hair-treatment/hair-treatment";
import {HealingWoundsPage} from "../pages/healing-wounds/healing-wounds";
import {SkinCarePage} from "../pages/skin-care/skin-care";
import {TreatmentsForIllnessesPage} from "../pages/treatments-for-illnesses/treatments-for-illnesses";
import {CookingPage} from "../pages/cooking/cooking";
import {PetsPage} from "../pages/pets/pets";
import {FurniturePolishPage} from "../pages/furniture-polish/furniture-polish";
import {HouseholdApplicationPage} from "../pages/household-application/household-application";
import {HowToBuyPage} from "../pages/how-to-buy/how-to-buy";
import {AppRate} from "@ionic-native/app-rate";

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        IncreaseYourEnegryPage,
        BoostYourImmuneSystemPage,
        BoostYourBrainFunctionPage,
        HairTreatmentPage,
        HealingWoundsPage,
        SkinCarePage,
        TreatmentsForIllnessesPage,
        CookingPage,
        PetsPage,
        FurniturePolishPage,
        HouseholdApplicationPage,
        HowToBuyPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        IncreaseYourEnegryPage,
        BoostYourImmuneSystemPage,
        BoostYourBrainFunctionPage,
        HairTreatmentPage,
        HealingWoundsPage,
        SkinCarePage,
        TreatmentsForIllnessesPage,
        CookingPage,
        PetsPage,
        FurniturePolishPage,
        HouseholdApplicationPage,
        HowToBuyPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        AppRate,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
