import { Component, OnInit } from "@angular/core";
import { RequestsService } from "src/app/requests.service";


@Component({
	selector: "ngx-people",
	styleUrls: ["./people.component.scss"],
	templateUrl: "./people.component.html",
})
export class PeopleComponent implements OnInit {
	people: any[] = [];

	constructor(private service: RequestsService) { }

	ngOnInit() {
		this.getListOfPeople();
	}

	/**
	 * This function fetches the list of peoples
	 * and update the UI.
	 */
	private getListOfPeople() {
		this.service.getListPeople().subscribe(
			(data: any) => {
				this.people = data.results;
				this.getImages();
			},
		);
	}
	/**
	 * This function will allocate a random image to a film
	 */
	private getImages() {
		for (var person of this.people) {
			person.cover = "http://placekitten.com/400/400";
		}

	}
}
