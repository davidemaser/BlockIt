/*
 * Created by David Maser on 19/06/2017.
 */
export const Config = {
  jsonPrefix:'config',
  appObj:'blockIt',
  appHead:'head',
  appRoot:'body',
  appStatus:'prod', //change this to dev if you want to see the pre-processed Faster tags
  appEvents:{
    enable:false, //this will turn on/off the mutation observer for all ftx-render objects
    root:'*[app-render]'
  },
  ignore:'ignore',
  ajax:{
    useDefault:true,
    root:{
      node:'data',
      url:'../data'
    },
    overWriteSaves:false
  },
  options:{
    app:{
      onFail:['killFunctions','emptyCache','log','restart'],
      onEnter:['runSniffer','runCycle','waitAndSnoop'],
      onLeave:['pauseFunctions','registerWait','stopFunctions','waitFor10ThenKillAll']
    },
    views:{
      model:'default'
    }
  },
  rules:{
    language:{
      restricted:['crap','poo','caca'],
      replacement:'***'
    }
  },
  userObjects:{
    enable:true,
    handle:'userObjects',
    array:{
      identifier:'arrays'
    },
    object:{
      identifier:'objects'
    },
    function:{
      identifier:'functions'
    },
    variable:{
      identifier:'vars'
    }
  }
};
export let Log = [];