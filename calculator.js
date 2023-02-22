let inputResult = document.getElementById("input-element")  // accessing html input-elemnt by ID

let resultString = "";                                      // initializing empty string to use forther calculation's
let clickedMultiply = false                                 // creating varaiable with default value purpose to use in if condition
let clicketDevide = false                                       

let buttons = document.querySelectorAll('.button');         //selecting or accessing all button's with having className "button" 

// console.log(Array.from(buttons))


Array.from(buttons).forEach((button)=>{                    // using arrow function and iterating over the array button elements

  button.addEventListener('click', (e)=>{                  // adding event litser to button if any button click this

    // console.log(e.target.textContent)

    if(e.target.innerHTML == '='){                          // adding if statement when condition satisfy it will execute otherwise not
        // console.log(resultString)
      if (clickedMultiply) {
        let indexOf = resultString.indexOf('X')
        let filterStr = resultString.slice(0,indexOf)
        let filterStrTwo = resultString.slice(indexOf+1,)
        console.log(filterStr*filterStrTwo)
        resultString = filterStr * filterStrTwo
        inputResult.value=resultString
        clickedMultiply=false

      }
      else if (clicketDevide) {
        clicketDevide = false
        let indexOfDevide = resultString.indexOf('%')
        let firstPartStr = resultString.slice(0,indexOfDevide)
        let secondPartStr = resultString.slice(indexOfDevide+1,)
        let devideByResult = firstPartStr / secondPartStr
        resultString = devideByResult
        inputResult.value=resultString
      }
      
      else {                                                            // above if condition's not satisfy this will execute
        resultString = eval(resultString);
        inputResult.value = resultString;
      }
    }


    else if(e.target.innerHTML == 'C'){                                 // we are clearing input string when user click "c" button
      resultString = ""
      inputResult.value = resultString;
    }
    else if(e.target.innerHTML == 'back'){
            console.log(resultString)
            let lenOfString = resultString.length
            console.log(lenOfString)
            let strNew = resultString.slice(0,lenOfString-1)
            resultString = strNew;
            inputResult.value = resultString;
            console.log(resultString)
    }

    else if (e.target.innerHTML == 'X') {
        clickedMultiply = true
        console.log(e.target.innerHTML)
        resultString = resultString + e.target.innerHTML
        inputResult.value = resultString
    }

    else if (e.target.innerHTML == '%') {
        clicketDevide = true
        resultString = resultString + e.target.innerHTML
        inputResult.value = resultString

    }

    else{ 
    // console.log(e.target)
    resultString = resultString + e.target.innerHTML;
    inputResult.value = resultString;
    
      }

  })

})
console.log("hello world")                                                 