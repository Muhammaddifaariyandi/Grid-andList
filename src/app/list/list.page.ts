import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public toastButton = [
    {
      text: "Dismiss",
      role: "cancel",
      handler: () => {
        console.log("dismiss click");
      }
    }
  ]

}
