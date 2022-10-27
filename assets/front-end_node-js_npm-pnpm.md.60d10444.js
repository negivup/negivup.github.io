import{_ as o,c as e,o as s,a as n}from"./app.479e69e4.js";const m=JSON.parse('{"title":"pnpm \u7B80\u4ECB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B80\u4ECB","slug":"\u7B80\u4ECB","link":"#\u7B80\u4ECB","children":[]},{"level":2,"title":"\u786C\u94FE\u63A5\u548C\u8F6F\u94FE\u63A5","slug":"\u786C\u94FE\u63A5\u548C\u8F6F\u94FE\u63A5","link":"#\u786C\u94FE\u63A5\u548C\u8F6F\u94FE\u63A5","children":[]}],"relativePath":"front-end/node-js/npm-pnpm.md"}'),p={name:"front-end/node-js/npm-pnpm.md"},a=n(`<h1 id="pnpm-\u7B80\u4ECB" tabindex="-1">pnpm \u7B80\u4ECB <a class="header-anchor" href="#pnpm-\u7B80\u4ECB" aria-hidden="true">#</a></h1><h2 id="\u7B80\u4ECB" tabindex="-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a></h2><p><a href="https://pnpm.io/" target="_blank" rel="noreferrer">pnpm</a> \u662F <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Node.js</a> \u7684\u4E00\u6B3E\u5305\u7BA1\u7406\u5DE5\u5177\uFF0C\u53EF\u4EE5\u8BA4\u4E3A\u662F Performant npm\uFF08\u9AD8\u6027\u80FD\u7684 npm\uFF09\u7684\u7F29\u5199\u3002\u5B98\u7F51\u7684\u63CF\u8FF0 :</p><blockquote><p>Fast, disk space efficient package manager</p></blockquote><blockquote><p>\u5FEB\u901F\u4E14\u7701\u78C1\u76D8\u7A7A\u95F4\u7684\u5305\u7BA1\u7406\u5DE5\u5177</p></blockquote><p><strong>\u5FEB\u901F</strong></p><p><a href="https://pnpm.io/" target="_blank" rel="noreferrer">pnpm</a> \u6BD4\u5176\u4ED6\u5305\u7BA1\u7406\u5DE5\u5177\uFF08\u5982 <a href="https://docs.npmjs.com/cli/v8/" target="_blank" rel="noreferrer">npm</a> \u548C <a href="https://classic.yarnpkg.com" target="_blank" rel="noreferrer">yarn</a>\uFF09\u5FEB 2 \u500D\u3002</p><p><strong>\u9AD8\u6548</strong></p><p><code>node_modules</code> \u4E2D\u7684\u6587\u4EF6\u590D\u5236\u6216\u94FE\u63A5\u81EA\u7279\u5B9A\u7684\u5185\u5BB9\u5BFB\u5740\u5B58\u50A8\u5E93\u3002</p><p><strong>\u652F\u6301 monorepos</strong></p><p><a href="https://pnpm.io/" target="_blank" rel="noreferrer">pnpm</a> \u5185\u7F6E\u652F\u6301\u5355\u4E2A\u4ED3\u5E93\u7BA1\u7406\u591A\u4E2A\u4E0D\u540C\u7684\u5305\uFF08monorepos\uFF09\u3002</p><p><strong>\u4E25\u683C</strong></p><p><a href="https://pnpm.io/" target="_blank" rel="noreferrer">pnpm</a> \u9ED8\u8BA4\u521B\u5EFA\u4E86\u4E00\u4E2A\u975E\u5E73\u94FA\u7684 <code>node_modules</code>\uFF0C\u4EE3\u7801\u65E0\u6CD5\u8BBF\u95EE\u975E\u9879\u76EE <code>package.json</code> \u7BA1\u7406\u7684\u5305\uFF0C\u4E5F\u53EB\u505A<strong>\u5E7D\u7075\u4F9D\u8D56</strong>\u3002</p><p><img src="https://negivup.oss-cn-hangzhou.aliyuncs.com/202210241950395.jpg" alt=""></p><p>\u5F53\u4F7F\u7528 <a href="https://docs.npmjs.com/cli/v8/" target="_blank" rel="noreferrer">npm</a> \u6216 <a href="https://classic.yarnpkg.com" target="_blank" rel="noreferrer">yarn</a> \u65F6\uFF0C\u5982\u679C\u6709 100 \u4E2A\u9879\u76EE\u5B89\u88C5\u4E86\u540C\u4E00\u4E2A\u4F9D\u8D56\uFF08dependency\uFF09\uFF0C\u5728\u78C1\u76D8\u4E0A\u5C31\u4F1A\u5B89\u88C5 100 \u4E2A\u526F\u672C\uFF08\u4E00\u4E2A\u4F9D\u8D56\uFF08dependency\uFF09\u5360\u7528 1M \u7684\u5185\u5B58\u7A7A\u95F4\uFF0C100 \u4E2A\u526F\u672C\u5C31\u662F 100M\uFF09\u3002</p><p>\u5982\u679C\u4F7F\u7528 <a href="https://pnpm.io/" target="_blank" rel="noreferrer">pnpm</a>\uFF0C\u4F9D\u8D56\u4F1A\u88AB\u5B58\u653E\u5728\u7EDF\u4E00\u4F4D\u7F6E :</p><ul><li>\u5BF9\u540C\u4E00\u4E2A\u4F9D\u8D56\u4F7F\u7528\u76F8\u540C\u7684\u7248\u672C\uFF0C\u5728\u78C1\u76D8\u4E0A\u53EA\u4F1A\u5B58\u50A8\u4E00\u4EFD\u6587\u4EF6</li><li>\u5BF9\u540C\u4E00\u4E2A\u4F9D\u8D56\u4F7F\u7528\u4E0D\u540C\u7684\u7248\u672C\uFF0C\u5728\u78C1\u76D8\u4E0A\u53EA\u4F1A\u5B58\u50A8\u7248\u672C\u4E4B\u95F4\u6709\u5DEE\u5F02\u7684\u6587\u4EF6</li><li>\u6240\u6709\u6587\u4EF6\u90FD\u4F1A\u78C1\u76D8\u4E0A\u540C\u4E00\u4E2A\u4F4D\u7F6E\u8FDB\u884C\u5B58\u50A8\uFF0C\u9879\u76EE\u4E2D\u7684\u6587\u4EF6\u4F1A<strong>\u786C\u94FE\u63A5</strong>\u5230\u5B9E\u9645\u6587\u4EF6\u6240\u5728\u7684\u4F4D\u7F6E\uFF0C\u4E0D\u4F1A\u989D\u5916\u5360\u7528\u78C1\u76D8\u7A7A\u95F4</li></ul><p><img src="https://negivup.oss-cn-hangzhou.aliyuncs.com/202210241951613.jpg" alt=""></p><p>\u5F53\u4F7F\u7528 <a href="https://docs.npmjs.com/cli/v8/" target="_blank" rel="noreferrer">npm</a> \u6216 <a href="https://classic.yarnpkg.com" target="_blank" rel="noreferrer">yarn</a> \u65F6\uFF0C\u6240\u6709\u4F9D\u8D56\uFF08dependency\uFF09\u90FD\u4F1A\u88AB\u63D0\u5347\u5230 <code>node_modules</code> \u7684\u6839\u76EE\u5F55\u4E0B\uFF0C\u56E0\u6B64\u4EE3\u7801\u53EF\u4EE5\u8BBF\u95EE\u4E0D\u5C5E\u4E8E\u5F53\u524D\u9879\u76EE\u6240\u7BA1\u7406\u7684\u4F9D\u8D56\uFF08dependency\uFF09\u3002</p><p><a href="https://pnpm.io/" target="_blank" rel="noreferrer">pnpm</a> \u9ED8\u8BA4\u4F7F\u7528<strong>\u8F6F\u94FE\u63A5</strong>\u7684\u65B9\u5F0F\u5C06\u9879\u76EE\u7684\u76F4\u63A5\u4F9D\u8D56\u6DFB\u52A0\u5230 <code>node_modules</code> \u4E2D\uFF0C\u5176\u4F59\u4F9D\u8D56\u4E0D\u653E\u5728 <code>node_modules</code> \u6839\u76EE\u5F55\u4E0B\u3002</p><p><a href="https://pnpm.io/" target="_blank" rel="noreferrer">pnpm</a> \u4E2D\u6240\u6709\u6587\u4EF6\u90FD\u4F1A\u78C1\u76D8\u4E0A\u540C\u4E00\u4E2A\u4F4D\u7F6E\u8FDB\u884C\u5B58\u50A8\uFF0C\u9879\u76EE\u4E2D\u7684\u4F9D\u8D56\u4F1A<strong>\u786C\u94FE\u63A5</strong>\u5230\u5B9E\u9645\u6587\u4EF6\u6240\u5728\u7684\u4F4D\u7F6E\uFF0C\u5E7D\u7075\u4F9D\u8D56\u4F1A\u4EE5<strong>\u8F6F\u94FE\u63A5</strong>\u7684\u65B9\u5F0F\u6307\u5411\u6587\u4EF6\u6240\u5728\u7684\u5B9E\u9645\u4F4D\u7F6E\u3002</p><p><a href="https://pnpm.io/" target="_blank" rel="noreferrer">pnpm</a> \u5B89\u88C5\u7684\u4F9D\u8D56\u6709\u5982\u4E0B\u7684\u5BF9\u5E94\u5173\u7CFB :</p><ol><li>\u5728\u9879\u76EE <code>package.json</code> \u4E2D\u58F0\u660E\u7684\u4F9D\u8D56 : <code>node_modules</code> \u4E2D\u4F1A\u7BA1\u7406\u4F9D\u8D56\u7684<strong>\u8F6F\u94FE\u63A5</strong>\uFF0C\u5728 <code>node_modules/.pnpm</code> \u4E2D\u627E\u5230\u4F9D\u8D56\u7684<strong>\u786C\u94FE\u63A5</strong></li><li>\u5E7D\u7075\u4F9D\u8D56 : \u5728 <code>node_modules/.pnpm</code> \u4E2D\u627E\u5230\u4F9D\u8D56\u7684<strong>\u786C\u94FE\u63A5</strong></li><li>\u5E7D\u7075\u4F9D\u8D56\u7684\u4F9D\u8D56 : \u4F1A\u5EFA\u7ACB\u5230\u7F13\u5B58\u76EE\u5F55\u4F9D\u8D56\u7684<strong>\u8F6F\u94FE\u63A5</strong></li></ol><p><strong>\u603B\u7ED3</strong> : <code>node_modules</code> \u4E2D\u7684\u6587\u4EF6\u5939\u662F\u4EE5\u8F6F\u94FE\u63A5\u7684\u65B9\u5F0F\u5B58\u5728\uFF0C<code>node_modules</code> \u4E2D\u7684\u6587\u4EF6\u662F\u4EE5\u786C\u94FE\u63A5\u7684\u65B9\u5F0F\u5B58\u5728</p><h2 id="\u786C\u94FE\u63A5\u548C\u8F6F\u94FE\u63A5" tabindex="-1">\u786C\u94FE\u63A5\u548C\u8F6F\u94FE\u63A5 <a class="header-anchor" href="#\u786C\u94FE\u63A5\u548C\u8F6F\u94FE\u63A5" aria-hidden="true">#</a></h2><p><img src="https://negivup.oss-cn-hangzhou.aliyuncs.com/202210241955926.png" alt=""></p><p><strong>\u6587\u4EF6\u62F7\u8D1D</strong></p><p>\u6587\u4EF6\u7684\u62F7\u8D1D\uFF0C\u4F1A\u5728\u78C1\u76D8\u4E2D\u590D\u5236\u4E00\u4EFD\u65B0\u7684\u6587\u4EF6\u5907\u4EFD\uFF0C\u4E24\u4E2A\u6587\u4EF6\u76F8\u4E92\u72EC\u7ACB :</p><ul><li>\u4FEE\u6539 : \u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6\u6587\u4EF6 <ul><li>\u4FEE\u6539 <code>foo.js</code>\uFF0C<code>foo_copy.js</code> \u7684\u5185\u5BB9\u4E0D\u4F1A\u53D8\u5316</li><li>\u4FEE\u6539 <code>foo_copy.js</code>\uFF0C<code>foo.js</code> \u7684\u5185\u5BB9\u4E0D\u4F1A\u53D8\u5316</li></ul></li><li>\u5220\u9664 : \u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6\u6587\u4EF6 <ul><li>\u5220\u9664 <code>foo.js</code>\uFF0C<code>foo_copy.js</code> \u4ECD\u4F1A\u5B58\u5728</li><li>\u5220\u9664 <code>foo_copy.js</code>\uFF0C<code>foo.js</code> \u4ECD\u4F1A\u5B58\u5728</li></ul></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># Windows</span></span>
<span class="line"><span style="color:#A6ACCD;">$ copy foo.js foo_copy.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u975E Windows</span></span>
<span class="line"><span style="color:#A6ACCD;">$ cp foo.js foo_copy.js</span></span>
<span class="line"></span></code></pre></div><p><img src="https://negivup.oss-cn-hangzhou.aliyuncs.com/202210241956972.png" alt=""></p><p><strong>\u6587\u4EF6\u7684\u786C\u94FE\u63A5</strong></p><p>\u6587\u4EF6\u7684\u786C\u94FE\u63A5\uFF0C\u4F1A\u5728\u78C1\u76D8\u4E2D\u751F\u6210\u4E00\u4E2A\u6587\u4EF6\u5907\u4EFD\uFF0C\u4E24\u4E2A\u6587\u4EF6\u5B58\u5728\u5173\u8054 :</p><ul><li>\u4FEE\u6539 : \u4F1A\u5F71\u54CD\u5176\u4ED6\u6587\u4EF6 <ul><li>\u4FEE\u6539 <code>foo.js</code>\uFF0C<code>foo_hard.js</code> \u7684\u5185\u5BB9\u4F1A\u8DDF\u7740\u53D8\u5316</li><li>\u4FEE\u6539 <code>foo_hard.js</code>\uFF0C<code>foo.js</code> \u7684\u5185\u5BB9\u4F1A\u8DDF\u7740\u53D8\u5316</li></ul></li><li>\u5220\u9664 : \u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6\u6587\u4EF6 <ul><li>\u5220\u9664 <code>foo.js</code>\uFF0C<code>foo_hard.js</code> \u4ECD\u4F1A\u5B58\u5728</li><li>\u5220\u9664 <code>foo_hard.js</code>\uFF0C<code>foo.js</code> \u4ECD\u4F1A\u5B58\u5728</li></ul></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># Windows</span></span>
<span class="line"><span style="color:#A6ACCD;">$ mklink /H foo_hard.js foo.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u975E Windows</span></span>
<span class="line"><span style="color:#A6ACCD;">$ ln foo.js foo_hard.js</span></span>
<span class="line"></span></code></pre></div><p><img src="https://negivup.oss-cn-hangzhou.aliyuncs.com/202210241956773.png" alt=""></p><p><strong>\u6587\u4EF6\u7684\u8F6F\u94FE\u63A5</strong></p><p>\u6587\u4EF6\u7684\u8F6F\u94FE\u63A5\u4E5F\u53EB\u7B26\u53F7\u94FE\u63A5\uFF0C\u4F1A\u5728\u78C1\u76D8\u4E2D\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6\u7684\u5FEB\u6377\u65B9\u5F0F :</p><ul><li>\u4FEE\u6539 : \u4F1A\u5F71\u54CD\u5176\u4ED6\u6587\u4EF6 <ul><li><code>foo_soft.js</code> \u4E0D\u53EF\u4FEE\u6539\uFF0C\u4FEE\u6539\u4E4B\u540E\u5FEB\u6377\u65B9\u5F0F\u4F1A\u5931\u6548</li><li><code>foo.js</code> \u53EF\u4FEE\u6539\uFF0C\u4FEE\u6539\u4E4B\u540E\u4E0D\u4F1A\u5F71\u54CD\u8F6F\u94FE\u63A5\u7684\u6307\u5411</li></ul></li><li>\u5220\u9664 : \u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6\u6587\u4EF6 <ul><li>\u5220\u9664 <code>foo.js</code>\uFF0C<code>foo_soft.js</code> \u4ECD\u4F1A\u5B58\u5728\uFF0C\u4F46\u8F6F\u94FE\u63A5\u4F1A\u627E\u4E0D\u5230\u5176\u5BF9\u5E94\u7684\u6587\u4EF6</li><li>\u5220\u9664 <code>foo_soft.js</code>\uFF0C<code>foo.js</code> \u4ECD\u4F1A\u5B58\u5728\uFF0C\u4E14\u6587\u4EF6\u5185\u5BB9\u4E0D\u4F1A\u53D8</li></ul></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># Windows</span></span>
<span class="line"><span style="color:#A6ACCD;">$ mklink foo_soft.js foo.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u975E Windows</span></span>
<span class="line"><span style="color:#A6ACCD;">$ ln -s foo.js foo_soft.js</span></span>
<span class="line"></span></code></pre></div>`,40),l=[a];function r(c,t,d,i,g,f){return s(),e("div",null,l)}const _=o(p,[["render",r]]);export{m as __pageData,_ as default};