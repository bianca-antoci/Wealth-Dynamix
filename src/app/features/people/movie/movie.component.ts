import { Component, Input, OnInit } from "@angular/core";
import { RequestsService } from "src/app/requests.service";


@Component({
	selector: "ngx-movie",
	styleUrls: ["./movie.component.scss"],
	templateUrl: "./movie.component.html",
})
export class MovieComponent implements OnInit {
	@Input() url: string = '';
	movie: any = null;

	constructor(private service: RequestsService) { }

	ngOnInit() {
		this.service.getFilmByUrl(this.url).subscribe(
			(data: any) => {
				this.movie = data;
			},
		);
	}


}
