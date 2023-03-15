//validator 
//accept element(preferably elementID) of the 
//input and the error_display area 
//2-validate 
//3-display message
class validator
{
    constructor(input_element, error_display_element)
    {
        //check if input element is of element type and if
        //error_display_element is of span type
        if(this.isElementInput(input_element) && this.isElementSpan(error_display_element))
        {

        }
        else
        {
            //debug message
            console.log("element types wrong");
        }
        //setup EventController

        //show message
    }

    isElementInput(elementName) 
    {
        let element = document.getElementById(elementName)
        if(element === null)
        {
            //debug message
            console.log(`${input_element} doesn't exist`);
        }
        else
        {
            if(element.tagName === "INPUT")
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }

    isElementSpan(elementName)
    {
        let element = document.getElementById(elementName)
        if(element === null)
        {
            //debug message
            console.log(`${input_element} doesn't exist`);
        }
        else
        {
            if(element.tagName === "SPAN")
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
    
    
}