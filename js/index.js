var secondClick = false;
var firstClickCircleID = null;
var middleCircleID = null;


function isValidDot(cID)
{
    switch(firstClickCircleID)
    {
        case 'c1':
            if(cID == 'c4')
            {
                middleCircleID = 'c2';
            }
            else if(cID == 'c6')
            {
                middleCircleID = 'c3';
            }
            else{
                
                return false;
            }

            break;

        case 'c2':
            if(cID == 'c7')
            {
                middleCircleID = 'c4';
            }
            else if(cID == 'c9')
            {
                middleCircleID = 'c5';
            }
            else{
            
            return false;
            }
            break;

        case 'c3':
            if(cID == 'c8')
            {
                middleCircleID = 'c5';
            }
            else if(cID == 'c10')
            {
                middleCircleID = 'c6';
            }
            else{
            
            return false;}
            break;

        case 'c4':
            if(cID == 'c1')
            {
                middleCircleID = 'c2';
            }
            else if(cID == 'c11')
            {
                middleCircleID = 'c7';
            }
            else if(cID == 'c13')
            {
                middleCircleID = 'c8';
            }
            else if(cID == 'c6')
            {
                middleCircleID = 'c5';
            }
            else{
            
            return false;}
            break;

        case 'c5':
            if(cID == 'c12')
            {
                middleCircleID = 'c8';
            }
            else if(cID == 'c14')
            {
                middleCircleID = 'c9';
            }
            else{
            
            return false;}
            break;            

        case 'c6':
            if(cID == 'c15')
            {
                middleCircleID = 'c10';
            }
            else if(cID == 'c1')
            {
                middleCircleID = 'c3';
            }
            else if(cID == 'c4')
            {
                middleCircleID = 'c5';
            }
            else if(cID == 'c13')
            {
                middleCircleID = 'c9';
            }
            else
            {
                
                return false;
            }
            break;
            
        case 'c7':
            if(cID == 'c2')
            {
                middleCircleID = 'c4';
            }
            else if(cID == 'c9')
            {
                middleCircleID = 'c8';
            }
            else{
            
            return false;}
            break;
            
        case 'c8':
            if(cID == 'c3')
            {
                middleCircleID = 'c5';
            }
            else if(cID == 'c10')
            {
                middleCircleID = 'c9';
            }
            else{
            
            return false;}
            break;            

        case 'c9':
            if(cID == 'c2')
            {
                middleCircleID = 'c5';
            }
            else if(cID == 'c7')
            {
                middleCircleID = 'c8';
            }
            else{
            
            return false;}
            break;            

        case 'c10':
            if(cID == 'c3')
            {
                middleCircleID = 'c6';
            }
            else if(cID == 'c8')
            {
                middleCircleID = 'c9';
            }
            else{
            
            return false;}
            break;

        case 'c11':
            if(cID == 'c4')
            {
                middleCircleID = 'c7';
            }
            else if(cID == 'c13')
            {
                middleCircleID = 'c12';
            }
            else{
            
            return false;}
            break;
            
        case 'c12':
            if(cID == 'c5')
            {
                middleCircleID = 'c8';
            }
            else if(cID == 'c14')
            {
                middleCircleID = 'c13';
            }
            else{
            
            return false;}
            break;
            
        case 'c13':
            if(cID == 'c4')
            {
                middleCircleID = 'c8';
            }
            else if(cID == 'c6')
            {
                middleCircleID = 'c9';
            }
            else{
            
            return false;}
            break;
            
        case 'c14':
            if(cID == 'c5')
            {
                middleCircleID = 'c9';
            }
            else if(cID == 'c12')
            {
                middleCircleID = 'c13';
            }
            else{
            
            return false;}
            break;

        case 'c15':
            if(cID == 'c6')
            {
                middleCircleID = 'c10';
            }
            else if(cID == 'c13')
            {
                middleCircleID = 'c14';
            }
            else{
            
            return false;}
            break;                        

        default:
            alert("wrong circle ID");
            return false;
            break;
    }

    return true;
}

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