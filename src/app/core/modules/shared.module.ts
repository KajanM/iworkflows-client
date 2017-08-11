import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { FuseMdSidenavHelperDirective, FuseMdSidenavTogglerDirective } from '../directives/md-sidenav-helper/md-sidenav-helper.directive';
import { FusePipesModule } from '../pipes/pipes.module';
import { FuseConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { FuseCountdownComponent } from '../components/countdown/countdown.component';
import { FuseNavigationService } from '../components/navigation/navigation.service';
import { FuseLayoutService } from '../services/layout.service';
import { FuseMatchMedia } from '../services/match-media.service';
import { FuseNavbarService } from '../../main/navbar/navbar.service';
import { FuseMdSidenavHelperService } from '../directives/md-sidenav-helper/md-sidenav-helper.service';
import { FuseHljsComponent } from '../components/hljs/hljs.component';
import { FuseIfOnDomDirective } from '../directives/fuse-if-on-dom/fuse-if-on-dom.directive';

@NgModule({
    declarations   : [
        FuseMdSidenavHelperDirective,
        FuseMdSidenavTogglerDirective,
        FuseConfirmDialogComponent,
        FuseCountdownComponent,
        FuseHljsComponent,
        FuseIfOnDomDirective
    ],
    imports        : [
        FlexLayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        FusePipesModule,
        PerfectScrollbarModule,
        ReactiveFormsModule,
        ColorPickerModule,
        NgxDnDModule,
        NgxDatatableModule
    ],
    exports        : [
        FlexLayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        FuseMdSidenavHelperDirective,
        FuseMdSidenavTogglerDirective,
        FusePipesModule,
        FuseCountdownComponent,
        FuseHljsComponent,
        PerfectScrollbarModule,
        ReactiveFormsModule,
        ColorPickerModule,
        NgxDnDModule,
        NgxDatatableModule,
        FuseIfOnDomDirective
    ],
    entryComponents: [
        FuseConfirmDialogComponent
    ],
    providers      : [
        FuseNavigationService,
        FuseLayoutService,
        FuseMatchMedia,
        FuseNavbarService,
        FuseMdSidenavHelperService
    ]
})

export class SharedModule
{

}
