import { Component } from '@angular/core';
import { HeroBannerComponent } from '../hero-banner/hero-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroBannerComponent],
  template: `
    <app-hero-banner title="Home Page Title" description="Homepage Description" imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1wcIoqjt3ULngScaftZAVtBIQNNeEHkSv7dreGF6Eig&s" imageAlt="sea" />
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
