import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonModel } from '../index/PersonModel';
import { PersonmodelService } from '../../personmodel.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

	personmodel : any = {};
	angForm: FormGroup;

    constructor(private route: ActivatedRoute, private router: Router, private personmodelservice: PersonmodelService, private fb: FormBuilder){
			this.createForm();
		}
		createForm(){
			this.angForm = this.fb.group({
				p_name: ['', Validators.required ],
				p_age: ['', Validators.required ],
				p_gender: ['', Validators.required ],
				p_number: ['', Validators.required ]
			});
		}
	updatePersonModel(p_name, p_age, p_gender, p_number){
			this.route.params.subscribe(params => {
				this.personmodelservice.updatePersonModel(p_name, p_age, p_gender, p_number, params['id']);
				this.router.navigate(['index']);
			});
	}
	ngOnInit() {
		this.route.params.subscribe(params => {
			this.personmodelservice.editPersonModel(params['id']).subscribe(res =>{
				this.personmodel = res;
			});
	});
  }
}
