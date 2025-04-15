import{m as P,g as q,s as G,h as E,j as z,c as f,a as i,k as H,l as M,w as o,r as V,F as D,o as c,b as m,t as p,u as l,n as I,d as t,R as J,e as K,f as w,i as x,v as h}from"./index-CWcqAZEq.js";const O={class:"card-header"},Q={class:"card-body"},W={class:"card-footer"},X=["onClick"],Y=["onClick"],Z={class:"card p-3 mx-auto"},ee={key:0,class:"mb-3"},te={class:"collection mb-4"},ae={class:"collection mb-4"},se={class:"collection mb-4"},oe={__name:"GradesView",setup(le){const{myRoute:T,myGrade:y,myGrades:g,validateForm:F}=P(),b=q(!1),{id:N,sub_name:r,pcl_g:d,tcl_g:u}=G(y),{grades:n}=G(g),R=E(()=>n.value.length===0),B=g.deleteGrade,U=y.fillGradeData,k=y.resetGrade,$=g.uploadMyGrades;z(async()=>{await $()});const j=s=>{U(s,n.value[s].sub_name,n.value[s].pcl_g,n.value[s].tcl_g),b.value=!0},C=()=>{if(window.confirm("Are you sure you want to discard changes ?"))k(),b.value=!1;else return},A=()=>{if(F(r.value,d.value,u.value))window.confirm("Are you sure you want to apply changes ?")?(n.value[N.value]={sub_name:r.value,pcl_g:Math.abs(Math.round(d.value)),tcl_g:Math.abs(Math.round(u.value))},k(),b.value=!1):C();else return};return(s,e)=>{const S=V("my-header"),v=V("my-container");return c(),f(D,null,[i(S,null,{default:o(()=>[m(p(l(T).meta.description),1)]),_:1}),i(v,{class:"container-fluid py-5 my_grades"},{default:o(()=>[(c(!0),f(D,null,I(l(n),(a,_)=>(c(),f("div",{class:"card mx-auto",key:_},[t("div",O,[t("h2",null,p(a.sub_name),1)]),t("div",Q,[t("h4",null,[e[6]||(e[6]=m(" Practical grade ")),t("span",null,p(a.pcl_g),1)]),t("h4",null,[e[7]||(e[7]=m(" Theoretical grade ")),t("span",null,p(a.tcl_g),1)]),t("h4",null,[e[8]||(e[8]=m(" Final grade ")),t("span",null,p(a.pcl_g+a.tcl_g),1)])]),t("div",W,[t("button",{class:"btn btn-danger",onClick:L=>l(B)(_)}," Delete ",8,X),t("button",{class:"btn btn-success ms-3",onClick:L=>j(_)}," Update ",8,Y)])]))),128))]),_:1}),i(v,{class:"container"},{default:o(()=>[t("div",Z,[R.value?(c(),f("h2",ee," No any grades here yet ... ")):M("",!0),i(l(J),{to:{name:"myConfig"},class:"btn btn-dark px-3 py-2"},{default:o(()=>e[9]||(e[9]=[m(" Add new grade ")])),_:1})])]),_:1}),b.value?(c(),H(v,{key:0,class:"container-fluid upToDate"},{default:o(()=>[i(v,{class:"container mx-auto"},{default:o(()=>[t("form",{class:"form rounded shadow p-4 bg-white",method:"get",onSubmit:e[5]||(e[5]=K(()=>{},["prevent"]))},[e[13]||(e[13]=t("h1",{class:"text-center mb-5"},"Grade info",-1)),t("div",te,[e[10]||(e[10]=t("label",{class:"form-label"},"Subject name",-1)),w(t("input",{class:"form-control",type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>x(r)?r.value=a:null),required:""},null,512),[[h,l(r)]])]),t("div",ae,[e[11]||(e[11]=t("label",{class:"form-label"},"Practical grade",-1)),w(t("input",{class:"form-control",type:"number","onUpdate:modelValue":e[1]||(e[1]=a=>x(d)?d.value=a:null),min:"0",max:"30",step:"0.01",placeholder:"between 0 and 30"},null,512),[[h,l(d),void 0,{number:!0}]])]),t("div",se,[e[12]||(e[12]=t("label",{class:"form-label"},"Theoretical grade",-1)),w(t("input",{class:"form-control",type:"number","onUpdate:modelValue":e[2]||(e[2]=a=>x(u)?u.value=a:null),min:"0",max:"100",step:"0.01",placeholder:"between 0 and 100"},null,512),[[h,l(u),void 0,{number:!0}]])]),t("button",{class:"btn btn-outline-dark",onClick:e[3]||(e[3]=a=>C())}," discard changes "),t("button",{class:"btn btn-success ms-3",onClick:e[4]||(e[4]=a=>A()),type:"submit"}," apply changes ")],32)]),_:1})]),_:1})):M("",!0)],64)}}};export{oe as default};
