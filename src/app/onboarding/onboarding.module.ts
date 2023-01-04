import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Onboarding1PageRoutingModule } from './onboarding-routing.module';

import { OnboardingPage } from './onboarding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Onboarding1PageRoutingModule
  ],
  declarations: [OnboardingPage]
})
export class Onboarding1PageModule {}
