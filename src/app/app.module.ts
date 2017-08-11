import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import 'hammerjs';

import { SharedModule } from './core/modules/shared.module';
import { AppComponent } from './app.component';
import { ProjectModule } from './main/content/apps/dashboards/project/project.module';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FuseFakeDbService } from './fuse-fake-db/fuse-fake-db.service';
import { FuseMainModule } from './main/main.module';
import { PagesModule } from './main/content/pages/pages.module';
import { UIModule } from './main/content/ui/ui.module';
import { ComponentsModule } from './main/content/components/components.module';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

const appRoutes: Routes = [
    {
        path        : 'apps/mail',
        loadChildren: './main/content/apps/mail/mail.module#FuseMailModule'
    },
    {
        path        : 'apps/chat',
        loadChildren: './main/content/apps/chat/chat.module#FuseChatModule'
    },
    {
        path        : 'apps/calendar',
        loadChildren: './main/content/apps/calendar/calendar.module#FuseCalendarModule'
    },
    {
        path        : 'apps/todo',
        loadChildren: './main/content/apps/todo/todo.module#FuseTodoModule'
    },
    {
        path        : 'apps/file-manager',
        loadChildren: './main/content/apps/file-manager/file-manager.module#FuseFileManagerModule'
    },
    {
        path        : 'apps/contacts',
        loadChildren: './main/content/apps/contacts/contacts.module#FuseContactsModule'
    },
    {
        path      : '**',
        redirectTo: 'apps/dashboards/project'
    }
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports     : [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        SharedModule,

        InMemoryWebApiModule.forRoot(FuseFakeDbService, {delay: 125}),

        PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),

        FuseMainModule,

        ProjectModule,

        PagesModule,
        UIModule,
        ComponentsModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
