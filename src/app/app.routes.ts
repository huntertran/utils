import { Routes } from '@angular/router';
import { DynamicIframeComponent } from './dynamic-iframe/dynamic-iframe.component';

export const routes: Routes = [
    {
        path: "enum-flag-converter",
        component: DynamicIframeComponent,
        data: {
            name: "Enum Flag Converter",
            icon: "flag",
            uri: "https://huntertran.github.io/enum-flag-converter/"
        }
    },
    {
        path: "guid-generator",
        component: DynamicIframeComponent,
        data: {
            name: "GUID Generator",
            icon: "fingerprint",
            uri: "https://huntertran.github.io/guid-generator/"
        }
    },
    {
        path: "password-generator",
        component: DynamicIframeComponent,
        data: {
            name: "Password Generator",
            icon: "lock",
            uri: "https://huntertran.github.io/password-generator/"
        }
    }
];
