import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SideNavComponent} from './component/side-nav/side-nav.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TodoListComponent, TodoListItem} from "./component/todolist/todolist.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {MockHttpClient} from "./component/todolist/http.mock";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatPseudoCheckboxModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserComponent } from './user/user.component';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    TodoListItem,
    TodoListComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatCheckboxModule,
    DragDropModule,
    MatPseudoCheckboxModule,
    MatIconModule,
    FontAwesomeModule,
    MatInputModule,
    MatCardModule,
    NgOptimizedImage,
    MatDividerModule,
  ],
  providers: [
    MockHttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
