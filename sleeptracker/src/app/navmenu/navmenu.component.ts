import { Component, OnInit, Input } from '@angular/core';
import { IonButton, ModalController, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline, batteryHalfOutline, statsChartOutline, bedOutline, closeCircleOutline } from 'ionicons/icons';
import { DateModalComponent } from '../date-modal/date-modal/date-modal.component';
import { StatsModalComponent } from '../stats-modal/stats-modal/stats-modal.component';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss'],
  imports: [IonButton, IonIcon],
})
export class NavmenuComponent  implements OnInit {
  @Input() hasLocation!:boolean;
  
  public ShowMenuOptions:boolean = false;
  public ShowMenuIcon:string = 'add-circle-outline';

  constructor(private modalController:ModalController) {
    addIcons({ addCircleOutline, batteryHalfOutline, statsChartOutline, bedOutline, closeCircleOutline });
  }
  ngOnInit() {
  }
  async doHapticFeedback() {
    await Haptics.impact({style: ImpactStyle.Heavy})
  }

  onButtonClick() {
    this.ShowMenuOptions = (!this.ShowMenuOptions) ? true : false;
    this.ShowMenuIcon = this.ShowMenuOptions ? 'close-circle-outline' : 'add-circle-outline';
    this.doHapticFeedback();
  }

  onSleepButtonClick() {
    this.modalController.create({
      component: DateModalComponent,
      componentProps: {
        logType: "Cryostasis"
      }
    }).then((modal) => {
      modal.present();
    });
    this.doHapticFeedback();
  }

  onDrowsyButtonClick() {
    this.modalController.create({
      component: DateModalComponent,
      componentProps: {
        logType: "Drowsiness"
      }
    }).then((modal) => {
      modal.present();
    });
    this.doHapticFeedback();
  }

  onStatsButtonClick() {
    this.modalController.create({
      component: StatsModalComponent
    }).then((modal) => {
      modal.present();
    });
    this.doHapticFeedback();
  }
}
