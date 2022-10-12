import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'finastra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appName = 'Angular NestJS Starter';
  innerWidth: any;
  dummyApps = [
    {
      "name": "Cash & Liquidity Management",
      "sso-initiation-urls": {
        "web": "https://app1.com"
      }
    },
    {
      "name": "Corporate Payments",
      "sso-initiation-urls": {
        "web": "https://app2.com"
      }
    },
    {
      "name": "Treasury Management",
      "sso-initiation-urls": {
        "web": "https://app3.com"
      }
    },
    {
      "name": "Risk & Compliance",
      "sso-initiation-urls": {
        "web": "https://app4.com"
      }
    }
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  nodeChosen(node: any) {
    this.router.navigate([node.path]);
  }

  brandAction() {
    this.router.navigate(['']);
  }
}
