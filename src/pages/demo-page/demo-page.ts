import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {AutoCompletePage} from '../auto-complete/auto-complete';
import {MultipleFieldsPage} from '../multiple-fields/multiple-fields';
/**
 * Generated class for the AddJobPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 @Component({
   selector: 'page-demo-page',
   templateUrl: 'demo-page.html',
 })
 export class DemoPage {
   address;
   selectedItems;
   private todo : FormGroup;
   constructor( private formBuilder: FormBuilder,
     private ModalCtrl:ModalController ) {
     this.todo = this.formBuilder.group({
       username: ['', Validators.required],
       phone: ['',  [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
       email: ['',  [Validators.required, ValidationService.emailValidator]],
       password: ['',[Validators.required, ValidationService.passwordValidator]],
       description: ['',Validators.required],
       start_time: ['',Validators.required],
       end_time: ['',Validators.required],
       date: ['',Validators.required],
       toppings: ['',Validators.required],
       address: ['',Validators.required]
     });
     this.address = {
       place: ''
     };
     this.selectedItems = [];
   }

   logForm(){
     console.log(this.todo.value);
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad AddJobPage');
   }


   delete(i) {
     // chip.remove();
     this.selectedItems.splice(i,1);
     console.log(this.selectedItems);
   }


   showAddressModal () {
     let modal = this.ModalCtrl.create(AutoCompletePage);
     let me = this;
     modal.onDidDismiss(data => {
       this.selectedItems = data;
     });
     modal.present();
   }

   showMultipleCommentsModal () {
     let modal = this.ModalCtrl.create(MultipleFieldsPage);
     let me = this;
     modal.onDidDismiss(data => {
       // this.selectedItems = data;
       console.log(data);
     });
     modal.present();
   }

 }

 export class ValidationService {
   static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
     let config = {
       'required': 'Required',
       'invalidCreditCard': 'Is invalid credit card number',
       'invalidEmailAddress': 'Invalid email address',
       'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
       'minlength': `Minimum length ${validatorValue.requiredLength}`
     };

     return config[validatorName];
   }

   static creditCardValidator(control) {
     // Visa, MasterCard, American Express, Diners Club, Discover, JCB
     if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
       return null;
     } else {
       return { 'invalidCreditCard': true };
     }
   }

   static emailValidator(control) {
     // RFC 2822 compliant regex
     if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
       return null;
     } else {
       return { 'invalidEmailAddress': true };
     }
   }

   static passwordValidator(control) {
     // {6,100}           - Assert password is between 6 and 100 characters
     // (?=.*[0-9])       - Assert a string has at least one number
     if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
       return null;
     } else {
       return { 'invalidPassword': true };
     }
   }
 }