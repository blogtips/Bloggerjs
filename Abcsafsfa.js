function SlidingHeader(e){this.init(e)}SlidingHeader.prototype.init=function(e){var s={element:e.element,"class":"to_scroll"};e["class"]&&(s["class"]=e["class"]);var l=document.querySelector(s.element);if(null==l)return!1;var t={elementHeight:l.clientHeight,"class":s["class"]};this.slide(l,t)},SlidingHeader.prototype.slide=function(e,s){var l=0,t=0,i=s["class"],n=s.elementHeight;window.addEventListener("scroll",function(){var s=this.scrollY,a=s-t;l+a>n?(l=n,e.classList.contains(i)||(e.className=e.className+i)):(l+=a,e.classList.contains(i)&&(e.className="")),0>l&&(l=0),t=s})};
