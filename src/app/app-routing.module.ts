import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Banner1Component } from './components/banner1/banner1.component';
import { Banner2Component } from './components/banner2/banner2.component';
import { Banner3Component } from './components/banner3/banner3.component';
import { Banner4Component } from './components/banner4/banner4.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  { path: '', redirectTo: 'header', pathMatch: 'full' },
  {path: 'header', component: HeaderComponent},
  {path: 'banner1', component: HeaderComponent},
  {path: 'banner2', component: HeaderComponent},
  {path: 'banner3', component: HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
