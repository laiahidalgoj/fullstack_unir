
// saber si los paréntesis son correctos o no

const comprobarParentesis = (parentesis) => {
    let parentesisAbiertos = 0
    let i = 0
    while(parentesisAbiertos >= 0 && i<parentesis.length){
        if (parentesis[i] === '('){
            parentesisAbiertos++
        }else{
            parentesisAbiertos--
        }
        i++
        }
        return parentesisAbiertos === 0
    }

console.log(comprobarParentesis('(()'))

// quitar vocales 'hello' --> 'hll'
const shortcut = (string) => {
    let acc = ''
    for(let i = 0; i <string.length; i++){
        switch(string[i].toLowerCase()){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                break;
                default:
                    acc = acc + string[i]
        }
    }
    return acc;
}

console.log(shortcut('hello Ernesto'))

// ['i', 'have', 'no', 'space'] => ['i', 'ihave', 'ihaveno', 'ihavenospace']
const array = ['i', 'have', 'no', 'space']

const runningOut = (arr) => {
    const acc = []
    let acctext = ''
    for(let i = 0; i < arr.length; i++){
        acctext = acctext + arr[i]
        acc[i] = acctext
    }
    return acc;
}

console.log(runningOut(array))
