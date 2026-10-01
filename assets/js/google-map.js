/* Standalone map module: independent from cached main.js. */
'use strict';
document.querySelectorAll('[data-google-map]').forEach(block=>{
 const button=block.querySelector('[data-google-map-load]');
 const host=block.querySelector('.map-frame');
 const preview=block.querySelector('.map-preview');
 const status=block.querySelector('[data-map-status]');
 if(!button||!host||!preview||!status)return;
 button.disabled=false;
 button.addEventListener('click',()=>{
  if(button.getAttribute('aria-expanded')==='true'){
   host.replaceChildren();host.hidden=true;preview.hidden=false;
   button.textContent='Google-Karte laden';button.setAttribute('aria-expanded','false');
   status.textContent='Die Google-Karte ist geschlossen.';return;
  }
  const iframe=document.createElement('iframe');
  iframe.title='Google Maps: Bahnhofstraße 13, 29640 Schneverdingen';
  const url=new URL('https://www.google.com/maps');
  url.searchParams.set('q','Bahnhofstraße 13, 29640 Schneverdingen');
  url.searchParams.set('output','embed');url.searchParams.set('hl','de');url.searchParams.set('z','16');
  iframe.src=url.href;iframe.referrerPolicy='no-referrer';iframe.allowFullscreen=true;
  host.replaceChildren(iframe);host.hidden=false;preview.hidden=true;
  button.textContent='Karte schließen';button.setAttribute('aria-expanded','true');
  status.textContent='Google-Karte aktiviert. Falls Google die Einbettung blockiert, nutzen Sie den Link zur Routenplanung.';
 });
});
