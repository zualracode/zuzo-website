const cursor=document.querySelector('.cursor'),dot=document.querySelector('.cursor-dot');
window.addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px'});
document.querySelectorAll('a,button,.instrument,summary').forEach(el=>{el.addEventListener('mouseenter',()=>{cursor.style.width='52px';cursor.style.height='52px'});el.addEventListener('mouseleave',()=>{cursor.style.width='34px';cursor.style.height='34px'})});
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.style.transition='opacity .8s ease,transform .8s cubic-bezier(.2,.8,.2,1)';e.target.style.opacity=1;e.target.style.transform='none';io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.manifesto-grid,.manifesto-details,.instrument,.method-copy,.quote-section h2,.people-grid article,.audience-cards div,.faq-list details,.closing h2').forEach((el,i)=>{el.style.transitionDelay=(i%5)*70+'ms';io.observe(el)});
const modal=document.getElementById('trialModal'),form=document.getElementById('trialForm'),success=document.getElementById('success');
function openModal(){modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelectorAll('.open-trial').forEach(b=>b.addEventListener('click',openModal));
document.querySelector('.modal-close').addEventListener('click',closeModal);
document.querySelector('.modal-backdrop').addEventListener('click',closeModal);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
form.addEventListener('submit',e=>{e.preventDefault();form.style.display='none';success.style.display='block'});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}}));
