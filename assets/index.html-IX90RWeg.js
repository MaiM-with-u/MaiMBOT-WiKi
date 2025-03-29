import{_ as i,c as a,a as t,o as s}from"./app-BWRYWu9s.js";const n={};function o(p,e){return s(),a("div",null,e[0]||(e[0]=[t(`<h2 id="一-安装python环境" tabindex="-1"><a class="header-anchor" href="#一-安装python环境"><span>一：安装Python环境</span></a></h2><h3 id="下载安装包" tabindex="-1"><a class="header-anchor" href="#下载安装包"><span>下载<a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">安装包 </a></span></a></h3><img src="https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMKZ8saxfRoWJCPzj1nmdMVH7vH3eEAAtfGMRuICVlW1Gyk0xzvFHsBAAMCAAN3AAM2BA.png" alt="image-20250307230039422" style="zoom:67%;"><p>单机黄色按钮下载安装包</p><h3 id="安装过程" tabindex="-1"><a class="header-anchor" href="#安装过程"><span>安装过程</span></a></h3><img src="https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMMZ8scf6pzzT58hSC1-SUXYr9uAdsAAubGMRuICVlWxkloUeFlWnEBAAMCAAN4AAM2BA.png" alt="Python安装界面" style="zoom:67%;"><p>✅ 必须勾选 <code>Add Python.exe to PATH</code><br> 🔘 选择 <code>Install Now</code> 完成安装</p><h2 id="二-部署mongodb数据库" tabindex="-1"><a class="header-anchor" href="#二-部署mongodb数据库"><span>二：部署MongoDB数据库</span></a></h2><h3 id="获取安装包" tabindex="-1"><a class="header-anchor" href="#获取安装包"><span>获取安装包</span></a></h3><p><a href="https://www.mongodb.com/try/download/community/" target="_blank" rel="noopener noreferrer">MongoDB官方下载</a> <em>推荐使用IDM等下载工具加速</em></p><img src="https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMVZ81MOfGDue3rMgh-bbmM_f6bCu8AAmXJMRsDfGhWkGyyg5tnATwBAAMCAAN3AAM2BA.png" style="zoom:25%;"><blockquote><p>MongoDB 8.0 社区版支持以下采用 x86_64 架构的 <em><strong>64 位</strong></em> Windows 版本：</p><ul><li><p>MongoDB 对于32位系统的支持不佳，所以3.2版本之后就没有对32位系统的支持。</p></li><li><p>Windows Server 2022</p></li><li><p>Windows Server 2019</p></li><li><p>Windows 11</p></li></ul></blockquote><p>下载 <strong>.msi</strong> 文件，下载后双击该文件，按操作提示安装即可。</p><h3 id="安装过程-1" tabindex="-1"><a class="header-anchor" href="#安装过程-1"><span>安装过程</span></a></h3><p>双击打开安装包：</p><p><img src="https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMJZ8sauA6a0rNHXOhYZORUnCVMeXgAAtbGMRuICVlWUz_BJiUCVq4BAAMCAAN4AAM2BA.png" alt=""></p><p>出现协议窗口，选中同意选项，点击 &quot;Next&quot; 按钮：</p><p><img src="https://www.runoob.com/wp-content/uploads/2013/10/image2-5.png" alt="img"></p><p>出现两个选项：</p><ul><li><code>Complete</code> <em>完整安装</em> <strong>默认配置安装所有 MongoDB 组件和工具，当然你也可以选择自定义安装。</strong></li><li><code>Custom</code> 自定义安装</li></ul><p><img src="https://www.runoob.com/wp-content/uploads/2013/10/Steps-to-install-MongoDB_4.png" alt="img"></p><p><em>一般选择完整安装即可</em></p><details><summary>点击展开</summary><p>自定义安装会多出如下选项，你可以自定义MongoDB本体安装路径以及可选组件</p><p><img src="https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMtZ9BhOo2uM8xivleEMPjRKOa9Zj4AAgvAMRsN34BWwOjNF9fSYAEBAAMCAAN4AAM2BA.png" alt=""></p></details><p>现在，出现了两个选择：</p><p><img src="https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMnZ814HfaBlaf3EzVrZCJsJEJ6InYAAgbKMRsDfGhWY7YWSY8_FW0BAAMCAAN4AAM2BA.png" alt=""></p><blockquote><p>从<strong>MongoDB 4.0</strong>开始，您可以在安装期间配置和启动<strong>MongoDB</strong>作为服务，并在成功安装后启动<strong>MongoDB</strong>服务</p><ul><li><p><strong>Run Service as Network Service user</strong>：以网络服务用户身份运行服务（默认）</p></li><li><p>这是Windows内置的Windows用户账户</p></li><li><p><strong>Run Services as a local or domain user</strong>：以本地或域用户身份运行服务对于现有本地用户账户</p></li><li><p>Domain填&quot;.&quot;(小数点)即可</p></li><li><p>Account Name为当前Windows用户名</p></li><li><p>Account Password为Windows用户密码 <mark>（注意不是PIN密码）</mark></p></li><li><p>对于现有的本地用户帐户，请指定一个句点作为帐户域（即.），并为该用户指定帐户名称和帐户密码。</p></li><li><p>对于现有域用户，请为该用户指定“ 帐户域”，“帐户名”和“ 帐户密码 ”</p></li></ul><p><strong>如果您只需简单操作和基本功能，默认的网络服务用户选项即可</strong><strong>如果您需要对权限进行更多控制，或者需要使用特定用户凭据访问和限制资源，则选择本地或域用户选项会更合适</strong></p><ul><li><p>Service Name：指定服务名称，默认名称是MongoDB。如果您已拥有具有指定名称的服务，则必须选择另一个名称</p></li><li><p>Data Directory：指定数据目录，对应于–dbpath。如果该目录不存在，安装程序将创建该目录并设置对服务用户的目录访问权限</p></li><li><p>Log Directory：指定日志目录，该目录对应于–logpath。如果该目录不存在，安装程序将创建该目录并设置对服务用户的目录访问权限</p></li><li><p>只安装MongoDB（不推荐）</p></li></ul></blockquote><p>这里我们可以直接<code>next</code>:</p><p><strong>Install MongoDB Compass：</strong></p><p>安装<strong>MongoDB</strong>的<strong>GUI</strong>软件，因为网络的原因,某些地区可能下载很慢，如果您遇到这种情况，请尝试去掉勾选，可在安装完成之后另外<a href="https://www.mongodb.com/try/download/compass" target="_blank" rel="noopener noreferrer">下载安装</a>。</p><p><img src="https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMpZ814g7k-7leb3NiByYBh4i5zmYcAAn7EMRsDfHBWVLP095keYsoBAAMCAAN4AAM2BA.png" alt=""></p><p><em><strong>至此，MongoDB安装完成了✅</strong></em> 安装完毕之后，默认会自动运行数据库服务。浏览器打开 <a href="http://localhost:27017/" target="_blank" rel="noopener noreferrer">此链接</a> 出现以下文字表明数据库正在运行！</p><blockquote><p>It looks like you are trying to access MongoDB over HTTP on the native driver port.</p></blockquote><p><em>您可以通过修改MongoDB的<code>bin</code>目录下的<code>mongod.cfg</code>来修改服务运行配置</em></p><p>启动 MongoDB 服务</p><div class="language-cmd line-numbers-mode" data-ext="cmd" data-title="cmd"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">net start MongoDB</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>关闭 MongoDB 服务</p><div class="language-cmd line-numbers-mode" data-ext="cmd" data-title="cmd"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">net stop MongoDB</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>移除 MongoDB 服务</p><div class="language-cmd line-numbers-mode" data-ext="cmd" data-title="cmd"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">mongod</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> --</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">remove</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="可选-添加环境变量" tabindex="-1"><a class="header-anchor" href="#可选-添加环境变量"><span>(可选)添加环境变量</span></a></h3><p>如果您想在任何位置使用Mongod命令，那么还需<strong>添加环境变量</strong>:</p><p>只需摁住Win+R打开运行窗口输入:</p><div class="language-cmd line-numbers-mode" data-ext="cmd" data-title="cmd"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">setx path </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%path%;MongoDB的bin路径</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> /</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">M</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>例如我的MongoDB的<code>bin</code>路径为<code>C:\\Program Files\\MongoDB\\Server\\8.0\\bin</code>，那么我只需要输入</p><div class="language-cmd line-numbers-mode" data-ext="cmd" data-title="cmd"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">setx path </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%path%;C:\\Program Files\\MongoDB\\Server\\8.0\\bin</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> /</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">M</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>只能用运行窗口或CMD运行该命令</p><p>严禁使用PowerShell运行该命令</p><p>严格按照要求输入命令 (否则可能会导致环境变量全部消失!!!)</p><p>打错出事别来找我</p><p>这里提供一个简单修复方法:</p><ol><li>找到另外一台完好的电脑</li><li>按住<code>win+r</code>打开运行菜单, 输入<code>regedit</code>打开注册表编辑器</li><li>导航到路径<code>HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Environment</code></li><li>右键左侧栏<code>Environment</code>选择导出</li><li>将文件(位于用户文档文件夹下)移动到问题电脑上双击导入</li></ol></div><h2 id="三-配置napcatqq框架" tabindex="-1"><a class="header-anchor" href="#三-配置napcatqq框架"><span>三：配置NapCatQQ框架</span></a></h2><h3 id="下载安装" tabindex="-1"><a class="header-anchor" href="#下载安装"><span>下载安装</span></a></h3><p><a href="https://github.com/NapNeko/NapCatQQ/releases/" target="_blank" rel="noopener noreferrer">NapCatQQ最新版</a><br> 选择 <code>Win64无头版本（网盘链接）</code>或<code>NapCat.Shell(GitHub发行直链)</code></p><p><img src="https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMWZ81avJxQRdCjP1TyQVO3izHWNAkAAqbJMRsDfGhWbxC3eJfrGyQBAAMCAAN3AAM2BA.png" alt=""></p><p>在你喜欢的地方新建一个文件夹命名为NapCat.Shell，将下载下来的压缩包解压到此处</p><h3 id="napcat-启动" tabindex="-1"><a class="header-anchor" href="#napcat-启动"><span>NapCat,启动！</span></a></h3><ol><li><p><em>强迫症</em>必须重命名<code>quickLoginExample.bat</code>为<code>quickLogin.bat</code>，接着右键编辑， <img src="https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMXZ81dfs2aDVi1PuNE4iin76klQfwAAq_JMRsDfGhWYzu3goS3WZMBAAMCAAN4AAM2BA.png" alt=""></p><p><mark class="important">带有<code>REM</code>的为注释 删掉<em>你需要的系统</em>的那行命令开头REM这三个单词，并把<code>123456</code>修改为你<em>需要自动登录的Bot的QQ号</em></mark></p></li><li><p><strong>保存（Ctr+S）<strong>退出并运行该脚本即可启动</strong>NapCat.Shell</strong></p><p>如图，在启动后会出现一行<code>[NapCat] [WebUi] WebUi Local Panel Url: http://127.0.0.1:端口号/webui?token=密码</code></p><p>摁住Ctrl键并单击链接即可跳转到浏览器打开<em>NapCat</em>的<strong>WebUI</strong></p><p><img src="https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMuZ9EWbZlsk0ZWSY2-CdMSF73DKi8AA8UxGw3fiFY7idYss2Gj6wEAAwIAA3kAAzYE.png" alt=""></p><p>按照提示进行登录后即可进入管理界面</p><h3 id="配置websocket客户端" tabindex="-1"><a class="header-anchor" href="#配置websocket客户端"><span>配置WebSocket客户端</span></a></h3><p>此时点击左侧边栏的<code>网络配置</code>菜单：</p><p><img src="https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMvZ9EYCbJhx5m0yqq_9ttoS1rBWocAAgvFMRsN34hWuCnC18_1y2ABAAMCAAN3AAM2BA.png" alt=""></p><p>鼠标移到<code>新建</code>选项上，点击<code>Websocket</code>客户端</p><p><img src="https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMwZ9EZhey6BOrGTXQxaeTVtgIxj-8AAhXFMRsN34hW6WKs-qq_GsMBAAMCAAN3AAM2BA.png" alt=""></p></li></ol><p>随后在弹出的窗口</p><p>单击<code>启用</code></p><p><code>名称</code>起一个你想要的名字，比如我填的是<code>MaiMBOT</code></p><p><strong><code>URL</code></strong> 填入 <em><code>ws://127.0.0.1:8080/onebot/v11/ws</code></em></p><p><strong><code>消息格式</code></strong> 选择 <em><code>String</code></em> 字符串格式</p><p>其余保持默认即可，点击<code>保存</code></p><p><img src="https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMxZ9EZ9UXUQXry2cpC00xjjNZYn_kAAhjFMRsN34hWXlegBnNg0nkBAAMCAAN4AAM2BA.png" alt=""></p><p>恭喜你配置完了<em><strong>NapCatShell</strong></em>🥳</p><h2 id="四-获取maimbot主体" tabindex="-1"><a class="header-anchor" href="#四-获取maimbot主体"><span>四：获取MaiMBot主体</span></a></h2><blockquote><p><em>如果无法访问到Github请尝试使用dev-sidecar，软件使用<a href="/tools/dev-sidecar/" target="_blank" rel="noopener noreferrer">教程</a></em></p></blockquote><p><strong>GitHub获取</strong><br> 访问项目<a href="https://github.com/SengokuCola/MaiMBot" target="_blank" rel="noopener noreferrer">仓库</a>，切换到<em><strong>main-fix</strong></em>分支下 (图片里的debug分支过时了，但实际操作是一样的) <img src="https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMjZ81pvYSeUaeKcmlhfBelH_GlNa8AAuzJMRsDfGhWCX4ePAdy7noBAAMCAAN5AAM2BA.png" style="zoom:67%;"></p><p>接着点击绿色的<code>Code</code>按钮，点击<code>Downlod ZIP</code>下载压缩包</p><img src="https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMiZ81psAdqhyPbuSfeQOBTPMf90jsAAurJMRsDfGhWvQgVmBjrQdgBAAMCAAN5AAM2BA.png" style="zoom:67%;"><p>将压缩包解压到你喜欢的地方</p><h2 id="五-申请api密钥" tabindex="-1"><a class="header-anchor" href="#五-申请api密钥"><span>五：申请API密钥</span></a></h2><h3 id="siliconcloud" tabindex="-1"><a class="header-anchor" href="#siliconcloud"><span>SiliconCloud</span></a></h3><ol><li><p><strong>注册</strong> (包含我的邀请链接，注册赠送14元余额) <a href="https://cloud.siliconflow.cn/i/Dp1gWkNo" target="_blank" rel="noopener noreferrer">注册入口</a></p></li><li><p><strong>创建密钥</strong><br><img src="https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMgZ81oCKbZp5zApcY2IN2CtpHGcFUAAufJMRsDfGhWhzj-SoSP7owBAAMCAAN3AAM2BA.png" style="zoom:50%;"> 点击右上角 <code>新建API秘钥</code> 生成密钥,弹出的窗口直接点击<code>新建密钥</code>，描述可以不填，创建完成后单击密钥文本即可复制下来</p><p><img src="https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMhZ81oudpTENp46Ll3_P7PR2DcGZ0AAunJMRsDfGhWH-GbWH9SXdUBAAMCAAN4AAM2BA.png" alt=""></p></li></ol><h2 id="六-项目环境配置" tabindex="-1"><a class="header-anchor" href="#六-项目环境配置"><span>六：项目环境配置</span></a></h2><h3 id="打开终端" tabindex="-1"><a class="header-anchor" href="#打开终端"><span>打开终端</span></a></h3><p>打开你之前从GitHub上下载并解压缩的MaiMBot-debug文件夹，找一处空白的地方，右键<code>在终端中打开(T)</code></p><h3 id="创建虚拟环境-如果你不知道虚拟环境是什么-那请-跳过此步骤" tabindex="-1"><a class="header-anchor" href="#创建虚拟环境-如果你不知道虚拟环境是什么-那请-跳过此步骤"><span>创建虚拟环境 (如果你不知道虚拟环境是什么，那请 跳过此步骤)</span></a></h3><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">python </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">m venv bot</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">bot\\Scripts\\activate</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置清华镜像源" tabindex="-1"><a class="header-anchor" href="#配置清华镜像源"><span>配置清华镜像源</span></a></h3><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pip config set global.index</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">url https:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">//</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">mirrors.tuna.tsinghua.edu.cn</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pypi</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">web</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">simple</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pip install </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">r requirements.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目"><span>初始化项目</span></a></h3><p>在shell/cmd输入以下命令后再关闭</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">nb run</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="📎-资源汇总" tabindex="-1"><a class="header-anchor" href="#📎-资源汇总"><span>📎 资源汇总</span></a></h2><table><thead><tr><th><a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">Python官网</a></th></tr></thead><tbody><tr><td><a href="https://steampp.net/" target="_blank" rel="noopener noreferrer">(Steam++)Watt Toolkit官网</a></td></tr><tr><td><a href="https://github.com/NapNeko/NapCatQQ/releases/" target="_blank" rel="noopener noreferrer">NapCatQQ仓库</a></td></tr><tr><td><a href="https://github.com/SengokuCola/MaiMBot/tree/debug" target="_blank" rel="noopener noreferrer">MaiMBot仓库</a></td></tr><tr><td><a href="https://www.mongodb.com/try/download/community/" target="_blank" rel="noopener noreferrer">MongoDB下载 </a></td></tr></tbody></table>`,82)]))}const A=i(n,[["render",o]]),l=JSON.parse('{"path":"/deploy/prepare/","title":"准备工作","lang":"zh-CN","frontmatter":{"permalink":"/deploy/prepare/","title":"准备工作","icon":"majesticons:rocket-3-start-line","createTime":"2025/03/16 12:11:12","description":"一：安装Python环境 下载安装包 image-20250307230039422 单机黄色按钮下载安装包 安装过程 Python安装界面 ✅ 必须勾选 Add Python.exe to PATH 🔘 选择 Install Now 完成安装 二：部署MongoDB数据库 获取安装包 MongoDB官方下载 推荐使用IDM等下载工具加速 Mongo...","head":[["meta",{"property":"og:url","content":"https://maimbot.pages.dev/MaiMBot-WiKi/deploy/prepare/"}],["meta",{"property":"og:site_name","content":"MaiMBot WiKi"}],["meta",{"property":"og:title","content":"准备工作"}],["meta",{"property":"og:description","content":"一：安装Python环境 下载安装包 image-20250307230039422 单机黄色按钮下载安装包 安装过程 Python安装界面 ✅ 必须勾选 Add Python.exe to PATH 🔘 选择 Install Now 完成安装 二：部署MongoDB数据库 获取安装包 MongoDB官方下载 推荐使用IDM等下载工具加速 Mongo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMJZ8sauA6a0rNHXOhYZORUnCVMeXgAAtbGMRuICVlWUz_BJiUCVq4BAAMCAAN4AAM2BA.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-29T07:48:47.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-29T07:48:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"准备工作\\",\\"image\\":[\\"https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMJZ8sauA6a0rNHXOhYZORUnCVMeXgAAtbGMRuICVlWUz_BJiUCVq4BAAMCAAN4AAM2BA.png\\",\\"https://www.runoob.com/wp-content/uploads/2013/10/image2-5.png\\",\\"https://www.runoob.com/wp-content/uploads/2013/10/Steps-to-install-MongoDB_4.png\\",\\"https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMtZ9BhOo2uM8xivleEMPjRKOa9Zj4AAgvAMRsN34BWwOjNF9fSYAEBAAMCAAN4AAM2BA.png\\",\\"https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMnZ814HfaBlaf3EzVrZCJsJEJ6InYAAgbKMRsDfGhWY7YWSY8_FW0BAAMCAAN4AAM2BA.png\\",\\"https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMpZ814g7k-7leb3NiByYBh4i5zmYcAAn7EMRsDfHBWVLP095keYsoBAAMCAAN4AAM2BA.png\\",\\"https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMWZ81avJxQRdCjP1TyQVO3izHWNAkAAqbJMRsDfGhWbxC3eJfrGyQBAAMCAAN3AAM2BA.png\\",\\"https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMXZ81dfs2aDVi1PuNE4iin76klQfwAAq_JMRsDfGhWYzu3goS3WZMBAAMCAAN4AAM2BA.png\\",\\"https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMuZ9EWbZlsk0ZWSY2-CdMSF73DKi8AA8UxGw3fiFY7idYss2Gj6wEAAwIAA3kAAzYE.png\\",\\"https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMvZ9EYCbJhx5m0yqq_9ttoS1rBWocAAgvFMRsN34hWuCnC18_1y2ABAAMCAAN3AAM2BA.png\\",\\"https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMwZ9EZhey6BOrGTXQxaeTVtgIxj-8AAhXFMRsN34hW6WKs-qq_GsMBAAMCAAN3AAM2BA.png\\",\\"https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMxZ9EZ9UXUQXry2cpC00xjjNZYn_kAAhjFMRsN34hWXlegBnNg0nkBAAMCAAN4AAM2BA.png\\",\\"https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMhZ81oudpTENp46Ll3_P7PR2DcGZ0AAunJMRsDfGhWH-GbWH9SXdUBAAMCAAN4AAM2BA.png\\"],\\"dateModified\\":\\"2025-03-29T07:48:47.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":6.4,"words":1921},"git":{"updatedTime":1743234527000,"contributors":[{"name":"Ziphyrien","username":"Ziphyrien","email":"111620796+Ziphyrien@users.noreply.github.com","commits":44,"avatar":"https://avatars.githubusercontent.com/Ziphyrien?v=4","url":"https://github.com/Ziphyrien"},{"name":"creepebucket","username":"creepebucket","email":"158452230+creepebucket@users.noreply.github.com","commits":1,"avatar":"https://avatars.githubusercontent.com/creepebucket?v=4","url":"https://github.com/creepebucket"},{"name":"Ziphyrien","username":"Ziphyrien","email":"Hanson132567@outlook.com","commits":4,"avatar":"https://avatars.githubusercontent.com/Ziphyrien?v=4","url":"https://github.com/Ziphyrien"}],"changelog":[{"hash":"4b1495e94ebe1e5b9e7f65b70de718066e30fab8","date":1741363275000,"email":"111620796+Ziphyrien@users.noreply.github.com","author":"Ziphyrien","message":"Add files via upload","commitUrl":"https://github.com/Ziphyrien/MaiMBOT-WiKi/commit/4b1495e94ebe1e5b9e7f65b70de718066e30fab8"},{"hash":"4f12f89c5a8aac54916bb53cca7a005d325925ff","date":1741363975000,"email":"111620796+Ziphyrien@users.noreply.github.com","author":"Ziphyrien","message":"Update Windows部署教程.md","commitUrl":"https://github.com/Ziphyrien/MaiMBOT-WiKi/commit/4f12f89c5a8aac54916bb53cca7a005d325925ff"},{"hash":"6682a469da5f8c03b63211679e0127ef5a5da404","date":1741364883000,"email":"111620796+Ziphyrien@users.noreply.github.com","author":"Ziphyrien","message":"Update Windows部署教程.md","commitUrl":"https://github.com/Ziphyrien/MaiMBOT-WiKi/commit/6682a469da5f8c03b63211679e0127ef5a5da404"},{"hash":"e3a466f86d214ad2746d1db2b1cb84974cda7ac8","date":1741365175000,"email":"111620796+Ziphyrien@users.noreply.github.com","author":"Ziphyrien","message":"Update Windows部署教程.md","commitUrl":"https://github.com/Ziphyrien/MaiMBOT-WiKi/commit/e3a466f86d214ad2746d1db2b1cb84974cda7ac8"},{"hash":"897fa02639c0c04a53678f7711d6c0978ee11b1e","date":1741423288000,"email":"111620796+Ziphyrien@users.noreply.github.com","author":"Ziphyrien","message":"Create README.md","commitUrl":"https://github.com/Ziphyrien/MaiMBOT-WiKi/commit/897fa02639c0c04a53678f7711d6c0978ee11b1e"},{"hash":"1b8b92985b1ef0561934f905e5ca4889a95f37d0","date":1741448442000,"email":"111620796+Ziphyrien@users.noreply.github.com","author":"Ziphyrien","message":"Rename README.md to 准备工作.md","commitUrl":"https://github.com/Ziphyrien/MaiMBOT-WiKi/commit/1b8b92985b1ef0561934f905e5ca4889a95f37d0"},{"hash":"1e4ee113e1131d9a07cb5da0ba6128acb11fd0fd","date":1741449316000,"email":"111620796+Ziphyrien@users.noreply.github.com","author":"Ziphyrien","message":"Update 准备工作.md","commitUrl":"https://github.com/Ziphyrien/MaiMBOT-WiKi/commit/1e4ee113e1131d9a07cb5da0ba6128acb11fd0fd"},{"hash":"a6289bd5891436b329733149d9c03948de571b09","date":1741457350000,"email":"111620796+Ziphyrien@users.noreply.github.com","author":"Ziphyrien","message":"Update 准备工作.md","commitUrl":"https://github.com/Ziphyrien/MaiMBOT-WiKi/commit/a6289bd5891436b329733149d9c03948de571b09"},{"hash":"13a2f2ff021999616f9e6e56063a56d2a8340e80","date":1741516606000,"email":"111620796+Ziphyrien@users.noreply.github.com","author":"Ziphyrien","message":"Delete docs/notes/部署教程/准备工作.md","commitUrl":"https://github.com/Ziphyrien/MaiMBOT-WiKi/commit/13a2f2ff021999616f9e6e56063a56d2a8340e80"},{"hash":"4eadb53c8110e8aa2217cf4ed709214bcbe33a0b","date":1741516629000,"email":"111620796+Ziphyrien@users.noreply.github.com","author":"Ziphyrien","message":"Add files via upload","commitUrl":"https://github.com/Ziphyrien/MaiMBOT-WiKi/commit/4eadb53c8110e8aa2217cf4ed709214bcbe33a0b"}]},"autoDesc":true,"filePathRelative":"notes/部署/准备工作.md","bulletin":true}');export{A as comp,l as data};
