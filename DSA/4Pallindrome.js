var isPalindrome = function(x) {
    if(x<0) return false;
    let xCopy = x;
    revX = 0;
    while(x>0){
       let rem = x%10;
        revX = revX*10+rem
        x = Math.floor(x/10);
    }
    if(xCopy === revX){
        return true;
    }else{
        return false;
    };
};
console.log(isPalindrome(10));
console.log(isPalindrome(11));
console.log(isPalindrome(151));
console.log(isPalindrome(-151));
