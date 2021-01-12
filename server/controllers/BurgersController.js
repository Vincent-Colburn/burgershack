import express from "express";
import BaseController from "../utils/BaseController";
import { burgersService } from "../services/BurgerServices"


export class BurgerController extends BaseController {
    constructor() {
        super("api/burgers");
        this.router
            .get("", this.getAll)
            .post("", this.create)
    }
    asyn getAll(req, res, next) {
        try {
            burgersService.getAll(res.data)
        } catch (error) {
            next(error);
        }
    }

    ayns getOne(req, res, next) {
        try {
            burgersService.getOne(res.data)
        } catch (error) {
            next(error)
        }

    }

    asyn create(req, res, next) {
        try {
            burgersService.create(res.data)
        } catch (error) {
            next(error)
        }
    }


}