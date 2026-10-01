/* The visitor activates the map directly inside its reserved surface. */
'use strict';
document.querySelectorAll('[data-google-map]').forEach(block=>{
 const loadButton=block.querySelector('[data-google-map-load]');
 const closeButton=block.querySelector('[data-google-map-close]');
 const host=block.querySelector('.map-frame');
 const preview=block.querySelector('.map-preview');
 const actions=block.querySelector('.map-actions');
 const status=block.querySelector('[data-map-status]');
 if(!loadButton||!closeButton||!host||!preview||!actions||!status)return;
 loadButton.disabled=false;
 loadButton.addEventListener('click',()=>{
  const iframe=document.createElement('iframe');
  iframe.title='Google Maps: Bahnhofstraße 13, 29640 Schneverdingen';
  const url=new URL('https://www.google.com/maps');
  url.searchParams.set('q','Bahnhofstraße 13, 29640 Schneverdingen');
  url.searchParams.set('output','embed');url.searchParams.set('hl','de');url.searchParams.set('z','16');
  iframe.src=url.href;iframe.referrerPolicy='no-referrer';iframe.allowFullscreen=true;
  host.replaceChildren(iframe);host.hidden=false;preview.hidden=true;actions.hidden=false;
  loadButton.setAttribute('aria-expanded','true');
  status.textContent='Google-Karte geladen.';
  closeButton.focus();
 });
 closeButton.addEventListener('click',()=>{
  host.replaceChildren();host.hidden=true;preview.hidden=false;actions.hidden=true;
  loadButton.setAttribute('aria-expanded','false');status.textContent='';loadButton.focus();
 });
});
