import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
     selector: 'app-detail-teacher',
     templateUrl: './detail-teacher.component.html',
     styleUrls: ['./detail-teacher.component.scss'],
})
export class DetailTeacherComponent {
     ishidden: boolean = true;

     onIsHidden() {
          this.ishidden ? (this.ishidden = false) : (this.ishidden = true);
     }

     ishiddenVideo: boolean = true;

     showPlayBtnVideo = true;

     basicData: any;

     basicOptions: any;
     constructor(private el: ElementRef, private renderer: Renderer2) { }


     ngOnInit() {
          const documentStyle = getComputedStyle(document.documentElement);
          const textColor = documentStyle.getPropertyValue('--text-color');
          const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
          const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

          this.basicData = {
               labels: ['1', '2', '3', '4','5'],
               datasets: [
                    {
                         label: 'Sales',
                         data: [2, 14, 45, 40,15],
                         backgroundColor: [
                              'rgba(255, 159, 64, 0.2)',
                              'rgba(75, 192, 192, 0.2)',
                              'rgba(54, 162, 235, 0.2)',
                              'rgba(153, 102, 255, 0.2)',
                         ],
                         borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                         borderWidth: 1,
                    },
               ],
          };

          this.basicOptions = {
               plugins: {
                    legend: {
                         labels: {
                              color: textColor,
                         },
                    },
               },
               scales: {
                    y: {
                         beginAtZero: true,
                         ticks: {
                              color: textColorSecondary,
                         },
                         grid: {
                              color: surfaceBorder,
                              drawBorder: false,
                         },
                    },
                    x: {
                         ticks: {
                              color: textColorSecondary,
                         },
                         grid: {
                              color: surfaceBorder,
                              drawBorder: false,
                         },
                    },
               },
          };
     }

     @HostListener('window:scroll', ['$event'])
     onWindowScroll(event: Event) {
       const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
       const targetElement = this.el.nativeElement.querySelector('#navbar-example2');
   
       // Modifiez la condition selon votre besoin
       if (scrollPosition > 300) {
         this.renderer.addClass(targetElement, 'fixed-top');
       } else {
         this.renderer.removeClass(targetElement, 'fixed-top');
       }
     }

     playVideo() {
          const videoPlayer = document.querySelector('video') as HTMLVideoElement;
          if (videoPlayer) {
               videoPlayer.play();
               this.showPlayBtnVideo = false;
          }
     }

     pauseVideo() {
          const videoPlayer = document.querySelector('video') as HTMLVideoElement;
          if (videoPlayer) {
               videoPlayer.pause();
               this.showPlayBtnVideo = true;
          }
     }

     showControls() {
          const videoPlayer = document.querySelector('video') as HTMLVideoElement;
          if (videoPlayer && !videoPlayer.paused) {
               videoPlayer.controls = true;
          }
     }

     hideControls() {
          const videoPlayer = document.querySelector('video') as HTMLVideoElement;
          if (videoPlayer && !videoPlayer.paused) {
               videoPlayer.controls = false;
          }
     }

     showPlayButton() {
          this.showPlayBtnVideo = true;
     }

     onIsHiddenVideo() {
          this.ishidden ? (this.ishidden = false) : (this.ishidden = true);
     }
}
