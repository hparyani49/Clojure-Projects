// Compiled by ClojureScript 1.9.854 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("@pupeno/xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__42417,handler){
var map__42418 = p__42417;
var map__42418__$1 = ((((!((map__42418 == null)))?((((map__42418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42418):map__42418);
var uri = cljs.core.get.call(null,map__42418__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__42418__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__42418__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__42418__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__42418__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__42418__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__42418__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__42418,map__42418__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__42416_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__42416_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__42418,map__42418__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___42430 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___42430)){
var response_type_42431 = temp__4657__auto___42430;
this$__$1.responseType = cljs.core.name.call(null,response_type_42431);
} else {
}

var seq__42420_42432 = cljs.core.seq.call(null,headers);
var chunk__42421_42433 = null;
var count__42422_42434 = (0);
var i__42423_42435 = (0);
while(true){
if((i__42423_42435 < count__42422_42434)){
var vec__42424_42436 = cljs.core._nth.call(null,chunk__42421_42433,i__42423_42435);
var k_42437 = cljs.core.nth.call(null,vec__42424_42436,(0),null);
var v_42438 = cljs.core.nth.call(null,vec__42424_42436,(1),null);
this$__$1.setRequestHeader(k_42437,v_42438);

var G__42439 = seq__42420_42432;
var G__42440 = chunk__42421_42433;
var G__42441 = count__42422_42434;
var G__42442 = (i__42423_42435 + (1));
seq__42420_42432 = G__42439;
chunk__42421_42433 = G__42440;
count__42422_42434 = G__42441;
i__42423_42435 = G__42442;
continue;
} else {
var temp__4657__auto___42443 = cljs.core.seq.call(null,seq__42420_42432);
if(temp__4657__auto___42443){
var seq__42420_42444__$1 = temp__4657__auto___42443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42420_42444__$1)){
var c__40391__auto___42445 = cljs.core.chunk_first.call(null,seq__42420_42444__$1);
var G__42446 = cljs.core.chunk_rest.call(null,seq__42420_42444__$1);
var G__42447 = c__40391__auto___42445;
var G__42448 = cljs.core.count.call(null,c__40391__auto___42445);
var G__42449 = (0);
seq__42420_42432 = G__42446;
chunk__42421_42433 = G__42447;
count__42422_42434 = G__42448;
i__42423_42435 = G__42449;
continue;
} else {
var vec__42427_42450 = cljs.core.first.call(null,seq__42420_42444__$1);
var k_42451 = cljs.core.nth.call(null,vec__42427_42450,(0),null);
var v_42452 = cljs.core.nth.call(null,vec__42427_42450,(1),null);
this$__$1.setRequestHeader(k_42451,v_42452);

var G__42453 = cljs.core.next.call(null,seq__42420_42444__$1);
var G__42454 = null;
var G__42455 = (0);
var G__42456 = (0);
seq__42420_42432 = G__42453;
chunk__42421_42433 = G__42454;
count__42422_42434 = G__42455;
i__42423_42435 = G__42456;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__39557__auto__ = body;
if(cljs.core.truth_(or__39557__auto__)){
return or__39557__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1502261029022
