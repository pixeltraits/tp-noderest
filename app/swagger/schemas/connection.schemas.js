export const Login = {
  type: 'object',
  properties: {
    email: {
      type: 'string'
    },
    password: {
      type: 'string',
      format: 'password'
    },
    brand: {
      type: 'string'
    },
    immat: {
      type: 'string'
    },
    adress: {
      type: 'string'
    },
    nom: {
      type: 'string'
    },
    prenom: {
      type: 'string'
    }
  }
};
