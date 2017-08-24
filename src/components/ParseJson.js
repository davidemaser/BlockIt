/**
 * Created by David Maser on 24/08/2017.
 */
import {Config} from '../config/Config';
export default class ParseJson{
  constructor(data,node,level){
    this.data = data;
    this.node = node;
    this.level = level || null;
    this.run();
  }
  run(){
    if(typeof this.data === 'object'){
      let o;
      let obj = this.data;
      for(o in obj){
        o === this.node ? extractNode(obj[o],this.level) : null;
      }
    }
    function extractNode(node,level){
      let obj = level !== null ? node[Config.jsonPrefix][level] : node[Config.jsonPrefix];
      let o;
      for(o in obj){
        console.log(o,obj[o]);
      }
    }
  }
}