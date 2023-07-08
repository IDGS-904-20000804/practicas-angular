import { Ingredient } from "./Ingredient";
import { Size } from "./Size";

export interface Pizza{
    size: Size,
    ingredients: Ingredient[],
    total: number,
}