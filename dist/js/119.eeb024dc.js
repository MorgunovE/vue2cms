"use strict";(self["webpackChunkvue2cms"]=self["webpackChunkvue2cms"]||[]).push([[119],{7119:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var i=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"page-title"},[t("h3",[e._v(e._s(e._f("localize")("Planing")))]),t("h4",[e._v(e._s(e._f("currency")(e.info.bill,"USD")))])]),e.loading?t("Loader"):e.categories.length?t("section",e._l(e.categories,(function(s){return t("div",{key:s.id},[t("p",[t("strong",[e._v(e._s(s.title)+":")]),e._v(" "+e._s(e._f("currency")(s.spend,"USD"))+" "+e._s(e._f("localize")("from"))+" "+e._s(e._f("currency")(s.limit,"USD"))+" ")]),t("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:s.tooltip,expression:"category.tooltip"}],staticClass:"progress"},[t("div",{staticClass:"determinate",class:s.progressColor,style:{width:s.progressPercent+"%"}})])])})),0):t("p",{staticClass:"center"},[e._v(e._s(e._f("localize")("Haven't categories"))+". "),t("router-link",{attrs:{to:"/categories"}},[e._v(e._s(e._f("localize")("Add new category")))])],1)],1)},r=[],o=s(3822),a=s(379),n={name:"planning",metaInfo(){return{title:this.$title("Planing")}},data(){return{loading:!0,categories:[]}},computed:{...(0,o.Se)(["info"])},async mounted(){const e=await this.$store.dispatch("fetchRecords"),t=await this.$store.dispatch("fetchCategories");this.categories=t.map((t=>{const s=e.filter((e=>e.categoryId===t.id)).filter((e=>"outcome"===e.type)).reduce(((e,t)=>e+ +t.amount),0),i=100*s/t.limit,r=i>100?100:i,o=i<60?"green":i<100?"yellow":"red",n=t.limit-s,l=`${n<0?"More than":"Left"} ${(0,a.Z)(Math.abs(n))}`;return{...t,progressPercent:r,progressColor:o,spend:s,tooltip:l}})),this.loading=!1}},l=n,c=s(1001),u=(0,c.Z)(l,i,r,!1,null,null,null),d=u.exports}}]);
//# sourceMappingURL=119.eeb024dc.js.map