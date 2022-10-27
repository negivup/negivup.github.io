import{_ as s,c as n,o as a,a as e}from"./app.479e69e4.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"network-operation/nginx/question-upstream-sent-too-big-header.md"}'),o={name:"network-operation/nginx/question-upstream-sent-too-big-header.md"},p=e(`<p>\u67E5\u770B Nginx \u7684\u9519\u8BEF\u65E5\u5FD7 <code>/var/log/nginx/error.log</code> \u770B\u5230\u4E0B\u9762\u7684\u9519\u8BEF\u4FE1\u606F\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">upstream sent too big header while reading response header from upstream</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u51FA\u73B0\u8FD9\u4E2A\u9519\u8BEF\uFF0C\u4E00\u822C\u662F fastcgi \u7F13\u51B2\u533A\u548C\u7406\u7F13\u51B2\u533A\u8BBE\u7F6E\u8FC7\u5C0F\u5BFC\u81F4\u7684\uFF0C\u89E3\u51B3\u65B9\u5F0F\u5C31\u662F\u628A\u5B83\u4EEC\u7684\u7F13\u5B58\u533A\u6269\u5927\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u589E\u5927 fastcgi \u7F13\u51B2\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">  fastcgi_buffers 8 16k;</span></span>
<span class="line"><span style="color:#A6ACCD;">  fastcgi_buffer_size 32k;</span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u589E\u5927\u4EE3\u7406\u7F13\u51B2\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">  proxy_buffer_size 64k;</span></span>
<span class="line"><span style="color:#A6ACCD;">  proxy_buffers  32 32k;</span></span>
<span class="line"><span style="color:#A6ACCD;">  proxy_busy_buffers_size 128k;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,4),t=[p];function l(r,c,i,_,d,C){return a(),n("div",null,t)}const f=s(o,[["render",l]]);export{u as __pageData,f as default};
