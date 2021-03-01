import fs from "fs";
import HttpResolver from 'node-rest/httpResolver';
import Service from 'node-rest/service';

import { ROLES } from '../../config/roles.js';
import { formSchema } from './form.schema.js';
import jsonDataFile from './data/formData.json';


export default class FormService extends Service {

  initRoute() {
    this.routesConfig = [
      {
        route: '/form',
        execute: 'addForm',
        method: this.HTTP_METHODS.POST,
        schema: formSchema,
        roles: [ROLES.PUBLIC]
      }
    ];
  }

  async addForm(req, res) {
    const login = {
      email: req.body.email,
      password: req.body.password
    };

    try {
      console.log(jsonDataFile);
      this.writeJsonData(login);
      return res.send(login);
    } catch (error) {
      return HttpResolver.handle(error, `AddFormService#post`, res);
    }
  }

  writeJsonData(jsonData) {
    fs.writeFileSync('./app/services/form/data/formData.json', JSON.stringify(jsonData));
  }

}
