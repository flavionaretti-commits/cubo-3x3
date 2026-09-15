(() => {
  const STYLE_ID = "pixel-art-entry-style";
  const ENTRY_ID = "pixel-art-entry";
  function ensureStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const s=document.createElement("style");s.id=STYLE_ID;
    s.textContent=`
      .pixel-art-entry{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:14px;
        margin:0 0 16px;padding:14px 16px;border:1px solid var(--border,#26344b);
        border-radius:18px;background:linear-gradient(135deg,rgba(124,92,255,.16),rgba(0,194,255,.10));
        color:inherit;text-decoration:none;box-shadow:0 12px 34px rgba(0,0,0,.10)}
      .pixel-art-entry:hover{transform:translateY(-1px);border-color:#6f70ff}
      .pixel-art-entry-grid{width:58px;height:58px;display:grid;grid-template-columns:repeat(3,1fr);gap:2px;
        padding:5px;border-radius:12px;background:#05070b;box-shadow:0 8px 18px rgba(0,0,0,.22)}
      .pixel-art-entry-grid i{border-radius:2px}.pixel-art-entry-grid i:nth-child(1),.pixel-art-entry-grid i:nth-child(5){background:#ff2b2b}
      .pixel-art-entry-grid i:nth-child(2),.pixel-art-entry-grid i:nth-child(9){background:#fff200}
      .pixel-art-entry-grid i:nth-child(3),.pixel-art-entry-grid i:nth-child(7){background:#00b85a}
      .pixel-art-entry-grid i:nth-child(4),.pixel-art-entry-grid i:nth-child(8){background:#0878d1}
      .pixel-art-entry-grid i:nth-child(6){background:#f8f8f8}
      .pixel-art-entry-copy{display:flex;flex-direction:column;gap:3px;min-width:0}
      .pixel-art-entry-copy small{font-weight:900;letter-spacing:.12em;color:#00a7df}
      .pixel-art-entry-copy strong{font-size:1.15rem}.pixel-art-entry-copy span{font-size:.88rem;opacity:.7}
      .pixel-art-entry-arrow{font-size:1.8rem;font-weight:900}
      @media(max-width:600px){.pixel-art-entry{grid-template-columns:auto 1fr;padding:11px}
        .pixel-art-entry-grid{width:48px;height:48px}.pixel-art-entry-arrow{display:none}
        .pixel-art-entry-copy strong{font-size:1rem}.pixel-art-entry-copy span{font-size:.78rem}}
    `;
    document.head.appendChild(s);
  }
  function inject(){
    if(document.getElementById(ENTRY_ID)) return true;
    const gallery=document.querySelector(".patterns-layout .pattern-gallery");
    if(!gallery) return false;
    ensureStyle();
    const a=document.createElement("a");
    a.id=ENTRY_ID;a.className="pixel-art-entry";a.href="./pixel-art.html";
    a.innerHTML=`
      <span class="pixel-art-entry-grid" aria-hidden="true">${"<i></i>".repeat(9)}</span>
      <span class="pixel-art-entry-copy">
        <small>LABORATORIO</small>
        <strong>PIXEL ART con i cubi</strong>
        <span>9 cubi · sfida a squadre · Gran Finale · crea il tuo mosaico</span>
      </span>
      <span class="pixel-art-entry-arrow" aria-hidden="true">›</span>`;
    gallery.parentElement.insertBefore(a,gallery);
    return true;
  }
  inject();
  const obs=new MutationObserver(()=>{ if(inject()){} });
  obs.observe(document.documentElement,{subtree:true,childList:true});
})();
