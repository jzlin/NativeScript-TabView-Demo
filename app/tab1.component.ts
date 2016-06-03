import { Component, OnInit } from '@angular/core';

import { ItemListComponent } from './item-list.component';

@Component({
    moduleId: module.id,
    directives: [
        ItemListComponent
    ],
    selector: 'tab1',
    template: `<item-list></item-list>`
})
export class Tab1Component implements OnInit {
    constructor() { }

    ngOnInit() { }

}