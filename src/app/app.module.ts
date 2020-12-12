import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MessageListComponent } from "./components/message-list/message-list.component";
import { MessageItemComponent } from "./components/message-item/message-item.component";
import { MessageFormComponent } from "./components/message-form/message-form.component";
import { TutorialComponent } from "./components/tutorial/tutorial.component";
import { AutocompleteLibModule } from "angular-ng-autocomplete";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageItemComponent,
    MessageFormComponent,
    TutorialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AutocompleteLibModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
