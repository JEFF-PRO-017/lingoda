import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Calendar, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarEvent } from 'src/app/interfaces/interfaces';

@Component({
     selector: 'app-agenda2',
     templateUrl: './agenda2.component.html',
     styleUrls: ['./agenda2.component.scss'],
})
export class Agenda2Component implements OnInit {
     myCurrentTime: any;
     GMT:number=2

     constructor(private el: ElementRef) {}

     ngOnInit(): void {
          // Récupérer l'élément DOM pour le calendrier
          const calendarEl = this.el.nativeElement.querySelector('div');

          // Initialiser le calendrier avec les options
          const calendar = new Calendar(calendarEl, {
               plugins: [dayGridPlugin],
               initialView: 'dayGridWeek',
               headerToolbar: {
                    left: 'prev,today,next',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay',
               },
               initialDate: new Date(),
               events: this.getEvents(), // Récupérer la liste des événements
          });

          // Afficher le calendrier
          calendar.render();

          // this.myCurrentTime = this.getCurrentTimeUtcPlusOne();
     }

     private getEvents(): EventInput[] {
          // Obtenir la date actuelle
          const today = new Date();
          const events: EventInput[] = [];

          // Ajouter deux événements pour chaque jour de la semaine actuelle
          for (let i = 0; i < 7; i++) {
               // Calculer la date du jour actuel dans la boucle
               const currentDay = new Date(today);
               currentDay.setDate(today.getDate() - today.getDay() + i);

               // Vérifier si la date est postérieure à la date actuelle
               if (currentDay >= today) {
                    // Premier événement pour la journée actuelle
                    const event1ForCurrentDay: CalendarEvent = {
                         title: `Événement 1 pour ${this.formatDate(currentDay)}`,
                         start: new Date(currentDay),
                    };

                    // Deuxième événement pour la journée actuelle (à 14h00)
                    const event2ForCurrentDay: CalendarEvent = {
                         title: `Événement 2 pour ${this.formatDate(currentDay)}`,
                         start: new Date(currentDay).setHours(14, 0, 0),
                    };

                    // Ajouter les deux événements à la liste
                    events.push(event1ForCurrentDay, event2ForCurrentDay);
               }
          }

          // Renvoyer la liste des événements
          return events;
     }

     private formatDate(date: Date): string {
          // Formater la date avec le jour de la semaine, le mois et le jour
          const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
          return date.toLocaleDateString('fr-FR', options);
     }

     //  // Fonction pour formater un nombre avec un zéro devant s'il est inférieur à 10
     //   private formatNumber(num: number): string {
     //     return num < 10 ? `0${num}` : num.toString();
     //   }

     //   // Fonction pour obtenir l'heure actuelle dans le fuseau horaire UTC+01:00
     //   getCurrentTimeUtcPlusOne(): string {
     //     const now = new Date();
     //     const timeZoneOffset = 60; // UTC+01:00
     //     const utcPlusOneTime = new Date(now.getTime() + timeZoneOffset * 60000);

     //     const hours = this.formatNumber(utcPlusOneTime.getHours());
     //     const minutes = this.formatNumber(utcPlusOneTime.getMinutes());
     //     const seconds = this.formatNumber(utcPlusOneTime.getSeconds());

     //     return `${hours}:${minutes}:${seconds}`;
     //   }
}
