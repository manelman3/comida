const BASE=`Frango peito grelhado|165|31|0
Frango peito cru|120|23|0
Frango coxa cozida|209|26|0
Frango sobrecoxa assada|229|24|0
Frango desfiado cozido|159|30|0
Carne bovina patinho grelhado|219|35|0
Carne bovina alcatra grelhada|241|31|0
Carne bovina acém cozido|215|27|0
Carne bovina moída refogada|212|26|0
Carne bovina fígado grelhado|225|30|4
Carne bovina contrafilé grelhado|278|30|0
Carne bovina picanha grelhada|290|27|0
Carne suína lombo assado|210|29|0
Carne suína bisteca grelhada|280|27|0
Bacon frito|541|37|1
Linguiça toscana cozida|290|16|1
Presunto|94|14|1
Peito de peru fatiado|103|17|3
Salsicha|257|11|3
Tilápia grelhada|128|26|0
Salmão grelhado|208|22|0
Atum em lata ao natural|116|26|0
Sardinha em lata|208|25|0
Camarão cozido|99|24|0
Merluza cozida|90|19|0
Ovo cozido|155|13|1
Ovo frito|196|14|1
Clara de ovo|52|11|1
Ovo mexido|185|12|2
Leite integral|61|3|5
Leite desnatado|35|3|5
Iogurte natural|61|3.5|5
Iogurte grego|97|9|4
Queijo mussarela|300|22|2
Queijo minas frescal|264|17|3
Queijo prato|360|23|2
Queijo parmesão|431|38|4
Requeijão cremoso|257|9|3
Cottage|98|11|3
Ricotta|140|11|3
Whey protein (pó)|400|80|8
Arroz branco cozido|128|2.5|28
Arroz integral cozido|124|2.6|26
Feijão carioca cozido|76|4.8|14
Feijão preto cozido|77|4.5|14
Lentilha cozida|93|6.3|16
Grão-de-bico cozido|164|9|27
Ervilha cozida|84|5.4|15
Soja cozida|173|17|10
Macarrão cozido|158|5.8|31
Macarrão integral cozido|124|5|26
Batata inglesa cozida|52|1.2|12
Batata-doce cozida|77|0.6|18
Batata frita|312|3.4|41
Mandioca cozida|125|0.6|30
Inhame cozido|97|2|23
Cuscuz de milho cozido|113|2.2|25
Tapioca (goma hidratada)|240|0|60
Pão francês|300|8|59
Pão de forma integral|253|9|45
Pão de forma branco|265|9|49
Aveia em flocos|394|14|67
Granola|420|10|65
Milho cozido|96|3.4|21
Farinha de mandioca|361|1.6|88
Biscoito cream cracker|432|10|69
Biscoito recheado|472|6|71
Banana prata|98|1.3|26
Maçã|56|0.3|15
Laranja|47|0.9|12
Mamão|40|0.5|10
Manga|64|0.4|17
Abacaxi|48|0.9|12
Melancia|33|0.9|8
Uva|69|0.7|18
Morango|30|0.9|7
Abacate|160|2|9
Coco ralado|354|3|15
Limão|29|0.9|9
Pera|53|0.4|14
Tâmara|282|2.5|75
Alface|15|1.4|3
Tomate|18|0.9|4
Cenoura cozida|35|0.8|8
Brócolis cozido|35|2.4|7
Couve refogada|90|2.5|8
Espinafre cozido|23|3|4
Abobrinha cozida|17|1.1|3
Beterraba cozida|44|1.7|10
Pepino|15|0.7|4
Cebola|40|1.1|9
Chuchu cozido|19|0.7|4
Abóbora cozida|29|0.8|7
Couve-flor cozida|23|1.8|4
Pimentão|21|1|5
Amendoim torrado|581|26|20
Pasta de amendoim|588|25|20
Castanha-do-pará|656|14|12
Castanha de caju|570|18|30
Amêndoa|579|21|22
Nozes|654|15|14
Azeite de oliva|884|0|0
Manteiga|717|0.9|0.1
Óleo de soja|884|0|0
Açúcar|387|0|100
Mel|304|0.3|82
Chocolate ao leite|535|7.6|59
Chocolate amargo 70%|598|7.8|46
Leite condensado|321|7.9|55
Refrigerante cola|42|0|10.6
Suco de laranja|45|0.7|10
Café sem açúcar|2|0.1|0
Cerveja|43|0.5|3.6
Pizza mussarela|266|11|33
Hambúrguer bovino grelhado|254|17|0
Pão de queijo|330|5|37
Coxinha frita|290|10|30
Tofu|76|8|2
Proteína de soja texturizada|330|52|30
Leite de coco|197|2|3
Leite de aveia|47|1|7
Pamonha|180|3|36
Farofa|406|2|79
Omelete|154|11|1`;
const $=s=>document.querySelector(s);
const LS=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}};
const sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const r1=n=>Math.round(n*10)/10;
const hoje=()=>new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,10);
const addD=(d,n)=>{const x=new Date(d+'T12:00:00');x.setDate(x.getDate()+n);return x.toISOString().slice(0,10)};
const norm=s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim();

