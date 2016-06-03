import {Component} from "@angular/core";

import { Tab1Component } from './tab1.component';

@Component({
    selector: "my-app",
    directives: [
        Tab1Component
    ],
    template: `
<TabView>
    <StackLayout *tabItem="{title: 'Tab1'}">
        <tab1></tab1>
    </StackLayout>
    <StackLayout *tabItem="{title: 'Tab2'}">
        <Label text="tab2 content"></Label>
    </StackLayout>
</TabView>
`,
})
export class AppComponent {}
