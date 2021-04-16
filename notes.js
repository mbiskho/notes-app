const fs = require('fs');
const { boolean } = require('yargs');
const chalk = require('chalk')

const getNotes = ()=>{
    return "Your notes.."
}

const isExist = (notes,title)=>{
    var answer = false
    notes.forEach(element => {
        if(element.title == title)
            answer = true
    });
    return answer
}

const addNotes = (title,body)=>{
    const notes = loadData()
    if(isExist(notes,title) == false){
        notes.push({
            title : title,
            body : body
        })
        saveNote(notes)
        console.log(chalk.green('Adding notes succes'));
    }else{
        console.log(chalk.red.inverse(`Notes with title ${title} has been added before`));
        console.log(chalk.red('Please input another movie'));
    }
}

const removeNotes = (title)=>{
    notes = loadData()
    if(! isExist(notes,title)){
        console.log(chalk.red.inverse(`Notes with title ${title} not Found`));
    }else{ 
        newNotes = []
        notes.forEach(element => {
            if(! element.title === title)
                newNotes.push(element)
        });
        saveNote(newNotes)
        console.log(chalk.green.inverse(`Succes removing ${title}`));
    }
}

const listNote = ()=>{
    const notes = loadData()
    var index = 1
    console.log("No. Title Description");
    notes.forEach(element => {
        console.log(`${index++}. ${element.title} ${element.body}}`);
    });
}

const readNote = (title)=>{
    const notes = loadData()
    if(isExist(notes,title)){
        var  obj = null
        notes.forEach(element => {
            if(element.title === title)
                obj = element
        });
        console.log(chalk.green.inverse(`${obj.title}`));
        console.log(chalk.green(`${obj.body}`));
    }else{
        console.log(chalk.red.inverse('Note not found'));
    }
}


const saveNote = (note) => {
    const dataJson = JSON.stringify(note);
    fs.writeFileSync('Data.json',dataJson);
}

const loadData = ()=>{
    try{
        const dataBuffer = fs.readFileSync('Data.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }catch (e) {
        return []
    }
}

module.exports = {
    addNotes: addNotes,
    getNotes: getNotes,
    removeNotes : removeNotes,
    listNote : listNote,
    readNote : readNote
}