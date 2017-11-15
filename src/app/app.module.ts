import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InfoWikiPage } from '../pages/info-wiki/info-wiki';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
import {VideoTutorialsPage} from "../pages/video-tutorials/video-tutorials";
import {PuzzleGamePage} from "../pages/puzzle-game/puzzle-game";
import {ZokoGamePage} from "../pages/zoko-game/zoko-game";
import {GamesPage} from "../pages/games/games";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfoWikiPage,
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
    HowToBuyPage,
    VideoTutorialsPage,
    GamesPage,
    PuzzleGamePage,
    ZokoGamePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InfoWikiPage,
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
    HowToBuyPage,
    VideoTutorialsPage,
    GamesPage,
    PuzzleGamePage,
    ZokoGamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
