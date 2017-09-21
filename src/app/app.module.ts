import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

import { Palynologie } from './palynologie/palynologie.component';
import { Residus } from './residus/residus.component';
import { AggregationResidus } from './residus/aggregation/aggregation.component';
import { Accueil } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { PdfViewComponentPalynologie } from './palynologie/pdfView/pdfView.component';
import { PdfViewComponentResidus } from './residus/pdfView/pdfView.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: Accueil },
  { path: 'palynologie', component: Palynologie },
  { path: 'residus', component: Residus },
  { path: 'aggregationResidus', component: AggregationResidus },  
 ];

@NgModule({
  declarations: [
    AppComponent, PdfViewerComponent, PdfViewComponentPalynologie, PdfViewComponentResidus, Palynologie, Residus, AggregationResidus, Accueil
  ],
  imports: [
  RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
