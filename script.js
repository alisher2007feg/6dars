const elForm = document.querySelector('.form')
const elInput = document.querySelector('.input')
const redBalls = document.querySelector('.red_balls')
const yellowBalls = document.querySelector('.yellow_balls')

const nol = document.querySelector('.nol')
const bir =  document.querySelector('.bir')
const ikki = document.querySelector('.ikki')
const uch = document.querySelector('.uch')
const tort = document.querySelector('.tort')
const besh = document.querySelector('.besh')
const olti =  document.querySelector('.olti')
const yeti =  document.querySelector('.yeti')
const sakiz =  document.querySelector('.sakiz')
const toqiz =  document.querySelector('.toqz')
const on = document.querySelector('.on')
const onbr =  document.querySelector('.onbr')
const oniki = document.querySelector('.onikki')
const onuch =  document.querySelector('.onuch')
const ontort =  document.querySelector('.ontort')
const onbesh =  document.querySelector('.onbesh')
const onolti =  document.querySelector('.onolti')
const onyeti = document.querySelector('onyeti')
const onsakiz = document.querySelector('.onsakkiz')
const ontoqqiz = document.querySelector('.ontoqqiz')
const ygirma =  document.querySelector('.ygrma')


elForm.addEventListener('submit', function(evt){
    evt.preventDefault()
   const value = elInput.value;
    if(value <= 9){
        redBalls.className = ('border-solid border-2 border-sky-500 flex rounded-3xl mt-8 gap-x-2.5 p-10 ml-52 rounded-full border-red-600 ' )
        yellowBalls.className = ('flex mt-8 gap-x-2.5 p-10 justify-center ml-52')
    }else{
        yellowBalls.className = ('border-solid border-2 border-yellow-300 flex rounded-3xl mt-8 gap-x-2.5 p-10 justify-center ml-52 rounded-full 	border-color: rgb(253 224 71);')
        redBalls.className = ('flex mt-8 gap-x-2.5 p-10 justify-center ml-52')
    }
});

nol.addEventListener ("click", function () {
    elInput.value = 0;
    if( elInput.value = 0){
        yellowBalls.className = ('border-solid border-2 border-yellow-300 flex rounded-3xl mt-8 gap-x-2.5 p-10 justify-center ml-52 rounded-full 	border-color: rgb(253 224 71);')
        redBalls.className = ('flex mt-8 gap-x-2.5 p-10 justify-center ml-52')
    }
    else{
        redBalls.className = ('border-solid border-2 border-sky-500 flex rounded-3xl mt-8 gap-x-2.5 p-10 ml-52 rounded-full border-red-600 ' )
        yellowBalls.className = ('flex mt-8 gap-x-2.5 p-10 justify-center ml-52')

    }

})


bir.addEventListener ("click", function () {
    elInput.value = 0;
    if( elInput.value = 0){
        yellowBalls.className = ('border-solid border-2 border-yellow-300 flex rounded-3xl mt-8 gap-x-2.5 p-10 justify-center ml-52 rounded-full 	border-color: rgb(253 224 71);')
        redBalls.className = ('flex mt-8 gap-x-2.5 p-10 justify-center ml-52')
    }
    else{
        redBalls.className = ('border-solid border-2 border-sky-500 flex rounded-3xl mt-8 gap-x-2.5 p-10 ml-52 rounded-full border-red-600 ' )
        yellowBalls.className = ('flex mt-8 gap-x-2.5 p-10 justify-center ml-52')

    }

})

ikki.addEventListener ("click", function () {
    elInput.value = 0;
    if( elInput.value = 0){
        yellowBalls.className = ('border-solid border-2 border-yellow-300 flex rounded-3xl mt-8 gap-x-2.5 p-10 justify-center ml-52 rounded-full 	border-color: rgb(253 224 71);')
        redBalls.className = ('flex mt-8 gap-x-2.5 p-10 justify-center ml-52')
    }
    else{
        redBalls.className = ('border-solid border-2 border-sky-500 flex rounded-3xl mt-8 gap-x-2.5 p-10 ml-52 rounded-full border-red-600 ' )
        yellowBalls.className = ('flex mt-8 gap-x-2.5 p-10 justify-center ml-52')

    }

})

