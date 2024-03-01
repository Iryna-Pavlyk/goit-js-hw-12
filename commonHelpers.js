import{S as h,a as y,i as x}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==";function S(r){let s=r.hits.map(({webformatURL:c,largeImageURL:l,tags:e,likes:t,views:a,comments:A,downloads:f})=>`<li class="gallery-item">
      <div class="image-wrapper"><a href="${l}"><img class="image" src="${c}" alt="${e}" width="360"
                    height="200"></a></div>
      <div class="text-wrapper">
        <ul class="text-list">
          <li class="text-list-item">
            <h3 class="text-list-title">Likes</h3>
            <p class="text-list-param">${t}</p>
          </li>
          <li class="text-list-item">
            <h3 class="text-list-title">Views</h3>
            <p class="text-list-param">${a}</p>
          </li>
          <li class="text-list-item">
            <h3 class="text-list-title">Comments</h3>
            <p class="text-list-param">${A}</p>
          </li>
          <li class="text-list-item">
            <h3 class="text-list-title">Downloads</h3>
            <p class="text-list-param">${f}</p>
          </li>
        </ul>
      </div>
    </li>`).join("");return d.classList.remove("is-hidden"),g.classList.add("is-hidden"),m.insertAdjacentHTML("beforeend",s)}const L={captionsData:"alt",captionDelay:250},U=new h(".image-gallery a",L);async function p(r){await y.get(r).then(({data:s})=>(s.hits.length===0&&(x.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",theme:"dark",iconUrl:w,iconColor:"#fafafb",messageSize:"16",closeOnEscape:!0,maxWidth:"432",position:"topRight"}),m.innerHTML=""),S(s),U.refresh())).catch(s=>{console.log(s)})}const b=document.querySelector(".form"),q=document.querySelector("input[name=message]"),m=document.querySelector(".image-gallery"),d=document.querySelector(".load-btn"),g=document.querySelector(".loader"),C="42476589-1f9c9241784e75b96bc1ad3a5";let O="https://pixabay.com/api/",i=`${O}?key=${C}&`;const u={q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};let o,n;b.addEventListener("submit",r=>{r.preventDefault(),m.innerHTML=null,g.classList.remove("is-hidden"),u.q=q.value,o=1,n=new URLSearchParams(u),i=`${i}${n}&page=${o}`,p(i)});d.addEventListener("click",()=>{o+=1,i=`${i}${n}&page=${o}`,p(i)});
//# sourceMappingURL=commonHelpers.js.map
