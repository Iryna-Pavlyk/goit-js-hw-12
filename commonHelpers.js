import{S,a as w,i as p}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();const L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==";function u(r){let t=r.hits.map(({webformatURL:c,largeImageURL:n,tags:e,likes:s,views:a,comments:y,downloads:x})=>`<li class="gallery-item">
      <div class="image-wrapper"><a href="${n}"><img class="image" src="${c}" alt="${e}" width="360"
                    height="200"></a></div>
      <div class="text-wrapper">
        <ul class="text-list">
          <li class="text-list-item">
            <h3 class="text-list-title">Likes</h3>
            <p class="text-list-param">${s}</p>
          </li>
          <li class="text-list-item">
            <h3 class="text-list-title">Views</h3>
            <p class="text-list-param">${a}</p>
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
    </li>`).join("");return h.classList.remove("is-hidden"),A.classList.add("is-hidden"),m.insertAdjacentHTML("beforeend",t)}const b={captionsData:"alt",captionDelay:250},U=new S(".image-gallery a",b);let d=0;async function f(r){await w.get(r).then(({data:t})=>{if(t.hits.length===0){p.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",theme:"dark",iconUrl:L,iconColor:"#fafafb",messageSize:"16",closeOnEscape:!0,maxWidth:"432",position:"topRight"}),m.innerHTML="";return}if(d=Math.ceil(t.totalHits/o.per_page),t.hits.length<o.per_page||l===d){loadMoreBtn.classList.add("is-hidden"),p.info({message:"Sorry, there are no images",messageColor:"#fafafb",backgroundColor:"#2e2f42",theme:"dark",messageSize:"16",closeOnEscape:!0,maxWidth:"432",position:"topRight"}),t.hits.length<=o.per_page&&t.hits.length>0&&u(t);return}return u(t),U.refresh()}).catch(t=>{console.log(t)})}const C=document.querySelector(".form"),q=document.querySelector("input[name=message]"),m=document.querySelector(".image-gallery"),h=document.querySelector(".load-btn"),A=document.querySelector(".loader"),O="42476589-1f9c9241784e75b96bc1ad3a5";let M="https://pixabay.com/api/",i=`${M}?key=${O}&`;const o={q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:150};let l,g;C.addEventListener("submit",r=>{r.preventDefault(),m.innerHTML=null,A.classList.remove("is-hidden"),o.q=q.value,l=1,g=new URLSearchParams(o),i=`${i}${g}&page=${l}`,f(i)});h.addEventListener("click",()=>{l+=1,i=`${i}${g}&page=${l}`,f(i)});
//# sourceMappingURL=commonHelpers.js.map
