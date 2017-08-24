/**
 * Created by David Maser on 23/08/2017.
 */
import RegisterState from '../core/RegisterState';
import Logger from '../core/Logger';
export default class Woops{
  constructor(args){
    this.args = args;
    this.build();
  }
  build(){
    try {
      if (typeof this.args === 'object') {
        this.args.log === true ? new Logger(this.args) : null;
        new RegisterState(this.args.origin, this.args.message, 'appErrors');
        console.warn(this.args.origin,this.args.type,this.args.message)
      } else {
        console.log('Can\'t execute the Warning module');
      }
    }catch(e){
      console.log('Error module threw an error. Ironic isn\'t it');
    }
  }
}