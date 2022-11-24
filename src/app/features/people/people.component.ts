import { Component, OnInit } from "@angular/core";
import { RequestsService } from "src/app/requests.service";


@Component({
	selector: "ngx-people",
	styleUrls: ["./people.component.scss"],
	templateUrl: "./people.component.html",
})
export class PeopleComponent implements OnInit {
	people: any[] = [];
	films: any[] = [];

	constructor(private service: RequestsService) { }

	ngOnInit() {
		this.getListOfPeople();
	}

	/**
	* this function fetch people
	*/
	getListOfPeople() {
		this.service.getListPeople().subscribe(
			(data: any) => {
				console.log(data);
				this.people = data.results;
			},
			this.getListOfFilms()
	);
	}

	/**
	 * this function fetch films
	 */
	getListOfFilms() {
		this.service.getListFilms().subscribe(
			(data: any) => {
				console.log(data);
				this.films = data.results;

			},
		);
	}
}
