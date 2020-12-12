var a = 'LISTER';
console.log(a);
function reverseName(x) {
    let array = [...a];
    let reverse = [];
    for (let index = 1; index <= array.length; index++) {
        reverse.push(array[array.length - index]);
        
    }
    console.log(reverse.join(''));
}

reverseName(a);
document.getElementById('theme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.getElementById('darkTheme').classList.toggle('show');
    document.getElementById('lightTheme').classList.toggle('hide');

});