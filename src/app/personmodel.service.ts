import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonModel } from './component/index/PersonModel';

@Injectable({
  providedIn: 'root'
})

export class PersonmodelService {
	uri = "http://localhost:4000/personmodels";
	constructor(private http:HttpClient ) {}
	addPersonModel(p_name, p_age, p_gender, p_number){
		const obj = {
			p_name : p_name,
			p_age : p_age,
			p_gender: p_gender,
			p_number: p_number
		};
	this.http.post(`${this.uri}/add`, obj)
		.subscribe(res => console.log('Done'));
	}
	
	getPersonModels(){
		return this
			.http
			.get(`${this.uri}`);
	}
	editPersonModel(id){
		return this
			.http
			.get(`${this.uri}/edit/${id}`);
	}
	updatePersonModel(p_name, p_age, p_gender, p_number, id){
		const obj = {
			p_name: p_name,
			p_age: p_age,
			p_gender:p_gender,
			p_number: p_number
		};
		this
			.http
			.post(`${this.uri}/update/${id}`, obj)
			.subscribe(res => console.log('Done'));
	}
	deletePersonModel(id){
		return this
			.http
			.get(`${this.uri}/delete/${id}`);
	}
}
