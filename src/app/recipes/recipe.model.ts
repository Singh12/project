import { Ingredient } from '../shared/ingredient.model';
export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingrdient: Ingredient[];
    constructor(name: string, description: string, imagePath: string, ingrdient: Ingredient[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingrdient = ingrdient;
    }
}
