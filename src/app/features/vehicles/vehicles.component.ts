import { Component, OnInit } from "@angular/core";
import { RequestsService } from "src/app/requests.service";


@Component({
	selector: "ngx-vehicles",
	styleUrls: ["./vehicles.component.scss"],
	templateUrl: "./vehicles.component.html",
})
export class VehiclesComponent implements OnInit {
	vehicles: any[] = [];

	constructor(private service: RequestsService) { }

	ngOnInit() { this.getListOfVeicles() }

	/**
	 * This function fetches the list of veichles
	 * and update the UI.
	 */
	getListOfVeicles() {
		this.service.getListVeicles().subscribe(
			(data: any) => {
				this.vehicles = data.results;
			},
		);
	}
}
