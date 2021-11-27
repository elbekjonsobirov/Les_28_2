const LastName = 'Elbekjon'
const SurName = 'Sobirov'
const Password = 2000


let ism = prompt('Ismingizni kiriting :')
let familiya = prompt('Familangizni kiriting :')
let parol = prompt('Parolingizni kiritng :')


parol = parseInt(parol)

if (ism === LastName && familiya === SurName && parol === Password) {
    console.log('Siz muvaffaqiyatli royxatdan otdingiz !')
}


else if (ism != LastName && familiya != SurName && parol != Password) {
    console.log('Siz malumotlarni kiritmadingiz yoki xato kiritdingiz !')
}


else {

    if (ism === LastName) {
        if (familiya === SurName && parol != Password) {
            console.log('Siz parolni kiritmadiz yoki xato kiritdingiz !')
        } else if (parol === Password && familiya != SurName) {
            console.log('Siz familiyani kiritmadingiz yoki xato kiritdingiz !')
        } else if (familiya != SurName && parol != Password) {
            console.log('Siz familiyangiz va parolingizni kiritmadingiz yoki xato kiritdingiz !')
        }
    }

    if (familiya === SurName) {
        if (parol === Password && ism != LastName) {
            console.log('Siz ismingizni kiritmadingiz yoki xato kiritdingiz !')
        } else if (parol != Password && ism != LastName) {
            console.log('Siz ismingiz va parolingizni kiritmadingiz yoki xato kiritdingiz !')
        }
    }

    if (parol === Password) {
        if (ism != LastName && familiya != SurName) {
            console.log('Siz ismingiz va familiyangizni kiritmadingiz yoki xato kiritding !')
        }
    }
}