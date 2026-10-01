/* Progressive enhancement only: routes and content remain available without JS. */
'use strict';
const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('#main-nav');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav?.classList.contains('is-open')){nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false');menu.focus();}});
const contact=document.querySelector('#contact-form');
if(contact)contact.querySelector('[type=submit]').disabled=false;
contact?.addEventListener('submit',e=>{e.preventDefault();if(!contact.reportValidity())return;contact.reset();const result=document.querySelector('#contact-result');result.hidden=false;result.setAttribute('tabindex','-1');result.focus();});
const form=document.querySelector('#application');
if(form){
 let step=0;
 const fields=[...form.querySelectorAll('[data-step]')];
 const next=document.querySelector('#next'),previous=document.querySelector('#previous'),finish=document.querySelector('#finish'),error=document.querySelector('#form-error');
 finish.disabled=false;
 const preferred=form.elements.kontaktmethode,phone=form.elements.telefon;
 const updatePhone=()=>{phone.required=preferred.value==='telefon';phone.labels[0].textContent=phone.required?'Telefon *':'Telefon (optional)';};
 preferred.addEventListener('change',updatePhone);
 const setStep=()=>{fields.forEach((el,i)=>el.hidden=i!==step);previous.hidden=step===0;next.hidden=step===2;finish.hidden=step!==2;document.querySelectorAll('.step-indicator li').forEach((el,i)=>{if(i===step)el.setAttribute('aria-current','step');else el.removeAttribute('aria-current');});error.hidden=true;fields[step].querySelector('input,select,textarea')?.focus();updateReview();};
 const validate=()=>{updatePhone();const controls=[...fields[step].querySelectorAll('input,select,textarea')];controls.forEach(el=>el.removeAttribute('aria-invalid'));const invalid=controls.find(el=>!el.checkValidity());if(invalid){invalid.setAttribute('aria-invalid','true');error.textContent='Bitte prüfe das Feld „'+invalid.labels[0].textContent+'“. '+invalid.validationMessage;error.hidden=false;invalid.focus();return false;}return true;};
 function updateReview(){const dl=document.querySelector('#review-data');dl.replaceChildren();for(const el of form.querySelectorAll('input,select,textarea')){if(!el.value)continue;const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=el.labels[0].textContent.replace(' (optional)','').replace(' *','');dd.textContent=el.tagName==='SELECT'?el.selectedOptions[0].textContent:el.value;dl.append(dt,dd);}}
 form.addEventListener('input',updateReview);
 next.addEventListener('click',()=>{if(validate()){step++;setStep();}});
 previous.addEventListener('click',()=>{step--;setStep();});
 form.addEventListener('submit',e=>{e.preventDefault();if(step<2){next.click();return;}if(!validate())return;form.reset();phone.required=false;fields.forEach(el=>el.hidden=true);document.querySelector('.form-actions').hidden=true;document.querySelector('.step-indicator').hidden=true;document.querySelector('#review-data').replaceChildren();error.hidden=true;const result=document.querySelector('#application-result');result.hidden=false;result.setAttribute('tabindex','-1');result.focus();});
 document.querySelector('#restart').addEventListener('click',()=>{document.querySelector('#application-result').hidden=true;document.querySelector('.form-actions').hidden=false;document.querySelector('.step-indicator').hidden=false;step=0;setStep();});
 const selected=new URLSearchParams(location.search).get('stelle');if(selected&&[...form.elements.stelle.options].some(o=>o.value===selected))form.elements.stelle.value=selected;
 // Do not autofocus on initial page load or store personal information in browser storage.
 updatePhone();updateReview();
}

/* Image slots: upload a file with its documented name; missing files keep placeholders. */
(() => {
 const imageDirectory = new URL('../images/', document.currentScript.src);
 const formats = ['webp','jpg','jpeg','png'];
 document.querySelectorAll('[data-photo]').forEach(slot => {
  const img=slot.querySelector('img'); let attempt=0;
  img.addEventListener('load',()=>{slot.querySelector('.image-placeholder').hidden=true;img.hidden=false;});
  img.addEventListener('error',()=>{attempt++;if(attempt<formats.length)load();});
  function load(){img.src=new URL(slot.dataset.photo+'.'+formats[attempt],imageDirectory).href;}
  if(slot.closest('.hero')){img.loading='eager';img.fetchPriority='high';}
  load();
 });
})();
