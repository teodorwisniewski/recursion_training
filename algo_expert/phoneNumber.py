
DIGITS_LETTERS = {
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
}


def phoneNumberMnemonics(phoneNumber):
    found_mnemonics = []
    current_mnemonic = ["0"] * len(phoneNumber)
    phoneNumberMnemonicsHelper(0, phoneNumber, current_mnemonic,
                               found_mnemonics)
    return found_mnemonics


def phoneNumberMnemonicsHelper(idx, phoneNumber, current_mnemonic,
                               found_mnemonics):
    if idx == len(phoneNumber):
        found_mnemonics.append(''.join(current_mnemonic))
    else:
        new_digit = phoneNumber[idx]
        letters = DIGITS_LETTERS[new_digit]
        for letter in letters:
            current_mnemonic[idx] = letter
            phoneNumberMnemonicsHelper(idx+1, phoneNumber, current_mnemonic,
                                       found_mnemonics)


phoneNumber = "23"
mnemonics = phoneNumberMnemonics(phoneNumber)


for mnemonic in mnemonics:
    print(f'Another mnemonic: {mnemonic}')


