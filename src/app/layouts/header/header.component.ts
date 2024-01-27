import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // isScrolled: boolean = false;

  // constructor(@Inject(DOCUMENT) private document: Document) {}

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const scrollPosition = this.document.documentElement.scrollTop || 0;
  //   this.isScrolled = scrollPosition > 0;
  // }
}
