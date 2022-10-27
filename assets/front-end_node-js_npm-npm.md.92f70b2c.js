import{_ as e,c as o,o as n,a as t}from"./app.479e69e4.js";const m=JSON.parse('{"title":"npm \u7B80\u4ECB\u53CA\u5E38\u7528\u5B57\u6BB5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521D\u59CB\u5316\u9879\u76EE","slug":"\u521D\u59CB\u5316\u9879\u76EE","link":"#\u521D\u59CB\u5316\u9879\u76EE","children":[]},{"level":2,"title":"\u5E38\u7528\u5B57\u6BB5","slug":"\u5E38\u7528\u5B57\u6BB5","link":"#\u5E38\u7528\u5B57\u6BB5","children":[]}],"relativePath":"front-end/node-js/npm-npm.md"}'),p={name:"front-end/node-js/npm-npm.md"},s=t(`<h1 id="npm-\u7B80\u4ECB\u53CA\u5E38\u7528\u5B57\u6BB5" tabindex="-1">npm \u7B80\u4ECB\u53CA\u5E38\u7528\u5B57\u6BB5 <a class="header-anchor" href="#npm-\u7B80\u4ECB\u53CA\u5E38\u7528\u5B57\u6BB5" aria-hidden="true">#</a></h1><p><a href="https://docs.npmjs.com/" target="_blank" rel="noreferrer">npm</a> \u4E0D\u662F Node Package Manager \u7684\u7B80\u5199\uFF0C\u800C\u662F\u5168\u79F0 npm is not an acronym \u7684\u7F29\u5199\u3002\u7C7B\u4F3C\u7684\u8FD8\u6709 GNU\uFF08GNU is Not Unix\uFF09\u3001PNG\uFF08PNG is Not Gif\uFF09\u7B49\u3002</p><blockquote><p>\u201Cnpm is not an acronym\u201D \u7684\u6C49\u8BED\u7FFB\u8BD1\u662F\u201Cnpm \u4E0D\u662F\u4E00\u4E2A\u7F29\u5199\u201D</p></blockquote><p><a href="https://docs.npmjs.com/" target="_blank" rel="noreferrer">npm</a> \u4E0D\u7528\u5355\u72EC\u5B89\u88C5\uFF0C\u5728\u5B89\u88C5 <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Node.js</a> \u540E\u4F1A\u81EA\u52A8\u5B89\u88C5\u3002</p><h2 id="\u521D\u59CB\u5316\u9879\u76EE" tabindex="-1">\u521D\u59CB\u5316\u9879\u76EE <a class="header-anchor" href="#\u521D\u59CB\u5316\u9879\u76EE" aria-hidden="true">#</a></h2><p>\u4F7F\u7528 <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Node.js</a> \u7BA1\u7406\u7684\u9879\u76EE\u90FD\u4F1A\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A <code>package.json</code> \u6587\u4EF6\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u662F\u7BA1\u7406\u9879\u76EE\u4F9D\u8D56\u7684\u6838\u5FC3\u6587\u4EF6\u3002</p><p><code>package.json</code> \u6587\u4EF6\u5728\u521D\u59CB\u5316\u9879\u76EE\u7684\u65F6\u5019\u751F\u6210 :</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u521D\u59CB\u5316\u9879\u76EE\uFF0C\u9700\u8981\u56DE\u7B54\u95EE\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">$ npm init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u521D\u59CB\u5316\u9879\u76EE\uFF0C\u8DF3\u8FC7\u95EE\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">$ pnpm init -y</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5E38\u7528\u5B57\u6BB5" tabindex="-1">\u5E38\u7528\u5B57\u6BB5 <a class="header-anchor" href="#\u5E38\u7528\u5B57\u6BB5" aria-hidden="true">#</a></h2><p><code>package.json</code> \u4E2D\u7684\u5B57\u6BB5\u8BF4\u660E\u53EF\u4EE5\u67E5\u770B <a href="http://nodejs.cn/learn/the-package-json-guide" target="_blank" rel="noreferrer">package.json \u6307\u5357</a>\u3002</p><p><code>package-lock.json</code> \u7684\u4F5C\u7528\u662F\u9501\u5B9A\u7248\u672C\uFF0C\u5177\u4F53\u8BF4\u660E\u53EF\u4EE5\u53C2\u8003 <a href="http://nodejs.cn/learn/the-package-lock-json-file" target="_blank" rel="noreferrer">package-lock.json \u6587\u4EF6</a>\u3002</p><p><strong>name</strong></p><p><code>name</code> \u9879\u76EE\u7684\u540D\u79F0\uFF0C\u5982 <code>&quot;name&quot;: &quot;xxxx&quot;</code>\u3002</p><p><strong>version</strong></p><p><code>version</code> \u9879\u76EE\u7684\u7248\u672C\u53F7\uFF0C\u5982 <code>&quot;version&quot;: &quot;x.y.z&quot;</code>\u3002</p><p><strong>description</strong></p><p><code>description</code> \u9879\u76EE\u7684\u63CF\u8FF0\uFF0C\u4F5C\u4E3A\u9879\u76EE\u7684\u57FA\u672C\u63CF\u8FF0\uFF0C\u5982 <code>&quot;description&quot;: &quot;xxxx&quot;</code>\u3002</p><p><strong>author</strong></p><p><code>author</code> \u9879\u76EE\u7684\u4F5C\u8005\u4FE1\u606F\uFF0C\u4E00\u822C\u5728\u53D1\u5E03\u65F6\u4F7F\u7528\uFF0C\u5982 <code>&quot;author&quot;: &quot;name &lt;email@xxx.com&gt;&quot;</code>\u3002</p><p><strong>license</strong></p><p><code>license</code> \u9879\u76EE\u7684\u5F00\u6E90\u534F\u8BAE\uFF0C\u4E00\u822C\u5728\u53D1\u5E03\u65F6\u4F7F\u7528\uFF0C\u5982 <code>&quot;license&quot;: &quot;MIT&quot;</code>\u3002</p><p><strong>private</strong></p><p><code>private</code> \u6307\u5B9A\u5F53\u524D\u9879\u76EE\u662F\u5426\u662F\u79C1\u6709\u9879\u76EE\uFF0C\u5982\u679C\u662F\u516C\u53F8\u9879\u76EE\uFF0C\u4E0D\u60F3\u56E0\u4E3A\u5931\u8BEF\u53D1\u5E03\u5230\u516C\u7F51\u4E0A\uFF0C\u53EF\u4EE5\u8BBE\u7F6E <code>&quot;private&quot;: true</code>\u3002</p><p><strong>engines</strong></p><p><code>engines</code> \u7528\u4E8E\u6307\u5B9A <code>node</code>\u3001<code>npm</code>\u3001<code>os</code> \u7B49\u4F9D\u8D56\u7684\u7248\u672C\uFF0C\u5728\u5B89\u88C5\u4F9D\u8D56\u65F6\u4F1A\u5148\u68C0\u67E5\u5BF9\u5E94\u7684\u5F15\u64CE\u7248\u672C\uFF0C\u5982\u679C\u4E0D\u7B26\u5408\u4F1A\u62A5\u9519\uFF0C\u5982 <code>&quot;engines&quot;: { &quot;node&quot;: &quot;&gt;=14.0.0&quot;, &quot;pnpm&quot;: &quot;&gt;=7.13.0&quot; }</code>\u3002</p><p><strong>keywords</strong></p><p><code>keywords</code> \u7528\u4E8E\u6307\u5B9A\u5F53\u524D\u9879\u76EE\u7684\u5173\u952E\u5B57\uFF0C\u4E00\u822C\u5728\u53D1\u5E03\u65F6\u4F7F\u7528\uFF0C\u65B9\u4FBF\u641C\u7D22\uFF0C\u5982 <code>&quot;keywords&quot;: [&quot;business&quot;, &quot;dealer&quot;, &quot;management&quot;]</code>\u3002</p><p><strong>files</strong></p><p><code>files</code> \u7528\u4E8E\u6307\u5B9A\u53D1\u5E03\u5F53\u524D\u9879\u76EE\u65F6\u9700\u8981\u4E0A\u4F20\u7684\u6587\u4EF6\u53CA\u6587\u4EF6\u5939\uFF0C\u5982 <code>&quot;files&quot;: [&quot;dist&quot;, &quot;main.js&quot;]</code>\u3002</p><p><strong>homepage</strong></p><p><code>homepage</code> \u7528\u4E8E\u8BBE\u7F6E\u9879\u76EE\u7684\u5B98\u7F51\u5730\u5740\uFF0C\u5982 <code>&quot;homepage&quot;: &quot;https://www.baidu.com&quot;</code>\u3002</p><p><strong>repository</strong></p><p><code>repository</code> \u7528\u4E8E\u8BBE\u7F6E\u9879\u76EE\u6E90\u7801\u6240\u5728\u7684\u4ED3\u5E93\uFF0C\u5982 <code>&quot;repository&quot;: { &quot;type&quot;: &quot;git&quot;, &quot;url&quot;: &quot;xxxxxxxx.git&quot; }</code>\u3002</p><p><strong>scripts</strong></p><p><code>scripts</code> \u7528\u4E8E\u914D\u7F6E\u4E00\u4E9B\u811A\u672C\u547D\u4EE4\uFF0C\u4EE5\u952E\u503C\u5BF9\u7684\u5F62\u5F0F\u5B58\u5728\uFF0C\u901A\u8FC7 <code>npm run xxx</code> \u6267\u884C\u3002</p><p><strong>dependencies</strong></p><p><code>dependencies</code> \u7528\u4E8E\u4FDD\u5B58\u751F\u4EA7\u4F9D\u8D56\uFF0C\u8FD9\u91CC\u9762\u7684\u4F9D\u8D56\u4E0D\u7BA1\u662F\u5728\u5F00\u53D1\u73AF\u5883\u8FD8\u662F\u5728\u751F\u4EA7\u73AF\u5883\u90FD\u4F1A\u4F7F\u7528\uFF0C\u4E00\u822C\u901A\u8FC7 <code>npm install --save</code> \u81EA\u52A8\u7EF4\u62A4\u3002</p><p><strong>devDependencies</strong></p><p><code>devDependencies</code> \u7528\u4E8E\u4FDD\u5B58\u5F00\u53D1\u4F9D\u8D56\uFF0C\u8FD9\u91CC\u9762\u7684\u4F9D\u8D56\u4E0D\u7BA1\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u4E2D\u4F1A\u4F7F\u7528\uFF0C\u4E00\u822C\u901A\u8FC7 <code>npm install --save-dev</code> \u81EA\u52A8\u7EF4\u62A4\u3002</p><p><strong>peerDependencies</strong></p><p><code>peerDependencies</code> \u5982\u679C\u5B89\u88C5\u7684\u4F9D\u8D56\u9700\u8981\u5148\u5B89\u88C5\u53E6\u4E00\u4E2A\u4F9D\u8D56\u624D\u80FD\u6B63\u5E38\u8FD0\u884C\uFF0C\u5982 Vue \u7EC4\u4EF6\u5E93\u4E00\u822C\u4F1A\u901A\u8FC7 <code>peerDependencies</code> \u6307\u5B9A\u5176\u9700\u8981 <code>vue</code> \u624D\u80FD\u8FD0\u884C\uFF0C\u5982 <code>&quot;peerDependencies&quot;: { &quot;vue&quot;: &quot;^2.6.14&quot; }</code>\u3002</p><p><strong>main</strong></p><p><code>main</code> \u7528\u4E8E\u8BBE\u7F6E\u7A0B\u5E8F\u7684\u5165\u53E3\uFF0C\u5982 <code>&quot;main&quot;: &quot;index.js&quot;</code>\uFF0C\u5728\u7A0B\u5E8F\u4E2D\u52A0\u8F7D\u9700\u8981\u4F7F\u7528 <code>require</code> \u52A0\u8F7D\u3002</p>`,43),c=[s];function a(r,d,i,u,l,q){return n(),o("div",null,c)}const h=e(p,[["render",a]]);export{m as __pageData,h as default};