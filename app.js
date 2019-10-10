import request from 'request'
import yargs from 'yargs'

let url = 'https://rickandmortyapi.com/api/character/'
let aux

const list = function(argsv){
    if(argsv.filter){ 
        if(argsv.page){
            let auxurl = url + '?page=' + (argsv.page-1) + '&' + argsv.filter + '=' + argsv.value
            
            url = url + '?page=' + argsv.page + '&' + argsv.filter + '=' + argsv.value
            request({ url: url, json: true }, (error, response) => {
                if(response.body.info.pages == 1 && argsv.page > 1){
                    console.log('No existing page')
                }else{
                    response.body.results.forEach((element, i) =>{
                        console.log(`${i + 1}. Name: ${element.name}`)
                    });
                }
            });
        }else{
            url = url + '?' + argsv.filter + '=' + argsv.value
            request({ url: url, json: true }, (error, response) => {
                response.body.results.forEach((element, i) =>{
                    console.log(`${i + 1}. Name: ${element.name}`)
                });
            });
        }
    }else{
        if(argsv.page){
            url = url + '?page=' + argsv.page
            request({ url: url, json: true }, (error, response) => {
                if(response.body.info.pages == 1 && argsv.page > 1){
                    console.log('No existing page')
                }else{
                    response.body.results.forEach((element, i) =>{
                        console.log(`${i + 1}. Name: ${element.name}`)
                    });
                }
            });
        }else{
            request({ url: url, json: true }, (error, response) => {
                response.body.results.forEach((element, i) => {
                    console.log(`${i + 1}. Name: ${element.name}`)
                });
            });
        }      
    }
}

const view = function(argsv){
    url = url + '?name=' + argsv.name
        request({ url: url, json: true }, (error, response) => {
            response.body.results.forEach((element, i) =>{
                console.log(`${i + 1}. Name: ${element.name}\n  Status: ${element.status}\n  Location: ${element.location.name}\n  Gender: ${element.gender} `)
        });
    });
}


yargs.command({
    command: 'list',
    describe: 'list characters',
    builder: { 
      filter: {
        describe: 'what to filter by',
        demandOption: false,
        type: 'string',
      },
      value: {
        describe: 'Value of the filter',
        demandOption: false,
        type: 'string',
      },
      page: {
        describe: 'number of page',
        demandOption: false,
        type: 'int',
      },
  
    },
    handler: list,
});

yargs.command({
    command: 'view',
    describe: 'list characters',
    builder: { 
      name: {
        describe: 'name of character',
        demandOption: true,
        type: 'string',
      },
    },
    handler: view,
});

//parse to run yargs
yargs.parse();  