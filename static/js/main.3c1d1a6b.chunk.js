(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(t,e,a){"use strict";a.r(e);var n=a(1),i=a.n(n),r=a(7),o=a.n(r),s=(a(54),a(31),a(9)),l=a(10),c=a(12),u=a(11),d=a(13),h=(a(57),a(5)),p=a(16),m=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(c.a)(this,Object(u.a)(e).call(this,t))).languages=[["C++","devicon-cplusplus-plain"],["Java","devicon-java-plain"],["Python","devicon-python-plain"],["C#","devicon-csharp-plain"],["JS","devicon-javascript-plain"],["HTML5","devicon-html5-plain"],["Android","devicon-android-plain"],["Linux","devicon-linux-plain"],["iOS","devicon-apple-original"],["Windows","devicon-windows8-original"],["Go","devicon-go-plain"],["PHP","devicon-php-plain"]],a.state={baseUrl:"https://raw.githubusercontent.com/AidanFray/gh-pages-portfolio/master/src/project_images/"+a.props.url,langauges_logos:[]},a.languages_proc(a.props.languages),a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"languages_proc",value:function(t){var e=[];if(void 0!==t)for(var a=t.split(","),n=0;n<a.length;n++)for(var r=a[n],o=0;o<this.languages.length;o++)this.languages[o][0].trim()===r&&e.push(i.a.createElement("i",{style:{fontSize:"25px",padding:"2px"},class:this.languages[o][1]}));this.state.langauges_logos=e}},{key:"render",value:function(){return i.a.createElement("div",{className:"project-item"},i.a.createElement(h.Card,{shadow:2,style:{minWidth:"250px",height:"400px",margin:"auto",visibility:this.props.visible}},i.a.createElement(h.CardTitle,{style:{alignItems:"flex-start",color:this.props.text_color,height:"200px",width:"330px",background:"url("+this.state.baseUrl+") center / cover"}},i.a.createElement("div",{className:"card-title"},this.props.title)),i.a.createElement(h.CardText,{style:{height:"100px",overflow:"auto"}},i.a.createElement("div",{className:"card-text"},this.props.card_text)),i.a.createElement(h.CardActions,{border:!0},this.state.langauges_logos),i.a.createElement(h.CardActions,{border:!0,style:{alignItems:"flex-end"}},i.a.createElement(h.Button,{colored:!0,href:this.props.github_url},"GitHub"),this.props.extra_links),i.a.createElement(h.CardMenu,{style:{color:this.props.text_color}})))}}]),e}(n.Component),g=a(41),f=a.n(g),b=a(42),v=a.n(b),_=(a(122),["github","halloween","dracula","teal","YlGnBu","blue"]),y=new Date,w=function(t,e){var a=new Date(t);return a.setDate(a.getDate()+e),a}(y,-364);var E=function(t){function e(t){var a;Object(s.a)(this,e),a=Object(c.a)(this,Object(u.a)(e).call(this,t));var n=_[0];return y.getMonth()+1===10&&31===y.getDate()&&(n=_[1]),a.state={submissions:[],display:"",theme:n},a.requestContributions(),a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"requestContributions",value:function(){var t=this;fetch("https://github-contributions-api.now.sh/v1/AidanFray").then(function(t){return t.text()}).then(function(e){return t.createSubmissionList(JSON.parse(e))}).catch(function(e){console.log("[Github Contributions API] "+e),t.setState({display:"none"})})}},{key:"createSubmissionList",value:function(t){for(var e=t.contributions,a=[],n=0,i=function(t){var e=t.getFullYear(),a=t.getMonth()+1;a<10&&(a="0"+a);var n=t.getDate();return n<10&&(n="0"+n),"".concat(e,"-").concat(a,"-").concat(n)}(y),r=0;r<e.length;r++)if(e[r].date===i){n=r;break}for(var o=0;o<365;o++)a.push({date:e[n+o].date,count:e[n+o].count});this.setState({submissions:a,display:""})}},{key:"changeTheme",value:function(){for(var t=this.state.theme,e=t;t===e;){var a=Math.floor(Math.random()*_.length+1)-1;e=_[a]}this.setState({theme:e})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"".concat(this.state.theme,"-background"),style:{width:"60%",margin:"auto",display:this.state.display,padding:"25px"}},i.a.createElement(f.a,{startDate:w,endDate:y,values:this.state.submissions,classForValue:function(e){var a=0;return null!=e&&(a=e.count>4?4:e.count),"".concat(t.state.theme,"-color-scale-").concat(a)},tooltipDataAttrs:function(t){var e=0;return null!==t.count&&(e=t.count),{"data-tip":"".concat(t.date," - Contributions: ").concat(e)}}}),i.a.createElement("p",null),i.a.createElement("button",{onClick:function(){return t.changeTheme()}},"Random Theme"),i.a.createElement(v.a,null))}}]),e}(n.Component),x=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(c.a)(this,Object(u.a)(e).call(this,t))).state={width:0,height:0,project_cards:[],project_padding_cards:[]},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(p.a)(Object(p.a)(a))),a.createProjectCards(),a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"createProjectCards",value:function(){var t=[];t.push(i.a.createElement(m,{title:"Dissertation Project",text_color:"#fff",url:"diss_proj.png",card_text:"Compromised and Degraded Network Simulation - The aim of the dissertation project was to create a custom simulated network that can demonstrate and visualise network degradation and common DoS attacks. It uses the NetFilter section of the Linux Kernel to filter and manipulate network packets.",languages:"Python,Linux",github_url:"https://github.com/AidanFray/Dissertation-Project"})),t.push(i.a.createElement(m,{title:"Parcel",text_color:"#a9653d",url:"parcel_image.png",card_text:" Python script used to simulate imperfect network conditions on a Linux OS. The script utilises the NFQUEUE to apply degradation dynamically to packets.",languages:"Python,Linux",github_url:"https://github.com/AidanFray/Parcel"})),t.push(i.a.createElement(m,{title:"CTF Writeups",text_color:"#fff",url:"ctf_time.png",card_text:"Personal write-ups of CTF competitions that I've competed in. The repo also includes files required to complete the challenges.",languages:"Python,Go,JS,PHP",github_url:"https://github.com/AidanFray/CTF_Writeups",extra_links:i.a.createElement(h.Button,{colored:!0,href:"https://ctftime.org/team/68942"},"Team")})),t.push(i.a.createElement(m,{title:"Scale Generator",text_color:"#000",url:"https://raw.githubusercontent.com/AidanFray/gh-pages-portfolio/master/src/project_images/scale_logo.png",card_text:"An application that is designed to randomly provide scales for practising musicians. This app is produced using Xamarin to proivde a cross platform application for iOS and Android.",languages:"C#,Android,iOS",github_url:"https://github.com/AidanFray/ScaleGenerator-iOS_Andriod"})),t.push(i.a.createElement(m,{title:"3D Graphics",text_color:"#fff",url:"3d_sim.png",card_text:"A university graphics and simulation project where the aim was to simulate  various numbers of spheres falling through a column.",languages:"C#",github_url:"https://github.com/AidanFray/Simulation-and-3D-Graphics",extra_links:i.a.createElement(h.Button,{colored:!0,href:"https://www.youtube.com/watch?v=yxUFEYLiOiI"},"YouTube")})),t.push(i.a.createElement(m,{title:"Interactive Map of Hull",text_color:"#c024fe",url:"interactive_map.png",card_text:"A Javascript interactive map of Hull to celebrate the City of Culture.",languages:"JS,HTML5",github_url:"https://github.com/AidanFray/Interactive_Map",extra_links:i.a.createElement(h.Button,{colored:!0,href:"https://aidanfray.github.io/Interactive_Map/"},"Website")})),t.push(i.a.createElement(m,{title:"University Timetable Scraper",text_color:"#fff",url:"hull_logo.png",card_text:"Program that web scrapes the https://timetable.hull.ac.uk/ website to sync your timetable with outlook",languages:"C#",github_url:"https://github.com/AidanFray/Hull_Timetable_To_Outlook"})),t.push(i.a.createElement(m,{title:"Sliding Tiles",text_color:"#fff",url:"mobile_logo.png",card_text:"Sliding puzzle coursework submitted for a university mobile devices module. The goal was to create a small  sliding puzzle game with dynamically downloaded puzzles.",languages:"Java,Android",github_url:"https://github.com/AidanFray/Mobile_Devices_And_Applications"})),this.state.project_cards=t}},{key:"addDynamicCardPadding",value:function(){this.state.project_padding_cards=[];var t=i.a.createElement(m,{visible:"hidden"}),e=this.state.width;if(e>1500&&(e=1500),0!==e){var a=Math.floor(e/378),n=this.state.project_cards.length,r=0,o=0;for(0!==a&&(o=n%a);0!==o;)r+=1,o=(n+=1)%a;for(var s=0;s<r;s++)this.state.project_padding_cards.push(t)}}},{key:"render",value:function(){return this.addDynamicCardPadding(),i.a.createElement("div",null,i.a.createElement(h.Grid,{className:"landing-grid"},i.a.createElement(h.Cell,{col:12},i.a.createElement("h1",{className:"title"},"Aidan Fray")),i.a.createElement(h.Cell,{col:12},i.a.createElement(E,null)),i.a.createElement(h.Cell,{col:12},i.a.createElement("div",{id:"limit",className:"projects-grid"},this.state.project_cards,this.state.project_padding_cards))))}}]),e}(n.Component),j=function(t){function e(){return Object(s.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"demo-big-content"},i.a.createElement(h.Layout,null,i.a.createElement(h.Content,null,i.a.createElement(x,null))))}}]),e}(n.Component),k=(a(124),a(126),a(48));o.a.render(i.a.createElement(k.a,null,i.a.createElement(j,null)),document.getElementById("root"))},31:function(t,e,a){},49:function(t,e,a){t.exports=a(128)},54:function(t,e,a){},57:function(t,e,a){}},[[49,2,1]]]);
//# sourceMappingURL=main.3c1d1a6b.chunk.js.map