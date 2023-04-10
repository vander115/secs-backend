import { Request, Response } from 'express'; 

export class UsersController {
    public async show(request: Request, response: Response) {
        return response.status(200).json({
            message: 'show users'
        })
    }
}