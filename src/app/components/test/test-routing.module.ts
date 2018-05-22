import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test.component';
import { ToolComponent } from './tool/tool.component';




const routes: Routes = [
  {
    path: '',
    component: TestComponent,
    children: [
      {path: 'tool', component: ToolComponent}
    ]
  },
];
@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes) ],
  declarations: [],
  exports: [ RouterModule ]
})
export class TestRoutingModule { }
