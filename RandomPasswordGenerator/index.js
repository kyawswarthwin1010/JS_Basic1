const passwordLength = 11;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;



function generatePassword(passwordLength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols){
    const lowercaseChar = "abcdefghyjklmnopqrstuvwxyz";
    const uppercaseChar = "ABCDEFGHYJKLMNOPQRSTUVWXYZ";
    const numcaseChar ="0123456789";
    const symbolcaseChar = "!#$%&?";
    console.log(`${passwordLength}`);

    let allowedChar = "";
    let password = "";

    allowedChar += includeLowerCase?lowercaseChar: "";
    allowedChar += includeUpperCase?uppercaseChar: "";
    allowedChar += includeNumbers?numcaseChar: "";
    allowedChar += includeSymbols?symbolcaseChar: "";

    if(passwordLength<10){
      return(`Password Length Must be 10!`);
    }
    for(let i =0 ; i < passwordLength ; i++){
      const randomPassword = Math.floor(Math.random() * allowedChar.length);
      password += allowedChar[randomPassword];
    }
    return password;

}

const password =generatePassword(passwordLength,
                                  includeLowerCase,
                                  includeUpperCase,
                                  includeNumbers,
                                  includeSymbols);


console.log(`Random Password is :  ${password}`);