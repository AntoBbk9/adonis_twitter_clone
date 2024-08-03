import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
    vine.object({
        firstname: vine.string().minLength(4).maxLength(100),
        secondname: vine.string().minLength(4).maxLength(100),
        telephone: vine.string().maxLength(13),
        email: vine.string().email().normalizeEmail(),
        birthday: vine.date(),
        // image: vine.file({size: '2mb',
        //     extnames: ['jpg', 'png']}), 
        profilimage: vine.string().optional(),    
        sexe: vine.string(),
        password: vine.string(),

        
    })    
)

export const loginValidator = vine.compile(
    vine.object({
        email: vine.string().email().normalizeEmail(),
        password: vine.string(),
    })
)

