import { Component, Input } from '@angular/core';

//<app-hero-banner title="''" description="''" imagePath="''" imageAlt="''" />

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [],
  template: `
    <div class="w-full h-[50vh] bg-orange-100" >
      <div class="m-auto h-full w-3/4 flex">
        <div class="w-2/4 flex flex-col items-center justify-center text-center">
          <p class="text-3xl font-bold">{{ title }}</p>
          <p class="text-xl">{{ description }}</p>
        </div>
        <div class="w-2/4 flex flex-col items-center justify-center text-center bg-orange-300">
          <img class="rounded object-cover w-full h-full" [src]="imagePath" [alt]="imageAlt">
        </div>
      </div>
    </div>
  `,
  styleUrl: './hero-banner.component.css'
})
export class HeroBannerComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() imagePath = '';
  @Input() imageAlt = '';
}
