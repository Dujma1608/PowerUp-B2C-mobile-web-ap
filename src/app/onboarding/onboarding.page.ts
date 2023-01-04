import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-onboarding1',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss',],
})
export class OnboardingPage implements OnInit {
  currentPage = 3;

  onboardingTitles = [
    "Charger",
    "Connect car",
    "Scan QR code",
    "Start charging"
  ]

  onboardingSubtitles = [
    "Park close to charger",
    "Plug in charging cable into your car",
    "Use your phone to scan QR code displayed on charger to start charging",
    "You can monitor charging status from \n anywhere within mobile app"
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToNextSlide() {
    this.currentPage++

    if(this.currentPage == this.onboardingTitles.length+1) {
      this.currentPage =1
    }

  }

}
