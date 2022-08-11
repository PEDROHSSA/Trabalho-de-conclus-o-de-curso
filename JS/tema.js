const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function() {
    $html.classList.toggle('dark-mode')
})

function direcionar(x,y) {
    window.scrollTo(x,y);
};

function FontSize(type){
    var ids = [".h1,.h2"];
    ids.forEach(id=>{
        var elemento=document.querySelector(id);
        var size=window.getComputedStyle(elemento,null).getPropertyValue('font-Size');
        size=parseFloat(size);
        if(type=='increase'){
            elemento.style.fontSize=(size+5)+"px";
        }

        else{
            elemento.style.fontSize=(size-5)+"px";
        }
    })
}