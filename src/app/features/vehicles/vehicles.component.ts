import { Component, OnInit } from "@angular/core";
import { RequestsService } from "src/app/requests.service";
import { ListOfVehiclesModel } from "./listOfVehicles.model";
import { VehicleModel } from "./vehicles.model";


@Component({
	selector: "ngx-vehicles",
	styleUrls: ["./vehicles.component.scss"],
	templateUrl: "./vehicles.component.html",
})
export class VehiclesComponent implements OnInit {
	/**
	 * The list of all vehicles fetched from the server to be rendered on the UI
	 */
	vehicles: VehicleModel[] = [];

	constructor(private service: RequestsService) { }

	ngOnInit() { this.getListOfVeicles() }

	/**
	 * This function fetches the list of veichles
	 * and update the UI.
	 */
	private getListOfVeicles() {
		this.service.getListVeicles().subscribe(
			(data: ListOfVehiclesModel) => {
				this.vehicles = data.results;
			},
		);
	}
}
