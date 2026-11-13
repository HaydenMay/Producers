import { defineConfig } from 'vite';
export default defineConfig(({ command, isPreview }) => ({root:'src/game',base:command === 'build' || isPreview ? '/Producers/' : '/',build:{outDir:'../../dist-pages',emptyOutDir:true},server:{fs:{allow:['../..']}}}));
