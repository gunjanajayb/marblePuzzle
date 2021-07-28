var secondClick = false;
var firstClickCircleID = null;
var middleCircleID = null;




function handleClick(circle)
{
    circleElm = document.getElementById(circle.id);

    if(circleElm.className == 'empDot' && !secondClick)  
    {
        alert("wrong button");
        return;
    }
    
    //if second click, validate all option and take action
    if(secondClick)
    {
        //first verify it is in empty dot
        if(circleElm.className == 'empDot')
        {
            if(isValidDot(circleElm.id))
            {
                //if valid dot, then change colors
                circleElm.className = 'fDot';
                document.getElementById(firstClickCircleID).className = 'empDot';
                document.getElementById(middleCircleID).className = 'empDot';
                secondClick = false;
                firstClickCircleID = null;
                middleCircleID = null;
            }
            else
            {
                alert("invalid position");
            }
        }
        else if(circleElm.id == firstClickCircleID)
        {
            circleElm.className = 'fDot';
            secondClick = false;
            firstClickCircleID = null;
            middleCircleID = null;
        }
        else{
            alert("select empty dot");
        }
    }
    else
    {
        circleElm.className = 'sDot';
        firstClickCircleID = circleElm.id;
        secondClick = true;
    }
}