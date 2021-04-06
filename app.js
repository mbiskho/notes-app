const notes = require('./notes')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const command = process.argv[2]



yargs.command({
    command: 'add',
    description:'Add a note',
    handler : ()=>{
        console.log('Adding a new note');
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



console.log(yargs.argv);

