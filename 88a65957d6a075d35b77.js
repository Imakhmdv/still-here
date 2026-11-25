(()=>{
 let audio,ready,buffers={};
 function init(){if(!audio){audio=new (window.AudioContext||window.webkitAudioContext)();ready=Promise.all(Object.entries({key:window.KEY_CHIME100,crack:window.ICE_CRACK101}).map(async([name,url])=>{const bytes=await(await fetch(url)).arrayBuffer();buffers[name]=await audio.decodeAudioData(bytes);})).catch(()=>{});}if(audio.state==='suspended')audio.resume().catch(()=>{});}
 document.addEventListener('pointerdown',init,{once:true,capture:true});document.addEventListener('keydown',init,{once:true,capture:true});
 window.playIceSound100=(name,enabled)=>{if(!enabled)return;try{init();ready.then(()=>{if(!buffers[name]||!window.iceSoundEnabled100?.())return;const s=audio.createBufferSource(),g=audio.createGain();s.buffer=buffers[name];g.gain.value=name==='key'?.16:.55;s.connect(g).connect(audio.destination);s.start();});}catch{}};
})();
