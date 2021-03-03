import Joi from '@hapi/joi';


export const formSchema = {
  body: Joi.object().keys({
    email: Joi.string().email().required().max(100),
    password: Joi.string().required().max(255),
    brand: Joi.string().required().max(255),
    immat: Joi.string().required().max(255),
    adress: Joi.string().required().max(255),
    nom: Joi.string().required().max(255),
    prenom: Joi.string().required().max(255),
  })
};
