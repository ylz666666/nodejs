const path = require('path');
const fs = require('fs');
async function test(){
    const filenameOne = path.resolve(__dirname,'./myFiles/1.jpeg');
    const filenameTwo = path.resolve(__dirname,'./myFiles/1.copy.jpeg')
    const buffer = await fs.promises.readFile(filenameOne);
    await fs.promises.writeFile(filenameTwo,buffer);
    console.log('success') ;
}
test();