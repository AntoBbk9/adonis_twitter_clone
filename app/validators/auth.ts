import vine from '@vinejs/vine'


export const registervalidator = vine.compile(
    vine.object({
        firstname: vine.string().trim().minLength(4).maxLength(100).nullable(),
        secondname: vine.string().trim().minLength(4).maxLength(100),
        telephone: vine.string().trim().maxLength(13),
        email: vine.string().email().normalizeEmail(),
        birthday: vine.date(),
        profilimage: vine.string().optional(),        
        // sexe: vine.string(),
        password: vine.string().trim().minLength(8).maxLength(32),

        
    })    
)
public messages = {
    'firstname.required': 'the firstname is required',
    'secondname.required': 'the secondname is required',
    'telephone.required': 'the telephone is required',
    'email.required': 'the email is required',
    'birthday.required': 'the birthday is required',
    'password.required': 'the password is required',


    'firstname.minLength': 'The firstname must be more than 3 characters',
    'secondname.minLength': 'The secondname must be more than 3 characters',
    'password.minLength': 'The password must be more than 7 characters',

  }  
export const loginvalidator = vine.compile(
    vine.object({
        email: vine.string().email().normalizeEmail(),
        password: vine.string(),
    })
)