uch.addEventListener ("click", function () {
    elInput.value = 0;
    if( elInput.value = 0){
        yellowBalls.className = ('border-solid border-2 border-yellow-300 flex rounded-3xl mt-8 gap-x-2.5 p-10 justify-center ml-52 rounded-full 	border-color: rgb(253 224 71);')
        redBalls.className = ('flex mt-8 gap-x-2.5 p-10 justify-center ml-52')
    }
    else{
        redBalls.className = ('border-solid border-2 border-sky-500 flex rounded-3xl mt-8 gap-x-2.5 p-10 ml-52 rounded-full border-red-600 ' )
        yellowBalls.className = ('flex mt-8 gap-x-2.5 p-10 justify-center ml-52')

    }

})


tort.addEventListener ("click", function () {
    elInput.value = 0;
    if( elInput.value = 0){
        yellowBalls.className = ('border-solid border-2 border-yellow-300 flex rounded-3xl mt-8 gap-x-2.5 p-10 justify-center ml-52 rounded-full 	border-color: rgb(253 224 71);')
        redBalls.className = ('flex mt-8 gap-x-2.5 p-10 justify-center ml-52')
    }
    else{
        redBalls.className = ('border-solid border-2 border-sky-500 flex rounded-3xl mt-8 gap-x-2.5 p-10 ml-52 rounded-full border-red-600 ' )
        yellowBalls.className = ('flex mt-8 gap-x-2.5 p-10 justify-center ml-52')

    }

})

besh.addEventListener ("click", function () {
    elInput.value = 0;
    if( elInput.value = 0){
        yellowBalls.className = ('border-solid border-2 border-yellow-300 flex rounded-3xl mt-8 gap-x-2.5 p-10 justify-center ml-52 rounded-full 	border-color: rgb(253 224 71);')
        redBalls.className = ('flex mt-8 gap-x-2.5 p-10 justify-center ml-52')
    }
    else{
        redBalls.className = ('border-solid border-2 border-sky-500 flex rounded-3xl mt-8 gap-x-2.5 p-10 ml-52 rounded-full border-red-600 ' )
        yellowBalls.className = ('flex mt-8 gap-x-2.5 p-10 justify-center ml-52')

    }

})

olti.addEventListener ("click", function () {
    elInput.value = 0;
    if( elInput.value = 0){
        yellowBalls.className = ('border-solid border-2 border-yellow-300 flex rounded-3xl mt-8 gap-x-2.5 p-10 justify-center ml-52 rounded-full 	border-color: rgb(253 224 71);')
        redBalls.className = ('flex mt-8 gap-x-2.5 p-10 justify-center ml-52')
    }
    else{
        redBalls.className = ('border-solid border-2 border-sky-500 flex rounded-3xl mt-8 gap-x-2.5 p-10 ml-52 rounded-full border-red-600 ' )
        yellowBalls.className = ('flex mt-8 gap-x-2.5 p-10 justify-center ml-52')

    }

})

yeti.addEventListener ("click", function () {
    elInput.value = 0;
    if( elInput.value = 0){
        yellowBalls.className = ('border-solid border-2 border-yellow-300 flex rounded-3xl mt-8 gap-x-2.5 p-10 justify-center ml-52 rounded-full 	border-color: rgb(253 224 71);')
        redBalls.className = ('flex mt-8 gap-x-2.5 p-10 justify-center ml-52')
    }
    else{
        redBalls.className = ('border-solid border-2 border-sky-500 flex rounded-3xl mt-8 gap-x-2.5 p-10 ml-52 rounded-full border-red-600 ' )
        yellowBalls.className = ('flex mt-8 gap-x-2.5 p-10 justify-center ml-52')

    }

})

sakiz.addEventListener ("click", function () {
    elInput.value = 0;
    if( elInput.value = 0){
        yellowBalls.className = ('border-solid border-2 border-yellow-300 flex rounded-3xl mt-8 gap-x-2.5 p-10 justify-center ml-52 rounded-full 	border-color: rgb(253 224 71);')
        redBalls.className = ('flex mt-8 gap-x-2.5 p-10 justify-center ml-52')
    }
    else{
        redBalls.className = ('border-solid border-2 border-sky-500 flex rounded-3xl mt-8 gap-x-2.5 p-10 ml-52 rounded-full border-red-600 ' )
        yellowBalls.className = ('flex mt-8 gap-x-2.5 p-10 justify-center ml-52')

    }

})


