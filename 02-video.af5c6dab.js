const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then((function(e){})).catch((function(e){e.name}));t.on("timeupdate",(function(e){localStorage.setItem("videoplayer-current-time",e.seconds)}));
//# sourceMappingURL=02-video.af5c6dab.js.map
