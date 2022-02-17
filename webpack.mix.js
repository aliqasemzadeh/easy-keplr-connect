let mix = require('laravel-mix');

mix.ts('src/index.tsx', 'dist/js/app.js')
    .sass('src/sass/app.scss','css/app.css')
    .webpackConfig(require('./webpack.config'))
    .copy('src/html/index.html', 'dist')
    .copy('src/images/keplr-logo.png', 'dist')
    .setPublicPath('dist');
