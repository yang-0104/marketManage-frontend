import{d as S,a as n,c as V,b as e,w as t,o as k,u as i,E as I,h as d,i as b,p as y,f as A,g as o,_ as C}from"./index-UUeNv-ow.js";const a=_=>(y("data-v-d747784a"),_=_(),A(),_),E={class:"common-layout"},F=a(()=>o("h2",null,"果蔬超市管理系统",-1)),M=a(()=>o("span",null,"分类管理",-1)),R=a(()=>o("span",null,"果蔬管理",-1)),L=a(()=>o("span",null,"订单明细",-1)),N=a(()=>o("span",null,"店铺设置",-1)),T=a(()=>o("span",null,"退出登陆",-1)),z=S({__name:"AdminView",setup(_){function p(){I.confirm("确认退出吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{localStorage.removeItem("token"),d.push("/login")})}return(X,c)=>{const r=n("el-avatar"),m=n("Menu"),l=n("el-icon"),s=n("el-menu-item"),f=n("apple"),h=n("List"),g=n("Setting"),x=n("el-menu"),v=n("el-aside"),w=n("RouterView"),B=n("el-main"),u=n("el-container");return k(),V("div",E,[e(u,null,{default:t(()=>[e(v,{class:"sidebar"},{default:t(()=>[e(r,{style:{"margin-top":"5vh"},size:"large",src:"public\\Xian.png"}),F,e(x,{router:"","active-text-color":"#7FFFAA","background-color":"#545c64","text-color":"#fff","default-active":i(d).currentRoute.value.path},{default:t(()=>[e(s,{index:"/category"},{default:t(()=>[e(l,null,{default:t(()=>[e(m)]),_:1}),M]),_:1}),e(s,{index:"/dish"},{default:t(()=>[e(l,null,{default:t(()=>[e(f)]),_:1}),R]),_:1}),e(s,{index:"/order"},{default:t(()=>[e(l,null,{default:t(()=>[e(h)]),_:1}),L]),_:1}),e(s,{index:"/setting"},{default:t(()=>[e(l,null,{default:t(()=>[e(g)]),_:1}),N]),_:1}),e(s,{index:"#",onClick:c[0]||(c[0]=$=>p())},{default:t(()=>[e(l,null,{default:t(()=>[e(i(b))]),_:1}),T]),_:1})]),_:1},8,["default-active"])]),_:1}),e(u,null,{default:t(()=>[e(B,{class:"main"},{default:t(()=>[e(w)]),_:1})]),_:1})]),_:1})])}}}),q=C(z,[["__scopeId","data-v-d747784a"]]);export{q as default};
