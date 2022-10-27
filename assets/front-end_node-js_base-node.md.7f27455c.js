import{_ as s,c as n,o as a,a as l}from"./app.479e69e4.js";const i=JSON.parse('{"title":"\u7B80\u4ECB","description":"","frontmatter":{},"headers":[{"level":2,"title":"Hello World","slug":"hello-world","link":"#hello-world","children":[]},{"level":2,"title":"\u8DEF\u7531","slug":"\u8DEF\u7531","link":"#\u8DEF\u7531","children":[]},{"level":2,"title":"\u9759\u6001\u8D44\u6E90","slug":"\u9759\u6001\u8D44\u6E90","link":"#\u9759\u6001\u8D44\u6E90","children":[]}],"relativePath":"front-end/node-js/base-node.md"}'),p={name:"front-end/node-js/base-node.md"},o=l(`<h1 id="\u7B80\u4ECB" tabindex="-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a></h1><p>Node.js \u7684\u6838\u5FC3\u662F<strong>\u4E8B\u4EF6\u9A71\u52A8\u7F16\u7A0B</strong>\uFF0C\u7A0B\u5E8F\u65E0\u6CD5\u63A7\u5236\u7528\u6237\u662F\u5426\u70B9\u51FB\u6216\u4F55\u65F6\u70B9\u51FB\u4E00\u4E2A\u9875\u9762\u5143\u7D20\uFF0C\u7A0B\u5E8F\u53EA\u80FD\u5728\u7528\u6237\u70B9\u51FB\u4E86\u67D0\u4E2A\u5143\u7D20\u518D\u5904\u7406\u5BF9\u5E94\u7684\u4E8B\u4EF6\u3002</p><p>\u5728\u7528\u6237\u754C\u9762\u4E2D\u5F88\u597D\u7406\u89E3\uFF0C\u7528\u6237\u64CD\u4F5C\u67D0\u4E2A\u9875\u9762\u5143\u7D20\uFF0C\u7A0B\u5E8F\u505A\u5BF9\u5E94\u7684\u64CD\u4F5C\uFF1B\u5728\u670D\u52A1\u5668\u4E0A\uFF0C\u7528\u6237\u89E6\u53D1\u7684\u4E8B\u4EF6\u5C31\u662F\u4E00\u4E2A HTTP \u8BF7\u6C42\u3002</p><p>\u4E00\u65E6\u5F00\u59CB\u4ECE<strong>\u4E8B\u4EF6\u9A71\u52A8\u7F16\u7A0B</strong>\u7684\u89D2\u5EA6\u601D\u8003\u95EE\u9898\uFF0C\u4F1A\u53D1\u73B0\u5230\u5904\u90FD\u662F\u4E8B\u4EF6\u3002\u4ECE\u4E00\u4E2A\u9875\u9762\u5BFC\u822A\u5230\u53E6\u4E00\u4E2A\u9875\u9762\uFF0C\u6216\u4ECE\u4E00\u5757\u5185\u5BB9\u5BFC\u822A\u5230\u53E6\u4E00\u5757\u5185\u5BB9\uFF0C\u90FD\u662F\u4E8B\u4EF6\u3002</p><p>Node.js \u8DDF\u4F20\u7EDF Web \u670D\u52A1\u5668\u4E00\u4E2A\u663E\u8457\u7684\u5DEE\u5F02\u662F : Node.js \u662F\u5355\u7EBF\u7A0B\u7684\u3002\u5355\u7EBF\u7A0B\u6781\u5927\u5730\u7B80\u5316\u4E86 Web \u5E94\u7528\u7684\u7F16\u7A0B\uFF0C\u800C\u5F53\u9700\u8981\u8FBE\u5230\u591A\u7EBF\u7A0B\u5E94\u7528\u7684\u6027\u80FD\u65F6\uFF0C\u53EA\u9700\u7B80\u5355\u5730\u591A\u5F00\u51E0\u4E2A Node \u5B9E\u4F8B\uFF0C\u5C31\u80FD\u83B7\u5F97\u591A\u7EBF\u7A0B\u7684\u597D\u5904\u3002\u901A\u8FC7\u670D\u52A1\u5668\u5E76\u884C\uFF08\u8DDF\u5E94\u7528\u5185\u7684\u5E76\u884C\u76F8\u5BF9\uFF09\u5B9E\u73B0\u7684\u591A\u7EBF\u7A0B\uFF0C\u53EA\u662F\u628A\u590D\u6742\u6027\u8F6C\u79FB\u3002</p><p>Node.js \u662F\u5E73\u53F0\u72EC\u7ACB\u7684\uFF0C\u5728\u5404\u5927\u4E3B\u6D41\u64CD\u4F5C\u7CFB\u7EDF\uFF08Windows\u3001macOS \u548C Linux\uFF09\u4E0A\u642D\u5EFA Node \u90FD\u8F7B\u800C\u6613\u4E3E\uFF0C\u4E0D\u540C\u64CD\u4F5C\u7CFB\u7EDF\u534F\u4F5C\u8D77\u6765\u4E5F\u5F88\u5BB9\u6613\u3002</p><h2 id="hello-world" tabindex="-1">Hello World <a class="header-anchor" href="#hello-world" aria-hidden="true">#</a></h2><p>\u6BD4\u8D77\u4F20\u7EDF\u7684 Web \u670D\u52A1\u5668\uFF0CNode \u63D0\u4F9B\u4E86\u4E00\u79CD\u4E0D\u540C\u7684\u8303\u5F0F : \u4F60\u6240\u5199\u7684\u5E94\u7528\uFF0C\u5176\u672C\u8EAB\u5C31\u662F Web \u670D\u52A1\u5668\u3002Node \u53EA\u662F\u7ED9\u4F60\u63D0\u4F9B\u4E86\u6784\u5EFA Web \u670D\u52A1\u5668\u7684\u6846\u67B6\u3002</p><p>\u521B\u5EFA\u4E00\u4E2A <code>helloworld.js</code> \u6587\u4EF6\uFF0C\u5E76\u7F16\u5199\u5982\u4E0B\u4EE3\u7801\uFF0C\u4F7F\u7528\u7684\u662F Node.js \u7684\u5185\u7F6E http \u6A21\u5757\uFF08\u8BE6\u7EC6\u4F7F\u7528\u53EF\u4EE5\u67E5\u770B <a href="https://nodejs.org/en/docs/" target="_blank" rel="noreferrer">Node.js \u6587\u6863</a>\uFF09 :</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> http </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> port </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PORT </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u521B\u5EFA\u4E00\u4E2A HTTP \u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> server </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createServer</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">writeHead</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">Content-Type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text/plain</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello world!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u542F\u52A8\u670D\u52A1\u5E76\u76D1\u542C 3000 \u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">listen</span><span style="color:#A6ACCD;">(port</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">\u670D\u52A1\u8BBF\u95EE\u5730\u5740 : http://localhost:</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">port</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u5728\u7EC8\u7AEF\u4E2D\u8FDB\u5165\u5230 <code>helloworld.js</code> \u6240\u5728\u7684\u76EE\u5F55\uFF0C\u7136\u540E\u8F93\u5165 :</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ node helloworld.js</span></span>
<span class="line"></span></code></pre></div><p>\u6253\u5F00\u6D4F\u89C8\u5668\uFF0C\u5730\u5740\u680F\u4E2D\u8F93\u5165 <code>http://localhost:3000</code>\uFF0C\u5C31\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u4E2D\u770B\u5230\u6587\u672C <code>Hello world!</code>\u3002</p><h2 id="\u8DEF\u7531" tabindex="-1">\u8DEF\u7531 <a class="header-anchor" href="#\u8DEF\u7531" aria-hidden="true">#</a></h2><p>\u5E94\u7528\u5982\u4F55\u54CD\u5E94\u5BFC\u822A\u4E8B\u4EF6\uFF0C\u5C31\u53EB\u4F5C<strong>\u8DEF\u7531</strong>\uFF0C\u8DEF\u7531\u6307\u7684\u662F\u5BF9\u5BA2\u6237\u7AEF\u5185\u5BB9\u8BF7\u6C42\u7684\u6EE1\u8DB3\u673A\u5236\u3002</p><p>\u4E0B\u9762\u5728 <code>helloworld.js</code> \u4E2D\u5B8C\u5584\u4EE3\u7801\uFF0C\u5BF9\u9996\u9875\u3001\u5173\u4E8E\u548C 404 \u9875\u9762\u8DEF\u7531\u505A\u5904\u7406 :</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> http </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> port </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PORT </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> server </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createServer</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5BF9 URL \u505A\u89C4\u8303\u5316\u5904\u7406\uFF1A\u79FB\u9664\u67E5\u8BE2\u4E32\u3001\u672B\u5C3E\u53EF\u9009\u7684\u659C\u6760\uFF0C\u5E76\u8F6C\u6210\u5C0F\u5199</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\/</span><span style="color:#89DDFF;">?(?:</span><span style="color:#A6ACCD;">\\?</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">*)?</span><span style="color:#89DDFF;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toLowerCase</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">switch</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">case</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">writeHead</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">Content-Type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text/plain</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Homepage</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">case</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/about</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">writeHead</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">Content-Type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text/plain</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">About</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">writeHead</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">404</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">Content-Type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text/plain</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Not Found</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">listen</span><span style="color:#A6ACCD;">(port</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">\u670D\u52A1\u8BBF\u95EE\u5730\u5740 : http://localhost:</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">port</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u901A\u8FC7 <code>node helloworld.js</code> \u8FD0\u884C\u7A0B\u5E8F\uFF0C\u6D4F\u89C8 <code>http://localhost:3000</code> \u4F1A\u5C55\u793A <code>Homepage</code>\uFF0C\u6D4F\u89C8 <code>http://localhost:3000/about</code> \u4F1A\u5C55\u793A <code>About</code>\uFF0C\u6D4F\u89C8\u5176\u4ED6\u5730\u5740\uFF08\u5982 <code>http://localhost:3000/foo</code>\uFF09\u90FD\u4F1A\u5C55\u793A <code>Not Found</code>\u3002</p><p>\u7531\u4E8E\u4F7F\u7528\u4E86\u6B63\u5219 <code>/\\/?(?:\\?.*)?$/</code> \u5BF9 URL \u505A\u5904\u7406\uFF0C\u56E0\u6B64\u4EFB\u4F55\u67E5\u8BE2\u5B57\u7B26\u4E32\u90FD\u4F1A\u88AB\u5FFD\u7565\uFF0C<code>http://localhost:3000/?foo=bar</code> \u4F1A\u5C55\u793A <code>Homepage</code>\u3002</p><h2 id="\u9759\u6001\u8D44\u6E90" tabindex="-1">\u9759\u6001\u8D44\u6E90 <a class="header-anchor" href="#\u9759\u6001\u8D44\u6E90" aria-hidden="true">#</a></h2><p>\u9759\u6001\u8D44\u6E90\u4E00\u822C\u662F\u4E0D\u4F1A\u53D8\u5316\u7684\u5185\u5BB9\uFF0C\u5982\u56FE\u7247\u3001\u5A92\u4F53\u6587\u4EF6\u7B49\u3002</p><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u4F1A\u628A\u9759\u6001\u8D44\u6E90\u653E\u5728 <code>public</code> \u6587\u4EF6\u5939\u4E2D\u3002\u5B58\u653E <code>home.html</code>\u3001<code>about.html</code>\u3001<code>404.html</code> \u548C <code>img/logo.png</code>\u3002</p><p><strong>home.html</strong></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Homepage</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/img/logo.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">alt</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">logo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><strong>about.html</strong></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">About</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/img/logo.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">alt</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">logo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><strong>404.html</strong></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Not Found</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/img/logo.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">alt</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">logo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><strong>1.\u521B\u5EFA\u4E00\u4E2A\u8F85\u52A9\u51FD\u6570\u5904\u7406\u9759\u6001\u8D44\u6E90</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">serveStaticFile</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">contentType</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">responseCode</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// fs.readFile \u662F\u4E00\u4E2A\u8BFB\u53D6\u6587\u4EF6\u7684\u5F02\u6B65\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// fs.readFile \u5BF9\u5E94\u7684\u540C\u6B65\u65B9\u6CD5 fs.readFileSync</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readFile</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">__dirname</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">writeHead</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">500</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">Content-Type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text/plain</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">500 - Internal Error</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">writeHead</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">responseCode</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">Content-Type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">contentType</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>2.\u521B\u5EFA HTTP \u670D\u52A1\u5668\u65F6\u8BFB\u53D6\u9759\u6001\u8D44\u6E90</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> server </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createServer</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5BF9 URL \u505A\u89C4\u8303\u5316\u5904\u7406\uFF1A\u79FB\u9664\u67E5\u8BE2\u4E32\u3001\u672B\u5C3E\u53EF\u9009\u7684\u659C\u6760\uFF0C\u5E76\u8F6C\u6210\u5C0F\u5199</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\/</span><span style="color:#89DDFF;">?(?:</span><span style="color:#A6ACCD;">\\?</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">*)?</span><span style="color:#89DDFF;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toLowerCase</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">switch</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">case</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">serveStaticFile</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/public/home.html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text/html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">case</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/about</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">serveStaticFile</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/public/about.html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text/html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">case</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/img/logo.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">serveStaticFile</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/public/img/logo.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">image/png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">serveStaticFile</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/public/404.html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text/html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">404</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u901A\u8FC7 <code>node helloworld.js</code> \u8FD0\u884C\u7A0B\u5E8F\uFF0C\u8F93\u5165\u5BF9\u5E94\u7684\u5730\u5740\u5C31\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u4E2D\u770B\u5230\u5BF9\u5E94\u7684\u9875\u9762\u3002</p>`,33),e=[o];function t(c,r,F,D,y,C){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
