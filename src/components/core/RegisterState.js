/*
 * Created by David Maser on 29/06/2017.
 */
import {Config} from '../../config/Config';
export default class RegisterState{
  /**
   * This class registers states and state changes and a Config object
   * Type __faster__ (or the name of the app defined in config/Config)
   * in console to view the object and it's properties
   * @param {string} obj
   * @param {string} val
   * @param {string=} parent
   */
  constructor(obj,val,parent){
    this.obj = obj;
    this.val = val;
    this.parent = parent;
    this.run();
  }
  run(){
    typeof window[Config.appObj] !== 'object' ? window[Config.appObj] = {} : null;
    if(this.parent !== '' && this.parent !== undefined){
      if(typeof window[Config.appObj][this.parent] === 'object'){
        window[Config.appObj][this.parent][this.obj] = this.val;
      }else{
        window[Config.appObj][this.parent] = {};
        window[Config.appObj][this.parent][this.obj] = this.val;
      }
    }else{
      window[Config.appObj][this.obj] = this.val;
    }
  }
}