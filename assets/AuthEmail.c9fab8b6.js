import{n as t,j as e,k as a}from"./index.af0f36c9.js";import"./ui.1d6f8af4.js";const i=t({data(){return{loading:!1,formData:{id:null,userInput:null,inputEmail:null},rules:{inputEmail:[{validator:(t,e,a)=>{if(e){if(this.userEmail&&this.userEmail!==e)return a(new Error("邮箱不正确"));a()}else a(new Error("请输入安全邮箱"))},trigger:[]}],userInput:[{required:!0,message:"请输入验证码",trigger:"blur"},{min:4,max:6,message:"请输入正确的验证码",trigger:"blur"}]},buttonDisabled:!1}},computed:{userEmail(){return this.$store.user.email||""},anonymousEmail(){if(this.userEmail){const t=this.userEmail.split("@")[0].split("");return`${t.map(((e,a)=>0===a||a===t.length-1?e:"*")).join("")}@${this.userEmail.split("@")[1]}`}return""}},methods:{sendValidCode(){this.$refs.form.validateField("inputEmail",(t=>{t||(this.loading=!0,e({email:this.formData.inputEmail}).then((t=>{this.loading=!1,200===t.status?(this.formData.id=t.data.id,this.$refs.countdownButton.start()):this.$message.warning("验证邮件发送失败，请稍后重试")})).catch((()=>{this.loading=!1})))}))},handleSubmit(){this.$refs.form.validateField("userInput",(t=>{t||(this.loading=!0,a(this.formData).then((t=>{this.loading=!1,200===t.status?this.$emit("success",t.data):(this.$refs.form.resetFields(),this.$message.warning("验证失败"))})).catch((()=>{this.loading=!1})))}))}}},(function(){var t=this,e=t._self._c;return e("el-form",{ref:"form",staticClass:"auth_email",attrs:{model:t.formData,rules:t.rules,"label-position":"left","v-loading":t.loading},nativeOn:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[t.anonymousEmail?e("el-form-item",[t._v("安全邮箱："+t._s(t.anonymousEmail))]):t._e(),e("el-form-item",{attrs:{prop:"inputEmail"}},[e("el-input",{attrs:{placeholder:"请输入安全邮箱","prefix-icon":"el-icon-message"},model:{value:t.formData.inputEmail,callback:function(e){t.$set(t.formData,"inputEmail",e)},expression:"formData.inputEmail"}})],1),e("el-form-item",{attrs:{prop:"userInput"}},[e("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:t.formData.userInput,callback:function(e){t.$set(t.formData,"userInput",e)},expression:"formData.userInput"}},[e("template",{slot:"append"},[e("el-button",{attrs:{disabled:t.buttonDisabled},on:{click:t.sendValidCode}},[e("CountDown",{ref:"countdownButton",attrs:{count:30},on:{start:function(e){t.buttonDisabled=!0},end:function(e){t.buttonDisabled=!1}}},[t._v(" 获取验证码 ")])],1)],1)],2)],1),e("el-form-item",[e("el-button",{staticStyle:{width:"100%"},attrs:{"native-type":"submit",type:"primary"}},[t._v(" 立即验证 ")])],1)],1)}),[],!1,null,"b3ba98bb",null,null).exports;export{i as default};
