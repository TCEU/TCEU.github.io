// Shared TCEU app integration. Do not send URLs, query strings, DOM text or storage.
(()=>{
 const script=document.currentScript;
 if(!script || document.getElementById('tceu-report-launcher'))return;
 const a=document.createElement('a');a.id='tceu-report-launcher';a.target='_blank';a.rel='noopener noreferrer';a.href='https://tceu.pages.dev/board/report/';
 a.title='오류 신고 · 새 창';a.setAttribute('aria-label',a.title);
 a.style.cssText='position:fixed;right:18px;bottom:18px;z-index:10000;display:grid;place-items:center;width:44px;height:44px;border-radius:14px;background:#203333;color:white;box-shadow:0 3px 14px #0003;border:1px solid #ffffff77';
 a.innerHTML='<svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v13H9l-5 4zM12 7v7m-3.5-3.5h7"/></svg>';
 function populate(){
 const uri=new URL('https://tceu.pages.dev/board/report/'), ua=navigator.userAgent;
 const b=ua.match(/(Edg)\/(\d+)/)||ua.match(/(Firefox|Chrome|Version)\/(\d+)/);
 const first=location.pathname.split('/')[1];
 const meta={app:script.dataset.app||'workspace',page:!first?'home':['board','projects','sources','dashboard','imports','matrix','accounts','login','nda','demand'].includes(first)?first:'other',
 viewport:innerWidth+'x'+innerHeight,language:navigator.language,browser:b?({Edg:'Edge',Version:'Safari'}[b[1]]||b[1])+'/'+b[2]:'Other',revision:script.dataset.revision||'unknown',openedAt:new Date().toISOString()};
 uri.search=new URLSearchParams(meta);a.href=uri.href;
 }
 populate();a.addEventListener('click',e=>{populate();if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;e.preventDefault();window.open(a.href,'_blank','popup=yes,noopener,noreferrer,resizable=yes,scrollbars=yes,width=680,height=740');});a.addEventListener('pointerdown',populate);document.body.append(a);
})();
