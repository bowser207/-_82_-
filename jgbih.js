var mouseEvent = "empty";

canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color="red";
width_of_line = 2;
radius = 45;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{

    mouseEvent="mouseDown";

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line
    ctx.Radius = radius
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{

    mouseEvent="mouseleave";
}

function my_mouseup(e)
{

    mouseEvent="mouseUP";
}

current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if (mouseEvent == "mouseDown")
{
    ctx.arc(190, 190, 40, 0, 2*Math.PI);
ctx.stroke();
}