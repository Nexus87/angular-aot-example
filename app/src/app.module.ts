import { NgModule } from "@angular/core";
import { MainComponent } from "./main.component";
import { ComponentModule } from "component-lib";
import { MatButtonModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { OnsenModule } from "ngx-onsenui";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
    declarations:[
        MainComponent
    ],
    imports: [
        BrowserModule,
        MatButtonModule,
        ComponentModule,
        OnsenModule
    ],
    exports: [
    ],
    bootstrap: [
        MainComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule{}