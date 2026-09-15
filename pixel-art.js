const PATTERNS = [{"id": 1, "name": "Modello 1", "rows": ["WWWWWWWWW", "WRRWWWRRW", "RRRRWRRRR", "RRRRRRRRR", "RRRRRRRRR", "WRRRRRRRW", "WWRRRRRWW", "WWWRRRWWW", "WWWWRWWWW"]}, {"id": 2, "name": "Modello 2", "rows": ["BBBWWWBBB", "BWWWWWWWB", "BWWBWBWWB", "BWWBWBWWB", "BWWWWWWWB", "BWWWBWWWB", "BWWWWWWWB", "BWBWBWBWB", "BBBBBBBBB"]}, {"id": 3, "name": "Modello 3", "rows": ["WWWRRRWWW", "WWWRRRWWW", "WWWRRRWWW", "RRRRRRRRR", "RRRRRRRRR", "RRRRRRRRR", "WWWRRRWWW", "WWWRRRWWW", "WWWRRRWWW"]}, {"id": 4, "name": "Modello 4", "rows": ["WWBBBBBWW", "WBWWWWWBW", "BWBWWWBWB", "BWWBWBWWB", "BWWWBWWWB", "BWWWBWWWB", "BWWWBWWWB", "WBWWBWWBW", "WWBBBBBWW"]}, {"id": 5, "name": "Modello 5", "rows": ["YWWWYWWWY", "WYWYYYWYW", "WWWYYYWWW", "WYYYYYYYW", "YYYYYYYYY", "WYYYYYYYW", "WWWYYYWWW", "WYWYYYWYW", "YWWWYWWWY"]}, {"id": 6, "name": "Modello 6", "rows": ["WWRRRRRWW", "WRWWWWWRW", "RWWRRRWWR", "RWRWWWRWR", "RWRWRWRWR", "RWRWWWRWR", "RWWRRRWWR", "WRWWWWWRW", "WWRRRRRWW"]}, {"id": 7, "name": "Modello 7", "rows": ["WYYYYYYYW", "YYYYYYYYY", "YBBBYBBBY", "YYBBYBBYY", "YYYYYYYYY", "YBYYYYYBY", "YYBYYYBYY", "YYYBBBYYY", "WYYYYYYYW"]}, {"id": 8, "name": "Modello 8", "rows": ["BBBBBBBBB", "BBBYYYBBB", "BBYYYYYBB", "BBBBYYYYB", "BWBBBYYYB", "BBBBYYYYB", "BBYYYYYBB", "BBBYYYBBB", "BBBBBBBBB"]}, {"id": 9, "name": "Modello 9", "rows": ["BBBBBBBBB", "BBRRRRRBB", "BRRRRRRRB", "BRWWRWWRB", "BRBWRBWRB", "BRRRRRRRB", "BRRRRRRRB", "BRBRBRBRB", "BBBBBBBBB"]}, {"id": 10, "name": "Modello 10", "rows": ["BBBBBBBBB", "BBOOOOOBB", "BOOOOOOOB", "BOWWOWWOB", "BOBWOBWOB", "BOOOOOOOB", "BOOOOOOOB", "BOBOBOBOB", "BBBBBBBBB"]}, {"id": 11, "name": "Modello 11", "rows": ["WWWWGWWWW", "WWWGGGWWW", "WWGGGGGWW", "WWWGGGWWW", "WWGGGGGWW", "WGGGGGGGW", "WWWWOWWWW", "WWWWOWWWW", "WWWOOOWWW"]}, {"id": 12, "name": "Modello 12", "rows": ["BBWBBBBBB", "BBWBBWWWW", "WWWWWBBBB", "BBWBBWWWW", "BBWBBBBBB", "WWWWWWWWW", "BBBBBBBBB", "WWWWWWWWW", "BBBBBBBBB"]}, {"id": 13, "name": "Modello 13", "rows": ["GGGWWWRRR", "GGGWWWRRR", "GGGWWWRRR", "GGGWWWRRR", "GGGWWWRRR", "GGGWWWRRR", "GGGWWWRRR", "GGGWWWRRR", "GGGWWWRRR"]}, {"id": 14, "name": "Modello 14", "rows": ["WWWWRWWYW", "WWWRRRWYW", "WWRRRRRYW", "WRRRRRRRW", "RRRRRRRRR", "WBBWWGBBW", "WBBWWGBBW", "WBBWWWBBW", "WBBBBBBBW"]}, {"id": 15, "name": "Modello 15", "rows": ["WWWWGGWWW", "WWOWGWOWW", "WOOOOOOOW", "OOROOOROO", "OORRORROO", "OOOOOOOOO", "WORRRRROW", "WOOOOOOOW", "WWOOWOOWW"]}, {"id": 16, "name": "Modello 16", "rows": ["BBBBBBBBB", "BBBYYYBBB", "BBYYYYYBB", "BBYRYRYBB", "BYWWOWWYB", "GYYYYYYYG", "GGYYYYYGG", "GGGOGOGGG", "GGGGGGGGG"]}, {"id": 17, "name": "Modello 17", "rows": ["WRRWRWRRW", "WRORORORW", "WROOOOORW", "WROOOOORW", "WWROOORWW", "GWWRRRWWG", "GGWWGWWGG", "WGGGGGGGW", "WWWGGGWWW"]}, {"id": 18, "name": "Modello 18", "rows": ["YYWWWYYWW", "YGGWYYGGW", "YGGGYGGGW", "YGWGGGYGW", "YGWWGWYGW", "YGWWWWYGW", "YGWWWWYGW", "WGWWWWWGW", "WWWWWWWWW"]}];
const MARIO = ["WWWWWWWWWWWWWWW", "WWWWRRRRRWWWWWW", "WWWRRRRRRRRRWWW", "WWWOOOYYBYWWWWW", "WWOYOYYYBYYYWWW", "WWOYOOYYYBYYYWW", "WWWOYYYYBBBBWWW", "WWWWYYYYYYWWWWW", "WWWRRBRRBRRWWWW", "WWRRRBRRBRRRWWW", "WRRRRBBBBRRRRWW", "WOORBOBBOBROOWW", "WOOOBBBBBBOOOWW", "WOOBBBBBBBBOOWW", "WWWBBBWWBBBWWWW", "WWWBBBWWBBBWWWW", "WWOOOWWWWOOOWWW", "WOOOOWWWWOOOOWW"];

