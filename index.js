import * as fs from 'fs'
import { locale } from 'user-settings'

var fallback_strings = {}
var user_strings     = {}
var is_init          = false

function init(user_language, fallback_language) {
    user_strings = fallback_strings = {}

    user_language     = user_language || locale.language
    fallback_language = fallback_language || 'en'

    try {
        user_strings = fs.readFileSync('resources/i18n/'+user_language+'.json', 'json')
    } catch(error) {
        console.log(error)
        try {
            user_strings = fs.readFileSync('resources/i18n/'+user_language.slice(0,2)+'.json', 'json') 
        } catch(error) {
            console.log(error)
        }
    }

    if(fallback_language !== user_language) {
        try {
            fallback_strings = fs.readFileSync('resources/i18n/'+fallback_language+'.json', 'json')
        } catch(error) {
            console.log(error)
        }
    }

    is_init = true
}

function __(s) {
    if(!is_init) {
        init()
    }
    return user_strings[s] || fallback_strings[s] || s
}

export { init, __ }