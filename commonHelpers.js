import{S,a as L,i as g}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==";function U(i){let s=i.hits.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:o,comments:x,downloads:w})=>`<li class="gallery-item">
      <div class="image-wrapper"><a href="${n}"><img class="image" src="${r}" alt="${e}" width="360"
                    height="200"></a></div>
      <div class="text-wrapper">
        <ul class="text-list">
          <li class="text-list-item">
            <h3 class="text-list-title">Likes</h3>
            <p class="text-list-param">${t}</p>
          </li>
          <li class="text-list-item">
            <h3 class="text-list-title">Views</h3>
            <p class="text-list-param">${o}</p>
          </li>
          <li class="text-list-item">
            <h3 class="text-list-title">Comments</h3>
            <p class="text-list-param">${x}</p>
          </li>
          <li class="text-list-item">
            <h3 class="text-list-title">Downloads</h3>
            <p class="text-list-param">${w}</p>
          </li>
        </ul>
      </div>
    </li>`).join("");return m.classList.remove("is-hidden"),c.insertAdjacentHTML("beforeend",s)}const C={captionsData:"alt",captionDelay:250},v=new S(".image-gallery a",C);let p=0;async function f(i){await L.get(i).then(({data:s})=>{if(s.hits.length===0){u.value="",m.classList.add("is-hidden"),g.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",theme:"dark",iconUrl:b,iconColor:"#fafafb",messageSize:"16",closeOnEscape:!0,maxWidth:"432",position:"topRight"}),c.innerHTML="";return}if(p=Math.ceil(s.totalHits/A.per_page),l===p){g.info({message:"Sorry, there are no images",messageColor:"#fafafb",backgroundColor:"#2e2f42",theme:"dark",messageSize:"16",closeOnEscape:!0,maxWidth:"432",position:"topRight"}),m.classList.add("is-hidden");return}U(s);const r=c.getBoundingClientRect().height;return window.scrollBy({top:r,behavior:"smooth"}),v.refresh()}).catch(s=>{console.log(s)}).finally(()=>{h.classList.add("is-hidden")})}const q=document.querySelector(".form"),u=document.querySelector("input[name=message]"),c=document.querySelector(".image-gallery"),m=document.querySelector(".load-btn"),h=document.querySelector(".loader"),O="42476589-1f9c9241784e75b96bc1ad3a5";let $="https://pixabay.com/api/",a=`${$}?key=${O}`;const A={image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};let l,d,y;q.addEventListener("submit",i=>{i.preventDefault(),c.innerHTML=null,h.classList.remove("is-hidden"),y=u.value,l=1,d=new URLSearchParams(A),a=`${a}&q=${u.value}&${d}&page=${l}`,f(a)});m.addEventListener("click",()=>{l+=1,a=`${a}&q=${y}&${d}&page=${l}`,f(a)});
//# sourceMappingURL=commonHelpers.js.map
