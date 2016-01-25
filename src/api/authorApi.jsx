import _ from "lodash";
import mockData from './mockData';

export default class AuthorApi {
  constructor() {

  }
  clone(item){
      return JSON.parse(JSON.stringify(item));
  }
  getAll(){
    return this.clone(mockData.authors);
  }
}
