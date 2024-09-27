function reverseString(str) 
{
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}    

console.log(reverseString("Rakesh Kumar"))


// 2nd Example
// ===============================


function reverseStr(str)
{
  return str.split("").reverse().join("");
}
console.log(reverseStr("Sanjit Kumar"))
