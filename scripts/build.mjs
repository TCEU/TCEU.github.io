import {rm,mkdir,cp} from 'node:fs/promises';
const output=new URL('../dist/',import.meta.url);
await rm(output,{recursive:true,force:true});await mkdir(output,{recursive:true});await cp(new URL('../site/',import.meta.url),output,{recursive:true});console.log('Built public guide assets only.');
