//1  正则表达式匹配所有的number直接量
function ifNum(num){
    return /^(0x[0-9A-E]+|0b(0|1)+|0o[0-7]+|[0-9]+(.\[0-9]+)?)$/.test(num)
}

//2utf-8encodeing函数
function utf8(str){
    let code = str.charCodeAt(0)
    let binaryCode = code.toString(2)
    if(code <= 127 ){
        return '0'+ binaryCode
    }
    if(code >= 128 && code <= 2097151){
       
        let byte = Math.ceil(binaryCode.length/6)
        
        if(byte === 2){
            while(binaryCode.length<11){
                binaryCode = '0'+binaryCode
            }
            return `110${binaryCode.slice(0,5)} 10${binaryCode.slice(5)}` 
        }
        if(byte === 3){
            while(binaryCode.length<16){
                binaryCode = '0'+binaryCode
            }
            return `1110${binaryCode.slice(0,4)} 10${binaryCode.slice(4,10)} 10${binaryCode.slice(10)}`
        }
        if(byte === 4){
            while(binaryCode.length < 21){
                binaryCode = '0'+ binaryCode
            }
            return `11110${binaryCode.slice(0,3)} 10${binaryCode.slice(3,9)} 10${binaryCode.slice(9,15)} 10${binaryCode.slice(15)}`
        }
        
    }
    
}