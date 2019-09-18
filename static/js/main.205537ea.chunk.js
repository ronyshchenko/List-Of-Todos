(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(8),c=a.n(l),s=(a(16),a(17),a(2)),r=a(3),o=a(5),d=a(4),m=a(6),u=a(9),p=a(1),h=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("footer",{className:"footer",style:{display:"block"}},i.a.createElement("span",{className:"todo-count"},this.props.left," items left"),i.a.createElement("ul",{className:"filters"},i.a.createElement("li",null,i.a.createElement("a",{href:"#/",className:"all"===this.props.display?"selected":"",onClick:function(){return e.props.displayChanged("all")}},"All")),i.a.createElement("li",null,i.a.createElement("a",{href:"#/active",className:"active"===this.props.display?"selected":"",onClick:function(){return e.props.displayChanged("active")}},"Active")),i.a.createElement("li",null,i.a.createElement("a",{href:"#/completed",className:"completed"===this.props.display?"selected":"",onClick:function(){return e.props.displayChanged("completed")}},"Completed"))),i.a.createElement("button",{type:"button",className:"clear-completed",style:{display:"block"}}))}}]),t}(i.a.Component),b=(a(18),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).completedChanged=a.completedChanged.bind(Object(p.a)(a)),a.removeClicked=a.removeClicked.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"completedChanged",value:function(e){this.props.statusChanged(this.props.item.id,e.target.checked)}},{key:"removeClicked",value:function(e){this.props.itemRemoved(this.props.item.id),e.preventDefault()}},{key:"render",value:function(){return i.a.createElement("li",{className:""},i.a.createElement("div",{className:"view"},i.a.createElement("input",{type:"checkbox",className:"toggle",id:"todo-1",checked:this.props.item.completed,onChange:this.completedChanged}),i.a.createElement("label",{htmlFor:"todo-1",onChange:this.completedChanged},i.a.createElement("span",{className:this.props.item.completed?"completed":"active"},this.props.item.title)),i.a.createElement("button",{type:"button",className:"destroy",onClick:this.removeClicked})))}}]),t}(i.a.Component)),f=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:this.props.checked,onChange:function(t){return e.props.changed(t.target.checked)}})}}]),t}(i.a.Component),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={input:"",nextId:1,items:[]},a.newItemChanged=a.newItemChanged.bind(Object(p.a)(a)),a.newItemKeyDown=a.newItemKeyDown.bind(Object(p.a)(a)),a.statusChanged=a.statusChanged.bind(Object(p.a)(a)),a.itemRemoved=a.itemRemoved.bind(Object(p.a)(a)),a.markAllChanged=a.markAllChanged.bind(Object(p.a)(a)),a.displayChanged=a.displayChanged.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"newItemChanged",value:function(e){this.setState({input:e.target.value})}},{key:"newItemKeyDown",value:function(e){"Enter"===e.key&&""!==this.state.input.trim()&&this.setState(function(e){var t={title:e.input,id:e.nextId,completed:!1};return{items:[].concat(Object(u.a)(e.items),[t]),nextId:e.nextId+1,input:""}})}},{key:"statusChanged",value:function(e,t){this.setState(function(a){var n=[],i=!0,l=!1,c=void 0;try{for(var s,r=a.items[Symbol.iterator]();!(i=(s=r.next()).done);i=!0){var o=s.value;o.id===e?n.push({title:o.title,id:o.id,completed:t}):n.push(o)}}catch(d){l=!0,c=d}finally{try{i||null==r.return||r.return()}finally{if(l)throw c}}return{items:n}})}},{key:"itemRemoved",value:function(e){this.setState(function(t){return{items:t.items.filter(function(t){return t.id!==e})}})}},{key:"displayChanged",value:function(e){this.setState({display:e})}},{key:"markAllChanged",value:function(e){this.setState(function(t){return{items:t.items.map(function(t){return{title:t.title,id:t.id,completed:e}})}})}},{key:"render",value:function(){var e=this;return i.a.createElement("section",{className:"todoapp"},i.a.createElement("header",{className:"header"},i.a.createElement("h1",null,"Todos"),i.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",type:"text",value:this.state.input,onChange:this.newItemChanged,onKeyDown:this.newItemKeyDown})),i.a.createElement("section",{className:"main",style:{display:"block"}},i.a.createElement(f,{checked:this.state.items.every(function(e){return e.completed}),changed:this.markAllChanged}),i.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),i.a.createElement("ul",{className:"todo-list"},this.state.items.map(function(t){return i.a.createElement(b,{key:t.id,item:t,statusChanged:e.statusChanged,itemRemoved:e.itemRemoved})}))),i.a.createElement(h,{left:this.state.items.filter(function(e){return!e.completed}).length,display:this.state.display,displayChanged:this.displayChanged}))}}]),t}(i.a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(y,null)}}]),t}(i.a.Component);c.a.render(i.a.createElement(g,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.205537ea.chunk.js.map