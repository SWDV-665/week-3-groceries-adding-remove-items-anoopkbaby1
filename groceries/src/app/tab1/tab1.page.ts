import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery";

  items = [
    {
      name: "Apple",
      quantity: 5    
    },
    {
      name: "Carrot",
      quantity: 7    
    },
    {
      name: "Milk",
      quantity: 2    
    },
    {
      name: "Bread",
      quantity: 2    
    },
  ];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  async removeItem(item, index) {
    console.log("Removing Item - ", item, index);
    const toast = await this.toastCtrl.create({
      color: 'warning',
      message: 'Removing Item - ' + index + " ...",
      duration: 2000,
      position: 'bottom'

    });
    await toast.present();

    this.items.splice(index, 1);
  }

  addItem() {
    console.log("Adding Item");
    this.showAddItemPrompt();
  }

  async showAddItemPrompt() {
    const alert =await this.alertCtrl.create({
      header: 'Add Item',
      message: "Please enter item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.items.push(item);
          }
        }
      ]
    });
    await alert.present();
  }

}
