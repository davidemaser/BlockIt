import {Log} from '../../config/Config';
const logView = Symbol('local');
export default class Logger{
  constructor(args){
    this.args = args;
    this.write();
  }

  write(){
    if(typeof this.args === 'object'){
      Log.push(this.args);
    }
  }
}