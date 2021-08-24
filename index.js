function fun(e)
{
var container = document.getElementById('container');
var val = e.value;
container.setAttribute("style", "filter: brightness("+val+"%);");
}