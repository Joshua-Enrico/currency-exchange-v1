import { IsNotEmpty, IsString } from "class-validator";

export class HeaderDto {

    @IsString()
    @IsNotEmpty()
    authorization: string;

}

