import { Component } from '@angular/core';
import { HeroBannerComponent } from '../hero-banner/hero-banner.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeroBannerComponent],
  template: `
    <app-hero-banner 
      title="This is About Page" 
      description="I should write things about the company here" 
      imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXImjoKt-0Fggpjxs329v5b6l5eHyNXsq0a-zPTIt0zg&s" 
      imageAlt="sun" 
    />
  `,
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
