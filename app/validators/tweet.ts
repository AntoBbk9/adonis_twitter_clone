import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const messages = { 
    required: 'The {{ field }} field is required',
  }
  
  const fields = {
    name: 'name',
    username: 'username',
  }

export const tweetValidator = vine.compile(
    vine.object({
        name: vine.string().minLength(4).maxLength(100).nullable(),
        username: vine.string().minLength(4).maxLength(100),
        tweetAvatar: vine.string().maxLength(13),
        text: vine.string(),
        verified: vine.boolean(),        
    })    
)
vine.messagesProvider = new SimpleMessagesProvider(messages, fields)

