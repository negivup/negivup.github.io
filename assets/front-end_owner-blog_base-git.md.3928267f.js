import{_ as s,c as n,o as a,a as l}from"./app.479e69e4.js";const d=JSON.parse('{"title":"Git \u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521D\u59CB\u5316 Git \u4ED3\u5E93","slug":"init-git","link":"#init-git","children":[]},{"level":2,"title":"\u914D\u7F6E\u7528\u6237\u540D\u548C\u90AE\u7BB1","slug":"config-name-email","link":"#config-name-email","children":[]}],"relativePath":"front-end/owner-blog/base-git.md"}'),p={name:"front-end/owner-blog/base-git.md"},e=l(`<h1 id="git-\u914D\u7F6E" tabindex="-1">Git \u914D\u7F6E <a class="header-anchor" href="#git-\u914D\u7F6E" aria-hidden="true">#</a></h1><p>\u7BA1\u7406\u4EE3\u7801\uFF0C\u8FD9\u91CC\u4F7F\u7528 <a href="https://git-scm.com/" target="_blank" rel="noreferrer">Git</a>\u3002</p><h2 id="init-git" tabindex="-1">\u521D\u59CB\u5316 Git \u4ED3\u5E93 <a class="header-anchor" href="#init-git" aria-hidden="true">#</a></h2><p>\u521B\u5EFA Git \u4ED3\u5E93 :</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ git init</span></span>
<span class="line"></span></code></pre></div><p>\u589E\u52A0 <code>.gitignore</code> :</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u5FFD\u7565\u9879\u76EE\u53CA\u7CFB\u7EDF\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">.DS_Store</span></span>
<span class="line"><span style="color:#A6ACCD;">node_modules</span></span>
<span class="line"><span style="color:#A6ACCD;">/dist*</span></span>
<span class="line"><span style="color:#A6ACCD;">/lib*</span></span>
<span class="line"><span style="color:#A6ACCD;">/theme*</span></span>
<span class="line"><span style="color:#A6ACCD;">/storybook-static*</span></span>
<span class="line"><span style="color:#A6ACCD;">/_site*</span></span>
<span class="line"><span style="color:#A6ACCD;">.history</span></span>
<span class="line"><span style="color:#A6ACCD;">/coverage*</span></span>
<span class="line"><span style="color:#A6ACCD;">dis</span></span>
<span class="line"><span style="color:#A6ACCD;">cache</span></span>
<span class="line"><span style="color:#A6ACCD;">.cache</span></span>
<span class="line"><span style="color:#A6ACCD;">auto-imports.d.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">dest</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u672C\u5730\u5F00\u53D1\u6240\u7528\u5230\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">.env.local</span></span>
<span class="line"><span style="color:#A6ACCD;">.env.*.local</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u5305\u7BA1\u7406\u5DE5\u5177\u81EA\u52A8\u751F\u6210\u7684\u65E5\u5FD7\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">npm-debug.log*</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn-debug.log*</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn-error.log*</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm-error.log*</span></span>
<span class="line"><span style="color:#A6ACCD;">.pnpm-debug.log*</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u7F16\u8F91\u5668\u81EA\u52A8\u751F\u6210\u7684\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">.idea</span></span>
<span class="line"><span style="color:#A6ACCD;">*.suo</span></span>
<span class="line"><span style="color:#A6ACCD;">*.ntvs*</span></span>
<span class="line"><span style="color:#A6ACCD;">*.njsproj</span></span>
<span class="line"><span style="color:#A6ACCD;">*.sln</span></span>
<span class="line"><span style="color:#A6ACCD;">*.sw?</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u9501\u5B9A\u7248\u672C\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">package-lock.json</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn.lock</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u589E\u52A0 <code>.gitattributes</code> \u7528\u4E8E\u4EE3\u7801\u7EDF\u8BA1 :</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u5BF9\u6240\u6709\u6587\u672C\u6587\u4EF6\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u82E5\u5728Git\u4E2D\u5DF2\u7BA1\u7406\uFF0C\u4FDD\u7559\u539F\u59CB\u7ED3\u5C3E\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u82E5\u672A\u5728Git\u4E2D\u7BA1\u7406\uFF0C\u4F7F\u7528LF\u4F5C\u4E3A\u7ED3\u5C3E\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">* text=auto eol=lf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u8BBE\u7F6E\u5BF9\u5E94\u6269\u5C55\u540D\u7684\u8BED\u8A00\u7EDF\u8BA1\u89C4\u5219\uFF0C\u5F71\u54CDGitHub\u4E0A\u7684\u8BED\u8A00\u7EDF\u8BA1\u89C4\u5219</span></span>
<span class="line"><span style="color:#A6ACCD;"># linguist-detectable\u4E3Afalse\u65F6\uFF0C\u8868\u793A\u5728GitHub\u4E2D\u4E0D\u7EDF\u8BA1\u8BED\u8A00</span></span>
<span class="line"><span style="color:#A6ACCD;">*.ts linguist-detectable=false</span></span>
<span class="line"><span style="color:#A6ACCD;">*.css linguist-detectable=false</span></span>
<span class="line"><span style="color:#A6ACCD;">*.scss linguist-detectable=false</span></span>
<span class="line"><span style="color:#A6ACCD;">*.js linguist-detectable=true</span></span>
<span class="line"><span style="color:#A6ACCD;">*.vue linguist-detectable=true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u5C06JSX\u6587\u4EF6\u4E2D\u7684\u4EE3\u7801\u7EDF\u8BA1\u4E3AVue</span></span>
<span class="line"><span style="color:#A6ACCD;">*.jsx linguist-language=Vue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="config-name-email" tabindex="-1">\u914D\u7F6E\u7528\u6237\u540D\u548C\u90AE\u7BB1 <a class="header-anchor" href="#config-name-email" aria-hidden="true">#</a></h2><p>\u914D\u7F6E\u7528\u6237\u540D\u548C\u90AE\u7BB1 :</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ git config --local user.name </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6CAB\u4FF1\u5B8F</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git config --local user.email </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">negivup@sina.com</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u6CA1\u6709 ssh key\uFF0C\u6700\u597D\u751F\u6210\u4E00\u4E2A\uFF08\u4E00\u8DEF\u56DE\u8F66\u5373\u53EF\uFF09 :</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ ssh-keygen -t rsa -C </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">negivup@sina.com</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u628A\u751F\u6210\u7684 ssh key \u52A0\u5165\u5230 <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a> \u6216 <a href="https://gitee.com/" target="_blank" rel="noreferrer">Gitee</a> \u4E2D\uFF0C\u65B9\u4FBF\u540E\u671F\u63D0\u4EA4\u4EE3\u7801\u3002</p>`,15),o=[e];function t(c,i,r,C,A,y){return a(),n("div",null,o)}const g=s(p,[["render",t]]);export{d as __pageData,g as default};
