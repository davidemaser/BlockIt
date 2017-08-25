/*
 * Created by David Maser on 29/06/2017.
 */
import {Config} from '../../config/Config';
export default class RegisterData{
  /**
   * Type blockIt (or the name of the app defined in config/Config)
   * in console to view the object and it's properties
   * @param {object[]} data
   * @param {string=} handle
   */
  constructor(data,handle){
    this.data = data;
    this.handle = handle;
    this.run();
  }
  run(){
    typeof window[Config.appObj] !== 'object' ? window[Config.appObj] = {} : null;
    if(typeof window[Config.appObj]['data'] !== 'object'){
      window[Config.appObj]['data'] = {};
    }
    window[Config.appObj]['data'][this.handle] = this.data;
  }
}