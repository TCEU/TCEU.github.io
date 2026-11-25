import {rm,mkdir,cp} from 'node:fs/promises';
import {readFile,writeFile} from 'node:fs/promises';
const output=new URL('../dist/',import.meta.url);
await rm(output,{recursive:true,force:true});await mkdir(output,{recursive:true});await cp(new URL('../site/',import.meta.url),output,{recursive:true});console.log('Built public guide assets only.');
// Stamp the published launcher after copying the public site.
const rev=process.env.GITHUB_SHA;
if(/^[a-f0-9]{40}$/.test(rev||'')){const path=new URL('assets/report-launcher.js',output);await writeFile(path,(await readFile(path,'utf8')).replace("dataset.revision||'unknown'","dataset.revision||'"+rev+"'"));}
