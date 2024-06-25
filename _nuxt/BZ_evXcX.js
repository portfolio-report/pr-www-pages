import{as as u,W as f,Y as g,t as i,l as p,Z as t,G as s,F as h,x as o,H as v,I as y,J as b,aC as T}from"./Dnn-I-_c.js";var c=u(),w=function(n){var r=n.dt;return`
.p-terminal {
    height: `.concat(r("terminal.height"),`;
    overflow: auto;
    background: `).concat(r("terminal.background"),`;
    color: `).concat(r("terminal.color"),`;
    border: 1px solid `).concat(r("terminal.border.color"),`;
    padding: `).concat(r("terminal.padding"),`;
    border-radius: `).concat(r("terminal.border.radius"),`;
}

.p-terminal-prompt {
    display: flex;
    align-items: center;
}

.p-terminal-prompt-value {
    flex: 1 1 auto;
    border: 0 none;
    background: transparent;
    color: inherit;
    padding: 0;
    outline: 0 none;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
}

.p-terminal-prompt-label {
    margin-right: `).concat(r("terminal.prompt.gap"),`;
}

.p-terminal-input::-ms-clear {
    display: none;
}

.p-terminal-command-response {
    margin: `).concat(r("terminal.command.response.margin"),`;
}
`)},k={root:"p-terminal p-component",welcomeMessage:"p-terminal-welcome-message",commandList:"p-terminal-command-list",command:"p-terminal-command",commandValue:"p-terminal-command-value",commandResponse:"p-terminal-command-response",prompt:"p-terminal-prompt",promptLabel:"p-terminal-prompt-label",promptValue:"p-terminal-prompt-value"},L=f.extend({name:"terminal",theme:w,classes:k}),x={name:"BaseTerminal",extends:g,props:{welcomeMessage:{type:String,default:null},prompt:{type:String,default:null}},style:L,provide:function(){return{$pcTerminal:this,$parentInstance:this}}},C={name:"Terminal",extends:x,inheritAttrs:!1,data:function(){return{commandText:null,commands:[]}},mounted:function(){c.on("response",this.responseListener),this.$refs.input.focus()},updated:function(){this.$el.scrollTop=this.$el.scrollHeight},beforeUnmount:function(){c.off("response",this.responseListener)},methods:{onClick:function(){this.$refs.input.focus()},onKeydown:function(n){n.key==="Enter"&&this.commandText&&(this.commands.push({text:this.commandText}),c.emit("command",this.commandText),this.commandText="")},responseListener:function(n){this.commands[this.commands.length-1].response=n}}};function M(e,n,r,S,l,a){return i(),p("div",t({class:e.cx("root"),onClick:n[2]||(n[2]=function(){return a.onClick&&a.onClick.apply(a,arguments)})},e.ptmi("root")),[e.welcomeMessage?(i(),p("div",t({key:0,class:e.cx("welcomeMessage")},e.ptm("welcomeMessage")),s(e.welcomeMessage),17)):h("",!0),o("div",t({class:e.cx("commandList")},e.ptm("content")),[(i(!0),p(v,null,y(l.commands,function(m,d){return i(),p("div",t({key:m.text+d.toString(),class:e.cx("command"),ref_for:!0},e.ptm("commands")),[o("span",t({class:e.cx("promptLabel"),ref_for:!0},e.ptm("prompt")),s(e.prompt),17),o("span",t({class:e.cx("commandValue"),ref_for:!0},e.ptm("command")),s(m.text),17),o("div",t({class:e.cx("commandResponse"),"aria-live":"polite",ref_for:!0},e.ptm("response")),s(m.response),17)],16)}),128))],16),o("div",t({class:e.cx("prompt")},e.ptm("container")),[o("span",t({class:e.cx("promptLabel")},e.ptm("prompt")),s(e.prompt),17),b(o("input",t({ref:"input","onUpdate:modelValue":n[0]||(n[0]=function(m){return l.commandText=m}),class:e.cx("promptValue"),type:"text",autocomplete:"off",onKeydown:n[1]||(n[1]=function(){return a.onKeydown&&a.onKeydown.apply(a,arguments)})},e.ptm("commandText")),null,16),[[T,l.commandText]])],16)],16)}C.render=M;export{C as default};
