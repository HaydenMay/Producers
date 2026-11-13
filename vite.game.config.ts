import { defineConfig } from 'vite';
export default defineConfig(({ command }) => ({root:'src/game',base:command === 'build' ? '/Producers/' : '/',build:{outDir:'../../dist-pages',emptyOutDir:true},server:{fs:{allow:['../..']}}}));
