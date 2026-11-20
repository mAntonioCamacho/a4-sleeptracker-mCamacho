import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SleepService } from 'src/app/services/sleep.service';
import { OvernightSleepData } from 'src/app/data/overnight-sleep-data';
import { StanfordSleepinessData } from 'src/app/data/stanford-sleepiness-data';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardHeader, IonIcon, IonLabel, IonCardContent, IonItem, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Component({
  selector: 'app-stats-modal',
  templateUrl: './stats-modal.component.html',
  styleUrls: ['./stats-modal.component.scss'],
  imports: [CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardHeader, IonIcon, IonLabel, IonCardContent, IonItem, IonButton]
})
export class StatsModalComponent  implements OnInit {
  sleepLogs:OvernightSleepData[] = [];
  drowsyLogs:StanfordSleepinessData[] = [];
  swapData:boolean = false;
  logType:string = 'Sleep';

  constructor(private modalController:ModalController) { 
    addIcons({ arrowBackOutline });
  }

  ngOnInit() {
    this.sleepLogs = SleepService.AllOvernightData;
    this.drowsyLogs = SleepService.AllSleepinessData;
  }

  async doHapticFeedback() {
    await Haptics.impact({style: ImpactStyle.Heavy})
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
    this.doHapticFeedback();
  }

  swapToOtherData() {
    this.swapData = (!this.swapData) ? true : false;
    this.logType = (this.swapData) ? 'Drowsy' : 'Sleep';
    this.doHapticFeedback();
  }


}
