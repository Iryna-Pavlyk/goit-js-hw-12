import{S as x,a as S,i as p}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==";function L(r){let s=r.hits.map(({webformatURL:n,largeImageURL:l,tags:e,likes:t,views:i,comments:h,downloads:y})=>`<li class="gallery-item">
      <div class="image-wrapper"><a href="${l}"><img class="image" src="${n}" alt="${e}" width="360"
                    height="200"></a></div>
      <div class="text-wrapper">
        <ul class="text-list">
          <li class="text-list-item">
            <h3 class="text-list-title">Likes</h3>
            <p class="text-list-param">${t}</p>
          </li>
          <li class="text-list-item">
            <h3 class="text-list-title">Views</h3>
            <p class="text-list-param">${i}</p>
          </li>
          <li class="text-list-item">
            <h3 class="text-list-title">Comments</h3>
            <p class="text-list-param">${h}</p>
          </li>
          <li class="text-list-item">
            <h3 class="text-list-title">Downloads</h3>
            <p class="text-list-param">${y}</p>
          </li>
        </ul>
      </div>
    </li>`).join("");return u.classList.remove("is-hidden"),g.insertAdjacentHTML("beforeend",s)}const b={captionsData:"alt",captionDelay:250},U=new x(".image-gallery a",b);let d=0;async function f(r){await S.get(r).then(({data:s})=>{if(s.hits.length===0){p.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",theme:"dark",iconUrl:w,iconColor:"#fafafb",messageSize:"16",closeOnEscape:!0,maxWidth:"432",position:"topRight"}),g.innerHTML="";return}if(d=Math.ceil(s.totalHits/c.per_page),o===d){p.info({message:"Sorry, there are no images",messageColor:"#fafafb",backgroundColor:"#2e2f42",theme:"dark",messageSize:"16",closeOnEscape:!0,maxWidth:"432",position:"topRight"}),u.classList.add("is-hidden");return}return L(s),U.refresh()}).catch(s=>{console.log(s)}).finally(()=>{A.classList.add("is-hidden")})}const C=document.querySelector(".form"),q=document.querySelector("input[name=message]"),g=document.querySelector(".image-gallery"),u=document.querySelector(".load-btn"),A=document.querySelector(".loader"),O="42476589-1f9c9241784e75b96bc1ad3a5";let v="https://pixabay.com/api/",a=`${v}?key=${O}&`;const c={q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:150};let o,m;C.addEventListener("submit",r=>{r.preventDefault(),g.innerHTML=null,A.classList.remove("is-hidden"),c.q=q.value,o=1,m=new URLSearchParams(c),a=`${a}${m}&page=${o}`,f(a)});u.addEventListener("click",()=>{o+=1,a=`${a}${m}&page=${o}`,f(a)});
//# sourceMappingURL=commonHelpers.js.map
