import * as Joi from 'joi';

export const envSchema = Joi.object({
    PORT: Joi.string().default(3000),
    DATABASE_USERNAME: Joi.string().required(),
    DATABASE_PASSWRD: Joi.string().required()
})