toqiz.addEventListener ("click", function () {
    elInput.value = 0;
    if( elInput.value = 0){
        yellowBalls.className = ('border-solid border-2 border-yellow-300 flex rounded-3xl mt-8 gap-x-2.5 p-10 justify-center ml-52 rounded-full 	border-color: rgb(253 224 71);')
        redBalls.className = ('flex mt-8 gap-x-2.5 p-10 justify-center ml-52')
    }
    else{
        redBalls.className = ('border-solid border-2 border-sky-500 flex rounded-3xl mt-8 gap-x-2.5 p-10 ml-52 rounded-full border-red-600 ' )
        yellowBalls.className = ('flex mt-8 gap-x-2.5 p-10 justify-center ml-52')

    }

}) 



//// 2 xonali sonla


on.addEventListener('click', function(){
    elInput.value = 11;
    if(elInput.value = 11){
        yellowBalls.className = "border-solid border-2 border-yellow-300 flex rounded-3xl mt-8 gap-x-2.5 p-10 justify-center ml-52 rounded-full 	border-color: rgb(253 224 71);";
        redBalls.className = "flex mt-8 gap-x-2.5 p-10 justify-center ml-52";

    }
    else{
        redBalls.className = "border-solid border-2 border-sky-500 flex rounded-3xl mt-8 gap-x-2.5 p-10 ml-52 rounded-full border-red-600";
        yellowBalls.className = "flex mt-8 gap-x-2.5 p-10 justify-center ml-52";
    }
})

onbr.addEventListener('click', function(){
    elInput.value = 11;
    if(elInput.value = 11){
        yellowBalls.className = "border-solid border-2 border-yellow-300 flex rounded-3xl mt-8 gap-x-2.5 p-10 justify-center ml-52 rounded-full 	border-color: rgb(253 224 71);";
        redBalls.className = "flex mt-8 gap-x-2.5 p-10 justify-center ml-52";

    }
    else{
        redBalls.className = "border-solid border-2 border-sky-500 flex rounded-3xl mt-8 gap-x-2.5 p-10 ml-52 rounded-full border-red-600";
        yellowBalls.className = "flex mt-8 gap-x-2.5 p-10 justify-center ml-52";
    }
})

oniki.addEventListener('click', function(){
    elInput.value = 11;
    if(elInput.value = 11){
        yellowBalls.className = "border-solid border-2 border-yellow-300 flex rounded-3xl mt-8 gap-x-2.5 p-10 justify-center ml-52 rounded-full 	border-color: rgb(253 224 71);";
        redBalls.className = "flex mt-8 gap-x-2.5 p-10 justify-center ml-52";

    }
    else{
        redBalls.className = "border-solid border-2 border-sky-500 flex rounded-3xl mt-8 gap-x-2.5 p-10 ml-52 rounded-full border-red-600";
        yellowBalls.className = "flex mt-8 gap-x-2.5 p-10 justify-center ml-52";
    }
})

onuch.addEventListener('click', function(){
    elInput.value = 11;
    if(elInput.value = 11){
        yellowBalls.className = "border-solid border-2 border-yellow-300 flex rounded-3xl mt-8 gap-x-2.5 p-10 justify-center ml-52 rounded-full 	border-color: rgb(253 224 71);";
        redBalls.className = "flex mt-8 gap-x-2.5 p-10 justify-center ml-52";

    }
    else{
        redBalls.className = "border-solid border-2 border-sky-500 flex rounded-3xl mt-8 gap-x-2.5 p-10 ml-52 rounded-full border-red-600";
        yellowBalls.className = "flex mt-8 gap-x-2.5 p-10 justify-center ml-52";
    }
})


ontort.addEventListener('click', function(){
    elInput.value = 11;
    if(elInput.value = 11){
        yellowBalls.className = "border-solid border-2 border-yellow-300 flex rounded-3xl mt-8 gap-x-2.5 p-10 justify-center ml-52 rounded-full 	border-color: rgb(253 224 71);";
        redBalls.className = "flex mt-8 gap-x-2.5 p-10 justify-center ml-52";

    }
    else{
        redBalls.className = "border-solid border-2 border-sky-500 flex rounded-3xl mt-8 gap-x-2.5 p-10 ml-52 rounded-full border-red-600";
        yellowBalls.className = "flex mt-8 gap-x-2.5 p-10 justify-center ml-52";
    }
})

