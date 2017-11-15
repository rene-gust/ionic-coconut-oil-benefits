import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-zoko-game',
    templateUrl: 'zoko-game.html'
})
export class ZokoGamePage {

    constructor(public navCtrl: NavController) {

    }

    ionViewDidLoad() {
        (<any>window).container = (<any>window).$('div.container');
        (<any>window).zoko = new (<any>window).Zoko((<any>window).container);
        let jQuery = (<any>window).$;

        jQuery( window ).resize(function () {
            this.resize();
        }.bind(this));
        this.resize();

    }

    resize() {
        let jQuery = (<any>window).$;
        let width = jQuery('#zoko-container').width(),
            height = jQuery(document).height();
        jQuery('#wrapper').width(width);
        setTimeout(function () {
            var wrapperHeight = jQuery('#wrapper').height();
            if (height > jQuery('#wrapper').height() + 10) {
                var top = (height - jQuery('#wrapper').height()) / 2;
                jQuery('#wrapper').css('top', top + 'px');
            }
            jQuery('#overlay').height(wrapperHeight);
            jQuery('#zoko').height(wrapperHeight);
            jQuery('#menuOverlay').height(wrapperHeight);
            jQuery('#menu').height(wrapperHeight);
            jQuery('#level').css('marginTop', wrapperHeight - 100 + 'px');
            jQuery('#btn-group').css('top', wrapperHeight - 40 + 'px');
        }, 100);


        jQuery('#zoko').width(width);
        jQuery('#overlay').width(width);
        jQuery('#menuOverlay').width(width);
        jQuery('#menu').width(width);
    }
}
