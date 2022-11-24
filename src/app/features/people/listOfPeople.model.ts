import { PersonModel } from "./people.model";

/**
*This is the response model we get from the Films list
*/
export class ListOfPeopleModel {
    results: PersonModel[];
}