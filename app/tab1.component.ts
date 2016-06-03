import { Component, OnInit } from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';
import { NS_ROUTER_PROVIDERS, NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';

import { ItemListComponent } from './item-list.component';

@Component({
    moduleId: module.id,
    providers: [
        NS_ROUTER_PROVIDERS
    ],
    directives: [
        NS_ROUTER_DIRECTIVES
    ],
    selector: 'tab1',
    template: `<page-router-outlet></page-router-outlet>`
})
@RouteConfig([
    { path: "/", name: "ItemList", component: ItemListComponent }
])
export class Tab1Component implements OnInit {
    constructor() { }

    ngOnInit() { }

}