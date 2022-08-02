(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{617:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"shiro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shiro"}},[s._v("#")]),s._v(" Shiro")]),s._v(" "),a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[s._v("#")]),s._v(" 目录")]),s._v(" "),a("ul",[a("li",[s._v("Shiro简介")]),s._v(" "),a("li",[s._v("Shiro的配置")]),s._v(" "),a("li",[s._v("Shiro的基本使用")]),s._v(" "),a("li",[s._v("Shiro的高级使用\n"),a("ul",[a("li",[s._v("自定义 Shiro 错误信息")]),s._v(" "),a("li",[s._v("Shiro 与 Jwt 整合")]),s._v(" "),a("li",[s._v("Shiro 与 SSO（单点登录） 整合")])])])]),s._v(" "),a("h2",{attrs:{id:"shiro简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shiro简介"}},[s._v("#")]),s._v(" Shiro简介")]),s._v(" "),a("p",[s._v("Apache Shiro是一个强大且易用的Java安全框架，执行身份验证、授权、密码学和会话管理。使用 Shiro 的易于理解的 API，您可以快速、轻松地获得任何应用程序，从最小的移动应用程序到最大的网络和企业应用程序。")]),s._v(" "),a("h2",{attrs:{id:"shiro的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shiro的配置"}},[s._v("#")]),s._v(" Shiro的配置")]),s._v(" "),a("p",[s._v("Jboot 默认情况下并没有依赖 shiro，因此，在在使用 Jboot 的 Shiro 模块之前，需要你添加下 Shiro 的 Maven 依赖。")]),s._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org.apache.shiro"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("shiro-core"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("1.7.1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org.apache.shiro"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("shiro-web"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("1.7.1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])]),a("p",[s._v("同时，需要在 resources 目录下配置上您的 "),a("code",[s._v("shiro.ini")]),s._v(" 配置文件，并在 "),a("code",[s._v("jboot.porperties")]),s._v(" 添加上 "),a("code",[s._v("jboot.shiro.ini = shiro.ini")]),s._v(" 配置。在 "),a("code",[s._v("shiro.ini")]),s._v(" 文件里，需要在自行扩展 "),a("code",[s._v("realm")]),s._v(" 等信息。")]),s._v(" "),a("h2",{attrs:{id:"shiro的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shiro的使用"}},[s._v("#")]),s._v(" Shiro的使用")]),s._v(" "),a("p",[s._v("Jboot 的 Shiro 模块为您提供了以下12个模板指令，同时支持 Shiro 的 5 个 Requires 注解功能。方便您使用 Shiro。")]),s._v(" "),a("p",[a("strong",[s._v("12个Html模板指令")])]),s._v(" "),a("ul",[a("li",[s._v("shiroAuthenticated：用户已经身份验证通过，Subject.login登录成功")]),s._v(" "),a("li",[s._v("shiroGuest：游客访问时。 但是，当用户登录成功了就不显示了")]),s._v(" "),a("li",[s._v("shiroHasAllPermission：拥有全部权限")]),s._v(" "),a("li",[s._v("shiroHasAllRoles：拥有全部角色")]),s._v(" "),a("li",[s._v("shiroHasAnyPermission：拥有任何一个权限")]),s._v(" "),a("li",[s._v("shiroHasAnyRoles：拥有任何一个角色")]),s._v(" "),a("li",[s._v("shiroHasPermission：有相应权限")]),s._v(" "),a("li",[s._v("shiroHasRole：有相应角色")]),s._v(" "),a("li",[s._v("shiroNoAuthenticated：未进行身份验证时，即没有调用Subject.login进行登录。")]),s._v(" "),a("li",[s._v("shiroNotHasPermission：没有该权限")]),s._v(" "),a("li",[s._v("shiroNotHasRole：没有该角色")]),s._v(" "),a("li",[s._v("shiroPrincipal：获取Subject Principal 身份信息")])]),s._v(" "),a("p",[a("strong",[s._v("5个Controller注解")])]),s._v(" "),a("ul",[a("li",[s._v("RequiresPermissions：需要权限才能访问这个action")]),s._v(" "),a("li",[s._v("RequiresRoles：需要角色才能访问这个action")]),s._v(" "),a("li",[s._v("RequiresAuthentication：需要授权才能访问这个action，即：SecurityUtils.getSubject().isAuthenticated()")]),s._v(" "),a("li",[s._v("RequiresUser：获取到用户信息才能访问这个action，即：SecurityUtils.getSubject().getPrincipal() != null")]),s._v(" "),a("li",[s._v("RequiresGuest：和RequiresUser相反")])]),s._v(" "),a("h3",{attrs:{id:"_12个html模板指令的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12个html模板指令的使用"}},[s._v("#")]),s._v(" 12个Html模板指令的使用")]),s._v(" "),a("p",[s._v("shiroAuthenticated的使用")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#shiroAuthenticated()\n  登陆成功：您的用户名是：#(SESSION("username"))\n#end\n')])])]),a("p",[s._v("shiroGuest的使用")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#shiroGuest()\n  游客您好\n#end\n")])])]),a("p",[s._v("shiroHasAllPermission的使用")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#shiroHasAllPermission(permissionName1,permissionName2)\n  您好，您拥有了权限 permissionName1和permissionName2\n#end\n")])])]),a("p",[s._v("shiroHasAllRoles的使用")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#shiroHasAllRoles(role1, role2)\n  您好，您拥有了角色 role1和role2\n#end\n")])])]),a("p",[s._v("shiroHasAnyPermission的使用")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#shiroHasAnyPermission(permissionName1,permissionName2)\n  您好，您拥有了权限 permissionName1 或 permissionName2 \n#end\n")])])]),a("p",[s._v("shiroHasAnyRoles的使用")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#shiroHasAllRoles(role1, role2)\n  您好，您拥有了角色 role1 或 role2\n#end\n")])])]),a("p",[s._v("shiroHasPermission的使用")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#shiroHasPermission(permissionName1)\n  您好，您拥有了权限 permissionName1 \n#end\n")])])]),a("p",[s._v("shiroHasRole的使用")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#shiroHasRole(role1)\n  您好，您拥有了角色 role1 \n#end\n")])])]),a("p",[s._v("shiroNoAuthenticated的使用")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#shiroNoAuthenticated()\n  您好，您还没有登陆\n#end\n")])])]),a("p",[s._v("shiroNotHasPermission的使用")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#shiroNotHasPermission(permissionName1)\n  您好，您没有权限 permissionName1 \n#end\n")])])]),a("p",[s._v("shiroNotHasRole的使用")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#shiroNotHasRole(role1)\n  您好，您没有角色role1\n#end\n")])])]),a("p",[s._v("shiroPrincipal的使用")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#shiroPrincipal()\n  您好，您的登陆信息是：#(principal)\n#end\n")])])]),a("h3",{attrs:{id:"_5个controller注解的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5个controller注解的使用"}},[s._v("#")]),s._v(" 5个Controller注解的使用")]),s._v(" "),a("p",[s._v("RequiresPermissions的使用")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyController")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JbootController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequiresPermissions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"permission1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n\t  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t  \n\t  "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequiresPermissions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"permission1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"permission2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("logical"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Logincal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AND"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("index1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n\t  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("RequiresRoles的使用")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyController")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JbootController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequiresRoles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"role1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n\t  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t  \n\t  "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequiresRoles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"role1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"role2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("logical"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Logincal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AND"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("userctener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n\t  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("RequiresUser、RequiresGuest、RequiresAuthentication 的使用")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyController")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JbootController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequiresUser")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("userCenter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n\t  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t  \n\t  "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequiresGuest")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("login")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n\t  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t  \n\t  "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequiresAuthentication")]),s._v("\n\t  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("my")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t  \n\t  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"shiro的高级使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shiro的高级使用"}},[s._v("#")]),s._v(" Shiro的高级使用")]),s._v(" "),a("h3",{attrs:{id:"自定义-shiro-错误信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义-shiro-错误信息"}},[s._v("#")]),s._v(" 自定义 Shiro 错误信息")]),s._v(" "),a("p",[s._v("编写一个类实现 实现接口 io.jboot.component.shiro.JbootShiroInvokeListener，例如：")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyshiroListener")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JbootShiroInvokeListener")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JbootShiroConfig")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Jboot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JbootShiroConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AuthorizeResult")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("onInvokeBefore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Invocation")]),s._v(" inv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//do nothing")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("onInvokeAfter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Invocation")]),s._v(" inv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AuthorizeResult")]),s._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//说明该用户授权成功，")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//可以允许访问")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isOk")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            inv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("invoke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//shiro授权不成功，返回授权错误码")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" errorCode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getErrorCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("switch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("errorCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AuthorizeResult")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ERROR_CODE_UNAUTHENTICATED"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("doProcessUnauthenticated")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("inv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AuthorizeResult")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ERROR_CODE_UNAUTHORIZATION"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("doProcessuUnauthorization")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("inv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n                inv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("renderError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("doProcessUnauthenticated")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Controller")]),s._v(" controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 处理认证失败")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("doProcessuUnauthorization")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Controller")]),s._v(" controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 处理授权失败")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("其次在jboot.properties中配置即可")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("jboot.shiro.invokeListener=com.xxx.MyshiroListener\n")])])]),a("h3",{attrs:{id:"shiro-与-jwt-整合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shiro-与-jwt-整合"}},[s._v("#")]),s._v(" Shiro 与 Jwt 整合")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("JbootShiroInvokeListener.onInvokeBefore()")]),s._v(" 中，接收 JWT 数据，并 JWT 处理的相关认证，然后返回\n"),a("code",[s._v("AuthorizeResult")]),s._v("，返回的 "),a("code",[s._v("AuthorizeResult")]),s._v(" 直接交给 "),a("code",[s._v("onInvokeAfter")]),s._v(" 处理，不再交给\nShiro 内部处理。")]),s._v(" "),a("p",[s._v("若 "),a("code",[s._v("JbootShiroInvokeListener.onInvokeBefore()")]),s._v(" 返回 null，则交给 Shiro 内部处理")]),s._v(" "),a("h3",{attrs:{id:"shiro-与-sso-整合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shiro-与-sso-整合"}},[s._v("#")]),s._v(" Shiro 与 SSO 整合")]),s._v(" "),a("p",[s._v("同 Jwt 处理方案。")])])}),[],!1,null,null,null);t.default=e.exports}}]);