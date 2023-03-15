//validator 
//accept element(preferably elementID) of the 
//input and the error_display area 
//2-validate 
//3-display message
class validator
{
    constructor(inputElementId, errorDisplayElementId)
    {
        //check if input element is of element type and if
        //error_display_element is of span type
        if(this.isElementInput(inputElementId) && this.isElementSpan(errorDisplayElementId))
        {
            //setup EventController

            
        }
        else
        {
            //debug message
            console.log("element types wrong");
        }
        
    }

    isElementInput(elementID) 
    {
        let element = document.getElementById(elementID)
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

    isElementSpan(elementID)
    {
        let element = document.getElementById(elementName);
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

    //
    addEventListner(inputElementId, errorDisplayElementId)
    {
        let inputElement = document.getElementById(inputElementId);
        let errorElement = document.getElementById(errorDisplayElementId);
        let type = inputElement.attributes['type'];
        
        inputElement.addEventListener("input", (event) => {
            
            if(inputElement.validity.valid)
            {
                errorElement.textContent = "";
                errorElement.reset(); 
            }
            else
            {
                //replace this with a more elegant implementation
                if(type == "password")
                {
                    show_passowrd_error();
                }
                else if(type == "text")
                {
                    show_text_error();
                }
                else if(type == "email")
                {
                    show_email_error();
                }

                
            }
        });
    }
    
    
}



class validatorSpecialTypes
{
    constructor(type, inputElementId, errorDisplayElementId)
    {
        //check if input element is of element type and if
        //error_display_element is of span type
        if(this.isElementInput(inputElementId) && this.isElementSpan(errorDisplayElementId))
        {
            //setup EventController
            addEventListner(type, inputElementId, errorDisplayElementId);
            
        }
        else
        {
            //debug message
            console.log("element types wrong");
        }
        
    }

    isElementInput(elementID) 
    {
        let element = document.getElementById(elementID)
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

    isElementSpan(elementID)
    {
        let element = document.getElementById(elementName);
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

    //
    addEventListner(type, inputElementId, errorDisplayElementId)
    {
        let inputElement = document.getElementById(inputElementId);
        let errorElement = document.getElementById(errorDisplayElementId);
        
        
        inputElement.addEventListener("input", (event) => {
            
            if(inputElement.validity.valid)
            {
                errorElement.textContent = "";
                errorElement.reset(); 
            }
            else
            {
                //replace this with a more elegant implementation
                if(type == "fname" || "lname")
                {
                    show_name_error();
                }
                

                
            }
        });
    }
    
    
}