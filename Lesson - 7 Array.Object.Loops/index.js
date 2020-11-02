/*Task - 1

const numeric = [25, 24, 76, 100, 1];
console.log(numeric)*/

//const tape = ['Olena', 'Ivan', 'Katy', 'Oleh', 'Mary'];
//console.log(tape);

/*const collection = [25, 24, 76, 100, 1, 'Olena', 'Ivan', 'Katy', 'Oleh', 'Mary', false];
console.log(collection);*/

/*const array = [];
array[0] = 1;
array[1] = 2;
console.log(array);*/

/*Task - 2*/
/*for (let i = 0; i < 10; i += 1) {
    let block2 = '<div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>'
    document.write(block2);
}
for (let i = 0; i < 10; i += 1) {
    let block2 = `<div>${i}. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>`
    document.write(block2);
    /!*template string*!/
}


for (let i = 0; i < 10; i += 1) {
    let block = '<div>' + i + '</div>'
    let block2 = `<div>${i}</div>`
    document.write(block2);
}

let i = 0
while (i < 10) {

    i += 1;
}*/




/*Task - 3*/
/*
let iterator = 0;
while (iterator < 20) {
    let block = '<h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </h1>';
    document.write(block);
    iterator += 1
}

document.write('finish');*/

/*
let iterator = 0;
while (iterator < 20) {
    let block = `<h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ${iterator}. </h1>`;
    document.write(block);
    iterator += 1
}

document.write('finish');*/


/*
const numbers =[1, 2, 5, 8, 2, 1, 5, 0, 3, 1];
for (let i = 0; i < numbers.length; i+=1) {
    const number = numbers[i];
    document.write(number);
}
*/

/*
const letters =[1, 2, 5, 8, 2, 1, 5, 0, 3, 1];
for (let i = 0; i < numbers.length; i+=1) {
    const number = numbers[i];
    document.write(number);
}
*/


/*---14---*/
// const numbers =[1, 'Olena', false];
// for (let i = 0; i < numbers.length; i+=1) {
//     const number = numbers[i];
//     if (typeof number === 'boolean'){
//         document.write(number);
//     }
// }

/*---15---*/
// const numbers =[1, 'Olena', false];
// for (let i = 0; i < numbers.length; i+=1) {
//     const number = numbers[i];
//     if (typeof number === 'number'){
//         document.write(number);
//     }
// }

/*---16---*/
/*const numbers =[1, 'Olena', false];
for (let i = 0; i < numbers.length; i+=1) {
    const number = numbers[i];
    if (typeof number === 'string'){
        document.write(number);
    }
}*/


/*---17---*/

/*const array = [];
array[0] = 1;
array[1] = 100;
array[2] = '100';
array[3] = false;
array[4] = true;
array[5] = 6;
array[6] = '600';
array[7] = 'Mary';
array[8] = 'Olena';
array[9] = 67;
for (let i = 0; i<array.length; i+=1){
    const arraytwo = array[i];
    console.log(arraytwo);
}*/

/*---18---*/
/*const array = [];
array[0] = 1;
array[1] = 100;
array[2] = '100';
array[3] = false;
array[4] = true;
array[5] = 6;
array[6] = '600';
array[7] = 'Mary';
array[8] = 'Olena';
array[9] = 67;
for (let i = 0; i<array.length; i+=1){
    const arraytwo = array[i];
    console.log(arraytwo);
    document.write(arraytwo);

    }*/

/*---20---*/

/*
const array = [];
array[0] = 1;
array[1] = 100;
array[2] = '100';
array[3] = false;
array[4] = true;
array[5] = 6;
array[6] = '600';
array[7] = 'Mary';
array[8] = 'Olena';
array[9] = 67;
for (let i = 0; i<array.length; i+=2){
    const arraytwo = array[i];
    console.log(arraytwo);
    document.write(arraytwo);

}
*/

/*---21---*/
/*
for (let i = 0; i <= 100; i += 1) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(i);
    }
}
*/

/*---22---*/
/*for (let i = 0; i <= 100; i += 1) {
    if (i % 2 === 1) {
        console.log(i);
        document.write(i);
    }
}*/
// % - остача від ділення

/*---22---*/
/*
for (let min = 0; min < 2; min +=1 ) {

    for (let sec = 0; sec <60; sec +=1) {
        document.writeln(`${min}:${sec}`);
    }

}
*/


/*---22---*/

// for (let hour = 0; hour <= 2; hour +=1 ) {
//     let minutes = hour === 2 ? 20 : 60
//     for (let min = 0; min <= minutes; min += 1) {
//         for (let sec = 0; sec <= 60; sec += 1) {
//             document.writeln(`${hour}:${min}:${sec}`);
//         }
//
//     }
// }

// умова ? так : інакше
// ? - перевір умову