let days=LS('days',{}),custom=LS('custom',[]),cfg=Object.assign({goal:120,cp:'#c2410c',cc:'#1d6fd1',ck:'#2f8f5b'},LS('cfg',{}));
let cur=hoje(),lastToday=cur,range=[addD(hoje(),-6),hoje()];
const builtin=BASE.split('\n').map(l=>{const a=l.split('|');return{n:a[0],k:+a[1],p:+a[2],c:+a[3]}});
const all=()=>builtin.concat(custom);
const find=n=>all().reverse().find(f=>norm(f.n)===norm(n));

function fillList(){$('#foods').innerHTML=all().map(f=>`<option value="${esc(f.n)}">`).join('')}
function tot(d){return(days[d]||[]).reduce((a,e)=>({p:a.p+e.p,c:a.c+e.c,k:a.k+e.k}),{p:0,c:0,k:0})}

function render(){
 $('#date').value=cur;
 const st=$('#status');
 if(cur<hoje()){st.textContent='Dia fechado · ainda editável';st.className='badge c'}
 else if(cur===hoje()){st.textContent='Dia aberto · fecha à meia-noite';st.className='badge'}
 else{st.textContent='Dia futuro';st.className='badge'}
 const t=tot(cur);
 $('#tp').textContent=r1(t.p);$('#tc').textContent=r1(t.c);$('#tk').textContent=Math.round(t.k);
 const g=+cfg.goal||0;
 $('#gtxt').textContent=g?`(${Math.round(t.p/g*100)}%)`:'';
 $('#gbar').style.width=g?Math.min(100,t.p/g*100)+'%':'0';
 const L=days[cur]||[];
 $('#list').innerHTML=L.length?L.map((e,i)=>`<div class="it"><div>${esc(e.n)} · ${r1(e.g)} g<br><span class="mut">${r1(e.p)} g prot · ${r1(e.c)} g carbo · ${Math.round(e.k)} kcal</span></div><button class="s" data-e="${i}">Editar</button><button class="x" data-d="${i}">Excluir</button></div>`).join(''):'<p class="mut">Nada registrado neste dia.</p>';
 $('#cust').innerHTML=custom.map((f,i)=>`<div class="it"><div>${esc(f.n)}<br><span class="mut">${f.k} kcal · ${f.p} g prot · ${f.c} g carbo</span></div><button class="x" data-f="${i}">Excluir</button></div>`).join('')||'<p class="mut">Nenhum alimento seu ainda.</p>';
 charts();
}

function entryFrom(f,g){const m=g/100;return{n:f.n,g,p:f.p*m,c:f.c*m,k:f.k*m}}
function push(e){(days[cur]=days[cur]||[]).push(e);sv('days',days);render()}

