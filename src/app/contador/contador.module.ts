import { ngModuleJitUrl } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador.component';

@NgModule({
declarations:[
    ContadorComponent
],
exports:[
    ContadorComponent
]
})
export class ContadorModule{}