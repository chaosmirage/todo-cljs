goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35320 = arguments.length;
var i__4737__auto___35321 = (0);
while(true){
if((i__4737__auto___35321 < len__4736__auto___35320)){
args__4742__auto__.push((arguments[i__4737__auto___35321]));

var G__35322 = (i__4737__auto___35321 + (1));
i__4737__auto___35321 = G__35322;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35095){
var G__35096 = cljs.core.first(seq35095);
var seq35095__$1 = cljs.core.next(seq35095);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35096,seq35095__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35109 = cljs.core.seq(sources);
var chunk__35110 = null;
var count__35111 = (0);
var i__35112 = (0);
while(true){
if((i__35112 < count__35111)){
var map__35126 = chunk__35110.cljs$core$IIndexed$_nth$arity$2(null,i__35112);
var map__35126__$1 = (((((!((map__35126 == null))))?(((((map__35126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35126):map__35126);
var src = map__35126__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35126__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35126__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35126__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35126__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35128){var e_35328 = e35128;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35328);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35328.message)].join('')));
}

var G__35329 = seq__35109;
var G__35330 = chunk__35110;
var G__35331 = count__35111;
var G__35332 = (i__35112 + (1));
seq__35109 = G__35329;
chunk__35110 = G__35330;
count__35111 = G__35331;
i__35112 = G__35332;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35109);
if(temp__5735__auto__){
var seq__35109__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35109__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35109__$1);
var G__35333 = cljs.core.chunk_rest(seq__35109__$1);
var G__35334 = c__4556__auto__;
var G__35335 = cljs.core.count(c__4556__auto__);
var G__35336 = (0);
seq__35109 = G__35333;
chunk__35110 = G__35334;
count__35111 = G__35335;
i__35112 = G__35336;
continue;
} else {
var map__35131 = cljs.core.first(seq__35109__$1);
var map__35131__$1 = (((((!((map__35131 == null))))?(((((map__35131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35131):map__35131);
var src = map__35131__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35131__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35131__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35131__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35131__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35135){var e_35338 = e35135;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35338);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35338.message)].join('')));
}

var G__35339 = cljs.core.next(seq__35109__$1);
var G__35340 = null;
var G__35341 = (0);
var G__35342 = (0);
seq__35109 = G__35339;
chunk__35110 = G__35340;
count__35111 = G__35341;
i__35112 = G__35342;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35145 = cljs.core.seq(js_requires);
var chunk__35146 = null;
var count__35147 = (0);
var i__35148 = (0);
while(true){
if((i__35148 < count__35147)){
var js_ns = chunk__35146.cljs$core$IIndexed$_nth$arity$2(null,i__35148);
var require_str_35343 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35343);


var G__35344 = seq__35145;
var G__35345 = chunk__35146;
var G__35346 = count__35147;
var G__35347 = (i__35148 + (1));
seq__35145 = G__35344;
chunk__35146 = G__35345;
count__35147 = G__35346;
i__35148 = G__35347;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35145);
if(temp__5735__auto__){
var seq__35145__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35145__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35145__$1);
var G__35348 = cljs.core.chunk_rest(seq__35145__$1);
var G__35349 = c__4556__auto__;
var G__35350 = cljs.core.count(c__4556__auto__);
var G__35351 = (0);
seq__35145 = G__35348;
chunk__35146 = G__35349;
count__35147 = G__35350;
i__35148 = G__35351;
continue;
} else {
var js_ns = cljs.core.first(seq__35145__$1);
var require_str_35352 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35352);


var G__35353 = cljs.core.next(seq__35145__$1);
var G__35354 = null;
var G__35355 = (0);
var G__35356 = (0);
seq__35145 = G__35353;
chunk__35146 = G__35354;
count__35147 = G__35355;
i__35148 = G__35356;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__35159 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35159) : callback.call(null,G__35159));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35167){
var map__35168 = p__35167;
var map__35168__$1 = (((((!((map__35168 == null))))?(((((map__35168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35168):map__35168);
var msg = map__35168__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35168__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35168__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35171(s__35172){
return (new cljs.core.LazySeq(null,(function (){
var s__35172__$1 = s__35172;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35172__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35177 = cljs.core.first(xs__6292__auto__);
var map__35177__$1 = (((((!((map__35177 == null))))?(((((map__35177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35177):map__35177);
var src = map__35177__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35177__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35177__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__35172__$1,map__35177,map__35177__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35168,map__35168__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35171_$_iter__35173(s__35174){
return (new cljs.core.LazySeq(null,((function (s__35172__$1,map__35177,map__35177__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35168,map__35168__$1,msg,info,reload_info){
return (function (){
var s__35174__$1 = s__35174;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35174__$1);
if(temp__5735__auto____$1){
var s__35174__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35174__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35174__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35176 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35175 = (0);
while(true){
if((i__35175 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__35175);
cljs.core.chunk_append(b__35176,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35359 = (i__35175 + (1));
i__35175 = G__35359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35176),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35171_$_iter__35173(cljs.core.chunk_rest(s__35174__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35176),null);
}
} else {
var warning = cljs.core.first(s__35174__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35171_$_iter__35173(cljs.core.rest(s__35174__$2)));
}
} else {
return null;
}
break;
}
});})(s__35172__$1,map__35177,map__35177__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35168,map__35168__$1,msg,info,reload_info))
,null,null));
});})(s__35172__$1,map__35177,map__35177__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35168,map__35168__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35171(cljs.core.rest(s__35172__$1)));
} else {
var G__35360 = cljs.core.rest(s__35172__$1);
s__35172__$1 = G__35360;
continue;
}
} else {
var G__35361 = cljs.core.rest(s__35172__$1);
s__35172__$1 = G__35361;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__35192_35362 = cljs.core.seq(warnings);
var chunk__35193_35363 = null;
var count__35194_35364 = (0);
var i__35195_35365 = (0);
while(true){
if((i__35195_35365 < count__35194_35364)){
var map__35202_35366 = chunk__35193_35363.cljs$core$IIndexed$_nth$arity$2(null,i__35195_35365);
var map__35202_35367__$1 = (((((!((map__35202_35366 == null))))?(((((map__35202_35366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35202_35366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35202_35366):map__35202_35366);
var w_35368 = map__35202_35367__$1;
var msg_35369__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35202_35367__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35202_35367__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35202_35367__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35202_35367__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35372)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35370),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35371),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35369__$1)].join(''));


var G__35373 = seq__35192_35362;
var G__35374 = chunk__35193_35363;
var G__35375 = count__35194_35364;
var G__35376 = (i__35195_35365 + (1));
seq__35192_35362 = G__35373;
chunk__35193_35363 = G__35374;
count__35194_35364 = G__35375;
i__35195_35365 = G__35376;
continue;
} else {
var temp__5735__auto___35377 = cljs.core.seq(seq__35192_35362);
if(temp__5735__auto___35377){
var seq__35192_35378__$1 = temp__5735__auto___35377;
if(cljs.core.chunked_seq_QMARK_(seq__35192_35378__$1)){
var c__4556__auto___35379 = cljs.core.chunk_first(seq__35192_35378__$1);
var G__35380 = cljs.core.chunk_rest(seq__35192_35378__$1);
var G__35381 = c__4556__auto___35379;
var G__35382 = cljs.core.count(c__4556__auto___35379);
var G__35383 = (0);
seq__35192_35362 = G__35380;
chunk__35193_35363 = G__35381;
count__35194_35364 = G__35382;
i__35195_35365 = G__35383;
continue;
} else {
var map__35208_35384 = cljs.core.first(seq__35192_35378__$1);
var map__35208_35385__$1 = (((((!((map__35208_35384 == null))))?(((((map__35208_35384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35208_35384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35208_35384):map__35208_35384);
var w_35386 = map__35208_35385__$1;
var msg_35387__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35208_35385__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35208_35385__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35208_35385__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35208_35385__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35390)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35388),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35389),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35387__$1)].join(''));


var G__35391 = cljs.core.next(seq__35192_35378__$1);
var G__35392 = null;
var G__35393 = (0);
var G__35394 = (0);
seq__35192_35362 = G__35391;
chunk__35193_35363 = G__35392;
count__35194_35364 = G__35393;
i__35195_35365 = G__35394;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__35165_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35165_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35212){
var map__35213 = p__35212;
var map__35213__$1 = (((((!((map__35213 == null))))?(((((map__35213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35213):map__35213);
var msg = map__35213__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35213__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35217 = cljs.core.seq(updates);
var chunk__35219 = null;
var count__35220 = (0);
var i__35221 = (0);
while(true){
if((i__35221 < count__35220)){
var path = chunk__35219.cljs$core$IIndexed$_nth$arity$2(null,i__35221);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35253_35395 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35256_35396 = null;
var count__35257_35397 = (0);
var i__35258_35398 = (0);
while(true){
if((i__35258_35398 < count__35257_35397)){
var node_35399 = chunk__35256_35396.cljs$core$IIndexed$_nth$arity$2(null,i__35258_35398);
var path_match_35400 = shadow.cljs.devtools.client.browser.match_paths(node_35399.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35400)){
var new_link_35401 = (function (){var G__35263 = node_35399.cloneNode(true);
G__35263.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35400),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35263;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35400], 0));

goog.dom.insertSiblingAfter(new_link_35401,node_35399);

goog.dom.removeNode(node_35399);


var G__35402 = seq__35253_35395;
var G__35403 = chunk__35256_35396;
var G__35404 = count__35257_35397;
var G__35405 = (i__35258_35398 + (1));
seq__35253_35395 = G__35402;
chunk__35256_35396 = G__35403;
count__35257_35397 = G__35404;
i__35258_35398 = G__35405;
continue;
} else {
var G__35406 = seq__35253_35395;
var G__35407 = chunk__35256_35396;
var G__35408 = count__35257_35397;
var G__35409 = (i__35258_35398 + (1));
seq__35253_35395 = G__35406;
chunk__35256_35396 = G__35407;
count__35257_35397 = G__35408;
i__35258_35398 = G__35409;
continue;
}
} else {
var temp__5735__auto___35410 = cljs.core.seq(seq__35253_35395);
if(temp__5735__auto___35410){
var seq__35253_35411__$1 = temp__5735__auto___35410;
if(cljs.core.chunked_seq_QMARK_(seq__35253_35411__$1)){
var c__4556__auto___35412 = cljs.core.chunk_first(seq__35253_35411__$1);
var G__35413 = cljs.core.chunk_rest(seq__35253_35411__$1);
var G__35414 = c__4556__auto___35412;
var G__35415 = cljs.core.count(c__4556__auto___35412);
var G__35416 = (0);
seq__35253_35395 = G__35413;
chunk__35256_35396 = G__35414;
count__35257_35397 = G__35415;
i__35258_35398 = G__35416;
continue;
} else {
var node_35417 = cljs.core.first(seq__35253_35411__$1);
var path_match_35418 = shadow.cljs.devtools.client.browser.match_paths(node_35417.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35418)){
var new_link_35419 = (function (){var G__35264 = node_35417.cloneNode(true);
G__35264.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35418),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35264;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35418], 0));

goog.dom.insertSiblingAfter(new_link_35419,node_35417);

goog.dom.removeNode(node_35417);


var G__35420 = cljs.core.next(seq__35253_35411__$1);
var G__35421 = null;
var G__35422 = (0);
var G__35423 = (0);
seq__35253_35395 = G__35420;
chunk__35256_35396 = G__35421;
count__35257_35397 = G__35422;
i__35258_35398 = G__35423;
continue;
} else {
var G__35424 = cljs.core.next(seq__35253_35411__$1);
var G__35425 = null;
var G__35426 = (0);
var G__35427 = (0);
seq__35253_35395 = G__35424;
chunk__35256_35396 = G__35425;
count__35257_35397 = G__35426;
i__35258_35398 = G__35427;
continue;
}
}
} else {
}
}
break;
}


var G__35428 = seq__35217;
var G__35429 = chunk__35219;
var G__35430 = count__35220;
var G__35431 = (i__35221 + (1));
seq__35217 = G__35428;
chunk__35219 = G__35429;
count__35220 = G__35430;
i__35221 = G__35431;
continue;
} else {
var G__35432 = seq__35217;
var G__35433 = chunk__35219;
var G__35434 = count__35220;
var G__35435 = (i__35221 + (1));
seq__35217 = G__35432;
chunk__35219 = G__35433;
count__35220 = G__35434;
i__35221 = G__35435;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35217);
if(temp__5735__auto__){
var seq__35217__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35217__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35217__$1);
var G__35436 = cljs.core.chunk_rest(seq__35217__$1);
var G__35437 = c__4556__auto__;
var G__35438 = cljs.core.count(c__4556__auto__);
var G__35439 = (0);
seq__35217 = G__35436;
chunk__35219 = G__35437;
count__35220 = G__35438;
i__35221 = G__35439;
continue;
} else {
var path = cljs.core.first(seq__35217__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35265_35440 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35268_35441 = null;
var count__35269_35442 = (0);
var i__35270_35443 = (0);
while(true){
if((i__35270_35443 < count__35269_35442)){
var node_35444 = chunk__35268_35441.cljs$core$IIndexed$_nth$arity$2(null,i__35270_35443);
var path_match_35445 = shadow.cljs.devtools.client.browser.match_paths(node_35444.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35445)){
var new_link_35446 = (function (){var G__35275 = node_35444.cloneNode(true);
G__35275.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35445),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35275;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35445], 0));

goog.dom.insertSiblingAfter(new_link_35446,node_35444);

goog.dom.removeNode(node_35444);


var G__35447 = seq__35265_35440;
var G__35448 = chunk__35268_35441;
var G__35449 = count__35269_35442;
var G__35450 = (i__35270_35443 + (1));
seq__35265_35440 = G__35447;
chunk__35268_35441 = G__35448;
count__35269_35442 = G__35449;
i__35270_35443 = G__35450;
continue;
} else {
var G__35451 = seq__35265_35440;
var G__35452 = chunk__35268_35441;
var G__35453 = count__35269_35442;
var G__35454 = (i__35270_35443 + (1));
seq__35265_35440 = G__35451;
chunk__35268_35441 = G__35452;
count__35269_35442 = G__35453;
i__35270_35443 = G__35454;
continue;
}
} else {
var temp__5735__auto___35455__$1 = cljs.core.seq(seq__35265_35440);
if(temp__5735__auto___35455__$1){
var seq__35265_35456__$1 = temp__5735__auto___35455__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35265_35456__$1)){
var c__4556__auto___35457 = cljs.core.chunk_first(seq__35265_35456__$1);
var G__35458 = cljs.core.chunk_rest(seq__35265_35456__$1);
var G__35459 = c__4556__auto___35457;
var G__35460 = cljs.core.count(c__4556__auto___35457);
var G__35461 = (0);
seq__35265_35440 = G__35458;
chunk__35268_35441 = G__35459;
count__35269_35442 = G__35460;
i__35270_35443 = G__35461;
continue;
} else {
var node_35462 = cljs.core.first(seq__35265_35456__$1);
var path_match_35463 = shadow.cljs.devtools.client.browser.match_paths(node_35462.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35463)){
var new_link_35464 = (function (){var G__35279 = node_35462.cloneNode(true);
G__35279.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35463),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35279;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35463], 0));

goog.dom.insertSiblingAfter(new_link_35464,node_35462);

goog.dom.removeNode(node_35462);


var G__35465 = cljs.core.next(seq__35265_35456__$1);
var G__35466 = null;
var G__35467 = (0);
var G__35468 = (0);
seq__35265_35440 = G__35465;
chunk__35268_35441 = G__35466;
count__35269_35442 = G__35467;
i__35270_35443 = G__35468;
continue;
} else {
var G__35469 = cljs.core.next(seq__35265_35456__$1);
var G__35470 = null;
var G__35471 = (0);
var G__35472 = (0);
seq__35265_35440 = G__35469;
chunk__35268_35441 = G__35470;
count__35269_35442 = G__35471;
i__35270_35443 = G__35472;
continue;
}
}
} else {
}
}
break;
}


var G__35473 = cljs.core.next(seq__35217__$1);
var G__35474 = null;
var G__35475 = (0);
var G__35476 = (0);
seq__35217 = G__35473;
chunk__35219 = G__35474;
count__35220 = G__35475;
i__35221 = G__35476;
continue;
} else {
var G__35477 = cljs.core.next(seq__35217__$1);
var G__35478 = null;
var G__35479 = (0);
var G__35480 = (0);
seq__35217 = G__35477;
chunk__35219 = G__35478;
count__35220 = G__35479;
i__35221 = G__35480;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35284){
var map__35285 = p__35284;
var map__35285__$1 = (((((!((map__35285 == null))))?(((((map__35285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35285):map__35285);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35285__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35285__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35290,done){
var map__35291 = p__35290;
var map__35291__$1 = (((((!((map__35291 == null))))?(((((map__35291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35291):map__35291);
var msg = map__35291__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35291__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35291__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35291__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35291__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35293){
var map__35294 = p__35293;
var map__35294__$1 = (((((!((map__35294 == null))))?(((((map__35294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35294):map__35294);
var src = map__35294__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35294__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e35296){var e = e35296;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35297,done){
var map__35298 = p__35297;
var map__35298__$1 = (((((!((map__35298 == null))))?(((((map__35298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35298):map__35298);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35298__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35298__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35300){
var map__35301 = p__35300;
var map__35301__$1 = (((((!((map__35301 == null))))?(((((map__35301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35301):map__35301);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35301__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35301__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35303,done){
var map__35304 = p__35303;
var map__35304__$1 = (((((!((map__35304 == null))))?(((((map__35304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35304):map__35304);
var msg = map__35304__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35304__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35309_35491 = type;
var G__35309_35492__$1 = (((G__35309_35491 instanceof cljs.core.Keyword))?G__35309_35491.fqn:null);
switch (G__35309_35492__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__35314 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__35314.cljs$core$IFn$_invoke$arity$1 ? fexpr__35314.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__35314.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4126__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e35315){var e = e35315;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35502 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35502)){
var s_35503 = temp__5735__auto___35502;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_35503.onclose = (function (e){
return null;
}));

s_35503.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

if(cljs.core.truth_(goog.global.window)){
window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = goog.global.document;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",goog.global.document.readyState);
} else {
return and__4115__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