$('#add').onclick=()=>{
 const f=find($('#food').value),g=+$('#grams').value;
 if(!f)return alert('Escolha um alimento da lista ou cadastre na sua tabela.');
 if(!(g>0))return alert('Informe a quantidade em gramas.');
 push(entryFrom(f,g));$('#food').value='';$('#grams').value='';$('#prev2').textContent='';
};
function pv(){const f=find($('#food').value),g=+$('#grams').value;
 $('#prev2').textContent=f&&g>0?(e=>`${r1(e.p)} g prot · ${r1(e.c)} g carbo · ${Math.round(e.k)} kcal`)(entryFrom(f,g)):''}
$('#food').oninput=$('#grams').oninput=pv;

$('#list').onclick=ev=>{
 const b=ev.target.closest('button');if(!b)return;const L=days[cur];
 if(b.dataset.d!==undefined){L.splice(+b.dataset.d,1)}
 else if(b.dataset.e!==undefined){const e=L[+b.dataset.e],g=+prompt('Nova quantidade (g):',e.g);
  if(!(g>0))return;const m=g/e.g;e.p*=m;e.c*=m;e.k*=m;e.g=g}
 if(!L.length)delete days[cur];sv('days',days);render();
};
$('#cust').onclick=ev=>{const b=ev.target.closest('button');if(!b)return;custom.splice(+b.dataset.f,1);sv('custom',custom);fillList();render()};
$('#fadd').onclick=()=>{
 const n=$('#fn').value.trim();if(!n)return alert('Dê um nome ao alimento.');
 custom.push({n,k:+$('#fk').value||0,p:+$('#fp').value||0,c:+$('#fc').value||0});
 sv('custom',custom);['#fn','#fk','#fp','#fc'].forEach(s=>$(s).value='');fillList();render();
};

/* navegação de datas */
const go=d=>{cur=d||hoje();render()};
$('#prev').onclick=()=>go(addD(cur,-1));$('#next').onclick=()=>go(addD(cur,1));
$('#hoje').onclick=()=>go(hoje());$('#date').onchange=e=>go(e.target.value);
$('#goal').value=cfg.goal;$('#goal').onchange=e=>{cfg.goal=+e.target.value;sv('cfg',cfg);render()};
setInterval(()=>{const h=hoje();if(h!==lastToday){if(cur===lastToday)cur=h;lastToday=h;render()}},30000);

/* OCR */
function parse(txt){
 const t=txt.replace(/(\d),(\d)/g,'$1.$2'),N='[^\\d\\n]{0,18}(\\d+(?:\\.\\d+)?)';
 const m=r=>{const x=t.match(r);return x?parseFloat(x[1]):''};
 return{
  p:m(new RegExp('prote[ií]n[a-z]*'+N,'i'))||m(new RegExp('protein'+N,'i')),
  c:m(new RegExp('carboidrato[a-z]*'+N,'i'))||m(new RegExp('carbohydrate[a-z]*'+N,'i')),
  k:m(/(\d+(?:\.\d+)?)\s*kcal/i),
  b:m(new RegExp('por[cç][aãõo][a-z]*'+N+'\\s*(?:g|ml)','i'))||100};
}
$('#img').onchange=async e=>{
 const f=e.target.files[0];if(!f)return;
 if(!window.Tesseract)return alert('Não consegui carregar o leitor de imagem. Verifique a internet.');
 $('#ocrst').textContent='Lendo imagem…';
 try{
  const r=await Tesseract.recognize(f,'por',{logger:m=>{if(m.status==='recognizing text')$('#ocrst').textContent='Lendo… '+Math.round(m.progress*100)+'%'}});
  const v=parse(r.data.text);
  $('#otxt').textContent=r.data.text;$('#on').value='';
  $('#ob').value=v.b;$('#ok').value=v.k;$('#op').value=v.p;$('#oc').value=v.c;$('#oe').value=v.b;
  $('#ocrbox').hidden=false;
  $('#ocrst').textContent=v.p===''?'Não achei a proteína. Preencha manualmente.':'Pronto. Confira os valores.';
 }catch(err){$('#ocrst').textContent='Erro ao ler a imagem.'}
};
function ocrVals(){const b=+$('#ob').value||100;return{b,k:+$('#ok').value||0,p:+$('#op').value||0,c:+$('#oc').value||0,n:$('#on').value.trim()||'Item da tabela'}}
$('#oadd').onclick=()=>{
 const v=ocrVals(),g=+$('#oe').value;if(!(g>0))return alert('Informe quanto você comeu.');
 const m=g/v.b;push({n:v.n,g,p:v.p*m,c:v.c*m,k:v.k*m});$('#ocrbox').hidden=true;$('#img').value='';$('#ocrst').textContent='';
};
$('#osave').onclick=()=>{
 const v=ocrVals();if(!$('#on').value.trim())return alert('Dê um nome ao alimento.');
 const m=100/v.b;custom.push({n:v.n,k:r1(v.k*m),p:r1(v.p*m),c:r1(v.c*m)});sv('custom',custom);fillList();render();
 alert('Salvo na sua tabela (valores por 100 g).');
};

