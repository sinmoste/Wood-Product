
const menu = document.getElementById('menu-icon');
const menu_list = document.querySelector('.header__menu--list');
var check = true;
menu.onclick=function(){
    if(check){
        menu_list.classList.add('open');
        check =!check;
    }
    else
    {
        menu_list.classList.remove('open');
        check =!check;
    }
}