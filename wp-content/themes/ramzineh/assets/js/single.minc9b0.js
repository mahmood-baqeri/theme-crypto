document.addEventListener("DOMContentLoaded",()=>{document.getElementById("post-share-copy")&&document.getElementById("post-share-copy").addEventListener("click",function(e){e.preventDefault();let t=document.getElementById("post-share-shortlink");t.select(),t.setSelectionRange(0,9999),navigator.clipboard.writeText(t.value),document.getElementById("post-share-copy-icon").style.display="none",document.getElementById("post-share-copy-tick").style.display="block",setTimeout(()=>{document.getElementById("post-share-copy-icon").style.display="block",document.getElementById("post-share-copy-tick").style.display="none"},2e3)})});