/**
 * Created by David Maser on 23/08/2017.
 */
import axios from 'axios';
import {Config} from '../config/Config';
import Woops from './core/Woops';
import RegisterData from './core/RegisterData';
import ParseJson from '../components/ParseJson';
export default class Init{
  constructor(src,process){
    this.src = `${Config.ajax.root.url}/${src}.json`;
    this.process = process;
    this.run()
  }
  run(){
    axios.get(this.src)
      .then((response) => {
        if (Config.ajax.useDefault === true) {
          new RegisterData(response.data,'init');
        }
      })
      .then(()=>{
        new ParseJson(window[Config.appObj].data,'init','rules')
      })
      .catch((error) => {
        new Woops({
          origin: 'GetAjax.run',
          type: 'AJAX Error',
          message: error,
          log: false
        })
      });
  }
}