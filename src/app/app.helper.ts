import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ColorState } from '@models/color';
import { AppData } from './app.data';

@Injectable({
    providedIn: 'root',
})
export class AppHelper {
    constructor(private appData: AppData, private router: Router,) {

    }

    copyMessage(val: string){
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);

        this.appData.toast = { title: 'Copy to Clipboard', desc: '', severity: ColorState.success, };
        this.appData.onToastChanges.next(true);
    }


    goToURL(link?: string){
        if (link) {
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });
            
            this.router.navigateByUrl(link!);
        }
    }


    scrollToElement(id: string): void {
        let element = document.getElementById(id);
        element?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    scrollToTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    goToLink(link: string) {
        window.open(link, "_blank");
    }
}
