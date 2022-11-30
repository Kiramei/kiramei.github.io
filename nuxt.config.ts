// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'Kiramei Official Site',
            htmlAttrs: {
                lang: 'jp'
            },
            meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: ''
            },
            {
                name: 'format-detection',
                content: 'telephone=no'
            }
            ],
            link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: 'https://raw.githubusercontent.com/Kiramei/kiramei.github.io/main/fav.ico'
            }],
        }
    }
})
