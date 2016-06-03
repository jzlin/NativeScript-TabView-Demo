import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    template: `
<TabView>
    <StackLayout *tabItem="{title: 'Tab1'}">
        <Label text="tab1 content"></Label>
    </StackLayout>
    <StackLayout *tabItem="{title: 'Tab2'}">
        <Label text="tab2 content"></Label>
    </StackLayout>
</TabView>
`,
})
export class AppComponent {}
