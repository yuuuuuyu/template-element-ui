import{n as t}from"./index.af0f36c9.js";import"./ui.1d6f8af4.js";const a=t({data(){return{formData:{},rules:{captcha:[{validator:()=>new Promise(((t,a)=>{this.$refs.InputSMS.valid().then((a=>{this.resData=a,t()})).catch((t=>{a(t)}))})),trigger:[]}]},resData:null}},methods:{handleSubmit(){this.$refs.form.validate((t=>{t&&this.$emit("success",this.resData)}))}}},(function(){var t=this,a=t._self._c;return a("el-form",{ref:"form",staticClass:"auth_image",attrs:{model:t.formData,rules:t.rules,"label-position":"left"},nativeOn:{submit:function(a){return a.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("el-form-item",{attrs:{prop:"captcha"}},[a("InputCaptchaImage",{ref:"validCode"})],1),a("el-form-item",[a("el-button",{staticStyle:{width:"100%"},attrs:{"native-type":"submit",type:"primary"}},[t._v(" 立即验证 ")])],1)],1)}),[],!1,null,"94382f74",null,null).exports;export{a as default};
