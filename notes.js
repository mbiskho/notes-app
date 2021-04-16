const fs = require('fs');
const { boolean } = require('yargs');

const getNotes = ()=>{
    return "Your notes.."
}
const addNotes = (title,body)=>{
    console.log('====================================');
    console.log('Adding a note ! ');
    console.log('title : '+title);
    console.log('body : '+body);
    console.log('====================================');
    const notes = loadData()
    const isDuplicate = ()=>{
        var anwer = false;
        notes.forEach(element => {
            if(element.title == title)
                answer = true;
        });
        return answer
    }

    if(isDuplicate() == false){
        notes.push({
            title : title,
            body : body
        })
        saveNote(notes)
    }else{
        console.log(`Notes with title ${title} has been added before`);
        console.log('Please input another movie');
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
        // console.log(e)
        return []
    }
}

module.exports = {
    addNotes: addNotes,
    getNotes: getNotes
}