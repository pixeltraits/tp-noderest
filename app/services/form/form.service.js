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
      },
      {
        route: '/form',
        execute: 'getForm',
        method: this.HTTP_METHODS.GET,
        schema: null,
        roles: [ROLES.PUBLIC]
      }
    ];
  }

  async addForm(req, res) {
    try {
      // console.log(jsonDataFile);
      this.writeJsonData(req.body);
      return res.send();
    } catch (error) {
      return HttpResolver.handle(error, `AddFormService#post`, res);
    }
  }

  async getForm(req, res) {
    try {
      console.log(jsonDataFile);
      // this.writeJsonData(login);
      return res.send(jsonDataFile);
    } catch (error) {
      return HttpResolver.handle(error, `AddFormService#post`, res);
    }
  }
  writeJsonData(jsonData) {
    fs.writeFileSync('./app/services/form/data/formData.json', JSON.stringify(jsonData));
  }

}
