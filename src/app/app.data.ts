import { Injectable } from '@angular/core';
import { ColorState } from '@models/color';
import { Menu } from '@models/menu';
import { Meta } from '@models/meta';
import { Toast } from '@models/toast';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AppData {
    onToastChanges: BehaviorSubject<any>;
    onTitleChanges: BehaviorSubject<any>;
    onMetaChanges: BehaviorSubject<any>;

    constructor() {
        this.onToastChanges = new BehaviorSubject(false);
        this.onTitleChanges = new BehaviorSubject(false);
        this.onMetaChanges = new BehaviorSubject(false);
    }

    private credentialValue = {
        email: 'email@tes.com',
        password: 'Password123@'
    };
    get credential(): any {
        return this.credentialValue;
    }
    set credential(value: any) {
        if (this.credentialValue !== value) {
            this.credentialValue = value;
        }
    }


    private titleValue = 'Ngodings';
    get title(): string {
        return this.titleValue;
    }
    set title(value: string) {
        if (this.titleValue !== value) {
            this.titleValue = value;
        }
    }

    private metaValue: Meta = {
        name: '',
        type: '',
    };
    get meta(): Meta {
        return this.metaValue;
    }
    set meta(value: Meta) {
        if (this.metaValue !== value) {
            this.metaValue = value;
        }
    }

    private toastValue: Toast = {
        title: '',
        desc: '',
        severity: ColorState.primary,
    };
    get toast(): Toast {
        return this.toastValue;
    }
    set toast(value: Toast) {
        if (this.toastValue !== value) {
            this.toastValue = value;
        }
    }

    private projectValue = 'Ngodings';
    get project(): string {
        return this.projectValue;
    }
    set project(value: string) {
        if (this.projectValue !== value) {
            this.projectValue = value;
        }
    }

    private themeValue = 'Lofi';
    get theme(): string {
        return this.themeValue;
    }
    set theme(value: string) {
        if (this.themeValue !== value) {
            this.themeValue = value;
        }
    }

    private pagesValue: Menu[] = [
        {
            name: 'QnA',
            url: '/',
        },
    ];
    get pages(): Menu[] {
        return this.pagesValue;
    }
    set pages(value: Menu[]) {
        if (this.pagesValue !== value) {
            this.pagesValue = value;
        }
    }

    isFullPageValue = true;
    get isFullPage(): boolean {
        return this.isFullPageValue;
    }
    set isFullPage(value: boolean) {
        if (this.isFullPageValue !== value) {
            this.isFullPageValue = value;
        }
    }
}

