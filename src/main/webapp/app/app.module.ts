import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { AssignmentSharedModule } from 'app/shared/shared.module';
import { AssignmentCoreModule } from 'app/core/core.module';
import { AssignmentAppRoutingModule } from './app-routing.module';
import { AssignmentHomeModule } from './home/home.module';
import { AssignmentEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    AssignmentSharedModule,
    AssignmentCoreModule,
    AssignmentHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    AssignmentEntityModule,
    AssignmentAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class AssignmentAppModule {}
