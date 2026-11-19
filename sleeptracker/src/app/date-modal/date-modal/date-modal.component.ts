import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardHeader, IonIcon, IonLabel, IonCardContent, IonItem, IonButton, IonDatetime, IonRange, IonInput } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { SleepService } from 'src/app/services/sleep.service';
import { OvernightSleepData } from 'src/app/data/overnight-sleep-data';
import { StanfordSleepinessData } from 'src/app/data/stanford-sleepiness-data';

@Component({
  selector: 'app-date-modal',
  templateUrl: './date-modal.component.html',
  styleUrls: ['./date-modal.component.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonIcon, IonLabel, IonItem, IonButton, IonDatetime, IonRange, IonInput, CommonModule, FormsModule]
})
export class DateModalComponent  implements OnInit {
  startTime:string = new Date().toLocaleTimeString("en-GB",{
    hour:"2-digit",
    minute:"2-digit",
    hour12:false,
  });
  startDate = new Date().toISOString().split('T')[0];
  
  endTime:string = this.startTime;
  endDate = this.startDate;
  public drowsyValue = 1;
  public logType!:string; 

  constructor(private modalController:ModalController, private sleepService:SleepService) {
    addIcons({ arrowBackOutline });
  }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  logSleepTime() {
    var logged_time = {
      start: new Date(`${this.startDate}T${this.startTime}`),
      end: new Date(`${this.endDate}T${this.endTime}`)
    };
    console.log(logged_time);

    this.sleepService.logOvernightData(new OvernightSleepData(logged_time.start, logged_time.end));
  }

  logDrowsyValue() {
    var logged_drowsy_value = this.drowsyValue;
    this.sleepService.logSleepinessData(new StanfordSleepinessData(logged_drowsy_value));
  }

}
