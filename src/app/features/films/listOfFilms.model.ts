import { FilmModel } from "./films.model";
// this is the response model we get from the films list
export class ListOfFilmsModel {
    results: FilmModel[];
}