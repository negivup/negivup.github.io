import{_ as s,c as n,o as a,a as e}from"./app.479e69e4.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"network-operation/nginx/question-ssl-do-handshake.md"}'),o={name:"network-operation/nginx/question-ssl-do-handshake.md"},l=e(`<p>\u5728\u505A\u6B63\u5411\u4EE3\u7406\u7684\u65F6\u5019\uFF0C\u67E5\u770B\u9519\u8BEF\u65E5\u5FD7 <code>/var/log/nginx/error.log</code> \u770B\u5230\u4E0B\u9762\u7684\u9519\u8BEF\u4FE1\u606F\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">SSL_do_handshake() failed (SSL: error:14094410:SSL routines:ssl3_read_bytes:sslv3 alert handshake failure:SSL alert number 40) while SSL handshaking to upstream</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u51FA\u73B0\u8FD9\u79CD\u95EE\u9898\uFF0C\u5B98\u65B9\u4E5F\u7ED9\u51FA\u4E86\u4E00\u4E2A\u89E3\u51B3\u65B9\u6848\uFF0C\u5C31\u662F\u4F7F\u7528 <code>proxy_ssl_server_name</code>\uFF0C\u628A\u5B83\u8BBE\u7F6E\u6210 <code>on</code> \u5373\u53EF\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen 8010;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_name 192.168.8.194;</span></span>
<span class="line"><span style="color:#A6ACCD;">  location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">    resolver 114.114.114.114;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_pass https://www.notion.so;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_ssl_server_name on;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,4),p=[l];function t(r,c,i,d,_,C){return a(),n("div",null,p)}const h=s(o,[["render",t]]);export{y as __pageData,h as default};
