

const telephoneKeypad = {
    "1": ['1'],
    "2": ['a', 'b', 'c'],
    "3": ['d', 'e', 'f'],
    "4": ['g', 'h', 'i'],
    "5": ['j', 'k', 'l'],
    "6": ['m', 'n', 'o'],
    "7": ['p', 'q', 'r', 's'],
    "8": ['t', 'u', 'v'],
    "9": ['w', 'x', 'y', 'z'],
    "0": ['0'],
};


function phoneNumberMnemonics(phoneNumber) {
    let currentMnemonic = new Array(phoneNumber.length).fill("0")
    let mnemonicsFound = [];
    phoneNumberMnemonicsHelper(0, phoneNumber, currentMnemonic, mnemonicsFound);
    return mnemonicsFound;
  }


function phoneNumberMnemonicsHelper(idx, phoneNumber, currentMnemonic, mnemonicsFound)
{

    if (phoneNumber.length === idx){
        let mnemonicToAdd = currentMnemonic.join(''); // O(n)
        mnemonicsFound.push(mnemonicToAdd);
    } else{
        let currentDigit = phoneNumber[idx];
        let letters = telephoneKeypad[currentDigit];
        for (let i = 0; i < letters.length; i++) {
            let newLetter = letters[i];
            currentMnemonic[idx] = newLetter;
            phoneNumberMnemonicsHelper(idx+1, phoneNumber, currentMnemonic, mnemonicsFound);
        }
    }
    
}
  

let phoneNumber = "1905";
let mnemonics = phoneNumberMnemonics(phoneNumber);


for (let i = 0; i < mnemonics.length; i++) {
    mnemonic = mnemonics[i]
    console.log(`Key ${i} corresponds to: ${mnemonic}`);
}
