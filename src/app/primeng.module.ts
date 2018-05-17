import { NgModule } from '@angular/core';

import * as PrimeNgAllModule from 'primeng/primeng';

function AllModuleToArray () {
  const arr = [];
  for (const i in PrimeNgAllModule) {
    if (PrimeNgAllModule.hasOwnProperty(i) && i.indexOf('Module') > 0) {
      arr.push(PrimeNgAllModule[i]);
    }
  }
  return arr;
}

@NgModule({
  exports: AllModuleToArray()
})
export class PrimengModule { }
