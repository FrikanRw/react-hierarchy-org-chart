(this["webpackJsonpreact-org-chart-example"]=this["webpackJsonpreact-org-chart-example"]||[]).push([[0],{19:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return OrganisationalChart}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),d3=__webpack_require__(59),TreeChart=function(){function TreeChart(){var _this=this;this.locateRecursive=function(t,e){var r=_this.locateRecursive;t.id===e?_this.expandParents(t):t._children?t._children.forEach((function(n){n.parent=t,r(n,e)})):t.children&&t.children.forEach((function(n){n.parent=t,r(n,e)}))},this.collapse=function(t){t.children&&(t._children=t.children,t._children.forEach((function(t){return _this.collapse(t)})),t.children=null)},this.expandParents=function(t){for(;t.parent;)(t=t.parent).children||(t.children=t._children,t._children=null)};var attrs={id:"ID"+Math.floor(1e6*Math.random()),svgWidth:100,svgHeight:100,marginTop:0,marginBottom:0,marginRight:0,marginLeft:0,container:"body",defaultTextFill:"#2C3E50",nodeTextFill:"white",defaultFont:"Helvetica",backgroundColor:"#fafafa",data:null,depth:180,duration:600,strokeWidth:3,dropShadowId:null,initialZoom:1,minMaxZoomProportions:[.05,3],behaviors:null,root:{},onNodeClick:function(t){return t}};this.getChartState=function(){return attrs},Object.keys(attrs).forEach((function(key){_this[key]=function(_){var string="attrs['"+key+"'] = _";return arguments.length?(eval(string),this):eval("attrs['"+key+"'];")}})),this.initializeEnterExitUpdatePattern()}var _proto=TreeChart.prototype;return _proto.initializeEnterExitUpdatePattern=function(){d3.selection.prototype.patternify=function(t){var e=t.selector,r=t.tag,n=t.data||[e],a=this.selectAll("."+e).data(n,(function(t,e){return"object"===typeof t&&t.id?t.id:e}));return a.exit().remove(),(a=a.enter().append(r).merge(a)).attr("class",e),a}},_proto.getNodeChildrenIds=function(t,e){var r=this,n=t.data,a=t.children,o=t._children;return e.push(n.nodeId),a&&a.forEach((function(t){r.getNodeChildrenIds(t,e)})),o&&o.forEach((function(t){r.getNodeChildrenIds(t,e)})),e},_proto.locate=function(t){var e=this.getChartState(),r=this.locateRecursive;e.root.children||!e.root.id===t&&(e.root.children=e.root._children),e.root.children&&(e.root.children.forEach(this.collapse),e.root.children.forEach((function(e){r(e,t)}))),this.update(e.root,{locate:t})},_proto.setZoomFactor=function(t){var e=this.getChartState(),r=e.calc;e.initialZoom=t,e.centerG.attr("transform"," translate("+r.centerX+", "+r.nodeMaxHeight/2+") scale("+e.initialZoom+")")},_proto.render=function(){var t=this,e=this.getChartState(),r=d3.select(e.container);r.node().getBoundingClientRect();this.setDropShadowId(e);var n={id:null,chartTopMargin:null,chartLeftMargin:null,chartWidth:null,chartHeight:null};n.id="ID"+Math.floor(1e6*Math.random()),n.chartLeftMargin=e.marginLeft,n.chartTopMargin=e.marginTop,n.chartWidth=e.svgWidth-e.marginRight-n.chartLeftMargin,n.chartHeight=e.svgHeight-e.marginBottom-n.chartTopMargin,e.calc=n,n.nodeMaxWidth=d3.max(e.data,(function(t){return t.width})),n.nodeMaxHeight=d3.max(e.data,(function(t){return t.height})),e.depth=n.nodeMaxHeight+100,n.centerX=n.chartWidth/2;var a={treemap:null};e.layouts=a,a.treemap=d3.tree().size([n.chartWidth,n.chartHeight]).nodeSize([n.nodeMaxWidth+100,n.nodeMaxHeight+e.depth]);var o={zoom:null};o.zoom=d3.zoom().on("zoom",(function(e){return t.zoomed(e)})),e.behaviors=o,e.root=d3.stratify().id((function(t){return t.nodeId})).parentId((function(t){return t.parentNodeId}))(e.data),e.root.x0=0,e.root.y0=0,e.allNodes=e.layouts.treemap(e.root).descendants(),e.allNodes.forEach((function(t){Object.assign(t.data,{directSubordinates:t.children?t.children.length:0,totalSubordinates:t.descendants().length-1})})),e.root.children.forEach((function(e){return t.collapse(e)})),e.root.children.forEach((function(e){return t.expandSomeNodes(e)})),console.log("svg",e.svgWidth,e.svgHeight);var i=r.patternify({tag:"svg",selector:"svg-chart-container"}).attr("width",e.svgWidth).attr("height",e.svgHeight).attr("font-family",e.defaultFont).call(o.zoom).attr("cursor","move").style("background-color",e.backgroundColor);e.svg=i;var d=i.patternify({tag:"g",selector:"chart"}).attr("transform","translate("+n.chartLeftMargin+","+n.chartTopMargin+")");e.centerG=d.patternify({tag:"g",selector:"center-group"}).attr("transform","translate("+n.centerX+","+n.nodeMaxHeight/2+") scale("+e.initialZoom+")"),e.chart=d,e.defs=i.patternify({tag:"defs",selector:"image-defs"});var c=i.patternify({tag:"defs",selector:"filter-defs"}).patternify({tag:"filter",selector:"shadow-filter-element"}).attr("id",e.dropShadowId).attr("y","-50%").attr("x","-50%").attr("height","200%").attr("width","200%");c.patternify({tag:"feGaussianBlur",selector:"feGaussianBlur-element"}).attr("in","SourceAlpha").attr("stdDeviation",3.1).attr("result","blur"),c.patternify({tag:"feOffset",selector:"feOffset-element"}).attr("in","blur").attr("result","offsetBlur").attr("dx",4.28).attr("dy",4.48).attr("x",8).attr("y",8),c.patternify({tag:"feFlood",selector:"feFlood-element"}).attr("in","offsetBlur").attr("flood-color","black").attr("flood-opacity",.3).attr("result","offsetColor"),c.patternify({tag:"feComposite",selector:"feComposite-element"}).attr("in","offsetColor").attr("in2","offsetBlur").attr("operator","in").attr("result","offsetBlur");var l=c.patternify({tag:"feMerge",selector:"feMerge-element"});return l.patternify({tag:"feMergeNode",selector:"feMergeNode-blur"}).attr("in","offsetBlur"),l.patternify({tag:"feMergeNode",selector:"feMergeNode-graphic"}).attr("in","SourceGraphic"),this.update(e.root),d3.select(window).on("resize."+e.id,(function(){r.node().getBoundingClientRect()})),this},_proto.setDropShadowId=function(t){if(!t.dropShadowId){var e=t.id+"-drop-shadow";"undefined"!==typeof DOM&&(e=DOM.uid(t.id).id),Object.assign(t,{dropShadowId:e})}},_proto.addNode=function(t){return this.getChartState().data.push(t),this.updateNodesState(),this},_proto.removeNode=function(t){var e=this.getChartState(),r=e.allNodes.filter((function(e){return e.data.nodeId==t}))[0];if(r){var n=this.getNodeChildrenIds(r,[]);e.data=e.data.filter((function(t){return!n.includes(t.nodeId)})),this.updateNodesState.bind(this)()}},_proto.update=function(t,e){var r=this,n=t.x0,a=t.y0,o=t.x,i=t.y,d=this.getChartState(),c=d.layouts.treemap(d.root),l=c.descendants().map((function(t){if(t.width)return t;var e=100,n=100,a="steelblue",o=0,i=0,c=0,l=0,u="steelblue",h="steelblue",s=t.data.width,f=t.data.height,g="none";return t.data.nodeImage&&t.data.nodeImage.shadow&&(g="url(#"+d.dropShadowId+")"),t.data.nodeImage&&t.data.nodeImage.width&&(e=t.data.nodeImage.width),t.data.nodeImage&&t.data.nodeImage.height&&(n=t.data.nodeImage.height),t.data.nodeImage&&t.data.nodeImage.borderColor&&(a=r.rgbaObjToColor(t.data.nodeImage.borderColor)),t.data.nodeImage&&t.data.nodeImage.borderWidth&&(o=t.data.nodeImage.borderWidth),t.data.nodeImage&&t.data.nodeImage.centerTopDistance&&(c=t.data.nodeImage.centerTopDistance),t.data.nodeImage&&t.data.nodeImage.centerLeftDistance&&(l=t.data.nodeImage.centerLeftDistance),t.data.borderColor&&(u=r.rgbaObjToColor(t.data.borderColor)),t.data.backgroundColor&&(h=r.rgbaObjToColor(t.data.backgroundColor)),t.data.nodeImage&&"circle"===t.data.nodeImage.cornerShape.toLowerCase()&&(i=Math.max(e,n)),t.data.nodeImage&&"rounded"===t.data.nodeImage.cornerShape.toLowerCase()&&(i=Math.min(e,n)/6),Object.assign(t,{imageWidth:e,imageHeight:n,imageBorderColor:a,imageBorderWidth:o,borderColor:u,backgroundColor:h,imageRx:i,width:s,height:f,imageCenterTopDistance:c,imageCenterLeftDistance:l,dropShadowId:g})})),u=c.descendants().slice(1);l.forEach((function(t){return t.y=t.depth*d.depth}));var h=d.defs.selectAll(".pattern").data(l,(function(t){return t.id}));h.enter().append("pattern").merge(h).attr("class","pattern").attr("height",1).attr("width",1).attr("id",(function(t){return t.id})).patternify({tag:"image",selector:"pattern-image",data:function(t){return[t]}}).attr("x",0).attr("y",0).attr("height",(function(t){return t.imageWidth})).attr("width",(function(t){return t.imageHeight})).attr("xlink:href",(function(t){var e=t.data;return e.nodeImage&&e.nodeImage.url})).attr("viewbox",(function(t){return"0 0 "+2*t.imageWidth+" "+t.imageHeight})).attr("preserveAspectRatio","xMidYMin slice");h.exit().transition().duration(d.duration).remove();var s=d.centerG.selectAll("path.link").data(u,(function(t){return t.id})),f=s.enter().insert("path","g").attr("class","link").attr("d",(function(t){var e={x:n,y:a};return r.diagonal(e,e)})).merge(s);f.attr("fill","none").attr("stroke-width",(function(t){return t.data.connectorLineWidth||2})).attr("stroke",(function(t){var e=t.data;return e.connectorLineColor?r.rgbaObjToColor(e.connectorLineColor):"green"})).attr("stroke-dasharray",(function(t){var e=t.data;return e.dashArray?e.dashArray:""})),f.transition().duration(d.duration).attr("d",(function(t){return r.diagonal(t,t.parent)}));s.exit().transition().duration(d.duration).attr("d",(function(t){var e={x:o,y:i};return r.diagonal(e,e)})).remove();var g=d.centerG.selectAll("g.node").data(l,(function(t){return t.id})),p=g.enter().append("g").attr("class","node").attr("transform",(function(t){return"translate("+n+","+a+")"})).attr("cursor","pointer").on("click",(function(t){var e=t.data;[].concat(d3.event.srcElement.classList).includes("node-button-circle")||d.onNodeClick(e.nodeId)}));p.patternify({tag:"rect",selector:"node-rect",data:function(t){return[t]}}).style("fill",(function(t){return t._children?"lightsteelblue":"#fff"})),p.patternify({tag:"g",selector:"node-image-group",data:function(t){return[t]}}).patternify({tag:"rect",selector:"node-image-rect",data:function(t){return[t]}});var _=p.merge(g).style("font","12px sans-serif");_.patternify({tag:"foreignObject",selector:"node-foreign-object",data:function(t){return[t]}}).patternify({tag:"xhtml:div",selector:"node-foreign-object-div",data:function(t){return[t]}}),this.restyleForeignObjectElements();var m=p.patternify({tag:"g",selector:"node-button-g",data:function(t){return[t]}}).on("click",(function(t){return r.onButtonClick(t)}));m.patternify({tag:"circle",selector:"node-button-circle",data:function(t){return[t]}}),m.patternify({tag:"text",selector:"node-button-text",data:function(t){return[t]}}).attr("pointer-events","none"),_.transition().attr("opacity",0).duration(d.duration).attr("transform",(function(t){return"translate("+t.x+","+t.y+")"})).attr("opacity",1),_.selectAll(".node-image-group").attr("transform",(function(t){return"translate("+(-t.imageWidth/2-t.width/2)+","+(-t.imageHeight/2-t.height/2)+")"})),_.select(".node-image-rect").attr("fill",(function(t){return"url(#"+t.id+")"})).attr("width",(function(t){return t.imageWidth})).attr("height",(function(t){return t.imageHeight})).attr("stroke",(function(t){return t.imageBorderColor})).attr("stroke-width",(function(t){return t.imageBorderWidth})).attr("rx",(function(t){return t.imageRx})).attr("y",(function(t){return t.imageCenterTopDistance})).attr("x",(function(t){return t.imageCenterLeftDistance})).attr("filter",(function(t){return t.dropShadowId})),_.select(".node-rect").attr("width",(function(t){return t.data.width})).attr("height",(function(t){return t.data.height})).attr("x",(function(t){return-t.data.width/2})).attr("y",(function(t){return-t.data.height/2})).attr("rx",(function(t){return t.data.borderRadius||0})).attr("stroke-width",(function(t){var r=t.data;return e&&r.nodeId===e.locate?"10":r.borderWidth||d.strokeWidth})).attr("cursor","pointer").attr("stroke",(function(t){var r=t.borderColor,n=t.data;return e&&n.nodeId===e.locate?"#ff0000":r})).attr("id",(function(t){return t.data.nodeId})).style("fill",(function(t){return t.backgroundColor})),_.select(".node-button-g").attr("transform",(function(t){return"translate(0,"+t.data.height/2+")"})).attr("opacity",(function(t){var e=t.children,r=t._children;return e||r?1:0})),_.select(".node-button-circle").attr("r",16).attr("stroke-width",(function(t){return t.data.borderWidth||d.strokeWidth})).attr("fill",d.backgroundColor).attr("stroke",(function(t){return t.borderColor})),_.select(".node-button-text").attr("text-anchor","middle").attr("alignment-baseline","middle").attr("fill",d.defaultTextFill).attr("font-size",(function(t){return t.children?40:26})).text((function(t){return t.children?"-":"+"})).attr("y",0);var b=g.exit().attr("opacity",1).transition().duration(d.duration).attr("transform",(function(t){return"translate("+o+","+i+")"})).on("end",(function(){d3.select(this).remove()})).attr("opacity",0);b.selectAll(".node-rect").attr("width",10).attr("height",10).attr("x",0).attr("y",0),b.selectAll(".node-image-rect").attr("width",10).attr("height",10).attr("x",(function(t){return t.width/2})).attr("y",(function(t){return t.height/2})),l.forEach((function(t){t.x0=t.x,t.y0=t.y})),setTimeout((function(){if(e&&e.locate){var t,r;l.forEach((function(n){n.id===e.locate&&(t=n.x,r=n.y)}));var n=d3.select(".chart").node().getBBox();console.log(n.height);var a=-t+window.innerWidth/2,o=-r+window.innerHeight/2;console.log("x",a),console.log("Y",o),d.chart.attr("transform","translate("+a+","+o+") scale(1)")}}),1850)},_proto.redraw=function(){this.getChartState().svg.attr("transform","translate("+d3.event.translate+") scale("+d3.event.scale+")")},_proto.isEdge=function(){return window.navigator.userAgent.includes("Edge")},_proto.rgbaObjToColor=function(t){return"rgba("+t.red+","+t.green+","+t.blue+","+t.alpha+")"},_proto.diagonal=function(t,e){var r=t.x,n=t.y,a=e.x,o=e.y,i=a-r<0?-1:1,d=o-n<0?-1:1,c=Math.abs(a-r)/2<35?Math.abs(a-r)/2:35,l=Math.abs(o-n)/2<c?Math.abs(o-n)/2:c,u=Math.abs(o-n)/2-l;return"\n             M "+r+" "+n+"\n             L "+r+" "+(n+u*d)+"\n             C  "+r+" "+(n+u*d+l*d)+" "+r+" "+(n+u*d+l*d)+" "+(r+l*i)+" "+(n+u*d+l*d)+"\n             L "+(r+(Math.abs(a-r)-2*l)*i+l*i)+" "+(n+u*d+l*d)+"\n             C "+a+"  "+(n+u*d+l*d)+" "+a+"  "+(n+u*d+l*d)+" "+a+" "+(o-u*d)+"\n             L "+a+" "+o+"\n           "},_proto.restyleForeignObjectElements=function(){var t=this.getChartState();t.svg.selectAll(".node-foreign-object").attr("width",(function(t){return t.width})).attr("height",(function(t){return t.height})).attr("x",(function(t){return-t.width/2})).attr("y",(function(t){return-t.height/2})),t.svg.selectAll(".node-foreign-object-div").style("width",(function(t){return t.width+"px"})).style("height",(function(t){return t.height+"px"})).style("color","white").html((function(t){return t.data.template}))},_proto.onButtonClick=function(t){t.children?(t._children=t.children,t.children=null,this.setExpansionFlagToChildren(t,!1)):(t.children=t._children,t._children=null,t.children.forEach((function(t){return t.data.expanded=!0}))),this.update(t)},_proto.setExpansionFlagToChildren=function(t,e){var r=this,n=t.data,a=t.children,o=t._children;n.expanded=e,a&&a.forEach((function(t){r.setExpansionFlagToChildren(t,e)})),o&&o.forEach((function(t){r.setExpansionFlagToChildren(t,e)}))},_proto.setExpanded=function(t,e){var r=this,n=this.getChartState(),a=n.allNodes.filter((function(e){return e.data.nodeId==t}))[0];a&&(a.data.expanded=e),n.root.children.forEach((function(t){return r.expand(t)})),n.root.children.forEach((function(t){return r.collapse(t)})),n.root.children.forEach((function(t){return r.expandSomeNodes(t)})),this.update(n.root)},_proto.expandSomeNodes=function(t){var e=this;if(t.data.expanded)for(var r=t.parent;r;)r._children&&(r.children=r._children),r=r.parent;t._children&&t._children.forEach((function(t){return e.expandSomeNodes(t)})),t.children&&t.children.forEach((function(t){return e.expandSomeNodes(t)}))},_proto.updateNodesState=function(){var t=this,e=this.getChartState();e.root=d3.stratify().id((function(t){return t.nodeId})).parentId((function(t){return t.parentNodeId}))(e.data),e.root.x0=0,e.root.y0=0,e.allNodes=e.layouts.treemap(e.root).descendants(),e.allNodes.forEach((function(t){Object.assign(t.data,{directSubordinates:t.children?t.children.length:0,totalSubordinates:t.descendants().length-1})})),e.root.children.forEach(this.expand),e.root.children.forEach((function(e){return t.collapse(e)})),e.root.children.forEach((function(e){return t.expandSomeNodes(e)})),this.update(e.root)},_proto.expand=function(t){var e=this;t._children&&(t.children=t._children,t.children.forEach((function(t){return e.expand(t)})),t._children=null)},_proto.findmySelf=function(t){t.isLoggedUser?this.expandParents(t):t._children?t._children.forEach((function(e){e.parent=t,this.findmySelf(e)})):t.children&&t.children.forEach((function(e){e.parent=t,this.findmySelf(e)}))},_proto.zoomed=function(){var t=this.getChartState(),e=t.chart,r=d3.event.transform;t.lastTransform=r,e.attr("transform",r),this.isEdge()&&this.restyleForeignObjectElements()},TreeChart}(),OrganisationalChart=function(t){var e=t.data,r=t.onNodeClick,n=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),a=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),o=a[0],i=a[1],d=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)("O-498"),c=d[0],l=d[1];return Object(react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((function(){var t;e&&n.current&&(o||(t=new TreeChart),console.log(e),t.container(n.current).data(e).svgWidth(1e3).svgHeight(500).initialZoom(.4).onNodeClick((function(t){console.log(t+" node clicked"),r(t)})).render(),i(t))}),[e,n.current]),o&&console.log(o),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{ref:n}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{value:c,onChange:function(t){l(""+t.target.value)}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{onClick:function(){return o.locate(c)}},"Locate"))}},51:function(t,e,r){t.exports=r(60)},52:function(t,e,r){},58:function(t,e,r){},60:function(t,e,r){"use strict";r.r(e);r(52);var n=r(0),a=r.n(n),o=r(18),i=r.n(o),d=r(21),c=r(20),l=r(19),u=(r(58),function(){var t=Object(n.useState)(null),e=Object(d.a)(t,2),r=e[0],o=e[1];return Object(n.useEffect)((function(){c.a("https://gist.githubusercontent.com/bumbeishvili/dc0d47bc95ef359fdc75b63cd65edaf2/raw/c33a3a1ef4ba927e3e92b81600c8c6ada345c64b/orgChart.json").then((function(t){o(t)}))}),[]),a.a.createElement(l.a,{data:r,onNodeClick:function(t){return console.log(t)}})});i.a.render(a.a.createElement(u,null),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.c0dc708f.chunk.js.map