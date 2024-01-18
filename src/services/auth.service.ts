import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService,
        @InjectRepository(User)
        private readonly userRepository: any,
    ) { }

    async authUser(username: string, password: string): Promise<any> {
        const user = await this.userRepository.findOne({ where: { name: username } });

        if (user) {
            // Comparamos la contraseña ingresada con la contraseña hasheada almacenada en la base de datos
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (isPasswordValid) {
                // El usuario ha sido autenticado correctamente, generamos un token JWT
                const payload = { name: user.username, sub: user.id };
                const accessToken = this.jwtService.sign(payload);

                return { accessToken };
            }
        }

        // Si el usuario no es autenticado, lanzamos una excepción UnauthorizedException
        throw new UnauthorizedException('Credenciales inválidas');
    }

    async createUser(userName: string, password: string): Promise<any> {
        // Genera una sal para el hash
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);

        console.log(`creating user ${userName}, password ${password}`, salt);
        const hashedPassword = await await bcrypt.hash(password, salt);

        // Crea un nuevo usuario con la contraseña hasheada
        const newUser = this.userRepository.create({
            name: userName,
            password: hashedPassword,
        });

        // Guarda el usuario en la base de datos
        const createdUser = await this.userRepository.save(newUser);

        return {
            'Message': 'Usuario creado correctamente',
        }
    }


}
