!function(t){wp.customize("blogname",function(e){e.bind(function(e){t(".site-title a").text(e)})}),wp.customize("blogdescription",function(e){e.bind(function(e){t(".site-description").text(e)})}),wp.customize("header_textcolor",function(e){e.bind(function(e){"blank"===e?t(".site-title, .site-description").css({clip:"rect(1px, 1px, 1px, 1px)",position:"absolute"}):(t(".site-title, .site-description").css({clip:"auto",position:"relative"}),t(".site-title a, .site-description").css({color:e}))})})}(jQuery),function(){var i,e,t,s,a,n;if((i=document.getElementById("site-navigation"))&&void 0!==(e=i.getElementsByTagName("button")[0]))if(void 0!==(t=i.getElementsByTagName("ul")[0])){for(t.setAttribute("aria-expanded","false"),-1===t.className.indexOf("nav-menu")&&(t.className+=" nav-menu"),e.onclick=function(){-1!==i.className.indexOf("toggled")?(i.className=i.className.replace(" toggled",""),e.setAttribute("aria-expanded","false"),t.setAttribute("aria-expanded","false")):(i.className+=" toggled",e.setAttribute("aria-expanded","true"),t.setAttribute("aria-expanded","true"))},a=0,n=(s=t.getElementsByTagName("a")).length;a<n;a++)s[a].addEventListener("focus",o,!0),s[a].addEventListener("blur",o,!0);!function(e){var t,s,a=i.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");if("ontouchstart"in window)for(t=function(e){var t,s=this.parentNode;if(s.classList.contains("focus"))s.classList.remove("focus");else{for(e.preventDefault(),t=0;t<s.parentNode.children.length;++t)s!==s.parentNode.children[t]&&s.parentNode.children[t].classList.remove("focus");s.classList.add("focus")}},s=0;s<a.length;++s)a[s].addEventListener("touchstart",t,!1)}()}else e.style.display="none";function o(){for(var e=this;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}}();