const COLORS = {
  R: {hex:"#ff2b2b", name:"Rosso"},
  O: {hex:"#ffb400", name:"Arancione"},
  Y: {hex:"#fff200", name:"Giallo"},
  G: {hex:"#00b85a", name:"Verde"},
  B: {hex:"#0878d1", name:"Blu"},
  W: {hex:"#f8f8f8", name:"Bianco"}
};
const COLOR_KEYS = ["R","O","Y","G","B","W"];

const $ = (q, root=document) => root.querySelector(q);
const $$ = (q, root=document) => [...root.querySelectorAll(q)];

let audioOn = localStorage.getItem("cubo-audio") !== "false";
let theme = localStorage.getItem("cubo-theme") || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
document.documentElement.dataset.theme = theme;

function sound(type="click"){
  if(!audioOn) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if(!AC) return;
  const ctx = sound.ctx || (sound.ctx = new AC());
  const run = () => {
    const t=ctx.currentTime+.004, o=ctx.createOscillator(), g=ctx.createGain();
    o.type=type==="success"?"sine":"triangle";
    o.frequency.setValueAtTime(type==="success"?620:430,t);
    o.frequency.exponentialRampToValueAtTime(type==="success"?880:260,t+.075);
    g.gain.setValueAtTime(.0001,t); g.gain.exponentialRampToValueAtTime(.13,t+.008); g.gain.exponentialRampToValueAtTime(.0001,t+.11);
    o.connect(g).connect(ctx.destination); o.start(t); o.stop(t+.12);
  };
  ctx.state==="suspended" ? ctx.resume().then(run).catch(()=>{}) : run();
}

function updateTopIcons(){
  $("#themeBtn").textContent = theme==="dark" ? "☀" : "☾";
  $("#soundBtn").textContent = audioOn ? "🔊" : "🔇";
}
updateTopIcons();

