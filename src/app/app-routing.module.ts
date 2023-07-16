import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResistorCalculatorComponent } from './resistor-calculator/resistor-calculator.component';

const routes: Routes = [
  { path: '', redirectTo: 'calculator', pathMatch: 'full' },
  { path: 'calculator', component: ResistorCalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
