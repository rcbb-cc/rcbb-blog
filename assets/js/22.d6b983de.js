(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{364:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"行为验证码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#行为验证码"}},[s._v("#")]),s._v(" 行为验证码")]),s._v(" "),t("p",[s._v("行为验证码采用嵌入式集成方式，接入方便，安全，高效。"),t("br"),s._v("\n抛弃了传统字符型验证码展示-填写字符-比对答案的流程，采用验证码展示-采集用户行为-分析用户行为流程，用户只需要产生指定的行为轨迹，不需要键盘手动输入，极大优化了传统验证码用户体验不佳的问题。"),t("br"),s._v("\n同时，快速、准确的返回人机判定结果。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://rcbb-blog.oss-cn-guangzhou.aliyuncs.com/2021/07/blockPuzzle-d35b55.png?x-oss-process=style/yuantu_shuiyin",alt:"滑动拼图"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://rcbb-blog.oss-cn-guangzhou.aliyuncs.com/2021/07/clickWord-b61690.png?x-oss-process=style/yuantu_shuiyin",alt:"点选文字"}})]),s._v(" "),t("h2",{attrs:{id:"aj-captcha"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aj-captcha"}},[s._v("#")]),s._v(" AJ-Captcha")]),s._v(" "),t("p",[s._v("anji-plus / AJ-Captcha")]),s._v(" "),t("p",[s._v("Githu地址：\nhttps://github.com/anji-plus/captcha")]),s._v(" "),t("p",[s._v("码云地址：\nhttps://gitee.com/anji-plus/captcha")]),s._v(" "),t("p",[s._v("文档地址：\nhttps://captcha.anji-plus.com/#/doc")]),s._v(" "),t("h2",{attrs:{id:"最佳实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[s._v("#")]),s._v(" 最佳实践")]),s._v(" "),t("p",[s._v("环境：SpringBoot 2.3.7.RELEASE、Maven")]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("com.github.anji-plus"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("captcha-spring-boot-starter"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("1.2.7"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("引入的依赖中，存在 CaptchaController，有默认的实现方式，如果不自定义相关内容，基本不用编写代码。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://rcbb-blog.oss-cn-guangzhou.aliyuncs.com/2021/07/20210720111739-94e00e.png?x-oss-process=style/yuantu_shuiyin",alt:"CaptchaController"}})]),s._v(" "),t("p",[s._v("默认的效果。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://rcbb-blog.oss-cn-guangzhou.aliyuncs.com/2021/07/20210720112137-fd80ca.png?x-oss-process=style/yuantu_shuiyin",alt:"captcha效果"}})]),s._v(" "),t("p",[s._v("官方的前端 html 代码我也 copy 了一份过来，放在项目下了，方便自己验证。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://rcbb-blog.oss-cn-guangzhou.aliyuncs.com/2021/07/20210720112258-728401.png?x-oss-process=style/yuantu_shuiyin",alt:"captcha html"}})]),s._v(" "),t("p",[s._v("官方前端 Demo 代码，是非常全的。前端代码使用的什么框架，直接看官方 Demo 就行了。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://rcbb-blog.oss-cn-guangzhou.aliyuncs.com/2021/07/20210720112420-34f66a.png?x-oss-process=style/yuantu_shuiyin",alt:"官方前端 Demo 代码"}})]),s._v(" "),t("h2",{attrs:{id:"修改图片资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改图片资源"}},[s._v("#")]),s._v(" 修改图片资源")]),s._v(" "),t("p",[s._v("修改验证码的图片资源。")]),s._v(" "),t("p",[t("strong",[s._v("注意目录结构")]),s._v("（因为看源码可发现，在初始化图片时，它在硬编码上固定了路径地址）"),t("br"),s._v(" "),t("strong",[s._v("注意图片大小")]),s._v("（这个与前端展示的大小有关，默认的图片大小为：宽度：311 像素，高度：155 像素）")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://rcbb-blog.oss-cn-guangzhou.aliyuncs.com/2021/07/20210720113235-daed3f.png?x-oss-process=style/yuantu_shuiyin",alt:"固定了路径地址"}})]),s._v(" "),t("p",[s._v("使用项目路径，加个水印。")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" aj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("captcha"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("demo\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9696")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("aj")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("captcha")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 支持全路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    jigsaw: C:/Users/Desktop/images/jigsaw")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    pic-click: C:/Users/Desktop/images/pic-click")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 支持项目路径以classpath:开头,取resource目录下路径,例：classpath:images/jigsaw")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jigsaw")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" classpath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("images/jigsaw\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("pic-click")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" classpath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("images/pic"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("click\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 水印")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("water-mark")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" www.rcbb.cc\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://rcbb-blog.oss-cn-guangzhou.aliyuncs.com/2021/07/20210720112741-468f7d.png?x-oss-process=style/yuantu_shuiyin",alt:"修改图片"}})]),s._v(" "),t("p",[s._v("自定义图片和水印的效果。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://rcbb-blog.oss-cn-guangzhou.aliyuncs.com/2021/07/20210720114021-acfa70.png?x-oss-process=style/yuantu_shuiyin",alt:"效果"}})]),s._v(" "),t("p",[s._v("源代码地址：")]),s._v(" "),t("blockquote",[t("p",[s._v("https://github.com/rcbb-cc/fast-start-guide")])])])}),[],!1,null,null,null);t.default=e.exports}}]);