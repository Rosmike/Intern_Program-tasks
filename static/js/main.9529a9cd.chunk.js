(this.webpackJsonpsmart_home=this.webpackJsonpsmart_home||[]).push([[0],{112:function(e,t,n){},113:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n(0),c=n.n(i),r=n(11),l=n.n(r),o=n(33),s=n(19),d=n(86),j=n(12),m=n(177),u=n(172),b=n(178),h=n(158),O=n(159),x=n(85),f=n.n(x),g=n(149),p=n(152),v=n(154),y=n(70),C=n(151),k=n(155),A=n(156),w=Object(g.a)({root:{margin:15},title:{fontSize:14,fontWeight:700},additionalInfo:{fontSize:11,fontWeight:500},pos:{marginBottom:12}}),S=function(e){var t=e.id,n=e.name,i=e.numberOfUsers,c=e.devices,r=e.toggleRoom,l=e.isActive,o=w(),s=Object(j.f)();return Object(a.jsx)(C.a,{in:!0,children:Object(a.jsx)(p.a,{className:o.root,children:Object(a.jsx)(v.a,{onClick:function(e){return s.push("/room/".concat(t))},children:Object(a.jsxs)(k.a,{children:[Object(a.jsx)(y.a,{className:o.title,gutterBottom:!0,children:n}),Object(a.jsxs)(y.a,{className:o.additionalInfo,gutterBottom:!0,children:[i," family members have access"]}),Object(a.jsxs)(y.a,{className:o.additionalInfo,gutterBottom:!0,children:[c.length," ",1===c.length?"device":"devices"]}),Object(a.jsx)(u.a,{display:"flex",justifyContent:"flex-end",children:Object(a.jsx)(A.a,{checked:l,onClick:function(e){return r(e,t,l)},name:"editMode",inputProps:{"aria-label":"secondary checkbox"}})})]})})})})},I=function(e){var t=e.rooms,n=e.addRoom,i=e.toggleRoom;return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(m.a,{style:{margin:"10px"},alt:"Remy Sharp",src:"/static/images/avatar/1.jpg"}),Object(a.jsx)("div",{style:{color:"white",margin:"10px",maxWidth:"140px",fontWeight:"bold"},children:"Welcome home Micha\u0142"}),Object(a.jsx)(u.a,{display:"flex",justifyContent:"flex-end",mt:2,mr:2,children:Object(a.jsx)(b.a,{title:"Add room","aria-label":"add",placement:"left",children:Object(a.jsx)(h.a,{style:{backgroundColor:"white",color:"orange"},"aria-label":"add",onClick:function(){return n()},children:Object(a.jsx)(f.a,{})})})}),Object(a.jsx)(O.a,{container:!0,children:t.map((function(e){var t=e.isActive,n=e.id,c=e.name,r=e.numberOfUsers,l=e.devices;return Object(a.jsx)(O.a,{item:!0,xs:6,md:3,lg:2,children:Object(a.jsx)(S,{id:n,isActive:t,name:c,numberOfUsers:r,devices:l,toggleRoom:i})},n)}))})]})},T=n(53),V=n(166),B=n(167),N=n(63),W=n.n(N),D=n(171),R=n(160),P=n(179),E=Object(g.a)({root:{margin:15},title:{fontSize:14,fontWeight:700},additionalInfo:{fontSize:11,fontWeight:500},pos:{marginBottom:12}}),U=function(e){var t=e.isActive,n=e.device,c=e.toggleDevice,r=e.name,l=e.parameter,o=E(),d=Object(i.useState)(!1),j=Object(s.a)(d,2),m=j[0],b=j[1];return Object(a.jsx)(C.a,{in:!0,children:Object(a.jsx)(p.a,{className:o.root,children:Object(a.jsxs)(v.a,{onClick:function(e){e.stopPropagation(),b(!m)},children:[Object(a.jsx)(k.a,{children:Object(a.jsxs)(O.a,{container:!0,children:[Object(a.jsxs)(O.a,{item:!0,xs:6,children:[Object(a.jsx)(y.a,{className:o.title,gutterBottom:!0,children:r}),Object(a.jsxs)(y.a,{className:o.additionalInfo,gutterBottom:!0,children:[l.value," ",l.name]})]}),Object(a.jsx)(O.a,{item:!0,xs:6,children:Object(a.jsx)(u.a,{display:"flex",justifyContent:"flex-end",alignItems:"center",height:"100%",children:Object(a.jsx)(A.a,{checked:t,onClick:function(e){return c(e,n,t)},name:"editMode",inputProps:{"aria-label":"secondary checkbox"}})})})]})}),Object(a.jsx)(R.a,{in:m,children:Object(a.jsx)(u.a,{mx:3,children:Object(a.jsx)(P.a,{defaultValue:50,getAriaValueText:function(e){return"".concat(e,"\xb0C")},valueLabelDisplay:"auto",step:10,marks:!0,min:0,max:100})})})]})})})},z=n(176),J=n(161),M=n(162),L=n(180),F=n(175),q=n(165),Y=n(182),_=n(173),G=n(183),K=n(168),H=Object(g.a)({parameterSelect:{width:"100%"}}),Q=function(e){var t=e.editItem,n=e.open,c=e.handleClose,r=e.addDevice,l=e.editDevice,o=e.setConfirmDialogOpen,d=H(),j=Object(i.useState)(!1),m=Object(s.a)(j,2),b=m[0],h=m[1],O=Object(i.useState)(""),x=Object(s.a)(O,2),f=x[0],g=x[1],p=Object(i.useState)(""),v=Object(s.a)(p,2),y=v[0],k=v[1],A=Object(i.useState)(!1),w=Object(s.a)(A,2),S=w[0],I=w[1];Object(i.useEffect)((function(){t&&(k(t.name),h(t.bulkToggleAllowed),g(t.parameter.name))}),[t]);var T=function(){k(""),h(!1),g("")},N=""!==y&&""!==f;return Object(a.jsxs)(z.a,{fullScreen:!0,open:n,onClose:c,"aria-labelledby":"form-dialog-title",children:[Object(a.jsx)(J.a,{id:"form-dialog-title",children:"Add new device"}),Object(a.jsxs)(M.a,{children:[Object(a.jsx)(L.a,{required:!0,autoFocus:!0,margin:"dense",id:"name",label:"Device name",type:"text",fullWidth:!0,value:y,onChange:function(e){return k(e.target.value)}}),Object(a.jsx)(u.a,{width:"100%",mt:3,children:Object(a.jsx)(V.a,{control:Object(a.jsx)(F.a,{checked:b,onChange:function(){return h(!b)},name:"bulkToggleAllowed"}),label:"Do not turn off this device in bulk"})}),Object(a.jsx)(u.a,{width:"100%",mt:3,children:Object(a.jsxs)(q.a,{className:d.parameterSelect,children:[Object(a.jsx)(Y.a,{id:"demo-simple-select-label",children:"Parameter"}),Object(a.jsxs)(_.a,{required:!0,labelId:"demo-simple-select-label",id:"demo-simple-select",open:S,onOpen:function(){return I(!0)},onClose:function(){return I(!1)},value:f,onChange:function(e){return g(e.target.value)},children:[Object(a.jsx)(G.a,{value:"Temperature",children:"Temperature"}),Object(a.jsx)(G.a,{value:"Volume",children:"Volume"}),Object(a.jsx)(G.a,{value:"Brightness",children:"Brightness"})]})]})}),Object(a.jsx)(C.a,{in:!0,children:Object(a.jsx)(u.a,{mx:2,children:Object(a.jsx)(u.a,{mt:1,children:Object(a.jsx)(B.a,{fullWidth:!0,variant:"contained",color:"secondary",startIcon:Object(a.jsx)(W.a,{}),onClick:function(){return o(!0)},children:"Delete this device"})})})})]}),Object(a.jsxs)(K.a,{children:[Object(a.jsx)(B.a,{onClick:function(){c(),T()},color:"primary",children:"Cancel"}),Object(a.jsx)(B.a,{disabled:!N,onClick:function(){t?l({name:y,bulkToggleAllowed:b,parameter:f}):r({name:y,bulkToggleAllowed:b,parameter:f}),c(),T()},color:"primary",children:t?"Save":"Add"})]})]})},X=n(170),Z=n(169),$=c.a.forwardRef((function(e,t){return Object(a.jsx)(Z.a,Object(T.a)({direction:"up",ref:t},e))})),ee=function(e){var t=e.open,n=void 0!==t&&t,i=e.handleClose,c=e.title,r=e.text,l=e.onConfirm,o=e.cancelText,s=void 0===o?"Cancel":o,d=e.confirmText,j=void 0===d?"Confirm":d;return Object(a.jsxs)(z.a,{open:n,TransitionComponent:$,keepMounted:!0,onClose:i,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(a.jsx)(J.a,{id:"alert-dialog-slide-title",children:c}),Object(a.jsx)(M.a,{children:Object(a.jsx)(X.a,{id:"alert-dialog-slide-description",children:r})}),Object(a.jsxs)(K.a,{children:[Object(a.jsx)(B.a,{onClick:i,color:"secondary",children:s}),Object(a.jsx)(B.a,{onClick:l,color:"primary",children:j})]})]})},te=Object(g.a)({root:{margin:15},title:{fontSize:18,fontWeight:700},additionalInfo:{fontSize:11,fontWeight:500},pos:{marginBottom:12}}),ne=function(e){var t=e.rooms,n=e.setRooms,c=te(),r=Object(j.f)(),l=Object(j.g)(),d=parseInt(l.roomId),m=t.find((function(e){return e.id===d})),x=Object(i.useState)(!1),f=Object(s.a)(x,2),g=f[0],p=f[1],v=Object(i.useState)(!1),k=Object(s.a)(v,2),w=k[0],S=k[1],I=Object(i.useState)(!1),N=Object(s.a)(I,2),R=N[0],P=N[1],E=Object(i.useState)(null),z=Object(s.a)(E,2),J=z[0],M=z[1],L=Object(i.useState)(!1),F=Object(s.a)(L,2),q=F[0],Y=F[1];Object(i.useEffect)((function(){}),[]);var _=function(e){switch(e){case"Brightness":return{name:"Brightness",type:"percent",value:"0",minValue:"0",maxValue:"100"};case"Temperature":return{name:"Temperature",type:"celsius",value:"0",minValue:"-12",maxValue:"-2"};case"Volume":return{name:"Volume",type:"percent",value:"0",minValue:"0",maxValue:"100"}}},G=function(e,a,i){e.stopPropagation();var c=Object(o.a)(t),r=Object(T.a)(Object(T.a)({},a),{},{isActive:!i}),l=c.findIndex((function(e){return e.id===d})),s=c[l].devices.findIndex((function(e){return e.id===a.id}));c[l].devices[s]=r,n(c)};return Object(a.jsxs)("div",{children:[Object(a.jsx)(u.a,{display:"flex",justifyContent:"flex-start",mt:2,ml:2,mb:4,children:Object(a.jsx)(b.a,{title:"Go back","aria-label":"add",placement:"right",children:Object(a.jsx)(h.a,{style:{backgroundColor:"white",color:"orange"},"aria-label":"add",onClick:function(){return r.go(-1)},children:Object(a.jsx)(D.a,{})})})}),Object(a.jsx)(u.a,{display:"flex",justifyContent:"flex-end",mt:2,mr:2,ml:4,children:Object(a.jsx)(V.a,{control:Object(a.jsx)(A.a,{checked:g,style:{color:"white"},onChange:function(){p(!g)},name:"editMode",inputProps:{"aria-label":"secondary checkbox"}}),label:"Edit room",labelPlacement:"start"})}),Object(a.jsxs)(O.a,{container:!0,children:[Object(a.jsx)(O.a,{item:!0,xs:12,children:Object(a.jsx)(u.a,{ml:2,children:Object(a.jsx)(y.a,{className:c.title,gutterBottom:!0,style:{color:"white"},children:m.name})})}),Object(a.jsxs)(O.a,{item:!0,xs:12,children:[Object(a.jsx)(u.a,{ml:2,children:Object(a.jsxs)(y.a,{className:c.additionalInfo,gutterBottom:!0,style:{color:"white"},children:[m.devices.length," family members have access"]})}),Object(a.jsx)(C.a,{in:g,children:Object(a.jsxs)(u.a,{mx:2,children:[Object(a.jsx)(u.a,{mt:1,children:Object(a.jsx)(B.a,{fullWidth:!0,variant:"contained",style:{backgroundColor:"red",color:"white",fontWeight:"bold"},startIcon:Object(a.jsx)(W.a,{}),onClick:function(){return S(!0)},children:"Delete this room"})}),Object(a.jsx)(u.a,{mt:1,children:Object(a.jsx)(B.a,{fullWidth:!0,variant:"outlined",style:{backgroundColor:"white",fontWeight:"bold"},onClick:function(){return Y(!0)},children:"Add new device"})})]})})]}),m.devices.map((function(e){return Object(a.jsx)(O.a,{item:!0,xs:12,sm:6,md:3,lg:2,children:Object(a.jsx)(u.a,{onClick:function(){g&&(M(e),Y(!0))},children:Object(a.jsx)(U,{device:e,isActive:e.isActive,toggleDevice:G,name:e.name,parameter:e.parameter})})},e.id)}))]}),Object(a.jsx)(Q,{editItem:J,open:q,addDevice:function(e){var a=e.name,i=e.bulkToggleAllowed,c=e.parameter,r=Object(o.a)(t),l={id:m.devices.length>0?m.devices[m.devices.length-1].id+1:1,name:a,bulkToggleAllowed:i,isActive:!1,parameter:_(c)},s=r.findIndex((function(e){return e.id===d}));r[s].devices.push(l),n(r)},editDevice:function(e){var a=e.name,i=e.bulkToggleAllowed,c=e.parameter,r=Object(o.a)(t),l={name:a,bulkToggleAllowed:i,isActive:!1,parameter:c===J.parameter.name?J.parameter:_(c)},s=r.findIndex((function(e){return e.id===d})),j=r[s].devices.findIndex((function(e){return e.id===J.id}));r[s].devices[j]=l,n(r)},handleClose:function(){M(null),Y(!1)}}),Object(a.jsx)(ee,{open:w,title:"Are you sure?",text:"You will delete this room permanently",handleClose:function(){return S(!1)},onConfirm:function(){var e=Object(o.a)(t).filter((function(e){return e.id!==d}));r.push("/"),S(!1),n(e)}}),Object(a.jsx)(ee,{open:R,title:"Are you sure?",text:"You will delete this device permanently",handleClose:function(){return P(!1)},onConfirm:function(){var e=Object(o.a)(t).filter((function(e){return e.id!==d}));r.push("/"),S(!1),n(e)}})]})},ae=[{id:1,name:"Living Room",numberOfUsers:3,isActive:!0,devices:[{id:1,name:"Lamp",bulkToggleAllowed:!0,isActive:!0,parameter:{name:"Brightness",type:"percent",value:"50",minValue:"0",maxValue:"100"}},{id:2,name:"TV",bulkToggleAllowed:!0,isActive:!1,parameter:{name:"Volume",type:"percent",value:"20",minValue:"0",maxValue:"100"}}]},{id:2,name:"Kitchen",numberOfUsers:3,isActive:!0,devices:[{id:1,name:"Fridge",bulkToggleAllowed:!1,isActive:!0,parameter:{name:"Temperature",type:"celsius",value:"-8",minValue:"-12",maxValue:"-2"}}]},{id:3,name:"Bed Room",numberOfUsers:3,isActive:!0,devices:[{id:1,name:"Lamp",bulkToggleAllowed:!0,isActive:!0,parameter:{name:"Brightness",type:"percent",value:"50",minValue:"0",maxValue:"100"}}]}],ie="rooms",ce="roomsCopy",re=function(){var e=JSON.parse(localStorage.getItem(ie)),t=Array.isArray(e)?e:ae,n=Object(i.useState)(t),c=Object(s.a)(n,2),r=c[0],l=c[1],m=Object(i.useState)(!1),u=Object(s.a)(m,2),b=u[0],h=u[1];Object(i.useEffect)((function(){!b&&localStorage.setItem(ie,JSON.stringify(r)),h(!1)}),[r]);return Object(a.jsx)(d.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{exact:!0,path:"/",children:Object(a.jsx)(I,{rooms:r,addRoom:function(){var e={id:r[r.length-1].id+1,name:"New room",numberOfUsers:0,isActive:!1,devices:[]};l([].concat(Object(o.a)(r),[e]))},toggleRoom:function(e,t,n){e.stopPropagation();var a=Object(o.a)(r),i=!n;if(a.find((function(e){return e.id===t})).isActive=i,!0===i){var c=JSON.parse(localStorage.getItem(ce));h(!0),l(c)}else localStorage.setItem(ce,JSON.stringify(r)),a.forEach((function(e,t){e.devices.forEach((function(e,n){e.bulkToggleAllowed&&(a[t].devices[n].isActive=!1)}))}));l(a)}})}),Object(a.jsx)(j.a,{path:"/room/:roomId",children:Object(a.jsx)(ne,{rooms:r,setRooms:l})})]})})})};n(112);l.a.render(Object(a.jsx)(re,{}),document.getElementById("root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.9529a9cd.chunk.js.map