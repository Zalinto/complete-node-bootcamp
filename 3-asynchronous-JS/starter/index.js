const fs = require('fs');
const superagent = require('superagent');

const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if(err) reject('I could not find that file!');
            resolve(data);
        })
    });
}

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) reject('Could not write file')
            resolve('Status 200');
        })
    })
}

// readFilePro(`${__dirname}/dog.txt`)
//     .then(data => {
//         console.log(`Breed: ${data}`);
        // return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`) // return result of promise
//     })
//     .then(res => { // result of previous promise
//         console.log(res.body.message);
        
//         return writeFilePro('dog-img.txt', res.body.message);
//     })
//     .then(() => {
//         console.log('Random dog image saved to file!');
//     })
//     .catch(err => {
//         console.log(err.message);
//     });

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//     console.log(`Breed: ${data}`);
    
//     superagent
//         .get(`https://dog.ceo/api/breed/${data}/images/random`)
//         .then(res => {
//             console.log(res.body.message);
            
//             fs.writeFile('dog-img.txt', res.body.message, err => {
//                 console.log(`Random dog image saved to file!`);
//         })
//     })
//     .catch(err => {
//         console.log(err.message);
//     })
// });

const getDocPic = async () => {
    try {
        const response = await readFilePro(`${__dirname}/dog.txt`); 
        console.log(`Dog breed: ${response}` );
        
        const res1 = superagent.get(`https://dog.ceo/api/breed/${response}/images/random`);

        const res2 = superagent.get(`https://dog.ceo/api/breed/${response}/images/random`);

        const res3 = superagent.get(`https://dog.ceo/api/breed/${response}/images/random`);

        const all = await Promise.all([res1, res2, res3]);
        const imgs = all.map(el => {el.body.message})
        console.log(imgs);

        const writeResponse = await writeFilePro('dog-img.txt', response);
        
        console.log(`Random dog image saved to file!`, writeResponse);
    } catch (error) {
        console.log(`Error, ${error}`);
        throw error;
    }

    return '2: READY';
}

(async () => {
    try {
        console.log("1");

        const response = await getDocPic();
        console.log(response);
        
        console.log("3");
    } catch (error) {
        console.log("Error", error);
        throw error;        
    }
})();

// console.log("1");

// // const x = getDocPic();
// // console.log(x);
// const y = getDocPic().then(x => {
//     console.log(x);
//     console.log("2");
    
// }).catch(err => {
//     console.log("Error", err);
// })
// console.log("3");
