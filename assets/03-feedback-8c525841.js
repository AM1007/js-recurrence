const o=document.querySelector(".js-feedback-form"),r={},n=e=>{const t=JSON.parse(localStorage.getItem("feedback-form-data"));if(t!==null)for(const a in t)t.hasOwnProperty(a)&&(e.elements[a].value=t[a])};n(o);const c=e=>{const t=e.target.name,a=e.target.value;r[t]=a,localStorage.setItem("feedback-form-data",JSON.stringify(r))},l=e=>{e.preventDefault(),e.target.reset(),localStorage.removeItem("feedback-form-data")};o.addEventListener("change",c);o.addEventListener("submit",l);
//# sourceMappingURL=03-feedback-8c525841.js.map
