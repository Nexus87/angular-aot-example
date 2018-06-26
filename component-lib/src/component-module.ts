import { NgModule } from "@angular/core";
import { ButtonComponent } from "./Button/button.component";
@NgModule({
    declarations:[
        ButtonComponent
    ],
    exports: [
        ButtonComponent
    ],
})
export class ComponentModule{}