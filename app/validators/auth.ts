import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
    vine.object({
        firstname: vine.string().minLength(4).maxLength(100),
        secondname: vine.string().minLength(4).maxLength(100),
        telephone: vine.string().maxLength(13),
        email: vine.string().email().normalizeEmail(),
        birthday: vine.date(),
        profilimage: vine.string().optional(),        
        sexe: vine.string(),
        password: vine.string().minLength(8).maxLength(32),

        
    })    
)

export const loginValidator = vine.compile(
    vine.object({
        email: vine.string().email().normalizeEmail(),
        password: vine.string(),
    })
)

