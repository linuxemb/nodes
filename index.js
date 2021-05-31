let a =4
let b =4
console.log(a*b)
global.lucknum = '23'
console.log(global.lucknum);
console.log(process.platform);

process.on('exit', function() {
    //call back
    console.log('exitinggg !!')
})


// express code server request...


const express = require('express');

const {readFile} = require('fs');
const app = express();

app.get('/',(request, response)  =>  {

    readFile('./home.html', 'utf8',(err,html) => {
        if(err) {
            response.status(500).send('sorr, out of order')
        }
        response.send(html);
    })
   
    
});

app.listen(process.env.PORT || 3000,() => console.log(`App availlavel on http://localhost:3000 `))






// events
const { EventEmitter } = require('events');
const { request } = require('express');

const eventEmitter = new EventEmitter();

eventEmitter.on ('lunch', () => {

    console.log('yum ')
})

eventEmitter.emit('lunch');
eventEmitter.emit('lunch');

