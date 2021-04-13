import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppParent } from './app-parent/app-parent.component';
import { AppChild2Component } from './app-child2/app-child2.component';
import { MyCompoComponent } from './my-compo/my-compo.component';
import { MySvcService } from './my-svc.service';
import { SvcTestParenService } from './svc-test-paren.service';
import { IncreasepowerPipe } from './increasepower.pipe';
import { HighlightDirective } from './highlight.directive';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AppParent,
    AppChild2Component,
    MyCompoComponent,
    IncreasepowerPipe,
    HighlightDirective,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    MySvcService,
    SvcTestParenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
