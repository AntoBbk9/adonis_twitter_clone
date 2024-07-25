import vine from '@vinejs/vine'

export const registervalidator = vine.compile(
    vine.object({
        fullName: vine.string().trim().maxLength(100),
        email: vine.string().email().normalizeEmail().trim(),
        password: vine.string().trim().minLength(8).maxLength(32),
    })    
)
export const loginvalidator = vine.compile(
    vine.object({
        email: vine.string().email().normalizeEmail(),
        password: vine.string(),
    })
)