var urlObj = new window.URL(window.location.href);
     var url = "https://eaglercrackx.vercel.app";
     if (url) {
       var win;
 
       document.querySelector('button').onclick = function() {
         if (win) {
           win.focus();
         } else {
           win = window.open();
           win.document.body.style.margin = '0';
           win.document.body.style.height = '100vh';
           var iframe = win.document.createElement('iframe');
           iframe.style.border = 'none';
           iframe.style.width = '100%';
           iframe.style.height = '100%';
           iframe.style.margin = '0';
           iframe.src = url;
           win.document.body.appendChild(iframe);
         }
         document.querySelector('button').style.bacground = 'grey';
         document.querySelector('button').innerHTML = "Play Now";
       };
     }