import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const messages = { 
  required: 'The {{ field }} field is required',
}

const fields = {
  first_name: 'firstname',
  last_name: 'secondname',
}

vine.messagesProvider = new SimpleMessagesProvider(messages, fields)