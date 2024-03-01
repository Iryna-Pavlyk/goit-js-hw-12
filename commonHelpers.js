import{S as w,a as S,i as d}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==";function L(r){let s=r.hits.map(({webformatURL:a,largeImageURL:n,tags:e,likes:t,views:o,comments:y,downloads:x})=>`<li class="gallery-item">
      <div class="image-wrapper"><a href="${n}"><img class="image" src="${a}" alt="${e}" width="360"
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
            <p class="text-list-param">${y}</p>
          </li>
          <li class="text-list-item">
            <h3 class="text-list-title">Downloads</h3>
            <p class="text-list-param">${x}</p>
          </li>
        </ul>
      </div>
    </li>`).join("");return u.classList.remove("is-hidden"),c.insertAdjacentHTML("beforeend",s)}const U={captionsData:"alt",captionDelay:250},C=new w(".image-gallery a",U);let p=0;async function f(r){await S.get(r).then(({data:s})=>{if(s.hits.length===0){h.value="",d.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",theme:"dark",iconUrl:b,iconColor:"#fafafb",messageSize:"16",closeOnEscape:!0,maxWidth:"432",position:"topRight"}),c.innerHTML="";return}if(p=Math.ceil(s.totalHits/m.per_page),l===p){d.info({message:"Sorry, there are no images",messageColor:"#fafafb",backgroundColor:"#2e2f42",theme:"dark",messageSize:"16",closeOnEscape:!0,maxWidth:"432",position:"topRight"}),u.classList.add("is-hidden");return}L(s);const a=c.getBoundingClientRect().height;return window.scrollBy({top:a,behavior:"smooth"}),C.refresh()}).catch(s=>{console.log(s)}).finally(()=>{A.classList.add("is-hidden")})}const q=document.querySelector(".form"),h=document.querySelector("input[name=message]"),c=document.querySelector(".image-gallery"),u=document.querySelector(".load-btn"),A=document.querySelector(".loader"),v="42476589-1f9c9241784e75b96bc1ad3a5";let O="https://pixabay.com/api/",i=`${O}?key=${v}&`;const m={q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:150};let l,g;q.addEventListener("submit",r=>{r.preventDefault(),c.innerHTML=null,A.classList.remove("is-hidden"),m.q=h.value,l=1,g=new URLSearchParams(m),i=`${i}${g}&page=${l}`,f(i)});u.addEventListener("click",()=>{l+=1,i=`${i}${g}&page=${l}`,f(i)});
//# sourceMappingURL=commonHelpers.js.map
