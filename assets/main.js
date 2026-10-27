const h=document.querySelector('header');const sc=()=>h.classList.toggle('solid',scrollY>60);addEventListener('scroll',sc);sc();
const menu=document.querySelector('.menu'),bur=document.querySelector('.burger');
bur.onclick=()=>{menu.classList.toggle('open');bur.setAttribute('aria-expanded',menu.classList.contains('open'))};
const lb=document.querySelector('.lb');
if(lb){const li=lb.querySelector('img');let L=[],i=0;const pre=u=>{const im=new Image();im.src=u};const show=()=>{const g=L[i],t=g.querySelector('img');li.src=t?t.currentSrc||t.src:'';const f=new Image();f.onload=()=>{if(L[i]===g)li.src=f.src};f.src=g.dataset.full;[L[(i+1)%L.length],L[(i-1+L.length)%L.length]].forEach(x=>x&&pre(x.dataset.full))};
 document.querySelectorAll('.g').forEach(g=>g.onclick=()=>{L=[...g.closest('.grid').querySelectorAll('.g')];i=L.indexOf(g);show();lb.classList.add('open')});
 const close=()=>lb.classList.remove('open');
 lb.querySelector('.x').onclick=close;
 lb.querySelector('.p').onclick=()=>{i=(i-1+L.length)%L.length;show()};
 lb.querySelector('.n').onclick=()=>{i=(i+1)%L.length;show()};
 lb.onclick=e=>{if(e.target===lb)close()};
 addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')lb.querySelector('.p').click();if(e.key==='ArrowRight')lb.querySelector('.n').click()})}
const f=document.getElementById('f');
if(f)f.onsubmit=e=>{e.preventDefault();const v=id=>document.getElementById(id).value;
 location.href='mailto:atmosfere.isola@gmail.com?subject='+encodeURIComponent(v('o')||'Richiesta dal sito')+'&body='+encodeURIComponent(`Nome: ${v('n')}\nEmail: ${v('e')}\nTelefono: ${v('t')}\n\n${v('m')}`)};
document.querySelectorAll('.y').forEach(y=>y.textContent=new Date().getFullYear());

(()=>{if(matchMedia('(prefers-reduced-motion:reduce)').matches||!('IntersectionObserver'in window))return;
 const add=(e,c,d)=>{if(!e)return;e.classList.add('rv');c&&e.classList.add(c);d&&e.style.setProperty('--d',d+'ms')};
 document.querySelectorAll('.philo>div').forEach((e,i)=>add(e,'',i*140));
 document.querySelectorAll('.service').forEach((s,k)=>{const a=s.querySelector('.s-img'),b=a&&a.nextElementSibling,L=k%2===0;add(a,L?'rv-l':'rv-r');add(b,L?'rv-r':'rv-l',160)});
 document.querySelectorAll('.cat-head,.intro,.tile,.contact>div,.cta .wrap>*:not(.btn)').forEach((e,i)=>add(e,'',(i%3)*90));
 document.querySelectorAll('.grid').forEach(g=>g.querySelectorAll('.g').forEach((e,i)=>add(e,'',(i%4)*80)));
 const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){const e=x.target;e.classList.add('in');io.unobserve(e);setTimeout(()=>e.classList.add('done'),1300)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
 document.querySelectorAll('.rv').forEach(e=>io.observe(e));
})();
