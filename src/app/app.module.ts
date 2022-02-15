import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ParentEmployeeComponent } from './components/parent-employee/parent-employee.component';
import { ChildEmployeeComponent } from './components/child-employee/child-employee.component';

@NgModule({
  declarations: [AppComponent, ParentComponent, ChildComponent, ParentEmployeeComponent, ChildEmployeeComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
