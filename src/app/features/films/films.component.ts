import { Component, OnInit } from "@angular/core";
import { RequestsService } from "src/app/requests.service";
import { FilmModel } from "./films.model";
import { ListOfFilmsModel } from "./listOfFilms.model";


@Component({
	selector: "ngx-films",
	styleUrls: ["./films.component.scss"],
	templateUrl: "./films.component.html",
})
export class FilmsComponent implements OnInit {
	/**
	 * The list of all films fetched from the server to be rendered on the UI
	 */
	films: FilmModel[] = [];

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
			(data: ListOfFilmsModel) => {
				this.films = data.results;
				this.getImages();
			},
		);
	}

	/**
	 * This function will allocate an image to a film
	 */
	private getImages() {
		for (var film of this.films) {
			film.cover = "http://placekitten.com/600/400";
		}

	}

}
