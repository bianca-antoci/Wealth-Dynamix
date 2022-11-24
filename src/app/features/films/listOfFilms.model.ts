import { FilmModel } from "./films.model";
/**
*This is the response model we get from the Films list
*/
export class ListOfFilmsModel {
    results: FilmModel[];
}