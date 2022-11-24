import { Component, Input, OnInit } from "@angular/core";
import { RequestsService } from "src/app/requests.service";
import { CharacterModel } from "./character.model";


@Component({
	selector: "ngx-character",
	styleUrls: ["./character.component.scss"],
	templateUrl: "./character.component.html",
})
export class CharacterComponent implements OnInit {
	/**
	 * Input url to be used to fetch caracter information.
	 */
	@Input() url: string = '';

	/**
	 * The character model fetch from the url and to be used by the UI.
	 */
	character: CharacterModel | null = null;

	constructor(private service: RequestsService) { }


	ngOnInit() {
		this.service.getCharacterByUrl(this.url).subscribe(
			(data: CharacterModel) => {
				this.character = data;
			},
		);
	}


}
