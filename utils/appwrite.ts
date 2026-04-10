//utils/appwrite.ts
import {Client, Databases} from 'appwrite'

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('69d4d2dc000176b736f5')

export const databases = new Databases(client)