$("#themeBtn").addEventListener("click",()=>{
  theme = theme==="dark" ? "light" : "dark";
  document.documentElement.dataset.theme=theme;
  localStorage.setItem("cubo-theme",theme);
  updateTopIcons(); sound();
});
$("#soundBtn").addEventListener("click",()=>{
  audioOn=!audioOn; localStorage.setItem("cubo-audio",String(audioOn)); updateTopIcons();
  if(audioOn) sound();
});
$("#fullBtn").addEventListener("click",async()=>{
  sound();
  try{ document.fullscreenElement ? await document.exitFullscreen() : await document.documentElement.requestFullscreen(); }catch{}
});

function setTab(id){
  $$(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===id));
  $$(".panel").forEach(p=>p.classList.toggle("active",p.id===id));
  localStorage.setItem("pixel-art-tab",id);
  sound();
  window.scrollTo({top:0,behavior:"smooth"});
}
$$(".tab").forEach(b=>b.addEventListener("click",()=>setTab(b.dataset.tab)));
const savedTab=localStorage.getItem("pixel-art-tab");
if(savedTab && $("#"+savedTab)) setTab(savedTab);

function cellStyle(code){
  return COLORS[code]?.hex || COLORS.W.hex;
}
function renderGrid(el, rows, {difficulty="easy", numbers=false, finale=false, team="all"}={}){
  const nRows=rows.length, nCols=rows[0].length;
  el.style.setProperty("--cols",nCols);
  el.style.setProperty("--rows",nRows);
  el.classList.remove("easy","medium","hard","veryhard","nine");
  el.classList.add(difficulty);
  if(nCols===9 && nRows===9) el.classList.add("nine");
  if(finale) el.dataset.team=team;
  const frag=document.createDocumentFragment();
  rows.forEach((row,r)=>[...row].forEach((code,c)=>{
    const px=document.createElement("i");
    px.className="px";
    if((c+1)%3===0 && c!==nCols-1) px.classList.add("block-right");
    if((r+1)%3===0 && r!==nRows-1) px.classList.add("block-bottom");
    px.style.background=cellStyle(code);
    px.dataset.code=code;
    if(finale) px.dataset.team=String(Math.floor(r/6)+1);
    if(numbers && difficulty==="easy" && c%3===1 && r%3===1){
      const num=document.createElement("span");
      num.className="block-number";
      num.textContent=String(Math.floor(r/3)*Math.ceil(nCols/3)+Math.floor(c/3)+1);
      px.appendChild(num);
    }
    frag.appendChild(px);
  }));
  el.replaceChildren(frag);
  if(finale && difficulty==="easy" && team==="all"){
    ["t1","t2","t3"].forEach(cls=>{const m=document.createElement("span");m.className="team-mask "+cls;el.appendChild(m);});
  }
}

function miniGrid(rows){
  const g=document.createElement("span"); g.className="mini-grid";
  rows.forEach(row=>[...row].forEach(code=>{const i=document.createElement("i");i.style.background=cellStyle(code);g.appendChild(i);}));
  return g;
}

let modelIndex = Number(localStorage.getItem("pixel-model")||0);
if(!Number.isFinite(modelIndex)||modelIndex<0||modelIndex>=PATTERNS.length) modelIndex=0;
let difficulty=localStorage.getItem("pixel-difficulty")||"easy";
let splitOpen=false;

