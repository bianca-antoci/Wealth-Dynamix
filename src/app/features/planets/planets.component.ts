import { Component, OnInit } from "@angular/core";
import { RequestsService } from "src/app/requests.service";


@Component({
	selector: "ngx-planets",
	styleUrls: ["./planets.component.scss"],
	templateUrl: "./planets.component.html",
})
export class PlanetsComponent implements OnInit {

	planets: any[] = [];

	constructor(private service: RequestsService) { }

	ngOnInit() { this.getListOfPlanets() }

	/**
	 * this function fetch planets
	 */
	getListOfPlanets() {
		this.service.getListFilms().subscribe(
			(data: any) => {
				console.log(data);
				this.planets = data.results;

			},
		);
	}

}
