import IAuthor from "./IAuthor";
import ILocation from "./ILocation";

export default interface IPainting {
    id: number;
    name: string;
    created: number;
    authorId: number;
    imageUrl: string;
    locationId: number;
    author: IAuthor;
    location: ILocation;
}
