import { Component, OnInit } from '@angular/core';
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';

import { ItemListComponent } from './item-list.component';

@Component({
    moduleId: module.id,
    directives: [
        NS_ROUTER_DIRECTIVES
    ],
    selector: 'tab1',
    template: `<page-router-outlet></page-router-outlet>`
})

export class Tab1Component implements OnInit {
    constructor() { }

    ngOnInit() { }

}