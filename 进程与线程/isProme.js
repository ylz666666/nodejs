//判断一个数是否是素数
module.exports = function(n){
    //素数:只能被1和本身整除
    if(n<2){//2是最小的素数 小于2的不是
        return false ;
    }
    for(let i = 2 ; i<n ;i++){
        if(n%i===0){
            return false;
        }
    }
    return true ;//2
    
}