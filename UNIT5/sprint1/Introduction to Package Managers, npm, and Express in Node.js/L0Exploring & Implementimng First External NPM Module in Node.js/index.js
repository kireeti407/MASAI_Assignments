const boxen=require("boxen");

console.log(boxen('I am using my first external module!', {
    title: 'Hurray!!!',
    titleAlignment: 'center',
    borderStyle: {
        topLeft: '+',
        topRight: '+',
        bottomLeft: '+',
        bottomRight: '+',
        horizontal: '-',
        vertical: '|'
    }
}))
console.log(boxen('I am using my first external module!', {
    title: 'Hurray!!!', titleAlignment: 'center',
    borderStyle: 'singleDouble'
    
}))
console.log(boxen('unicorns love rainbows', {title: 'magical', titleAlignment: 'center'}));
