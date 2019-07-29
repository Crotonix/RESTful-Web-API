import { Component, OnInit } from '@angular/core';
import { PersonModel } from './PersonModel';
import { PersonmodelService } from '../../personmodel.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

	personmodels:PersonModel[];

  constructor(private personmodelservice: PersonmodelService) { }

	ngOnInit() {
		this.personmodelservice
			.getPersonModels()
			.subscribe((data: PersonModel[]) => {
			this.personmodels = data;
			});
			
	}
	deletePersonModel(id){
		this.personmodelservice.deletePersonModel(id).subscribe(res => {
			console.log('Deleted');
		});
	}

}
