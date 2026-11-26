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
 let win=null,timer;const original=a.innerHTML,tip=document.createElement('span');tip.setAttribute('role','status');
 tip.style.cssText='position:fixed;right:72px;bottom:22px;z-index:10001;max-width:65vw;padding:8px 12px;border-radius:8px;background:#203333;color:white;font:14px/1.4 system-ui;pointer-events:none';tip.hidden=true;
 function tell(msg){tip.textContent=msg;tip.hidden=false;clearTimeout(timer);timer=setTimeout(()=>{tip.hidden=true},8500);}
 function idle(){win=null;a.innerHTML=original;a.title='오류 신고 · 새 창';a.setAttribute('aria-label',a.title);}
 populate();a.addEventListener('pointerdown',populate);a.addEventListener('click',e=>{
   populate();if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;e.preventDefault();
   if(win&&!win.closed){win.focus();tell('이미 열린 신고 창을 확인하세요. 다른 모니터에 있을 수 있습니다.');return;}
   const child=window.open('about:blank','_blank','popup=yes,resizable=yes,scrollbars=yes,width=680,height=740');
   if(!child){tell('신고 창이 차단되었습니다. 팝업을 허용한 뒤 다시 눌러 주세요.');return;}
   child.opener=null;const meta=child.document.createElement('meta');meta.name='referrer';meta.content='no-referrer';child.document.head.append(meta);child.location.replace(a.href);win=child;
   a.innerHTML='<span aria-hidden="true" style="font-size:24px">↗</span>';a.title='신고 창 열림 · 다시 눌러 창 찾기';a.setAttribute('aria-label',a.title);
   tell('신고 창이 열렸습니다. 보이지 않으면 이 버튼을 다시 누르세요.');
   const watcher=setInterval(()=>{if(child.closed){clearInterval(watcher);if(win===child)idle();}},1000);
 });document.body.append(a,tip);
})();
