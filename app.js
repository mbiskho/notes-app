const notes = require('./notes')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const { argv } = require('yargs')
const command = process.argv[2]

yargs.version('1.1.5')

yargs.command({
    command: 'add',
    description:'Add a note',
    builder : {
        title:{
            description : 'Note title',
            type:'string',
            demandOption : true
        },
        body:{
            description:'Note body',
            type : 'string',
            demandOption : true
        }
    },
    handler : ()=>{
       console.log('====================================');
       console.log("Adding command");
       console.log("Title : ",argv.title);
       console.log("Body : ",argv.body);
       console.log('====================================');
    }
})

yargs.command({
    command: 'remove',
    description:'Remove a note',
    handler : ()=>{
        console.log('Removing a new note');
    }
})

yargs.command({
    command: 'list',
    description:'Listing a note',
    handler : ()=>{
        console.log('Listing a new note');
    }
})

yargs.command({
    command: 'read',
    description:'Read a note',
    handler : ()=>{
        console.log('Reading a new note');
    }
})

yargs.parse()