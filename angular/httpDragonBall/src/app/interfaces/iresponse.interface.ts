import { IPersonaje } from "./ipersonaje.interface";

export interface IResponse {
  items: IPersonaje[];
  meta: IMeta;
  links: ILink
}

export interface IMeta {
  "totalItems": number;
  "itemCount": number;
  "itemsPerPage": number;
  "totalPages": number;
  "currentPage": number;
}

export interface ILink {
  "first": string;
  "previous": string;
  "next": string;
  "last": string;
}
