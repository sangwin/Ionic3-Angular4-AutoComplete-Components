import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MultipleFieldsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 @Component({
 	selector: 'page-multiple-fields',
 	templateUrl: 'multiple-fields.html',
 })
 export class MultipleFieldsPage {
 	comments;
 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 		this.comments = [];
 	}

 	/* Add one component on init */
 	
 	ionViewDidLoad() {
 		console.log('ionViewDidLoad MultipleFieldsPage');
 		this.comments.push({'title':'','description':''});
 	}

 	/* Add one more comment box */
 	
 	addComment(){
 		this.comments.push({'title':'','description':''}); 	 	
 	}

 	/* Delete particular comment box */
 	
 	deleteComment(index){
 		this.comments.splice(index,1);
 	}

 	/* Close modal */
 	
 	dismiss(){
 		console.log(this.comments); 	 	
 	}

 }
