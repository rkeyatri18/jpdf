import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { Template1Component } from './template/template1/template1.component';
import { Template10Component } from './template/template10/template10.component';
import { Template11Component } from './template/template11/template11.component';
import { Template12Component } from './template/template12/template12.component';
import { Template13Component } from './template/template13/template13.component';
import { Template14Component } from './template/template14/template14.component';
import { Template15Component } from './template/template15/template15.component';
import { Template16Component } from './template/template16/template16.component';
import { Template2Component } from './template/template2/template2.component';
import { Template3Component } from './template/template3/template3.component';
import { Template4Component } from './template/template4/template4.component';
import { Template5Component } from './template/template5/template5.component';
import { Template6Component } from './template/template6/template6.component';
import { Template7Component } from './template/template7/template7.component';
import { Template8Component } from './template/template8/template8.component';
import { Template9Component } from './template/template9/template9.component';


const routes: Routes = [
  { path: '', redirectTo: 'template1', pathMatch: 'full' },
  { path: 'template1', component: Template1Component }, 
  { path: 'template2', component: Template2Component }, 
    { path: 'template3', component: Template3Component }, 
    { path: 'template4', component: Template4Component }, 
    { path: 'template5', component: Template5Component }, 
    { path: 'template6', component: Template6Component }, 
    { path: 'template7', component: Template7Component }, 
      { path: 'template8', component: Template8Component }, 
      { path: 'template9', component: Template9Component }, 
      { path: 'template10', component: Template10Component }, 
      { path: 'template11', component: Template11Component }, 
      { path: 'template12', component: Template12Component }, 
      { path: 'template13', component: Template13Component }, 
      { path: 'template14', component: Template14Component }, 
      { path: 'template18', component: Template15Component }, 
      { path: 'template15', component: Template16Component }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
