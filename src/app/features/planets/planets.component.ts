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
	 * This function fetches the list of planets
	 * and update the UI.
	 */
	private getListOfPlanets() {
		this.service.getListPlanets().subscribe(
			(data: any) => {
				this.planets = data.results;

			},
		);
	}

}
