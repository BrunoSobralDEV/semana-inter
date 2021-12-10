import { getRepository } from "typeorm";
import md5 from "crypto-js/md5";
import { User } from "../../entity/User";

import { UserSignIn } from "./dtos/user.signin.dtos";
import { UserSignUp } from "./dtos/user.signup.dtos";
import AppError from "../../shared/error/AppError";
import { response } from "express";

export default class UserService{

    async signin(user: UserSignIn){
        const userRepository = getRepository(User);

        const {email, password} = user;
        const passwordHash = md5(password).toString();

        //validar se já está cadastrado
        const existUser = await userRepository.findOne({where: {email, password: passwordHash}})
        if(!existUser){
            throw new AppError('User not found', 401)
        }

        return existUser;
    }

    async signup(user: UserSignUp){

    }
}