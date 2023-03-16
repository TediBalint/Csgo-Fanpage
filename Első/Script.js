function Changetext(text, id)
{
    var txt = document.getElementById(id);
    txt.innerHTML = text;
    txt.setAttribute('style', 'Color: red');
}
function Changetextback(text, id)
{
    var txt = document.getElementById(id);
    txt.innerHTML = text;
    txt.setAttribute('style', 'Color: White');
}
