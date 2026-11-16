import { Component, OnInit } from '@angular/core';
import { IonButton, ModalController, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline, batteryHalfOutline, statsChartOutline, bedOutline, closeCircleOutline } from 'ionicons/icons';
import { DateModalComponent } from '../date-modal/date-modal/date-modal.component';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss'],
  imports: [IonButton, IonIcon],
})
export class NavmenuComponent  implements OnInit {
  public ShowMenuOptions:boolean = false;
  public ShowMenuIcon:string = 'add-circle-outline';

  constructor(private modalController:ModalController) {
    addIcons({ addCircleOutline, batteryHalfOutline, statsChartOutline, bedOutline, closeCircleOutline });
  }
  ngOnInit() {
  }

  onButtonClick() {
    this.ShowMenuOptions = (!this.ShowMenuOptions) ? true : false;
    this.ShowMenuIcon = this.ShowMenuOptions ? 'close-circle-outline' : 'add-circle-outline';
  }

  onSleepButtonClick() {
    this.modalController.create({
      component: DateModalComponent,
      componentProps: {
        logType: "Nap"
      }
    }).then((modal) => {
      modal.present();
    });
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
  }

  onStatsButtonClick() {
    console.log("I stat that");
  }
}
