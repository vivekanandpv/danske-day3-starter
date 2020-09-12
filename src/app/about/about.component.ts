import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  clickHandler() {
    // programmatic navigation
    this.router.navigate(['/hr', 'Madurai', 2005], {
      fragment: 'my-fragment',
      queryParams: {
        country: 'India',
        state: 'Tamil Nadu',
        'reach-by': 'Air',
      },
    });
  }
}
