import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPrinterModule } from 'ngx-printer'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { HttpClientModule } from '@angular/common/http';  
import { Template1Component } from './template/template1/template1.component';
import { Template2Component } from './template/template2/template2.component'; 
import { MaterialFileInputModule } from 'ngx-material-file-input'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 
import { ToastrModule } from 'ngx-toastr';
import { Template3Component } from './template/template3/template3.component'; 
import { Template4Component } from './template/template4/template4.component';
import { MatExpansionModule } from '@angular/material/expansion'; 
import { ImageCropperModule } from 'ngx-image-cropper';
import { ModalModule } from 'angular-custom-modal'; 
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner'; 
import { ColorPickerModule } from 'ngx-color-picker';
import { Template5Component } from './template/template5/template5.component';
import { Template6Component } from './template/template6/template6.component';
import { Template7Component } from './template/template7/template7.component';
import { Template8Component } from './template/template8/template8.component';
import { Template9Component } from './template/template9/template9.component';
import { Template10Component } from './template/template10/template10.component';
import { Template11Component } from './template/template11/template11.component';
import { Template12Component } from './template/template12/template12.component';
import { Template13Component } from './template/template13/template13.component';
import { Template14Component } from './template/template14/template14.component';
import { Template15Component } from './template/template15/template15.component';
import { Template16Component } from './template/template16/template16.component';
import { Template17Component } from './template/template17/template17.component';
import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';
import { MatStepperModule } from '@angular/material/stepper';   
import { Ng2SearchPipeModule } from 'ng2-search-filter';   
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';    
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader'; 
import { NgxImageComparisonSliderModule } from 'ngx-image-comparison-slider'; 
import { SanitizeHtmlPipe } from './shared/pipes/sanitizeHtml.pipe';
@NgModule({
  declarations: [
    AppComponent,  
    SanitizeHtmlPipe,
    Template1Component,
    Template2Component, 
    Template3Component, 
    Template4Component, 
    Template5Component,
    Template6Component,
    Template7Component,
    Template8Component,
    Template9Component,
    Template10Component,
    Template11Component,
    Template12Component,
    Template13Component,
    Template14Component,
    Template15Component,
    Template16Component,
    Template17Component,  
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule, 
    PdfViewerModule,
    // PageModule,
    NgbModule,  
    NgxPrinterModule.forRoot({ printOpenWindow: true }),
    NgxSkeletonLoaderModule.forRoot(),
    BrowserAnimationsModule, 
    RichTextEditorAllModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxMatIntlTelInputModule,
    MatExpansionModule,
    ReactiveFormsModule, 
    NgxMatSelectSearchModule,
    AutocompleteLibModule,
    HttpClientModule,
    MaterialFileInputModule,
    MatNativeDateModule, 
    ImageCropperModule, 
    ColorPickerModule, 
    NgxImageComparisonSliderModule,
    MatStepperModule,
    ModalModule,  
    NgxSpinnerModule,
    ToastrModule.forRoot(),
  ],
  providers: [MatDatepickerModule,NgxSpinnerService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
