import { Component, OnInit } from "@angular/core";
import { RequestsService } from "src/app/requests.service";


@Component({
	selector: "ngx-veicles",
	styleUrls: ["./veicles.component.scss"],
	templateUrl: "./veicles.component.html",
})
export class VeiclesComponent implements OnInit {
	vehicles: any[] = [];

	constructor(private service: RequestsService) { }

	ngOnInit() { this.getListOfVeicles() }

	/**
	* this function fetch veicles
	*/
	getListOfVeicles() {
		this.service.getListVeicles().subscribe(
			(data: any) => {
				console.log(data);
				this.vehicles = data.results;
			},
		);
	}
}
