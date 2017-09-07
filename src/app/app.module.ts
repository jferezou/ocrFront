import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { ResultatService } from './resultat.service';
import { PdfViewComponent } from './pdfView/pdfView.component';
import { CompositionViewComponent } from './pdfView/compositionView/compositionView.component';

@NgModule({
  declarations: [
    AppComponent, PdfViewerComponent, PdfViewComponent, CompositionViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule
  ],
  providers: [ResultatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