function renderGallery(){
  const gallery=$("#patternGallery"); gallery.replaceChildren();
  PATTERNS.forEach((p,i)=>{
    const b=document.createElement("button");
    b.className="pattern-thumb"+(i===modelIndex?" selected":"");
    b.appendChild(miniGrid(p.rows));
    const s=document.createElement("strong");s.textContent=p.name;b.appendChild(s);
    b.addEventListener("click",()=>{modelIndex=i;localStorage.setItem("pixel-model",String(i));splitOpen=false;renderChallenge();sound();});
    gallery.appendChild(b);
  });
}
function renderChallenge(){
  const p=PATTERNS[modelIndex];
  $("#modelTitle").textContent=p.name;
  $("#modelCount").textContent=`${modelIndex+1} / ${PATTERNS.length}`;
  $("#labModelTitle").textContent=p.name;
  renderGrid($("#mainGrid"),p.rows,{difficulty,numbers:true});
  $$(".difficulty [data-diff]").forEach(b=>b.classList.toggle("active",b.dataset.diff===difficulty));
  $("#splitArea").hidden=!splitOpen;
  if(splitOpen) renderBlocks($("#cubeBlocks"),p.rows);
  renderGallery();
}
$$("[data-diff]").forEach(b=>b.addEventListener("click",()=>{
  difficulty=b.dataset.diff;localStorage.setItem("pixel-difficulty",difficulty);renderChallenge();sound();
}));
$("#prevBtn").addEventListener("click",()=>{modelIndex=(modelIndex-1+PATTERNS.length)%PATTERNS.length;splitOpen=false;renderChallenge();sound();});
$("#nextBtn").addEventListener("click",()=>{modelIndex=(modelIndex+1)%PATTERNS.length;splitOpen=false;renderChallenge();sound();});
$("#splitBtn").addEventListener("click",()=>{splitOpen=!splitOpen;renderChallenge();sound();if(splitOpen)$("#splitArea").scrollIntoView({behavior:"smooth",block:"nearest"});});

function getBlocks(rows){
  const h=rows.length,w=rows[0].length,blocks=[];
  for(let br=0;br<h;br+=3) for(let bc=0;bc<w;bc+=3){
    const part=[];
    for(let r=0;r<3 && br+r<h;r++) part.push(rows[br+r].slice(bc,bc+3).padEnd(3,"W"));
    while(part.length<3)part.push("WWW");
    blocks.push(part);
  }
  return blocks;
}
function renderBlocks(container,rows){
  container.replaceChildren();
  getBlocks(rows).forEach((block,idx)=>{
    const card=document.createElement("button");card.className="cube-block";
    const n=document.createElement("span");n.className="cube-no";n.textContent=String(idx+1);
    const face=document.createElement("span");face.className="face-grid";
    block.forEach((row,r)=>[...row].forEach((code,c)=>{
      const i=document.createElement("i");i.style.background=cellStyle(code);if(r===1&&c===1)i.className="center";face.appendChild(i);
    }));
    card.append(n,face);
    card.addEventListener("click",()=>openFace(block,idx+1));
    container.appendChild(card);
  });
}
function openFace(block,num){
  const d=document.createElement("dialog");d.className="lab-dialog";
  const wrap=document.createElement("div");
  wrap.innerHTML=`<button class="dialog-close" aria-label="Chiudi">×</button><span class="eyebrow">CUBO ${num}</span><h2 style="margin:.2em 0 .5em">Costruisci questa faccia</h2><p style="color:var(--muted)">Parti dal centro evidenziato: il suo colore determina la faccia da mettere davanti.</p>`;
  const face=document.createElement("span");face.className="face-grid";face.style.width="min(70vw,360px)";face.style.margin="22px auto";face.style.display="grid";
  block.forEach((row,r)=>[...row].forEach((code,c)=>{const i=document.createElement("i");i.style.background=cellStyle(code);if(r===1&&c===1)i.className="center";face.appendChild(i);}));
  wrap.appendChild(face);d.appendChild(wrap);document.body.appendChild(d);d.showModal();sound();
  $(".dialog-close",d).addEventListener("click",()=>d.close());
  d.addEventListener("close",()=>d.remove());
  d.addEventListener("click",e=>{if(e.target===d)d.close();});
}

renderChallenge();

let finalDiff=localStorage.getItem("pixel-final-difficulty")||"easy";
let activeTeam="all";
function renderFinal(){
  renderGrid($("#marioGrid"),MARIO,{difficulty:finalDiff,finale:true,team:activeTeam});
  $$("[data-fdiff]").forEach(b=>b.classList.toggle("active",b.dataset.fdiff===finalDiff));
  $$("[data-team]").forEach(b=>b.classList.toggle("active",b.dataset.team===activeTeam));
}
$$("[data-fdiff]").forEach(b=>b.addEventListener("click",()=>{finalDiff=b.dataset.fdiff;localStorage.setItem("pixel-final-difficulty",finalDiff);renderFinal();sound();}));
$$("[data-team]").forEach(b=>b.addEventListener("click",()=>{activeTeam=b.dataset.team;renderFinal();sound();}));
renderFinal();

