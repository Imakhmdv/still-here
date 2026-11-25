(()=>{
 const tg=window.Telegram?.WebApp,game=document.querySelector('#game');
 const inTelegram=!!tg&&tg.platform!=='unknown',supports=v=>!!tg?.isVersionAtLeast?.(v);
 let pending=false,unsupported=false;
 const css=document.createElement('style');css.textContent='html,body{position:fixed;inset:0;width:100%;height:100%;overflow:hidden;overscroll-behavior:none;touch-action:none}#game{transform-origin:center center}';document.head.append(css);
 function fit(){
  const w=window.visualViewport?.width||innerWidth,h=window.visualViewport?.height||innerHeight;
  const safe=tg?.safeAreaInset||{},content=tg?.contentSafeAreaInset||{};
  const inset=k=>Math.max(0,safe[k]||0,content[k]||0);
  const left=inset('left'),right=inset('right'),top=inset('top'),bottom=inset('bottom');
  const aw=Math.max(1,w-left-right),ah=Math.max(1,h-top-bottom),rotated=inTelegram&&aw<ah;
  const lw=rotated?ah:aw,lh=rotated?aw:ah,scale=Math.min(lw/2100,lh/980),gw=2100*scale,gh=980*scale;
  Object.assign(game.style,{width:gw+'px',height:gh+'px',inset:'auto',left:(left+aw/2-gw/2)+'px',top:(top+ah/2-gh/2)+'px',margin:'0',transform:rotated?'rotate(90deg)':'none'});
  // Insets are applied to the whole stage, so don't apply them again to its HUD.
  document.documentElement.style.setProperty('--safe-top','0px');document.documentElement.style.setProperty('--safe-bottom','0px');
 }
 function fullscreen(){tg?.expand();if(!supports('8.0')||unsupported||tg.isFullscreen||pending)return;pending=true;try{tg.requestFullscreen();}catch{pending=false;unsupported=true;tg.expand();}fit();}
 for(const event of ['resize','orientationchange'])addEventListener(event,fit);window.visualViewport?.addEventListener('resize',fit);
 if(tg){tg.ready();tg.expand();if(supports('6.1')){tg.setHeaderColor('#080b0e');tg.setBackgroundColor('#080b0e');}if(supports('7.7'))tg.disableVerticalSwipes();
 for(const event of ['viewportChanged','safeAreaChanged','contentSafeAreaChanged'])tg.onEvent(event,fit);
 tg.onEvent('fullscreenChanged',()=>{pending=false;fit();});tg.onEvent('fullscreenFailed',e=>{pending=false;unsupported=e?.error==='UNSUPPORTED';tg.expand();fit();});
 if(inTelegram)fullscreen();
 addEventListener('pointerdown',()=>{if(inTelegram&&!tg.isFullscreen&&!unsupported){pending=false;fullscreen();}},{once:true,passive:true});}
 fit();
})();
