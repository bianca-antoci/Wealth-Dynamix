import { Component, OnInit } from "@angular/core";
import { RequestsService } from "src/app/requests.service";

@Component({
	selector: "ngx-loading-skeleton",
	styleUrls: ["./loading-skeleton.component.scss"],
	templateUrl: "./loading-skeleton.component.html",
})
export class LoadingSkeletonComponent implements OnInit {

	constructor(private service: RequestsService) { }

	ngOnInit() { }
}
