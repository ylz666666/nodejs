exports.pick = function(obj,...props){//传入对象 和 要保留的属性
    //判断对象是否符合条件 
    if(!obj||typeof obj != 'object'){
        return obj ;
    }
    const newObj = {};
    for (const key in obj) {
        if (props.includes(key)) {
           newObj[key] = obj[key] ; 
        }
    }
    return newObj ;
} 