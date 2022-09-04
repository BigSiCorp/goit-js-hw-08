const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then((function(e){})).catch((function(e){e.name}));const o=_.throttle((function(e){localStorage.setItem("videoplayer-current-time",e.seconds),console.log(e.seconds)}),1e3);t.on("timeupdate",o);
//# sourceMappingURL=02-video.119f906a.js.map
