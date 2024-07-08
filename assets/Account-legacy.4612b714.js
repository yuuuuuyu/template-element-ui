System.register(["./index-legacy.64d83ae8.js","./account-legacy.c55b31dd.js","./role-legacy.7cb8c3f4.js","./ui-legacy.54996b8d.js"],(function(e,t){"use strict";var a,r,o,i,n,l,s,c,u,d,m=document.createElement("style");return m.textContent=".upload_avatar[data-v-acef9f45]{display:block;width:120px;height:120px;line-height:120px;background:#dedede;text-align:center}.upload_avatar_img[data-v-acef9f45]{width:120px;height:120px;object-fit:cover}\n",document.head.appendChild(m),{setters:[function(e){a=e.n,r=e._,o=e.d},function(e){i=e.a,n=e.r,l=e.b,s=e.e,c=e.c,u=e.l},function(e){d=e.l},function(){}],execute:function(){e("default",a({components:{OrgPicker:function(){return r((function(){return t.import("./OrgPicker-legacy.b1395c46.js")}),void 0,t.meta.url)}},data:function(){var e=this;return{account:i,dialogVisible:!1,loading:!1,list:[],editForm:{id:"",account:"",name:"",password:"",roles:[],disabled:!1},queryParam:{pageSize:20,p:1,account:"",name:""},totalCount:0,totalPage:0,rules:{account:[{required:!0,message:"请输入账号",trigger:"blur"}],name:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{validator:function(t,a,r){a?(""!==e.editForm.checkPass&&e.$refs.editForm.validateField("checkPass"),r()):r(new Error("请输入密码"))},trigger:"blur"}],checkPass:[{validator:function(t,a,r){a?a!==e.editForm.password?r(new Error("两次输入密码不一致!")):r():r(new Error("请再次输入密码"))},trigger:"blur"}],orgId:[{required:!0,message:"请选择所属组织"}]},requestRoles:d}},methods:{resetSearch:function(){this.queryParam={pageSize:20,p:1,account:"",name:""},this.fetchData(!0)},orgAdapter:function(e){var t;return(null===(t=this.editForm.org)||void 0===t?void 0:t.name)||e},resetPassword:function(e){var t=this;if(!e)return null;this.$confirm("确定重置账号 ".concat(e.account," 的密码?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.loading=!0,n({id:e.id}).then((function(e){e.data.password?t.$clipboard(e.data.password).then((function(){t.$alert("新密码已复制到剪贴板，请保管好新密码：<code>".concat(e.data.password,"</code>"),{confirmButtonText:"我知道了",dangerouslyUseHTMLString:!0}).then((function(){t.fetchData()}))})).catch((function(){t.$alert("密码已重置，请牢记新密码：<code>".concat(e.data.password,"</code>"),{confirmButtonText:"我知道了",dangerouslyUseHTMLString:!0}).then((function(){t.fetchData()}))})):t.$message.warning("操作失败，请重试")})).catch((function(){t.loading=!1}))}))},edit:function(e){var t=Object.assign({},e);t.roles=Array.isArray(t.roles)?t.roles.map((function(e){return e.roleId})):[],this.editForm=t,this.dialogVisible=!0},save:function(){var e=this;this.$refs.editForm.validate((function(t){if(t){e.loading=!0;var a=o(e.editForm);e.handleCloseDialog(),(a.id?s:l)(a).then((function(){e.fetchData(),e.$message({message:"添加成功",type:"success"})})).catch((function(){e.loading=!1}))}}))},handleCloseDialog:function(){this.dialogVisible=!1,this.editForm={id:"",account:"",name:"",password:"",roles:[],disabled:!1},this.$refs.editForm&&this.$refs.editForm.resetFields()},remove:function(e){var t=this;if(!e)return null;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.loading=!0,c({id:e.id}).then((function(){t.fetchData(),t.$message({message:"删除成功",type:"success"})})).catch((function(){t.loading=!1}))}))},fetchData:function(e){var t=this;e&&(this.queryParam.p=1),this.loading=!0,u(this.queryParam).then((function(e){t.loading=!1;var a=e.data;a&&(t.list=a.list,t.totalCount=a.totalCount,t.totalPage=a.totalPage)})).catch((function(){t.loading=!1}))}},created:function(){this.fetchData()}},(function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[t("ToolBar",[t("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.account.add,expression:"account.add"}],attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("添加")])],1),t("el-form",{ref:"searchForm",attrs:{inline:"",model:e.queryParam,size:"small"}},[t("el-form-item",{attrs:{label:"账号"}},[t("el-input",{model:{value:e.queryParam.account,callback:function(t){e.$set(e.queryParam,"account",t)},expression:"queryParam.account"}})],1),t("el-form-item",{attrs:{label:"用户名"}},[t("el-input",{model:{value:e.queryParam.name,callback:function(t){e.$set(e.queryParam,"name",t)},expression:"queryParam.name"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.fetchData(!0)}}},[e._v("查询")]),t("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:function(t){return e.resetSearch()}}},[e._v("重置")])],1)],1),t("p",[t("i",{staticClass:"el-icon-info"}),e._v(" 共 "),t("el-button",{attrs:{type:"text"}},[e._v(e._s(e.totalCount))]),e._v(" 条记录 ")],1),t("el-table",{attrs:{data:e.list}},[t("el-table-column",{attrs:{prop:"account",label:"账号",align:"center"}}),t("el-table-column",{attrs:{prop:"name",label:"用户名",align:"center"}}),t("el-table-column",{attrs:{prop:"roleName",label:"角色",align:"center"}}),t("el-table-column",{attrs:{label:"状态",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[a.row.disabled?[t("span",{staticStyle:{color:"#ff4949"}},[e._v("已禁用")])]:[t("span",{staticStyle:{color:"#13ce66"}},[e._v("已启用")])]]}}])}),t("el-table-column",{attrs:{label:"操作",width:"300",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.account.edit,expression:"account.edit"}],attrs:{size:"small"},on:{click:function(t){return e.edit(a.row)}}},[e._v("编辑")]),t("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.account.resetPassword,expression:"account.resetPassword"}],attrs:{size:"small",type:"warning",plain:""},on:{click:function(t){return e.resetPassword(a.row)}}},[e._v("重置密码")]),t("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.account.remove,expression:"account.remove"}],attrs:{size:"small",type:"danger",plain:""},on:{click:function(t){return e.remove(a.row)}}},[e._v("删除")])]}}])})],1),t("Pagination",{attrs:{"page-size":e.queryParam.pageSize,"current-page":e.queryParam.p,"total-count":e.totalCount,"total-page":e.totalPage},on:{"current-change":function(t){e.queryParam.p=t,e.fetchData()},"size-change":function(t){e.queryParam.pageSize=t,e.fetchData(!0)}}}),t("el-dialog",{staticClass:"userEditDialog",attrs:{"close-on-click-modal":!1,title:"账号信息",visible:e.dialogVisible,width:"600px"},on:{close:e.handleCloseDialog}},[t("el-form",{ref:"editForm",attrs:{size:"small",rules:e.rules,model:e.editForm,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"头像",prop:"avatar"}},[t("uploader",{staticClass:"upload_avatar",attrs:{accept:"t-image",value:e.editForm.avatar?[{url:e.editForm.avatar}]:[],imgCrop:"","show-file-list":!1,"on-success":function(t){e.$set(e.editForm,"avatar",t.url)}}},[e.editForm.avatar?t("img",{staticClass:"upload_avatar_img",attrs:{src:e.editForm.avatar,alt:""}}):t("span",[e._v("上传头像")])])],1),t("el-form-item",{attrs:{label:"账号",prop:"account"}},[t("el-input",{attrs:{maxlength:100},model:{value:e.editForm.account,callback:function(t){e.$set(e.editForm,"account","string"==typeof t?t.trim():t)},expression:"editForm.account"}})],1),t("el-form-item",{attrs:{label:"用户名",prop:"name"}},[t("el-input",{attrs:{maxlength:100},model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name","string"==typeof t?t.trim():t)},expression:"editForm.name"}})],1),e.editForm.id?e._e():[t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("input-password",{attrs:{autocomplete:"off"},model:{value:e.editForm.password,callback:function(t){e.$set(e.editForm,"password",t)},expression:"editForm.password"}})],1),t("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.editForm.checkPass,callback:function(t){e.$set(e.editForm,"checkPass",t)},expression:"editForm.checkPass"}})],1)],t("el-form-item",{attrs:{label:"所属组织",prop:"orgId"}},[t("OrgPicker",{attrs:{adapter:e.orgAdapter},on:{change:function(t,a){e.editForm.org=a,e.$refs.editForm.validateField("orgId")}},model:{value:e.editForm.orgId,callback:function(t){e.$set(e.editForm,"orgId",t)},expression:"editForm.orgId"}})],1),t("el-form-item",{attrs:{label:"角色"}},[t("DictSelect",{attrs:{request:e.requestRoles,labelKey:"name"},model:{value:e.editForm.roleId,callback:function(t){e.$set(e.editForm,"roleId",t)},expression:"editForm.roleId"}})],1),t("el-form-item",{attrs:{label:"状态"}},[t("el-switch",{attrs:{"active-text":"启用","inactive-text":"禁用","active-value":!1,"inactive-value":!0},model:{value:e.editForm.disabled,callback:function(t){e.$set(e.editForm,"disabled",t)},expression:"editForm.disabled"}})],1)],2),t("span",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")]),t("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")])],1)],1)],1)}),[],!1,null,"acef9f45",null,null).exports)}}}));
