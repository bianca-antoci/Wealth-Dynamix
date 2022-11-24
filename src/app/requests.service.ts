import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
	providedIn: "root",
})
export class RequestsService {
	base = `https://swapi.dev/api`;
	imageUrl = `https://placekitten.com`;
	constructor(private service: HttpClient) { }

	headers() {
		const header: any = {};
		return new HttpHeaders(header);
	}

	getListFilms(): any {
		const requestHeaders = this.headers();
		return this.service.get<any>(`${this.base}/films`, {
			headers: requestHeaders,
		})
	}
	getListPeople(id:any): any {
		const requestHeaders = this.headers();
		return this.service.get<any>(`${this.base}/people`, {
			headers: requestHeaders,
		})
	}

	// getImage(): any {
	// 	const requestHeaders = this.headers();
	// 	return this.service.get<any>(`${this.imageUrl}/200/300`, {
	// 		headers: requestHeaders,
	// 	})
	// }
}
