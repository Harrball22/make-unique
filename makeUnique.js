// Write your solution below:
function uniqueString(str) {
    let chars = str.split("")
    let usedChar = []
    
    for(let i = 0; i < chars.length;){
        if (usedChar.includes(chars[i])){
            chars.splice(i, 1)
        } else {
            usedChar.push(str[i])
            i++
        }
    }
    str = chars.join("")
    return str
}

console.log(uniqueString("iwanttoclimbamountain"))


