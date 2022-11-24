import { Component, Input, OnInit } from "@angular/core";
import { RequestsService } from "src/app/requests.service";
import { MovieModel } from "./movie.model";


@Component({
	selector: "ngx-movie",
	styleUrls: ["./movie.component.scss"],
	templateUrl: "./movie.component.html",
})
export class MovieComponent implements OnInit {
	/**
	 * Input url to be used to fetch caracter information.
	 */
	@Input() url: string = '';
	/**
	 * The character model fetch from the url and to be used by the UI.
	 */
	movie: MovieModel | null = null;

	constructor(private service: RequestsService) { }

	ngOnInit() {
		this.service.getFilmByUrl(this.url).subscribe(
			(data: MovieModel) => {
				this.movie = data;
			},
		);
	}


}
