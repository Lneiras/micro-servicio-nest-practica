import {IsNumber, IsString, Min} from "class-validator";
import {Type} from "class-transformer";
export class CreateProductDto {

    @IsString()
    public name: string;


    @IsNumber({
        maxDecimalPlaces: 4,
    })
    @Min(0)
    @Type(() => Number) // transforma el valor que es recibido como un string a un number
    public price: number;
}
