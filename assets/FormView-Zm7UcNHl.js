import{m as V,s as _,c as F,a as i,w as p,r as c,F as S,o as T,b as k,t as B,u as n,d as t,e as C,f as r,i as d,v as m}from"./index-BQH_xVgu.js";const M={class:"collection mb-4"},R={class:"collection mb-4"},U={class:"collection mb-4"},E={__name:"FormView",setup(D){const{myRoute:b,myGrades:v,myGrade:u,validateForm:f}=V(),{sub_name:l,pcl_g:s,tcl_g:o}=_(u),w=u.resetGrade,y=v.createNewGrade,g=()=>{if(y(l.value,s.value,o.value))w();else return},x=()=>{if(f(l.value,s.value,o.value))g();else return};return(j,e)=>{const G=c("my-header"),N=c("my-container");return T(),F(S,null,[i(G,null,{default:p(()=>[k(B(n(b).meta.description),1)]),_:1}),i(N,{class:"container py-5"},{default:p(()=>[t("form",{class:"form rounded shadow p-4",method:"get",onSubmit:e[4]||(e[4]=C(()=>{},["prevent"]))},[e[8]||(e[8]=t("h1",{class:"text-center mb-5"},"Grade info",-1)),t("div",M,[e[5]||(e[5]=t("label",{class:"form-label"},"Subject name",-1)),r(t("input",{class:"form-control",type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>d(l)?l.value=a:null),required:""},null,512),[[m,n(l)]])]),t("div",R,[e[6]||(e[6]=t("label",{class:"form-label"},"Practical grade",-1)),r(t("input",{class:"form-control",type:"number","onUpdate:modelValue":e[1]||(e[1]=a=>d(s)?s.value=a:null),min:"0",max:"30",step:"0.01",placeholder:"between 0 and 30"},null,512),[[m,n(s),void 0,{number:!0}]])]),t("div",U,[e[7]||(e[7]=t("label",{class:"form-label"},"Theoretical grade",-1)),r(t("input",{class:"form-control",type:"number","onUpdate:modelValue":e[2]||(e[2]=a=>d(o)?o.value=a:null),min:"0",max:"100",step:"0.01",placeholder:"between 0 and 100"},null,512),[[m,n(o),void 0,{number:!0}]])]),t("button",{class:"btn btn-success w-100",type:"submit",onClick:e[3]||(e[3]=a=>x())}," Save grade ")],32)]),_:1})],64)}}};export{E as default};
