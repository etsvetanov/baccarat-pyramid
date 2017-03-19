module.exports = {
    paths: {
        public: '/home/evgeni/Projects/baccarat-pyramid/source/webserver/Baccarat/baccarat/static'
    },

    files: {
        javascripts: {
            entryPoints: {
                'app/index.jsx': 'js/app.js'
            },
            joinTo: {
                'js/vendor.js': /^(?!app)/,
                'js/app.js': /^app/
            }
        },
        stylesheets: {joinTo: 'css/app.css'}
    },

    plugins: {
        babel: {
            plugins: ['transform-runtime', "transform-object-rest-spread"],
            presets: ['es2015', 'react'],
        }
    }
};