onbesh.addEventListener('click', function(){
    elInput.value = 11;
    if(elInput.value = 11){
        yellowBalls.className = "border-solid border-2 border-yellow-300 flex rounded-3xl mt-8 gap-x-2.5 p-10 justify-center ml-52 rounded-full 	border-color: rgb(253 224 71);";
        redBalls.className = "flex mt-8 gap-x-2.5 p-10 justify-center ml-52";

    }
    else{
        redBalls.className = "border-solid border-2 border-sky-500 flex rounded-3xl mt-8 gap-x-2.5 p-10 ml-52 rounded-full border-red-600";
        yellowBalls.className = "flex mt-8 gap-x-2.5 p-10 justify-center ml-52";
    }
})

onolti.addEventListener('click', function(){
    elInput.value = 11;
    if(elInput.value = 11){
        yellowBalls.className = "border-solid border-2 border-yellow-300 flex rounded-3xl mt-8 gap-x-2.5 p-10 justify-center ml-52 rounded-full 	border-color: rgb(253 224 71);";
        redBalls.className = "flex mt-8 gap-x-2.5 p-10 justify-center ml-52";

    }
    else{
        redBalls.className = "border-solid border-2 border-sky-500 flex rounded-3xl mt-8 gap-x-2.5 p-10 ml-52 rounded-full border-red-600";
        yellowBalls.className = "flex mt-8 gap-x-2.5 p-10 justify-center ml-52";
    }
})


onyeti.addEventListener('click', function(){
    elInput.value = 11;
    if(elInput.value = 11){
        yellowBalls.className = "border-solid border-2 border-yellow-300 flex rounded-3xl mt-8 gap-x-2.5 p-10 justify-center ml-52 rounded-full 	border-color: rgb(253 224 71);";
        redBalls.className = "flex mt-8 gap-x-2.5 p-10 justify-center ml-52";

    }
    else{
        redBalls.className = "border-solid border-2 border-sky-500 flex rounded-3xl mt-8 gap-x-2.5 p-10 ml-52 rounded-full border-red-600";
        yellowBalls.className = "flex mt-8 gap-x-2.5 p-10 justify-center ml-52";
    }
})

onsakiz.addEventListener('click', function(){
    elInput.value = 11;
    if(elInput.value = 11){
        yellowBalls.className = "border-solid border-2 border-yellow-300 flex rounded-3xl mt-8 gap-x-2.5 p-10 justify-center ml-52 rounded-full 	border-color: rgb(253 224 71);";
        redBalls.className = "flex mt-8 gap-x-2.5 p-10 justify-center ml-52";

    }
    else{
        redBalls.className = "border-solid border-2 border-sky-500 flex rounded-3xl mt-8 gap-x-2.5 p-10 ml-52 rounded-full border-red-600";
        yellowBalls.className = "flex mt-8 gap-x-2.5 p-10 justify-center ml-52";
    }
})

ontoqqiz.addEventListener('click', function(){
    elInput.value = 11;
    if(elInput.value = 11){
        yellowBalls.className = "border-solid border-2 border-yellow-300 flex rounded-3xl mt-8 gap-x-2.5 p-10 justify-center ml-52 rounded-full 	border-color: rgb(253 224 71);";
        redBalls.className = "flex mt-8 gap-x-2.5 p-10 justify-center ml-52";

    }
    else{
        redBalls.className = "border-solid border-2 border-sky-500 flex rounded-3xl mt-8 gap-x-2.5 p-10 ml-52 rounded-full border-red-600";
        yellowBalls.className = "flex mt-8 gap-x-2.5 p-10 justify-center ml-52";
    }
})


ygirma.addEventListener('click', function(){
    elInput.value = 11;
    if(elInput.value = 11){
        yellowBalls.className = "border-solid border-2 border-yellow-300 flex rounded-3xl mt-8 gap-x-2.5 p-10 justify-center ml-52 rounded-full 	border-color: rgb(253 224 71);";
        redBalls.className = "flex mt-8 gap-x-2.5 p-10 justify-center ml-52";

    }
    else{
        redBalls.className = "border-solid border-2 border-sky-500 flex rounded-3xl mt-8 gap-x-2.5 p-10 ml-52 rounded-full border-red-600";
        yellowBalls.className = "flex mt-8 gap-x-2.5 p-10 justify-center ml-52";
    }
})