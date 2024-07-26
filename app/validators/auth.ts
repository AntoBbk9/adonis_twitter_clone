import vine from '@vinejs/vine'


export const registervalidator = vine.compile(
    vine.object({
        firstname: vine.string().trim().minLength(4).maxLength(100).nullable(),
        secondname: vine.string().trim().minLength(4).maxLength(100),
        telephone: vine.string().trim().maxLength(13),
        email: vine.string().email().normalizeEmail().trim(),
        birthday: vine.date(),
        profilimage: vine.string().optional(),        
        // sexe: vine.string(),
        password: vine.string().trim().minLength(8).maxLength(32),

        
    })    
)
export const loginvalidator = vine.compile(
    vine.object({
        email: vine.string().email().normalizeEmail(),
        password: vine.string(),
    })
)

