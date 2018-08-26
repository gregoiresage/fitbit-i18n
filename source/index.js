import { readFileSync } from 'fs'
import { locale } from 'user-settings'

let fallback_strings = {}
let user_strings = {}
let is_init = false

export const init = (user_language, fallback_language = 'en') => {
    user_strings = fallback_strings = {}

    user_language = user_language || locale.language

    try {
        user_strings = readFileSync(`resources/i18n/${user_language}.json`, 'json')
    } catch (error) {
        console.log(error)
        try {
            user_strings = readFileSync(`resources/i18n/${user_language.slice(0, 2)}.json`, 'json')
        } catch (error) {
            console.log(error)
        }
    }

    if (fallback_language !== user_language) {
        try {
            fallback_strings = readFileSync(`resources/i18n/${fallback_language}.json`, 'json')
        } catch (error) {
            console.log(error)
        }
    }

    is_init = true
}

export const __ = (word) => {
    if (!is_init) {
        init()
    }
    return user_strings[word] || fallback_strings[word] || word
}
