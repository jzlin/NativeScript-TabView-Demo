import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'tab1',
    template: `<Label text="tab1 content"></Label>`
})
export class Tab1Component implements OnInit {
    constructor() { }

    ngOnInit() { }

}