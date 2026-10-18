const h=document.querySelector('header');const sc=()=>h.classList.toggle('solid',scrollY>60);addEventListener('scroll',sc);sc();
const menu=document.querySelector('.menu'),bur=document.querySelector('.burger');
bur.onclick=()=>{menu.classList.toggle('open');bur.setAttribute('aria-expanded',menu.classList.contains('open'))};
const lb=document.querySelector('.lb');
if(lb){const li=lb.querySelector('img');let L=[],i=0;const show=()=>li.src=L[i].dataset.full;
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
