function passwordValidator(pass) {
    let isValid = true;
    function lengthPassword(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            isValid = true;
        } else {
            isValid = false;
            console.log("Password must be between 6 and 10 characters");
        }
        return isValid;
    }
    function contentPass(pass) {
        for (let i = 0; i < pass.length; i++) {
            let code = pass[i].charCodeAt();
            if ((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
                isValid = true;
            } else {
                isValid = false;
                console.log("Password must consist only of letters and digits");
                break;
            }
        }
        return isValid;
    }
    function leastTwoDigits(pass) {
        let countDigits = 0;
        isValid = false;
        for (let i = 0; i < pass.length; i++) {
            let code = pass[i].charCodeAt();
            if (code >= 48 && code <= 57) {
                countDigits++;
                if (countDigits === 2) {
                    isValid = true;
                    break
                }
            }
        }
        if (!isValid) {
            console.log("Password must have at least 2 digits");
        }
        return isValid;
    }
    isValid = lengthPassword(pass);
    isValid = contentPass(pass);
    isValid = leastTwoDigits(pass);

    if (isValid) {
        console.log('Password is valid');
    }
}
console.log(passwordValidator('logIn123'));