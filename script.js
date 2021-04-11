
    
        const list = document.querySelectorAll("li")
        const display = document.querySelector(".dis");
        (function clear(){
            display.innerText = '';
        })()
        list.forEach((node)=>{
            node.addEventListener('mousedown',()=>{
                const result = node.innerText.trim();
                const play = document.querySelector(".dis")
                const playText = play.innerText.trim();
                

                if(result == '='){
                    var solution = eval(playText)
                    if(solution == "Infinity"){
                        play.innerText = ''
                        alert("Cannot divide by 0")
                        return true
                    }
                    else{
                    play.innerText = solution
                    return true
                    }
                }
                if(node.innerText == "C"){
                     play.innerText = ''
                     return true
                }
                if( play.innerText.toLowerCase() == "infinity" || play.innerText.toLowerCase() == "undefined")
                {
                    play.innerText = ''
                     return true
                }
                play.append(result);
                
            })
        })
        
