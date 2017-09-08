import {Component, NgZone} from '@angular/core';
import {ViewController} from 'ionic-angular';

@Component({
	selector: 'page-auto-complete',
	templateUrl: 'auto-complete.html',
})
export class AutoCompletePage {
	autocompleteItems;
	autocomplete;
	selectedItems;
	filteredItems;

	latitude: number = 0;
	longitude: number = 0;
	geo: any

	// service = new google.maps.places.AutocompleteService();

	constructor (public viewCtrl: ViewController, private zone: NgZone) {
		this.autocompleteItems = [];
		this.autocomplete = {
			query: ''
		};
		this.selectedItems = [];
		this.filteredItems = [];
				this.assignCopy();

		this.autocompleteItems =  [{"id":1,"name":"Towel"},{"id":2,"name":"Bath towel"},{"id":3,"name":"Body towel"},{"id":4,"name":"Slippers"},{"id":5,"name":"Toothbrush"},{"id":6,"name":"Shaving razor"},{"id":7,"name":"Hair Brush"},{"id":8,"name":"Hair band"},{"id":9,"name":"Cotton swab"},{"id":10,"name":"Negative ion hairdryer"},{"id":11,"name":"Sleepwear"},{"id":12,"name":"Bathrobe"},{"id":13,"name":"(Shampoo, conditioner, body soap, and hand soap bottles also available.)"},{"id":14,"name":"Men's toiletries (hair tonic, hair liquid, shaving lotion)"},{"id":15,"name":"Women's toiletries (face cleanser, face lotion, moisturizer)"},{"id":16,"name":"Sewing set"},{"id":17,"name":"Shampoo"},{"id":18,"name":"Conditioner"},{"id":19,"name":"Shower gel"},{"id":20,"name":"Soap"}]; 
	}

	dismiss() {
		this.viewCtrl.dismiss(this.selectedItems);
	}
	
	close(){
		this.viewCtrl.dismiss(this.selectedItems);
	}

	chooseItem(item: any) {
		this.selectedItems.push(item);
		this.geo = item;
		console.log(this.selectedItems);
		// this.geoCode(this.geo);//convert Address to lat and long
	}

	delete(i) {
		// chip.remove();
		this.selectedItems.splice(i,1);
		console.log(this.selectedItems);
	}

	updateSearch() {
		if (this.autocomplete.query == '') {
			this.autocompleteItems = [];
			return;
		}
		let me = this;

		me.autocompleteItems = [{"id":1,"name":"Towel"},{"id":2,"name":"Bath towel"},{"id":3,"name":"Body towel"},{"id":4,"name":"Slippers"},{"id":5,"name":"Toothbrush"},{"id":6,"name":"Shaving razor"},{"id":7,"name":"Hair Brush"},{"id":8,"name":"Hair band"},{"id":9,"name":"Cotton swab"},{"id":10,"name":"Negative ion hairdryer"},{"id":11,"name":"Sleepwear"},{"id":12,"name":"Bathrobe"},{"id":13,"name":"(Shampoo, conditioner, body soap, and hand soap bottles also available.)"},{"id":14,"name":"Men's toiletries (hair tonic, hair liquid, shaving lotion)"},{"id":15,"name":"Women's toiletries (face cleanser, face lotion, moisturizer)"},{"id":16,"name":"Sewing set"},{"id":17,"name":"Shampoo"},{"id":18,"name":"Conditioner"},{"id":19,"name":"Shower gel"},{"id":20,"name":"Soap"}]; 
		// this.service.getPlacePredictions({ input: this.autocomplete.query,  componentRestrictions: {country: 'TH'} }, function (predictions, status) {
			//   me.autocompleteItems = []; 
			//   me.zone.run(function () {
				//     predictions.forEach(function (prediction) {
					//       me.autocompleteItems.push(prediction.description);
					//     });
					//   });
					// });
				}

				//convert Address string to lat and long
				geoCode(address:any) {
					let geocoder = new google.maps.Geocoder();
					geocoder.geocode({ 'address': address }, (results, status) => {
						this.latitude = results[0].geometry.location.lat();
						this.longitude = results[0].geometry.location.lng();
						alert("lat: " + this.latitude + ", long: " + this.longitude);
					});
				}


				assignCopy(){
					this.filteredItems = Object.assign([], this.selectedItems);
				}

				filterItem(value){
					if(!value) this.assignCopy(); //when nothing has typed
					this.filteredItems = Object.assign([], this.autocompleteItems).filter(
						item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
						)
				}


			}