let firstClick = false;

function handleClick(circle)
{
    if(!firstClick)
    {
        document.getElementById(circle.id).style.backgroundColor = "blue";
        firstClick = true;
    }
    else{
        document.getElementById(circle.id).style.backgroundColor = "green";
        firstClick = false;
    }
}