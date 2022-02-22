import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ParentEmployeeComponent } from './components/parent-employee/parent-employee.component';
import { ChildEmployeeComponent } from './components/child-employee/child-employee.component';
import { ParentFormComponent } from './components/parent-form/parent-form.component';
import { ChildFormComponent } from './components/child-form/child-form.component';
import { ParentBackendComponent } from './components/parent-backend/parent-backend.component';
import { ChildBackendComponent } from './components/child-backend/child-backend.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ParentEmployeeComponent,
    ChildEmployeeComponent,
    ParentFormComponent,
    ChildFormComponent,
    ParentBackendComponent,
    ChildBackendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