/* gráficos */
function charts(){draw('#chp','p',cfg.cp);draw('#chc','c',cfg.cc);draw('#chk','k',cfg.ck)}
function draw(sel,key,color){
 const cv=$(sel),dpr=window.devicePixelRatio||1,W=cv.clientWidth,H=cv.clientHeight;
 cv.width=W*dpr;cv.height=H*dpr;const x=cv.getContext('2d');x.scale(dpr,dpr);
 const cs=getComputedStyle(document.body),ink=cs.color,line=getComputedStyle(document.documentElement).getPropertyValue('--line');
 const [a,b]=range,span=Math.max(1,Math.round((new Date(b)-new Date(a))/864e5));
 const pts=[];for(let d=a,i=0;d<=b&&i<800;d=addD(d,1),i++){if(days[d]&&days[d].length)pts.push({d,i,v:tot(d)[key]})}
 const L=44,R=14,T=12,B=28,w=W-L-R,h=H-T-B,max=Math.max(1,...pts.map(p=>p.v))*1.15;
 x.font='12px sans-serif';x.fillStyle=ink;x.strokeStyle=line;x.lineWidth=1;
 for(let i=0;i<=4;i++){const y=T+h-h*i/4;x.beginPath();x.moveTo(L,y);x.lineTo(W-R,y);x.stroke();x.globalAlpha=.65;x.textAlign='right';x.fillText(Math.round(max*i/4),L-6,y+4);x.globalAlpha=1}
 if(!pts.length){x.textAlign='center';x.globalAlpha=.6;x.fillText('Sem registros neste período',W/2,H/2);x.globalAlpha=1;return}
 const px=p=>L+(span?p.i/span:0)*w,py=p=>T+h-p.v/max*h;
 x.beginPath();pts.forEach((p,i)=>i?x.lineTo(px(p),py(p)):x.moveTo(px(p),py(p)));
 x.strokeStyle=color;x.lineWidth=2.5;x.lineJoin='round';x.stroke();
 x.lineTo(px(pts[pts.length-1]),T+h);x.lineTo(px(pts[0]),T+h);x.closePath();x.globalAlpha=.12;x.fillStyle=color;x.fill();x.globalAlpha=1;
 x.fillStyle=color;pts.forEach(p=>{x.beginPath();x.arc(px(p),py(p),3.5,0,7);x.fill()});
 x.fillStyle=ink;x.globalAlpha=.7;x.textAlign='center';
 const step=Math.max(1,Math.ceil(pts.length/Math.floor(w/52)));
 pts.forEach((p,i)=>{if(i%step===0)x.fillText(p.d.slice(8)+'/'+p.d.slice(5,7),px(p),H-8)});x.globalAlpha=1;
}
document.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>{range=[addD(hoje(),-(+b.dataset.r-1)),hoje()];$('#gf').value=range[0];$('#gt').value=range[1];charts()});
$('#gok').onclick=()=>{const a=$('#gf').value,b=$('#gt').value;if(!a||!b||a>b)return alert('Escolha um período válido.');range=[a,b];charts()};
['p','c','k'].forEach(k=>{const i=$('#c'+k);i.value=cfg['c'+k];i.oninput=()=>{cfg['c'+k]=i.value;sv('cfg',cfg);charts()}});
$('#gf').value=range[0];$('#gt').value=range[1];
addEventListener('resize',charts);
fillList();render();
