(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{385:function(n,s,a){"use strict";a.r(s);var e=a(1),t=Object(e.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"使用nvm控制node版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用nvm控制node版本"}},[n._v("#")]),n._v(" 使用nvm控制node版本")]),n._v(" "),s("p",[n._v("nvm 是一个 node 版本管理工具，通过它可以安装多种 node 版本并且可以快速、简单的切换 node 版本。")]),n._v(" "),s("h2",{attrs:{id:"下载-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载-安装"}},[n._v("#")]),n._v(" 下载&安装")]),n._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"}},[n._v("github & 下载地址"),s("OutboundLink")],1)]),n._v(" "),s("ul",[s("li",[n._v("安装版使用 nvm-setup.exe")]),n._v(" "),s("li",[n._v("解压版使用 nvm-setup.zip")])]),n._v(" "),s("p",[n._v("安装路径的选择："),s("code",[n._v("C:\\Users\\_____\\AppData\\Roaming\\nvm")]),n._v("\nnode的安装路径的选择："),s("code",[n._v("C:\\Program Files\\nodejs")])]),n._v(" "),s("p",[n._v("如果不是有路径强迫症，最好不要修改，以免忘记后续存放位置。")]),n._v(" "),s("p",[n._v("cmd 输入 "),s("code",[n._v("nvm -v")]),n._v(" 查询版本号，如果成功则代表安装成功。")]),n._v(" "),s("p",[n._v("不成功则需要配置环境变量。")]),n._v(" "),s("table",[s("thead",[s("tr",[s("th",[n._v("环境变量名")]),n._v(" "),s("th",[n._v("环境变量值")])])]),n._v(" "),s("tbody",[s("tr",[s("td",[s("code",[n._v("NVM_HOME")])]),n._v(" "),s("td",[s("code",[n._v("C:\\Users\\_____\\AppData\\Roaming\\nvm")])])]),n._v(" "),s("tr",[s("td",[s("code",[n._v("NVM_SYMLINK")])]),n._v(" "),s("td",[s("code",[n._v("C:\\Program Files\\nodejs")])])])])]),n._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[n._v("#")]),n._v(" 配置")]),n._v(" "),s("p",[n._v("配置下载镜像")]),n._v(" "),s("p",[n._v("找到 nvm 安装路径(默认路径"),s("code",[n._v("C:\\Users\\_____\\AppData\\Roaming\\nvm")]),n._v(")，配置 nvm 的 setting.txt。")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("root: C:\\Users\\_____\\AppData\\Roaming\\nvm\npath: C:\\Program Files\\nodejs\nnode_mirror: https://npmmirror.com/mirrors/node/\nnpm_mirror: https://npmmirror.com/mirrors/npm/\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br")])]),s("h2",{attrs:{id:"常用指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用指令"}},[n._v("#")]),n._v(" 常用指令")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("(1)查看目前已经安装的版本\n    nvm ls\n(2)安装指定的版本的nodejs\n    nvm install 10.5.0\n(3)使用指定版本的nodejs\n    nvm use 10.5.0\n(4)显示可下载版本的部分列表\n    nvm list available\n(5)删除已安装的指定版本，语法与install类似\n    nvm uninstall 10.5.0\n(6)给不同的版本号添加别名\n    nvm alias\n(7)删除已定义的别名\n    nvm unalias\n(8)在当前版本node环境下，重新全局安装指定版本号的npm包\n    nvm reinstall-packages <version>\n(9)显示当前的版本\n    nvm current\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br")])]),s("h2",{attrs:{id:"举例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[n._v("#")]),n._v(" 举例")]),n._v(" "),s("ol",[s("li",[n._v("查看目前已经安装的版本。")]),n._v(" "),s("li",[n._v("安装 18.17.1。")]),n._v(" "),s("li",[n._v("查看目前已经安装的版本。")]),n._v(" "),s("li",[n._v("使用指定版本 18.17.1。")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("Microsoft Windows [版本 10.0.22621.2861]\n(c) Microsoft Corporation。保留所有权利。\n\nC:\\Users\\_____>nvm ls\n\n  * 14.18.1 (Currently using 64-bit executable)\n\nC:\\Users\\_____>nvm install 18.17.1\nDownloading node.js version 18.17.1 (64-bit)...\nExtracting node and npm...\nComplete\nnpm v9.6.7 installed successfully.\n\n\nInstallation complete. If you want to use this version, type\n\nnvm use 18.17.1\n\nC:\\Users\\_____>nvm list\n\n    18.17.1\n  * 14.18.1 (Currently using 64-bit executable)\n\nC:\\Users\\_____>nvm use 18.17.1\nNow using node v18.17.1 (64-bit)\n\nC:\\Users\\_____>\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br")])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[n._v("#")]),n._v(" 参考")]),n._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://blog.csdn.net/jin_mu_yan/article/details/130748771",target:"_blank",rel:"noopener noreferrer"}},[n._v("金炑颜-NVM管理node版本"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"https://www.itqaq.com/index/563.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("辰风沐阳-.nvmrc 文件使用详解"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/430580607",target:"_blank",rel:"noopener noreferrer"}},[n._v("天猪-【望周知】淘宝 NPM 镜像站喊你切换新域名啦"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=t.exports}}]);