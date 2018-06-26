import { Component, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'my-button',
    template: `<div (click)="onClick()">
    {{text}}
</div>`,
    styles: [`div {
    min-width: 100px;
    min-height: 30px;
    border: 1px solid black;
    padding: auto;
    border-radius: 5px;
    cursor: pointer;
}`]
})
export class ButtonComponent {
    @HostBinding("style.background-color")
    color: string = "red";

    @Input()
    text: string;
    onClick() {
        this.color = this.color === "red" ? "green" : "red";
    }
}