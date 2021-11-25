function palindromeIntegers(arr) {
    let result = '';
    for (let num of arr) {
        let isPalindrome = 'true';
        num = String(num)
        //1st solution:
        // let mid = parseInt(num.length / 2);
        // for (let j = 0; j <= mid; j++) {
        //     let lastDigit = num.length - 1;
        //     if (num[j] !== num[lastDigit - j]) {
        //         isPalindrome = 'false';
        //         break;
        //     }
        // }
        //2nd solution:
        // for (let num of arr) {
        //     num = String(num);
        //     let isPalindrome = true;
        //     for (let i = 0; i < num.length / 2; i++) {
        //         if (num[i] !== num[num.length - 1 - i]) {
        //             isPalindrome = false;
        //             console.log(`false`);
        //             break;
        //         }
        //     }
        //     if (isPalindrome) {
        //         console.log(`true`);
        //     }
    
        // }
        //3rd solution:
        let reversedNum = num.split('').reverse().join('');
        isPalindrome = num ===reversedNum ? 'true' : 'false'
        result += isPalindrome + '\n'
    }
    return result
}
console.log(palindromeIntegers([121]));