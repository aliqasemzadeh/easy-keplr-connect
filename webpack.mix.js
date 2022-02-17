let mix = require('laravel-mix');

mix.ts('src/index.js', 'dist')
    .webpackConfig(require('./webpack.config'))
    .setPublicPath('dist');
