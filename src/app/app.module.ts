import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './bai1/shared/header/header.component';
import { SidebarComponent } from './bai1/shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './bai1/shared/breadcrumb/breadcrumb.component';
import { FooterComponent } from './bai1/shared/footer/footer.component';
import { Bai1Component } from './bai1/pages/bai1/bai1.component';
import { Bai2Component } from './bai2/pages/bai2/bai2.component';
import { Footer2Component } from './bai2/shared/footer2/footer2.component';
import { Menu2Component } from './bai2/shared/menu2/menu2.component';
import { Header2Component } from './bai2/shared/header2/header2.component';
import { Sidebar2Component } from './bai2/shared/sidebar2/sidebar2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    FooterComponent,
    Bai1Component,
    Bai2Component,
    Footer2Component,
    Menu2Component,
    Header2Component,
    Sidebar2Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
