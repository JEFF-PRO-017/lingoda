import { Component } from '@angular/core';

@Component({
     selector: 'app-item-teachers',
     templateUrl: './item-teachers.component.html',
     styleUrls: ['./item-teachers.component.scss'],
})
export class ItemTeachersComponent {
     ishidden: boolean = true;

     showPlayBtn = true;

     playVideo() {
          const videoPlayer = document.querySelector('video') as HTMLVideoElement;
          if (videoPlayer) {
               videoPlayer.play();
               this.showPlayBtn = false;
          }
     }

     pauseVideo() {
          const videoPlayer = document.querySelector('video') as HTMLVideoElement;
          if (videoPlayer) {
               videoPlayer.pause();
               this.showPlayBtn = true;
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
          this.showPlayBtn = true;
     }

     onIsHidden() {
          this.ishidden ? (this.ishidden = false) : (this.ishidden = true);
     }
}
