import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.page.html',
  styleUrls: ['./showroom.page.scss'],
})
export class ShowroomPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
