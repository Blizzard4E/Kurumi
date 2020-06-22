export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
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
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/style/Einzbern.css'
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{
	src: '~/plugins/externalVueCarousal.js',
    ssr: false
  }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*	
   ** Nuxt.js modules
   */
  modules: [
      '@nuxtjs/axios'
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  server: {     
    port: 3000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },   // other configs 
}
