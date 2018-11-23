import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrimaryTabsModulePage } from './primary-tabs-module';

@NgModule({
  declarations: [
    PrimaryTabsModulePage,
  ],
  imports: [
    IonicPageModule.forChild(PrimaryTabsModulePage),
  ]
})
export class PrimaryTabsModulePageModule {}
