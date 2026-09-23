const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const glow=$('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
window.addEventListener('scroll',()=>{$('.progress').style.width=(scrollY/(document.documentElement.scrollHeight-innerHeight)*100)+'%'});
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.1});
$$('.reveal').forEach(e=>observer.observe(e));
$$('.tilt').forEach(card=>{card.addEventListener('pointermove',e=>{if(innerWidth<800)return;const r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;card.style.transform=`perspective(900px) rotateX(${(y/r.height-.5)*-5}deg) rotateY(${(x/r.width-.5)*5}deg) translateY(-4px)`});card.addEventListener('pointerleave',()=>card.style.transform='')});
$$('.filter').forEach(btn=>btn.addEventListener('click',()=>{$$('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;$$('.project').forEach(p=>{p.style.display=f==='all'||p.dataset.cat.split(' ').includes(f)?'block':'none'})}));
document.addEventListener('keydown',e=>{if(e.key.toLowerCase()==='g')window.open('https://github.com/Abdullahferozonline','_blank')});
