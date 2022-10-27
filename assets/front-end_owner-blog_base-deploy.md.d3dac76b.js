import{_ as s,c as n,o as a,a as p}from"./app.479e69e4.js";const y=JSON.parse('{"title":"\u90E8\u7F72","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u90E8\u7F72\u5230 GitHub","slug":"\u90E8\u7F72\u5230-github","link":"#\u90E8\u7F72\u5230-github","children":[]},{"level":2,"title":"\u90E8\u7F72\u5230 Gitee","slug":"\u90E8\u7F72\u5230-gitee","link":"#\u90E8\u7F72\u5230-gitee","children":[]}],"relativePath":"front-end/owner-blog/base-deploy.md"}'),e={name:"front-end/owner-blog/base-deploy.md"},l=p(`<h1 id="\u90E8\u7F72" tabindex="-1">\u90E8\u7F72 <a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a></h1><p>\u5728 <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a> \u548C <a href="https://gitee.com/" target="_blank" rel="noreferrer">Gitee</a> \u4E2D\u9700\u8981\u7B49\u5F85\u7247\u523B\u624D\u4F1A\u751F\u6548\u3002</p><h2 id="\u90E8\u7F72\u5230-github" tabindex="-1">\u90E8\u7F72\u5230 GitHub <a class="header-anchor" href="#\u90E8\u7F72\u5230-github" aria-hidden="true">#</a></h2><p><strong>1.\u521B\u5EFA\u4ED3\u5E93\u5E76\u5173\u8054\u4ED3\u5E93</strong></p><p>\u5728 <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a> \u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u79F0\u4E3A\u5F53\u524D\u767B\u5F55\u540D\u7684\u4ED3\u5E93\uFF08\u8FD9\u4E2A\u4ED3\u5E93\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u4FDD\u5B58\u4EE3\u7801\uFF09\u3002\u521B\u5EFA\u6210\u529F\u540E\u5C06\u672C\u5730\u4ED3\u5E93\u4E0E\u8FDC\u7A0B\u4ED3\u5E93\u5EFA\u7ACB\u8054\u7CFB :</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ git remote add origin git@github.com:negivup/negivup.git</span></span>
<span class="line"></span></code></pre></div><p><strong>2.\u63D0\u4EA4\u4EE3\u7801\u5E76\u4E0A\u4F20\u5230\u8FDC\u7A0B\u4ED3\u5E93</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ git add </span><span style="color:#82AAFF;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit -m </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">first commit</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch -M main</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push -u origin main</span></span>
<span class="line"></span></code></pre></div><p><strong>3.\u521B\u5EFA\u53D1\u5E03\u811A\u672C <code>deploy-github.sh</code></strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#676E95;">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5FFD\u7565\u9519\u8BEF</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> -e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6784\u5EFA</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u8FDB\u5165\u5F85\u53D1\u5E03\u7684\u76EE\u5F55</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5982\u679C\u662F\u53D1\u5E03\u5230\u81EA\u5B9A\u4E49\u57DF\u540D</span></span>
<span class="line"><span style="color:#676E95;"># echo &#39;www.example.com&#39; &gt; CNAME</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git init</span></span>
<span class="line"><span style="color:#A6ACCD;">git add -A</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">deploy</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5982\u679C\u90E8\u7F72\u5230 https://&lt;USERNAME&gt;.github.io</span></span>
<span class="line"><span style="color:#A6ACCD;">git push -f git@github.com:negivup/negivup.github.io.git master:gh-pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5982\u679C\u662F\u90E8\u7F72\u5230 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span></span>
<span class="line"><span style="color:#676E95;"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> -</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">rm -f -r dist</span></span>
<span class="line"></span></code></pre></div><p><strong>4.\u521B\u5EFA\u90E8\u7F72\u4EE3\u7801\u4ED3\u5E93</strong></p><p>\u521B\u5EFA\u4E00\u4E2A\u540D\u79F0\u4E3A <code>&lt;USERNAME&gt;.github.io.git</code> \u7684\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u7136\u540E\u6267\u884C\u811A\u672C\uFF1A</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ sh deploy-github.sh</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u60F3\u67E5\u770B\u6548\u679C\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>https://&lt;USERNAME&gt;.github.io/</code> \u67E5\u770B\u3002</p><h2 id="\u90E8\u7F72\u5230-gitee" tabindex="-1">\u90E8\u7F72\u5230 Gitee <a class="header-anchor" href="#\u90E8\u7F72\u5230-gitee" aria-hidden="true">#</a></h2><p>\u5728 <a href="https://gitee.com/" target="_blank" rel="noreferrer">Gitee</a> \u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u79F0\u4E3A\u5F53\u524D\u767B\u5F55\u540D\u7684\u4ED3\u5E93\u3002\u521B\u5EFA\u6210\u529F\u540E\u5C06\u672C\u5730\u4ED3\u5E93\u4E0E\u8FDC\u7A0B\u4ED3\u5E93\u5EFA\u7ACB\u8054\u7CFB :</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ git remote add origin git@gitee.com:negivup/negivup.git</span></span>
<span class="line"></span></code></pre></div><p><strong>2.\u63D0\u4EA4\u4EE3\u7801\u5E76\u4E0A\u4F20\u5230\u8FDC\u7A0B\u4ED3\u5E93</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ git add </span><span style="color:#82AAFF;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit -m </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">first commit</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch -M master</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push -u origin master</span></span>
<span class="line"></span></code></pre></div><p><strong>3.\u521B\u5EFA\u53D1\u5E03\u811A\u672C <code>deploy-gitee.sh</code></strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#676E95;">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u786E\u4FDD\u811A\u672C\u629B\u51FA\u9047\u5230\u7684\u9519\u8BEF</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> -e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pnpm run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> ./dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git init</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --local user.email </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">negivup@sina.com</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --local user.name </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6CAB\u4FF1\u5B8F</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">git add -A</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">feat: \u66F4\u65B0\u6587\u7AE0\u4FE1\u606F</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5982\u679C\u53D1\u5E03\u5230 https://negivup.gitee.io \u7684 gh-pages \u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git push -f git@gitee.com:negivup/negivup.git master:gh-pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> -</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">rm -f -r dist</span></span>
<span class="line"></span></code></pre></div><p><strong>4.\u53D1\u5E03\u5185\u5BB9</strong></p><p>\u5982\u679C\u60F3\u66F4\u65B0 <a href="https://negivup.gitee.io" target="_blank" rel="noreferrer">https://negivup.gitee.io</a> \u4E0A\u7684\u4FE1\u606F\uFF0C\u9700\u8981\u5728<a href="https://gitee.com/negivup/negivup/pages" target="_blank" rel="noreferrer">\u7BA1\u7406\u9875\u9762</a>\u4E2D\u64CD\u4F5C\uFF0C\u9009\u62E9 <code>gh-pages</code> \u5206\u652F\u8FDB\u884C\u53D1\u5E03\u3002</p>`,23),t=[l];function o(c,i,r,g,d,h){return a(),n("div",null,t)}const A=s(e,[["render",o]]);export{y as __pageData,A as default};
