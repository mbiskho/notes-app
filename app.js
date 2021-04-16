const notes = require('./notes')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const { argv } = require('yargs')
yargs.version('1.1.5')
const note = []
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
        notes.addNotes(argv.title,argv.body);
    }
})

yargs.command({
    command: 'remove',
    description:'Remove a note',
    builder : {
        title : {
            description : 'Removing notes by title',
            demandOption : true,
            type : 'string',
        }
    },
    handler : ()=>{
        console.log('Removing a new note');
    }
})

yargs.command({
    command: 'list',
    description:'Listing a note',
    handler : ()=>{
        console.log('List all notes');
        console.log(note.length);
        for(let i = 0 ; i < note.length ; i ++){
            const now = notes[i];
            console.log(now.title);
            console.log(now.body);
        }
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