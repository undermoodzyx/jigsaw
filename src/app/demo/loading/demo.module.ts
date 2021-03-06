import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {DefinedLoadingDemoComponent } from "./userDefined/app.component";
import {LoadingFullDemoComponent} from "./full/app.component";
import {BallLoadingDemoComponent} from "./ballLoading/app.component";
import {DomInnerDemoComponent} from "./domInner/app.component";
import {ColorfulLoadingDemoComponent} from "./color/app.component";
import {BallLoadingDemoModule} from "./ballLoading/app.module";
import {DefinedLoadingDemoModule} from "./userDefined/app.module";
import {DomInnerDemoModule} from "./domInner/app.module";
import {ColorfulLoadingDemoModule} from "./color/app.module";
import {LoadingFullDemoModule} from "./full/app.module";

const loadingDemoRoutes = [
    {
        path: '', redirectTo: 'basic', pathMatch: 'full'
    },
    {
        path: 'full', component: LoadingFullDemoComponent
    },
    {
        path: 'ballLoading', component: BallLoadingDemoComponent
    },
    {
        path: 'userDefined', component: DefinedLoadingDemoComponent
    },
    {
        path: 'domInner', component: DomInnerDemoComponent
    },
    {
        path: 'color', component: ColorfulLoadingDemoComponent
    },
    {
        path: '**', //fallback router must in the last
        component: LoadingFullDemoComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(loadingDemoRoutes),
        LoadingFullDemoModule,
        BallLoadingDemoModule,
        DefinedLoadingDemoModule,
        DomInnerDemoModule,
        ColorfulLoadingDemoModule,
    ]
})
export class LoadingDemoModule {
}
