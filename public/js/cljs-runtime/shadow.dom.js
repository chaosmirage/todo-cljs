goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33648 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33648(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33649 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33649(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32827 = coll;
var G__32828 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32827,G__32828) : shadow.dom.lazy_native_coll_seq.call(null,G__32827,G__32828));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32856 = arguments.length;
switch (G__32856) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32861 = arguments.length;
switch (G__32861) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32873 = arguments.length;
switch (G__32873) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32883 = arguments.length;
switch (G__32883) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32895 = arguments.length;
switch (G__32895) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32900 = arguments.length;
switch (G__32900) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32904){if((e32904 instanceof Object)){
var e = e32904;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32904;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32911 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32912 = null;
var count__32913 = (0);
var i__32914 = (0);
while(true){
if((i__32914 < count__32913)){
var el = chunk__32912.cljs$core$IIndexed$_nth$arity$2(null,i__32914);
var handler_33660__$1 = ((function (seq__32911,chunk__32912,count__32913,i__32914,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32911,chunk__32912,count__32913,i__32914,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33660__$1);


var G__33663 = seq__32911;
var G__33664 = chunk__32912;
var G__33665 = count__32913;
var G__33666 = (i__32914 + (1));
seq__32911 = G__33663;
chunk__32912 = G__33664;
count__32913 = G__33665;
i__32914 = G__33666;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32911);
if(temp__5735__auto__){
var seq__32911__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32911__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32911__$1);
var G__33668 = cljs.core.chunk_rest(seq__32911__$1);
var G__33669 = c__4556__auto__;
var G__33670 = cljs.core.count(c__4556__auto__);
var G__33671 = (0);
seq__32911 = G__33668;
chunk__32912 = G__33669;
count__32913 = G__33670;
i__32914 = G__33671;
continue;
} else {
var el = cljs.core.first(seq__32911__$1);
var handler_33673__$1 = ((function (seq__32911,chunk__32912,count__32913,i__32914,el,seq__32911__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32911,chunk__32912,count__32913,i__32914,el,seq__32911__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33673__$1);


var G__33675 = cljs.core.next(seq__32911__$1);
var G__33676 = null;
var G__33677 = (0);
var G__33678 = (0);
seq__32911 = G__33675;
chunk__32912 = G__33676;
count__32913 = G__33677;
i__32914 = G__33678;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32934 = arguments.length;
switch (G__32934) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32945 = cljs.core.seq(events);
var chunk__32946 = null;
var count__32947 = (0);
var i__32948 = (0);
while(true){
if((i__32948 < count__32947)){
var vec__32956 = chunk__32946.cljs$core$IIndexed$_nth$arity$2(null,i__32948);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32956,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32956,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33685 = seq__32945;
var G__33686 = chunk__32946;
var G__33687 = count__32947;
var G__33688 = (i__32948 + (1));
seq__32945 = G__33685;
chunk__32946 = G__33686;
count__32947 = G__33687;
i__32948 = G__33688;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32945);
if(temp__5735__auto__){
var seq__32945__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32945__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32945__$1);
var G__33689 = cljs.core.chunk_rest(seq__32945__$1);
var G__33690 = c__4556__auto__;
var G__33691 = cljs.core.count(c__4556__auto__);
var G__33692 = (0);
seq__32945 = G__33689;
chunk__32946 = G__33690;
count__32947 = G__33691;
i__32948 = G__33692;
continue;
} else {
var vec__32963 = cljs.core.first(seq__32945__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32963,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32963,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33695 = cljs.core.next(seq__32945__$1);
var G__33696 = null;
var G__33697 = (0);
var G__33698 = (0);
seq__32945 = G__33695;
chunk__32946 = G__33696;
count__32947 = G__33697;
i__32948 = G__33698;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32967 = cljs.core.seq(styles);
var chunk__32968 = null;
var count__32969 = (0);
var i__32970 = (0);
while(true){
if((i__32970 < count__32969)){
var vec__32990 = chunk__32968.cljs$core$IIndexed$_nth$arity$2(null,i__32970);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32990,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32990,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33703 = seq__32967;
var G__33704 = chunk__32968;
var G__33705 = count__32969;
var G__33706 = (i__32970 + (1));
seq__32967 = G__33703;
chunk__32968 = G__33704;
count__32969 = G__33705;
i__32970 = G__33706;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32967);
if(temp__5735__auto__){
var seq__32967__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32967__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32967__$1);
var G__33707 = cljs.core.chunk_rest(seq__32967__$1);
var G__33708 = c__4556__auto__;
var G__33709 = cljs.core.count(c__4556__auto__);
var G__33710 = (0);
seq__32967 = G__33707;
chunk__32968 = G__33708;
count__32969 = G__33709;
i__32970 = G__33710;
continue;
} else {
var vec__32995 = cljs.core.first(seq__32967__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32995,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32995,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33712 = cljs.core.next(seq__32967__$1);
var G__33713 = null;
var G__33714 = (0);
var G__33715 = (0);
seq__32967 = G__33712;
chunk__32968 = G__33713;
count__32969 = G__33714;
i__32970 = G__33715;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33006_33717 = key;
var G__33006_33718__$1 = (((G__33006_33717 instanceof cljs.core.Keyword))?G__33006_33717.fqn:null);
switch (G__33006_33718__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33720 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_33720,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_33720,"aria-");
}
})())){
el.setAttribute(ks_33720,value);
} else {
(el[ks_33720] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33036){
var map__33037 = p__33036;
var map__33037__$1 = (((((!((map__33037 == null))))?(((((map__33037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33037):map__33037);
var props = map__33037__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33037__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33039 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33039,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33039,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33039,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33042 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33042,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33042;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33047 = arguments.length;
switch (G__33047) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33085){
var vec__33087 = p__33085;
var seq__33088 = cljs.core.seq(vec__33087);
var first__33089 = cljs.core.first(seq__33088);
var seq__33088__$1 = cljs.core.next(seq__33088);
var nn = first__33089;
var first__33089__$1 = cljs.core.first(seq__33088__$1);
var seq__33088__$2 = cljs.core.next(seq__33088__$1);
var np = first__33089__$1;
var nc = seq__33088__$2;
var node = vec__33087;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33094 = nn;
var G__33095 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33094,G__33095) : create_fn.call(null,G__33094,G__33095));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33097 = nn;
var G__33098 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33097,G__33098) : create_fn.call(null,G__33097,G__33098));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33101 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33101,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33101,(1),null);
var seq__33105_33735 = cljs.core.seq(node_children);
var chunk__33106_33736 = null;
var count__33107_33737 = (0);
var i__33108_33738 = (0);
while(true){
if((i__33108_33738 < count__33107_33737)){
var child_struct_33739 = chunk__33106_33736.cljs$core$IIndexed$_nth$arity$2(null,i__33108_33738);
var children_33741 = shadow.dom.dom_node(child_struct_33739);
if(cljs.core.seq_QMARK_(children_33741)){
var seq__33125_33743 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33741));
var chunk__33127_33744 = null;
var count__33128_33745 = (0);
var i__33129_33746 = (0);
while(true){
if((i__33129_33746 < count__33128_33745)){
var child_33748 = chunk__33127_33744.cljs$core$IIndexed$_nth$arity$2(null,i__33129_33746);
if(cljs.core.truth_(child_33748)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33748);


var G__33749 = seq__33125_33743;
var G__33750 = chunk__33127_33744;
var G__33751 = count__33128_33745;
var G__33752 = (i__33129_33746 + (1));
seq__33125_33743 = G__33749;
chunk__33127_33744 = G__33750;
count__33128_33745 = G__33751;
i__33129_33746 = G__33752;
continue;
} else {
var G__33754 = seq__33125_33743;
var G__33755 = chunk__33127_33744;
var G__33756 = count__33128_33745;
var G__33757 = (i__33129_33746 + (1));
seq__33125_33743 = G__33754;
chunk__33127_33744 = G__33755;
count__33128_33745 = G__33756;
i__33129_33746 = G__33757;
continue;
}
} else {
var temp__5735__auto___33758 = cljs.core.seq(seq__33125_33743);
if(temp__5735__auto___33758){
var seq__33125_33759__$1 = temp__5735__auto___33758;
if(cljs.core.chunked_seq_QMARK_(seq__33125_33759__$1)){
var c__4556__auto___33760 = cljs.core.chunk_first(seq__33125_33759__$1);
var G__33761 = cljs.core.chunk_rest(seq__33125_33759__$1);
var G__33762 = c__4556__auto___33760;
var G__33763 = cljs.core.count(c__4556__auto___33760);
var G__33764 = (0);
seq__33125_33743 = G__33761;
chunk__33127_33744 = G__33762;
count__33128_33745 = G__33763;
i__33129_33746 = G__33764;
continue;
} else {
var child_33765 = cljs.core.first(seq__33125_33759__$1);
if(cljs.core.truth_(child_33765)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33765);


var G__33766 = cljs.core.next(seq__33125_33759__$1);
var G__33767 = null;
var G__33768 = (0);
var G__33769 = (0);
seq__33125_33743 = G__33766;
chunk__33127_33744 = G__33767;
count__33128_33745 = G__33768;
i__33129_33746 = G__33769;
continue;
} else {
var G__33770 = cljs.core.next(seq__33125_33759__$1);
var G__33771 = null;
var G__33772 = (0);
var G__33773 = (0);
seq__33125_33743 = G__33770;
chunk__33127_33744 = G__33771;
count__33128_33745 = G__33772;
i__33129_33746 = G__33773;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33741);
}


var G__33775 = seq__33105_33735;
var G__33776 = chunk__33106_33736;
var G__33777 = count__33107_33737;
var G__33778 = (i__33108_33738 + (1));
seq__33105_33735 = G__33775;
chunk__33106_33736 = G__33776;
count__33107_33737 = G__33777;
i__33108_33738 = G__33778;
continue;
} else {
var temp__5735__auto___33780 = cljs.core.seq(seq__33105_33735);
if(temp__5735__auto___33780){
var seq__33105_33781__$1 = temp__5735__auto___33780;
if(cljs.core.chunked_seq_QMARK_(seq__33105_33781__$1)){
var c__4556__auto___33782 = cljs.core.chunk_first(seq__33105_33781__$1);
var G__33783 = cljs.core.chunk_rest(seq__33105_33781__$1);
var G__33784 = c__4556__auto___33782;
var G__33785 = cljs.core.count(c__4556__auto___33782);
var G__33786 = (0);
seq__33105_33735 = G__33783;
chunk__33106_33736 = G__33784;
count__33107_33737 = G__33785;
i__33108_33738 = G__33786;
continue;
} else {
var child_struct_33790 = cljs.core.first(seq__33105_33781__$1);
var children_33791 = shadow.dom.dom_node(child_struct_33790);
if(cljs.core.seq_QMARK_(children_33791)){
var seq__33131_33792 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33791));
var chunk__33133_33793 = null;
var count__33134_33794 = (0);
var i__33135_33795 = (0);
while(true){
if((i__33135_33795 < count__33134_33794)){
var child_33796 = chunk__33133_33793.cljs$core$IIndexed$_nth$arity$2(null,i__33135_33795);
if(cljs.core.truth_(child_33796)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33796);


var G__33797 = seq__33131_33792;
var G__33798 = chunk__33133_33793;
var G__33799 = count__33134_33794;
var G__33800 = (i__33135_33795 + (1));
seq__33131_33792 = G__33797;
chunk__33133_33793 = G__33798;
count__33134_33794 = G__33799;
i__33135_33795 = G__33800;
continue;
} else {
var G__33802 = seq__33131_33792;
var G__33803 = chunk__33133_33793;
var G__33804 = count__33134_33794;
var G__33805 = (i__33135_33795 + (1));
seq__33131_33792 = G__33802;
chunk__33133_33793 = G__33803;
count__33134_33794 = G__33804;
i__33135_33795 = G__33805;
continue;
}
} else {
var temp__5735__auto___33806__$1 = cljs.core.seq(seq__33131_33792);
if(temp__5735__auto___33806__$1){
var seq__33131_33807__$1 = temp__5735__auto___33806__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33131_33807__$1)){
var c__4556__auto___33808 = cljs.core.chunk_first(seq__33131_33807__$1);
var G__33813 = cljs.core.chunk_rest(seq__33131_33807__$1);
var G__33814 = c__4556__auto___33808;
var G__33815 = cljs.core.count(c__4556__auto___33808);
var G__33816 = (0);
seq__33131_33792 = G__33813;
chunk__33133_33793 = G__33814;
count__33134_33794 = G__33815;
i__33135_33795 = G__33816;
continue;
} else {
var child_33817 = cljs.core.first(seq__33131_33807__$1);
if(cljs.core.truth_(child_33817)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33817);


var G__33819 = cljs.core.next(seq__33131_33807__$1);
var G__33820 = null;
var G__33821 = (0);
var G__33822 = (0);
seq__33131_33792 = G__33819;
chunk__33133_33793 = G__33820;
count__33134_33794 = G__33821;
i__33135_33795 = G__33822;
continue;
} else {
var G__33823 = cljs.core.next(seq__33131_33807__$1);
var G__33824 = null;
var G__33825 = (0);
var G__33826 = (0);
seq__33131_33792 = G__33823;
chunk__33133_33793 = G__33824;
count__33134_33794 = G__33825;
i__33135_33795 = G__33826;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33791);
}


var G__33827 = cljs.core.next(seq__33105_33781__$1);
var G__33828 = null;
var G__33829 = (0);
var G__33830 = (0);
seq__33105_33735 = G__33827;
chunk__33106_33736 = G__33828;
count__33107_33737 = G__33829;
i__33108_33738 = G__33830;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33169 = cljs.core.seq(node);
var chunk__33170 = null;
var count__33171 = (0);
var i__33172 = (0);
while(true){
if((i__33172 < count__33171)){
var n = chunk__33170.cljs$core$IIndexed$_nth$arity$2(null,i__33172);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33838 = seq__33169;
var G__33839 = chunk__33170;
var G__33840 = count__33171;
var G__33841 = (i__33172 + (1));
seq__33169 = G__33838;
chunk__33170 = G__33839;
count__33171 = G__33840;
i__33172 = G__33841;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33169);
if(temp__5735__auto__){
var seq__33169__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33169__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33169__$1);
var G__33844 = cljs.core.chunk_rest(seq__33169__$1);
var G__33845 = c__4556__auto__;
var G__33846 = cljs.core.count(c__4556__auto__);
var G__33847 = (0);
seq__33169 = G__33844;
chunk__33170 = G__33845;
count__33171 = G__33846;
i__33172 = G__33847;
continue;
} else {
var n = cljs.core.first(seq__33169__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33854 = cljs.core.next(seq__33169__$1);
var G__33855 = null;
var G__33856 = (0);
var G__33857 = (0);
seq__33169 = G__33854;
chunk__33170 = G__33855;
count__33171 = G__33856;
i__33172 = G__33857;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33189 = arguments.length;
switch (G__33189) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33201 = arguments.length;
switch (G__33201) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33219 = arguments.length;
switch (G__33219) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33872 = arguments.length;
var i__4737__auto___33873 = (0);
while(true){
if((i__4737__auto___33873 < len__4736__auto___33872)){
args__4742__auto__.push((arguments[i__4737__auto___33873]));

var G__33874 = (i__4737__auto___33873 + (1));
i__4737__auto___33873 = G__33874;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33249_33879 = cljs.core.seq(nodes);
var chunk__33250_33880 = null;
var count__33251_33881 = (0);
var i__33252_33882 = (0);
while(true){
if((i__33252_33882 < count__33251_33881)){
var node_33884 = chunk__33250_33880.cljs$core$IIndexed$_nth$arity$2(null,i__33252_33882);
fragment.appendChild(shadow.dom._to_dom(node_33884));


var G__33885 = seq__33249_33879;
var G__33886 = chunk__33250_33880;
var G__33887 = count__33251_33881;
var G__33888 = (i__33252_33882 + (1));
seq__33249_33879 = G__33885;
chunk__33250_33880 = G__33886;
count__33251_33881 = G__33887;
i__33252_33882 = G__33888;
continue;
} else {
var temp__5735__auto___33889 = cljs.core.seq(seq__33249_33879);
if(temp__5735__auto___33889){
var seq__33249_33890__$1 = temp__5735__auto___33889;
if(cljs.core.chunked_seq_QMARK_(seq__33249_33890__$1)){
var c__4556__auto___33892 = cljs.core.chunk_first(seq__33249_33890__$1);
var G__33893 = cljs.core.chunk_rest(seq__33249_33890__$1);
var G__33894 = c__4556__auto___33892;
var G__33895 = cljs.core.count(c__4556__auto___33892);
var G__33896 = (0);
seq__33249_33879 = G__33893;
chunk__33250_33880 = G__33894;
count__33251_33881 = G__33895;
i__33252_33882 = G__33896;
continue;
} else {
var node_33897 = cljs.core.first(seq__33249_33890__$1);
fragment.appendChild(shadow.dom._to_dom(node_33897));


var G__33898 = cljs.core.next(seq__33249_33890__$1);
var G__33899 = null;
var G__33900 = (0);
var G__33901 = (0);
seq__33249_33879 = G__33898;
chunk__33250_33880 = G__33899;
count__33251_33881 = G__33900;
i__33252_33882 = G__33901;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33244){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33244));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33259_33905 = cljs.core.seq(scripts);
var chunk__33260_33906 = null;
var count__33261_33907 = (0);
var i__33262_33908 = (0);
while(true){
if((i__33262_33908 < count__33261_33907)){
var vec__33271_33909 = chunk__33260_33906.cljs$core$IIndexed$_nth$arity$2(null,i__33262_33908);
var script_tag_33910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33271_33909,(0),null);
var script_body_33911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33271_33909,(1),null);
eval(script_body_33911);


var G__33913 = seq__33259_33905;
var G__33914 = chunk__33260_33906;
var G__33915 = count__33261_33907;
var G__33916 = (i__33262_33908 + (1));
seq__33259_33905 = G__33913;
chunk__33260_33906 = G__33914;
count__33261_33907 = G__33915;
i__33262_33908 = G__33916;
continue;
} else {
var temp__5735__auto___33917 = cljs.core.seq(seq__33259_33905);
if(temp__5735__auto___33917){
var seq__33259_33918__$1 = temp__5735__auto___33917;
if(cljs.core.chunked_seq_QMARK_(seq__33259_33918__$1)){
var c__4556__auto___33919 = cljs.core.chunk_first(seq__33259_33918__$1);
var G__33920 = cljs.core.chunk_rest(seq__33259_33918__$1);
var G__33921 = c__4556__auto___33919;
var G__33922 = cljs.core.count(c__4556__auto___33919);
var G__33923 = (0);
seq__33259_33905 = G__33920;
chunk__33260_33906 = G__33921;
count__33261_33907 = G__33922;
i__33262_33908 = G__33923;
continue;
} else {
var vec__33275_33925 = cljs.core.first(seq__33259_33918__$1);
var script_tag_33926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33275_33925,(0),null);
var script_body_33927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33275_33925,(1),null);
eval(script_body_33927);


var G__33931 = cljs.core.next(seq__33259_33918__$1);
var G__33932 = null;
var G__33933 = (0);
var G__33934 = (0);
seq__33259_33905 = G__33931;
chunk__33260_33906 = G__33932;
count__33261_33907 = G__33933;
i__33262_33908 = G__33934;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33279){
var vec__33280 = p__33279;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33280,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33280,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33290 = arguments.length;
switch (G__33290) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33291 = cljs.core.seq(style_keys);
var chunk__33292 = null;
var count__33293 = (0);
var i__33294 = (0);
while(true){
if((i__33294 < count__33293)){
var it = chunk__33292.cljs$core$IIndexed$_nth$arity$2(null,i__33294);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33944 = seq__33291;
var G__33946 = chunk__33292;
var G__33947 = count__33293;
var G__33948 = (i__33294 + (1));
seq__33291 = G__33944;
chunk__33292 = G__33946;
count__33293 = G__33947;
i__33294 = G__33948;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33291);
if(temp__5735__auto__){
var seq__33291__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33291__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33291__$1);
var G__33949 = cljs.core.chunk_rest(seq__33291__$1);
var G__33950 = c__4556__auto__;
var G__33951 = cljs.core.count(c__4556__auto__);
var G__33952 = (0);
seq__33291 = G__33949;
chunk__33292 = G__33950;
count__33293 = G__33951;
i__33294 = G__33952;
continue;
} else {
var it = cljs.core.first(seq__33291__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33954 = cljs.core.next(seq__33291__$1);
var G__33955 = null;
var G__33956 = (0);
var G__33957 = (0);
seq__33291 = G__33954;
chunk__33292 = G__33955;
count__33293 = G__33956;
i__33294 = G__33957;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33299,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33309 = k33299;
var G__33309__$1 = (((G__33309 instanceof cljs.core.Keyword))?G__33309.fqn:null);
switch (G__33309__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33299,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33313){
var vec__33314 = p__33313;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33314,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33314,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33298){
var self__ = this;
var G__33298__$1 = this;
return (new cljs.core.RecordIter((0),G__33298__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33300,other33301){
var self__ = this;
var this33300__$1 = this;
return (((!((other33301 == null)))) && ((this33300__$1.constructor === other33301.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33300__$1.x,other33301.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33300__$1.y,other33301.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33300__$1.__extmap,other33301.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33298){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33335 = cljs.core.keyword_identical_QMARK_;
var expr__33336 = k__4388__auto__;
if(cljs.core.truth_((pred__33335.cljs$core$IFn$_invoke$arity$2 ? pred__33335.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33336) : pred__33335.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33336)))){
return (new shadow.dom.Coordinate(G__33298,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33335.cljs$core$IFn$_invoke$arity$2 ? pred__33335.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33336) : pred__33335.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33336)))){
return (new shadow.dom.Coordinate(self__.x,G__33298,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33298),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33298){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33298,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33302){
var extmap__4419__auto__ = (function (){var G__33353 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33302,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33302)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33353);
} else {
return G__33353;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33302),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33302),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33369,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33378 = k33369;
var G__33378__$1 = (((G__33378 instanceof cljs.core.Keyword))?G__33378.fqn:null);
switch (G__33378__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33369,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33380){
var vec__33382 = p__33380;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33382,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33382,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33368){
var self__ = this;
var G__33368__$1 = this;
return (new cljs.core.RecordIter((0),G__33368__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33370,other33371){
var self__ = this;
var this33370__$1 = this;
return (((!((other33371 == null)))) && ((this33370__$1.constructor === other33371.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33370__$1.w,other33371.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33370__$1.h,other33371.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33370__$1.__extmap,other33371.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33368){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33403 = cljs.core.keyword_identical_QMARK_;
var expr__33404 = k__4388__auto__;
if(cljs.core.truth_((pred__33403.cljs$core$IFn$_invoke$arity$2 ? pred__33403.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33404) : pred__33403.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33404)))){
return (new shadow.dom.Size(G__33368,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33403.cljs$core$IFn$_invoke$arity$2 ? pred__33403.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33404) : pred__33403.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33404)))){
return (new shadow.dom.Size(self__.w,G__33368,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33368),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33368){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33368,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33373){
var extmap__4419__auto__ = (function (){var G__33446 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33373,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33373)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33446);
} else {
return G__33446;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33373),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33373),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__34046 = (i + (1));
var G__34047 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34046;
ret = G__34047;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33477){
var vec__33478 = p__33477;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33478,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33478,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33491 = arguments.length;
switch (G__33491) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34051 = ps;
var G__34052 = (i + (1));
el__$1 = G__34051;
i = G__34052;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33517 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33517,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33517,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33517,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33523_34054 = cljs.core.seq(props);
var chunk__33524_34055 = null;
var count__33525_34056 = (0);
var i__33526_34057 = (0);
while(true){
if((i__33526_34057 < count__33525_34056)){
var vec__33541_34058 = chunk__33524_34055.cljs$core$IIndexed$_nth$arity$2(null,i__33526_34057);
var k_34059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33541_34058,(0),null);
var v_34060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33541_34058,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34059);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34059),v_34060);


var G__34061 = seq__33523_34054;
var G__34062 = chunk__33524_34055;
var G__34063 = count__33525_34056;
var G__34064 = (i__33526_34057 + (1));
seq__33523_34054 = G__34061;
chunk__33524_34055 = G__34062;
count__33525_34056 = G__34063;
i__33526_34057 = G__34064;
continue;
} else {
var temp__5735__auto___34066 = cljs.core.seq(seq__33523_34054);
if(temp__5735__auto___34066){
var seq__33523_34067__$1 = temp__5735__auto___34066;
if(cljs.core.chunked_seq_QMARK_(seq__33523_34067__$1)){
var c__4556__auto___34069 = cljs.core.chunk_first(seq__33523_34067__$1);
var G__34070 = cljs.core.chunk_rest(seq__33523_34067__$1);
var G__34071 = c__4556__auto___34069;
var G__34072 = cljs.core.count(c__4556__auto___34069);
var G__34073 = (0);
seq__33523_34054 = G__34070;
chunk__33524_34055 = G__34071;
count__33525_34056 = G__34072;
i__33526_34057 = G__34073;
continue;
} else {
var vec__33546_34074 = cljs.core.first(seq__33523_34067__$1);
var k_34075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33546_34074,(0),null);
var v_34076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33546_34074,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34075);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34075),v_34076);


var G__34077 = cljs.core.next(seq__33523_34067__$1);
var G__34078 = null;
var G__34079 = (0);
var G__34080 = (0);
seq__33523_34054 = G__34077;
chunk__33524_34055 = G__34078;
count__33525_34056 = G__34079;
i__33526_34057 = G__34080;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33553 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33553,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33553,(1),null);
var seq__33556_34082 = cljs.core.seq(node_children);
var chunk__33558_34083 = null;
var count__33559_34084 = (0);
var i__33560_34085 = (0);
while(true){
if((i__33560_34085 < count__33559_34084)){
var child_struct_34086 = chunk__33558_34083.cljs$core$IIndexed$_nth$arity$2(null,i__33560_34085);
if((!((child_struct_34086 == null)))){
if(typeof child_struct_34086 === 'string'){
var text_34087 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34087),child_struct_34086].join(''));
} else {
var children_34088 = shadow.dom.svg_node(child_struct_34086);
if(cljs.core.seq_QMARK_(children_34088)){
var seq__33585_34089 = cljs.core.seq(children_34088);
var chunk__33587_34090 = null;
var count__33588_34091 = (0);
var i__33589_34092 = (0);
while(true){
if((i__33589_34092 < count__33588_34091)){
var child_34093 = chunk__33587_34090.cljs$core$IIndexed$_nth$arity$2(null,i__33589_34092);
if(cljs.core.truth_(child_34093)){
node.appendChild(child_34093);


var G__34098 = seq__33585_34089;
var G__34099 = chunk__33587_34090;
var G__34100 = count__33588_34091;
var G__34101 = (i__33589_34092 + (1));
seq__33585_34089 = G__34098;
chunk__33587_34090 = G__34099;
count__33588_34091 = G__34100;
i__33589_34092 = G__34101;
continue;
} else {
var G__34102 = seq__33585_34089;
var G__34103 = chunk__33587_34090;
var G__34104 = count__33588_34091;
var G__34105 = (i__33589_34092 + (1));
seq__33585_34089 = G__34102;
chunk__33587_34090 = G__34103;
count__33588_34091 = G__34104;
i__33589_34092 = G__34105;
continue;
}
} else {
var temp__5735__auto___34107 = cljs.core.seq(seq__33585_34089);
if(temp__5735__auto___34107){
var seq__33585_34108__$1 = temp__5735__auto___34107;
if(cljs.core.chunked_seq_QMARK_(seq__33585_34108__$1)){
var c__4556__auto___34109 = cljs.core.chunk_first(seq__33585_34108__$1);
var G__34110 = cljs.core.chunk_rest(seq__33585_34108__$1);
var G__34111 = c__4556__auto___34109;
var G__34112 = cljs.core.count(c__4556__auto___34109);
var G__34113 = (0);
seq__33585_34089 = G__34110;
chunk__33587_34090 = G__34111;
count__33588_34091 = G__34112;
i__33589_34092 = G__34113;
continue;
} else {
var child_34114 = cljs.core.first(seq__33585_34108__$1);
if(cljs.core.truth_(child_34114)){
node.appendChild(child_34114);


var G__34115 = cljs.core.next(seq__33585_34108__$1);
var G__34116 = null;
var G__34117 = (0);
var G__34118 = (0);
seq__33585_34089 = G__34115;
chunk__33587_34090 = G__34116;
count__33588_34091 = G__34117;
i__33589_34092 = G__34118;
continue;
} else {
var G__34119 = cljs.core.next(seq__33585_34108__$1);
var G__34120 = null;
var G__34121 = (0);
var G__34122 = (0);
seq__33585_34089 = G__34119;
chunk__33587_34090 = G__34120;
count__33588_34091 = G__34121;
i__33589_34092 = G__34122;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34088);
}
}


var G__34123 = seq__33556_34082;
var G__34124 = chunk__33558_34083;
var G__34125 = count__33559_34084;
var G__34126 = (i__33560_34085 + (1));
seq__33556_34082 = G__34123;
chunk__33558_34083 = G__34124;
count__33559_34084 = G__34125;
i__33560_34085 = G__34126;
continue;
} else {
var G__34127 = seq__33556_34082;
var G__34128 = chunk__33558_34083;
var G__34129 = count__33559_34084;
var G__34130 = (i__33560_34085 + (1));
seq__33556_34082 = G__34127;
chunk__33558_34083 = G__34128;
count__33559_34084 = G__34129;
i__33560_34085 = G__34130;
continue;
}
} else {
var temp__5735__auto___34131 = cljs.core.seq(seq__33556_34082);
if(temp__5735__auto___34131){
var seq__33556_34132__$1 = temp__5735__auto___34131;
if(cljs.core.chunked_seq_QMARK_(seq__33556_34132__$1)){
var c__4556__auto___34133 = cljs.core.chunk_first(seq__33556_34132__$1);
var G__34135 = cljs.core.chunk_rest(seq__33556_34132__$1);
var G__34136 = c__4556__auto___34133;
var G__34137 = cljs.core.count(c__4556__auto___34133);
var G__34138 = (0);
seq__33556_34082 = G__34135;
chunk__33558_34083 = G__34136;
count__33559_34084 = G__34137;
i__33560_34085 = G__34138;
continue;
} else {
var child_struct_34139 = cljs.core.first(seq__33556_34132__$1);
if((!((child_struct_34139 == null)))){
if(typeof child_struct_34139 === 'string'){
var text_34140 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34140),child_struct_34139].join(''));
} else {
var children_34141 = shadow.dom.svg_node(child_struct_34139);
if(cljs.core.seq_QMARK_(children_34141)){
var seq__33595_34142 = cljs.core.seq(children_34141);
var chunk__33597_34143 = null;
var count__33598_34144 = (0);
var i__33599_34145 = (0);
while(true){
if((i__33599_34145 < count__33598_34144)){
var child_34146 = chunk__33597_34143.cljs$core$IIndexed$_nth$arity$2(null,i__33599_34145);
if(cljs.core.truth_(child_34146)){
node.appendChild(child_34146);


var G__34148 = seq__33595_34142;
var G__34149 = chunk__33597_34143;
var G__34150 = count__33598_34144;
var G__34151 = (i__33599_34145 + (1));
seq__33595_34142 = G__34148;
chunk__33597_34143 = G__34149;
count__33598_34144 = G__34150;
i__33599_34145 = G__34151;
continue;
} else {
var G__34155 = seq__33595_34142;
var G__34156 = chunk__33597_34143;
var G__34157 = count__33598_34144;
var G__34158 = (i__33599_34145 + (1));
seq__33595_34142 = G__34155;
chunk__33597_34143 = G__34156;
count__33598_34144 = G__34157;
i__33599_34145 = G__34158;
continue;
}
} else {
var temp__5735__auto___34159__$1 = cljs.core.seq(seq__33595_34142);
if(temp__5735__auto___34159__$1){
var seq__33595_34160__$1 = temp__5735__auto___34159__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33595_34160__$1)){
var c__4556__auto___34161 = cljs.core.chunk_first(seq__33595_34160__$1);
var G__34162 = cljs.core.chunk_rest(seq__33595_34160__$1);
var G__34163 = c__4556__auto___34161;
var G__34164 = cljs.core.count(c__4556__auto___34161);
var G__34165 = (0);
seq__33595_34142 = G__34162;
chunk__33597_34143 = G__34163;
count__33598_34144 = G__34164;
i__33599_34145 = G__34165;
continue;
} else {
var child_34166 = cljs.core.first(seq__33595_34160__$1);
if(cljs.core.truth_(child_34166)){
node.appendChild(child_34166);


var G__34167 = cljs.core.next(seq__33595_34160__$1);
var G__34168 = null;
var G__34169 = (0);
var G__34170 = (0);
seq__33595_34142 = G__34167;
chunk__33597_34143 = G__34168;
count__33598_34144 = G__34169;
i__33599_34145 = G__34170;
continue;
} else {
var G__34171 = cljs.core.next(seq__33595_34160__$1);
var G__34172 = null;
var G__34173 = (0);
var G__34174 = (0);
seq__33595_34142 = G__34171;
chunk__33597_34143 = G__34172;
count__33598_34144 = G__34173;
i__33599_34145 = G__34174;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34141);
}
}


var G__34175 = cljs.core.next(seq__33556_34132__$1);
var G__34176 = null;
var G__34177 = (0);
var G__34178 = (0);
seq__33556_34082 = G__34175;
chunk__33558_34083 = G__34176;
count__33559_34084 = G__34177;
i__33560_34085 = G__34178;
continue;
} else {
var G__34179 = cljs.core.next(seq__33556_34132__$1);
var G__34180 = null;
var G__34181 = (0);
var G__34182 = (0);
seq__33556_34082 = G__34179;
chunk__33558_34083 = G__34180;
count__33559_34084 = G__34181;
i__33560_34085 = G__34182;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34183 = arguments.length;
var i__4737__auto___34184 = (0);
while(true){
if((i__4737__auto___34184 < len__4736__auto___34183)){
args__4742__auto__.push((arguments[i__4737__auto___34184]));

var G__34185 = (i__4737__auto___34184 + (1));
i__4737__auto___34184 = G__34185;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33616){
var G__33617 = cljs.core.first(seq33616);
var seq33616__$1 = cljs.core.next(seq33616);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33617,seq33616__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33624 = arguments.length;
switch (G__33624) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__29903__auto___34187 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29904__auto__ = (function (){var switch__29761__auto__ = (function (state_33634){
var state_val_33635 = (state_33634[(1)]);
if((state_val_33635 === (1))){
var state_33634__$1 = state_33634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33634__$1,(2),once_or_cleanup);
} else {
if((state_val_33635 === (2))){
var inst_33631 = (state_33634[(2)]);
var inst_33632 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33634__$1 = (function (){var statearr_33639 = state_33634;
(statearr_33639[(7)] = inst_33631);

return statearr_33639;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33634__$1,inst_33632);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29762__auto__ = null;
var shadow$dom$state_machine__29762__auto____0 = (function (){
var statearr_33640 = [null,null,null,null,null,null,null,null];
(statearr_33640[(0)] = shadow$dom$state_machine__29762__auto__);

(statearr_33640[(1)] = (1));

return statearr_33640;
});
var shadow$dom$state_machine__29762__auto____1 = (function (state_33634){
while(true){
var ret_value__29763__auto__ = (function (){try{while(true){
var result__29764__auto__ = switch__29761__auto__(state_33634);
if(cljs.core.keyword_identical_QMARK_(result__29764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29764__auto__;
}
break;
}
}catch (e33641){var ex__29765__auto__ = e33641;
var statearr_33642_34191 = state_33634;
(statearr_33642_34191[(2)] = ex__29765__auto__);


if(cljs.core.seq((state_33634[(4)]))){
var statearr_33644_34192 = state_33634;
(statearr_33644_34192[(1)] = cljs.core.first((state_33634[(4)])));

} else {
throw ex__29765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34194 = state_33634;
state_33634 = G__34194;
continue;
} else {
return ret_value__29763__auto__;
}
break;
}
});
shadow$dom$state_machine__29762__auto__ = function(state_33634){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29762__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29762__auto____1.call(this,state_33634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29762__auto____0;
shadow$dom$state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29762__auto____1;
return shadow$dom$state_machine__29762__auto__;
})()
})();
var state__29905__auto__ = (function (){var statearr_33647 = f__29904__auto__();
(statearr_33647[(6)] = c__29903__auto___34187);

return statearr_33647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29905__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
