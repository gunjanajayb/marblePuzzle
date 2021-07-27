let secondClick = false;
let firstClickCircleID = null;

function handleClick(circle)
{
    circleID = document.getElementById(circle.id);

//    if((circleID.className == 'empDot' && !secondClick) ||
//        (circleID.className == 'empDot' && secondClick && checkIfNeighbour(circleID)))
    if(circleID.className == 'empDot' && !secondClick)  
    {
        alert("wrong button");
        return;
    }
    

    if(!secondClick)
    {
        circleID.style.backgroundColor = "blue";
        firstClickCircleID = circleID;
        secondClick = true;
    }
    else{
        circleID.style.backgroundColor = "green";
        secondClick = false;
    }
}