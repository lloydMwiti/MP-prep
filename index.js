let blender = document.querySelector('.infol1');
let blenderbtn = document.querySelector('#popblender');
let unity = document.querySelector('.infol2');
let unitybtn = document.querySelector('#pop-unity');
let unreal = document.querySelector('.infol3');
let unrealbtn = document.querySelector('#pop-unreal');
let flutter= document.querySelector('.infol4');
let flutterbtn = document.querySelector('#pop-flutter');
let tensor = document.querySelector('.infol5');
let tensorbtn = document.querySelector('#pop-tensor');
let gimp = document.querySelector('.infol6');
let gimpbtn = document.querySelector('#pop-gimp');
let kill =document.querySelector('#kill');



blenderbtn.addEventListener('click',() => {
    blender.classList.add('visible');
});
unitybtn.addEventListener('click',() => {
    unity.classList.add('visible');
});
unrealbtn.addEventListener('click',() => {
    unreal.classList.add('visible');
});
flutterbtn.addEventListener('click',() => {
    flutter.classList.add('visible');
});
tensorbtn.addEventListener('click',() => {
    tensor.classList.add('visible');
});
gimpbtn.addEventListener('click',() => {
    gimp.classList.add('visible');
});
killblender.addEventListener('click',()=>{blender.classList.remove('visible');  
});
killunity.addEventListener('click',()=>{unity.classList.remove('visible');
});
killunreal.addEventListener('click',()=>{unreal.classList.remove('visible');
});
killflutter.addEventListener('click',()=>{flutter.classList.remove('visible');
});
killtensor.addEventListener('click',()=>{tensor.classList.remove('visible');
});
killgimp.addEventListener('click',()=>{gimp.classList.remove('visible');
});