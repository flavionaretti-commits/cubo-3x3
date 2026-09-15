(() => {
  const STYLE_ID = "pixel-art-entry-style";
  const ENTRY_ID = "pixel-art-entry";

  function ensureStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const s=document.createElement("style");
    s.id=STYLE_ID;
    s.textContent=`
      .pixel-art-entry{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:12px;
        margin:0 0 12px;padding:11px 14px;border:1px solid var(--border,#26344b);
        border-radius:16px;background:linear-gradient(135deg,rgba(124,92,255,.16),rgba(0,194,255,.10));
        color:inherit;text-decoration:none;box-shadow:0 10px 28px rgba(0,0,0,.10);transition:.18s ease}
      .pixel-art-entry:hover{transform:translateY(-1px);border-color:#6f70ff}
      .pixel-art-entry-grid{width:48px;height:48px;display:grid;grid-template-columns:repeat(3,1fr);gap:2px;
        padding:4px;border-radius:10px;background:#05070b;box-shadow:0 7px 16px rgba(0,0,0,.22)}
      .pixel-art-entry-grid i{border-radius:2px}.pixel-art-entry-grid i:nth-child(1),.pixel-art-entry-grid i:nth-child(5){background:#ff2b2b}
      .pixel-art-entry-grid i:nth-child(2),.pixel-art-entry-grid i:nth-child(9){background:#fff200}
      .pixel-art-entry-grid i:nth-child(3),.pixel-art-entry-grid i:nth-child(7){background:#00b85a}
      .pixel-art-entry-grid i:nth-child(4),.pixel-art-entry-grid i:nth-child(8){background:#0878d1}
      .pixel-art-entry-grid i:nth-child(6){background:#f8f8f8}
      .pixel-art-entry-copy{display:flex;flex-direction:column;gap:2px;min-width:0}
      .pixel-art-entry-copy small{font-weight:900;letter-spacing:.12em;color:#00a7df}
      .pixel-art-entry-copy strong{font-size:1.05rem}.pixel-art-entry-copy span{font-size:.82rem;opacity:.72}
      .pixel-art-entry-arrow{font-size:1.6rem;font-weight:900}
      .single-cube-caption{display:flex;align-items:center;gap:8px;margin:3px 0 9px;font-size:.75rem;
        font-weight:900;letter-spacing:.12em;color:#79bfff;text-transform:uppercase}
      .single-cube-caption::before{content:"";width:18px;height:3px;border-radius:99px;background:#ffd500}
      @media(max-width:600px){.pixel-art-entry{grid-template-columns:auto 1fr;padding:10px}
        .pixel-art-entry-grid{width:43px;height:43px}.pixel-art-entry-arrow{display:none}
        .pixel-art-entry-copy strong{font-size:.98rem}.pixel-art-entry-copy span{font-size:.76rem}}
    `;
    document.head.appendChild(s);
  }

  function inject(){
    if(document.getElementById(ENTRY_ID)) return true;
    const gallery=document.querySelector(".patterns-layout .pattern-gallery");
    if(!gallery) return false;
    ensureStyle();

    const list=gallery.querySelector(".pattern-list");
    if(!list) return false;

    const a=document.createElement("a");
    a.id=ENTRY_ID;
    a.className="pixel-art-entry";
    a.href="./pixel-art.html";
    a.addEventListener("click",()=>{
      try{localStorage.setItem("cubo-tab","sfide");}catch(_){}
    });
    a.innerHTML=`
      <span class="pixel-art-entry-grid" aria-hidden="true">${"<i></i>".repeat(9)}</span>
      <span class="pixel-art-entry-copy">
        <small>LABORATORIO PIXEL ART</small>
        <strong>9 cubi · Gran Finale · crea il tuo mosaico</strong>
        <span>Apri il laboratorio senza lasciare la sezione Disegni</span>
      </span>
      <span class="pixel-art-entry-arrow" aria-hidden="true">›</span>`;

    const caption=document.createElement("div");
    caption.className="single-cube-caption";
    caption.textContent="Disegni sul singolo cubo · 18 configurazioni";

    gallery.insertBefore(a,list);
    gallery.insertBefore(caption,list);
    return true;
  }

  inject();
  const obs=new MutationObserver(()=>{ inject(); });
  obs.observe(document.documentElement,{subtree:true,childList:true});
})();
