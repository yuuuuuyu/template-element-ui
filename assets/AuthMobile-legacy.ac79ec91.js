System.register(["./index-legacy.64d83ae8.js","./ui-legacy.54996b8d.js"],(function(t,e){"use strict";var n;return{setters:[function(t){n=t.n},function(){}],execute:function(){var e=function(){var t=this,e=t._self._c;return e("el-form",{ref:"form",staticClass:"auth_mobile",attrs:{model:t.formData,rules:t.rules,"label-position":"left"},nativeOn:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[t.anonymousMobile?e("el-form-item",[t._v("绑定手机："+t._s(t.anonymousMobile))]):t._e(),e("el-form-item",{attrs:{prop:"inputMobile"}},[e("el-input",{attrs:{placeholder:"请输入绑定手机","prefix-icon":"el-icon-message"},model:{value:t.formData.inputMobile,callback:function(e){t.$set(t.formData,"inputMobile",e)},expression:"formData.inputMobile"}})],1),e("el-form-item",{attrs:{prop:"userInput"}},[e("InputSMS",{ref:"InputSMS",attrs:{type:t.command,mobile:t.formData.inputMobile},on:{click:t.sendValidCode}})],1),e("el-form-item",[e("el-button",{staticStyle:{width:"100%"},attrs:{"native-type":"submit",type:"primary"}},[t._v(" 立即验证 ")])],1)],1)};t("default",n({props:{command:{type:String,required:!1}},data:function(){var t=this;return{formData:{id:null,inputMobile:null},rules:{inputMobile:[{validator:function(e,n,i){if(n){if(t.userMobile&&t.userMobile!==n)return i(new Error("手机号不正确"));i()}else i(new Error("请输入绑定手机"))},trigger:[]}],userInput:[{validator:function(){return new Promise((function(e,n){t.$refs.InputSMS.valid().then((function(n){t.resData=n,e()})).catch((function(t){n(t)}))}))},trigger:[]}]},resData:null}},computed:{userMobile:function(){return String(this.$store.user.mobile||"")},anonymousMobile:function(){if(this.userMobile){var t=this.userMobile.split(""),e=t.map((function(e,n){return n<3||t.length-n<3?e:"*"})).join("");return"".concat(e)}return""}},methods:{sendValidCode:function(){var t=this;this.$refs.form.validateField("inputMobile",(function(e){e||t.$refs.InputSMS.send()}))},handleSubmit:function(){var t=this;this.$refs.form.validate((function(e){e&&t.$emit("success",t.resData)}))}}},e,[],!1,null,"0677bad9",null,null).exports)}}}));
