import {Shopper} from "./Shopper";
import {Item} from "./Item";

export interface ShoppingList {
    id: number;
    shopper: Shopper;
    items: Item[];
}