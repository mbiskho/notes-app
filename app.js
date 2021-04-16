const notes = require('./notes')
const validator = require('validator')
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
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    description:'Listing a note',
    handler : ()=>{
       notes.listNote()
    }
    
})

yargs.command({
    command: 'read',
    description:'Read a note',
    builder : {
        title : {
            description : 'Reading a note',
            demandOption : true,
            type : 'string'
        }
    },
    handler : ()=>{
        notes.readNote(argv.title)
    }
})

yargs.parse()