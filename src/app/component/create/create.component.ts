import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { PersonmodelService } from '../../personmodel.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

	angForm: FormGroup;

	 constructor(private personmodelservice : PersonmodelService, private fb: FormBuilder) { 
		this.createForm();
	 }
	createForm() {
		  this.angForm = this.fb.group({
			  p_name: ['', Validators.required ],
			  p_age: ['', Validators.required ],
			  p_gender: ['', Validators.required ],
			  p_number: ['', Validators.required ]
		 });
	}
	addPersonModel(p_name, p_age, p_gender, p_number){
		this.personmodelservice.addPersonModel(p_name, p_age, p_gender, p_number);
	}
	 ngOnInit() {
	}

}
