import vine from '@vinejs/vine'

export const registervalidator = vine.compile(
    vine.object({
        fullName: vine.string(),
        email: vine.string().email().normalizeEmail(),
        password: vine.string().minLength(8),
    })
)