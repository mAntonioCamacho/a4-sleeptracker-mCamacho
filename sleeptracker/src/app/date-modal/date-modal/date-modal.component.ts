import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardHeader, IonIcon, IonLabel, IonCardContent, IonItem, IonButton, IonDatetime, IonRange, IonInput } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-date-modal',
  templateUrl: './date-modal.component.html',
  styleUrls: ['./date-modal.component.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonIcon, IonLabel, IonItem, IonButton, IonDatetime, IonRange, IonInput, CommonModule, FormsModule]
})
export class DateModalComponent  implements OnInit {

  startTime!:string;
  startDate = new Date().toISOString().split('T')[0];
  endTime!:string;
  endDate = this.startDate;
  public drowsyValue = 1;
  public logType!:string; 

  constructor(private modalController:ModalController) {
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
      startT: this.startTime,
      startD: this.startDate,
      endT: this.endTime,
      endD: this.endDate
    };
    console.log(logged_time);
  }

  logDrowsyValue() {
    var logged_drowsy_value = this.drowsyValue;
    console.log(logged_drowsy_value);
  }

}
