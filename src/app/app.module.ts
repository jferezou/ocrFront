import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

import { T1Component } from './t1.component';
import { T2Component } from './t2/t2.component';
import { AppComponent } from './app.component';
import { ResultatService } from './resultat.service';
import { PdfViewComponent } from './pdfView/pdfView.component';
import { PdfViewComponentT2 } from './t2/pdfView/pdfView.component';
import { CompositionViewComponent } from './pdfView/compositionView/compositionView.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'traitementT1', component: T1Component },
  { path: 'traitementT2', component: T2Component },
 ];

@NgModule({
  declarations: [
    AppComponent, PdfViewerComponent, PdfViewComponent, PdfViewComponentT2, CompositionViewComponent, T1Component, T2Component
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
  providers: [ResultatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