const heroRows=PATTERNS[0].rows;
const hero=$("#heroMosaic");
heroRows.forEach(row=>[...row].forEach(code=>{const i=document.createElement("i");i.style.background=cellStyle(code);hero.appendChild(i);}));

/* Editor */
let editorSize=localStorage.getItem("pixel-editor-size")||"9x9";
let paint="R", drawing=false;
let editRows=[], undoStack=[], redoStack=[];

function dimensions(){
  return editorSize==="15x18"?[18,15]:[9,9];
}
function blankRows(){
  const [h,w]=dimensions();return Array.from({length:h},()=>Array(w).fill("W"));
}
function loadEditor(){
  try{
    const raw=JSON.parse(localStorage.getItem("pixel-editor-"+editorSize)||"null");
    const [h,w]=dimensions();
    if(Array.isArray(raw)&&raw.length===h&&raw.every(r=>Array.isArray(r)&&r.length===w)) return raw;
  }catch{}
  return blankRows();
}
function saveEditor(){
  localStorage.setItem("pixel-editor-"+editorSize,JSON.stringify(editRows));
}
function snap(){
  return editRows.map(r=>[...r]);
}
function pushUndo(){
  undoStack.push(snap());if(undoStack.length>60)undoStack.shift();redoStack=[];
}
function renderEditor(){
  const el=$("#editorGrid"),[h,w]=dimensions();
  el.style.setProperty("--cols",w);el.style.setProperty("--rows",h);el.classList.toggle("nine",w===9);
  el.style.aspectRatio=`${w}/${h}`;
  el.replaceChildren();
  editRows.forEach((row,r)=>row.forEach((code,c)=>{
    const px=document.createElement("i");px.className="px";
    if((c+1)%3===0&&c!==w-1)px.classList.add("block-right");
    if((r+1)%3===0&&r!==h-1)px.classList.add("block-bottom");
    px.style.background=cellStyle(code);px.dataset.r=r;px.dataset.c=c;
    el.appendChild(px);
  }));
  $$("[data-size]").forEach(b=>b.classList.toggle("active",b.dataset.size===editorSize));
  $("#undoEdit").disabled=!undoStack.length;$("#redoEdit").disabled=!redoStack.length;
}
function paintCell(target){
  if(!target?.classList.contains("px"))return;
  const r=+target.dataset.r,c=+target.dataset.c;
  if(editRows[r][c]===paint)return;
  editRows[r][c]=paint;target.style.background=cellStyle(paint);saveEditor();
}
$("#editorGrid").addEventListener("pointerdown",e=>{
  e.preventDefault();pushUndo();drawing=true;paintCell(e.target);sound();
  try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}
});
$("#editorGrid").addEventListener("pointermove",e=>{if(drawing)paintCell(document.elementFromPoint(e.clientX,e.clientY));});
window.addEventListener("pointerup",()=>{drawing=false;renderEditor();});
$$("[data-size]").forEach(b=>b.addEventListener("click",()=>{
  editorSize=b.dataset.size;localStorage.setItem("pixel-editor-size",editorSize);editRows=loadEditor();undoStack=[];redoStack=[];$("#editorSplit").hidden=true;renderEditor();sound();
}));
const palette=$("#palette");
COLOR_KEYS.forEach(k=>{
  const b=document.createElement("button");b.style.background=cellStyle(k);b.dataset.color=k;b.title=COLORS[k].name;
  const s=document.createElement("span");s.textContent=COLORS[k].name.toUpperCase();b.appendChild(s);
  b.addEventListener("click",()=>{paint=k;$$('[data-color]',palette).forEach(x=>x.classList.toggle("active",x.dataset.color===paint));sound();});
  palette.appendChild(b);
});
$(`[data-color="${paint}"]`,palette).classList.add("active");
$("#undoEdit").addEventListener("click",()=>{if(!undoStack.length)return;redoStack.push(snap());editRows=undoStack.pop();saveEditor();renderEditor();sound();});
$("#redoEdit").addEventListener("click",()=>{if(!redoStack.length)return;undoStack.push(snap());editRows=redoStack.pop();saveEditor();renderEditor();sound();});
$("#clearEdit").addEventListener("click",()=>{pushUndo();editRows=blankRows();saveEditor();renderEditor();$("#editorSplit").hidden=true;sound();});
$("#splitEdit").addEventListener("click",()=>{
  const open=$("#editorSplit").hidden;$("#editorSplit").hidden=!open;
  if(open){renderBlocks($("#editorBlocks"),editRows.map(r=>r.join("")));$("#editorSplitTitle").textContent=`${getBlocks(editRows.map(r=>r.join(""))).length} cubi da costruire`;$("#editorSplit").scrollIntoView({behavior:"smooth",block:"nearest"});}
  sound();
});
editRows=loadEditor();renderEditor();

