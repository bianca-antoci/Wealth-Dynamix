import { Component, OnInit } from "@angular/core";
import { RequestsService } from "src/app/requests.service";


@Component({
	selector: "ngx-films",
	styleUrls: ["./films.component.scss"],
	templateUrl: "./films.component.html",
})
export class FilmsComponent implements OnInit {
	films: any[] = [];

	constructor(private service: RequestsService) { }

	ngOnInit(): void {
		this.getListOfFilms();

	}

	/**
	 * This function fetches the list of films
	 * and update the UI.
	 */
	private getListOfFilms() {
		this.service.getListFilms().subscribe(
			(data: any) => {
				this.films = data.results;
				this.getImages();
			},
		);
	}

	/**
	 * This function will allocate a random image to a film
	 */
	private getImages() {
		for (var film of this.films) {
			film.cover = "http://placekitten.com/400/400";
		}

	}

}
