System.register(["./org-legacy.cd2e52b5.js","./index-legacy.dc0fa9f1.js","./ui-legacy.54996b8d.js"],(function(e,t){"use strict";var l,n;return{setters:[function(e){l=e.l},function(e){n=e.n},function(){}],execute:function(){var t={props:{value:{type:Array,required:!1,default:function(){return[]}},picker:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1}},data:function(){return{loading:!1,tableData:[],selection:[]}},watch:{value:{handler:function(){this.tableData=this.value},deep:!0},selection:{handler:function(){this.picker&&this.$emit("pick",this.selection)},deep:!0}},methods:{handleSelectionChange:function(e){var t=this;e.length>1&&!this.multiple?e.forEach((function(l,n){t.$refs.table.toggleRowSelection(l,n===e.length-1)})):this.selection=e},load:function(e,t,l){this.fetchData(e?{pid:e.id}:null).then((function(e){l(e.data)}))},fetchData:function(e){var t=this;return this.loading=!0,l(e).then((function(e){return t.loading=!1,e})).catch((function(){t.loading=!1}))}},created:function(){var e=this;this.value.length?this.tableData=this.value:this.fetchData().then((function(t){e.tableData=t.data}))}};e("default",n(t,(function(){var e=this,t=e._self._c;return t("el-table",{ref:"table",attrs:{height:"100%","row-key":"id",lazy:"",data:e.tableData,load:e.load},on:{"selection-change":e.handleSelectionChange}},[e.picker?t("el-table-column",{attrs:{type:"selection",width:"45"}}):e._e(),t("el-table-column",{attrs:{prop:"name",label:"名称"}}),t("el-table-column",{attrs:{prop:"fullName",label:"全称"}}),t("el-table-column",{attrs:{label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.$filter.date(t.row.createTime)))]}}])}),e.picker?e._e():t("el-table-column",{attrs:{label:"操作",width:"260"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._t("action",null,{row:t.row})]}}],null,!0)})],1)}),[],!1,null,"070dc35e",null,null).exports)}}}));