/* Timer laboratorio */
const lab=$("#labDialog"),setup=$("#labSetup"),count=$("#countdown"),run=$("#labRun");
let timerStart=0,timerRAF=null,elapsed=0,errors=0,fixes=0,running=false;
function formatTime(ms){
  const total=ms/1000,m=Math.floor(total/60),s=Math.floor(total%60),d=Math.floor((ms%1000)/100);
  return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}.${d}`;
}
function updateTimer(){
  if(running)elapsed=performance.now()-timerStart;
  $("#timer").textContent=formatTime(elapsed);
  if(running)timerRAF=requestAnimationFrame(updateTimer);
}
function resetLabState(){
  cancelAnimationFrame(timerRAF);running=false;elapsed=0;errors=0;fixes=0;
  $("#errors").textContent="0";$("#fixes").textContent="0";$("#timer").textContent="00:00.0";$("#lastResult").hidden=true;
}
$("#labBtn").addEventListener("click",()=>{
  $("#labModelTitle").textContent=PATTERNS[modelIndex].name;resetLabState();setup.hidden=false;count.hidden=true;run.hidden=true;lab.showModal();sound();
});
lab.addEventListener("close",()=>{cancelAnimationFrame(timerRAF);running=false;});
$("#countdownBtn").addEventListener("click",async()=>{
  setup.hidden=true;count.hidden=false;run.hidden=true;
  for(const val of ["3","2","1","VIA!"]){
    count.textContent=val;sound(val==="VIA!"?"success":"click");
    await new Promise(r=>setTimeout(r,val==="VIA!"?650:700));
  }
  count.hidden=true;run.hidden=false;timerStart=performance.now();elapsed=0;running=true;updateTimer();
});
$("#stopTimer").addEventListener("click",()=>{
  if(running){
    elapsed=performance.now()-timerStart;running=false;cancelAnimationFrame(timerRAF);updateTimer();sound("success");
    const res=$("#lastResult");res.hidden=false;res.textContent=`Tempo: ${formatTime(elapsed)} · Errori: ${errors} · Correzioni: ${fixes}`;
    localStorage.setItem("pixel-last-result",JSON.stringify({model:PATTERNS[modelIndex].name,time:elapsed,errors,fixes,date:Date.now()}));
    $("#stopTimer").textContent="▶ RIPRENDI";
  }else{
    timerStart=performance.now()-elapsed;running=true;$("#stopTimer").textContent="■ STOP";$("#lastResult").hidden=true;updateTimer();sound();
  }
});
$("#resetTimer").addEventListener("click",()=>{resetLabState();$("#stopTimer").textContent="■ STOP";sound();});
$$("[data-counter]").forEach(b=>b.addEventListener("click",()=>{
  const step=Number(b.dataset.step);
  if(b.dataset.counter==="errors"){errors=Math.max(0,errors+step);$("#errors").textContent=errors;}
  else{fixes=Math.max(0,fixes+step);$("#fixes").textContent=fixes;}
  sound();
}));

if("serviceWorker" in navigator) navigator.serviceWorker.register("./service-worker.js").catch(()=>{});
