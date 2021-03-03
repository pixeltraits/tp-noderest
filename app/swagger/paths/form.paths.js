const addForm = {
  post: {
    tags: ['form'],
    summary: 'Login',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Login'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'OK'
      },
      401: {
        description: 'Unauthorized'
      },
      500: {
        description: 'Unexpected error'
      }
    }
  }
};
const getForm = {
  get: {
    tags: ['form'],
    summary: 'Login',
   
    responses: {
      200: {
        description: 'OK'
      },
      401: {
        description: 'Unauthorized'
      },
      500: {
        description: 'Unexpected error'
      }
    }
  }
};

export default {
  '/form': {...addForm,...getForm}
};
