import { Routes } from '@angular/router';
import { DynamicIframeComponent } from './dynamic-iframe/dynamic-iframe.component';

export const routes: Routes = [
    {
        path: "enum-flag-converter",
        component: DynamicIframeComponent,
        data: {
            name: "Enum Flag Converter",
            uri: "https://huntertran.github.io/enum-flag-converter/"
        }
    }
];
