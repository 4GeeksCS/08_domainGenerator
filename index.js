window.onload = function() {
    //write your code here
    console.log("Hello Rigo from the console!");

    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];
    let ext = [".com", ".net", ".us"];
    
    for (let i = 0; i < pronoun.length; i++)
        for (let j = 0; j < adj.length; j++)
            for (let k = 0; k < noun.length; k++)
            for (let l = 0; l < ext.length; l++)
            console.log(pronoun[i] + adj[j] + noun[k] + ext[l]);
};


//Or 

// window.onload = function() {
//     //write your code here
//     console.log("Hello Rigo from the console!");
//     document.querySelector('#btn').addEventListener('click', () => {
//         document.querySelector('#tdNames').innerHTML = generateDomain();
//     });
//     console.log('Hello Crystal from the console!');

// let generateDomain = () => {
//     let pronoun = ["the", "our"];
//     let adj = ["great", "big"];
//     let noun = ["jogger", "racoon"];
//     let ext = [".com", ".net", ".us"];
    
//     for (let i = 0; i < pronoun.length; i++)
//         for (let j = 0; j < adj.length; j++)
//             for (let k = 0; k < noun.length; k++)
//             for (let l = 0; l < ext.length; l++)
//             console.log(pronoun[i] + adj[j] + noun[k] + ext[l]);
//     };

//     return pronoun[proIndx] + ' ' + subject[subjIndx] + ' ' + action[actionIndex] + ' ' + possetion[possetionIndex] + ' ' + where[whereIndex ];
// }