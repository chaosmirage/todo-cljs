goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30052 = arguments.length;
switch (G__30052) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30054 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30054 = (function (f,blockable,meta30055){
this.f = f;
this.blockable = blockable;
this.meta30055 = meta30055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30056,meta30055__$1){
var self__ = this;
var _30056__$1 = this;
return (new cljs.core.async.t_cljs$core$async30054(self__.f,self__.blockable,meta30055__$1));
}));

(cljs.core.async.t_cljs$core$async30054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30056){
var self__ = this;
var _30056__$1 = this;
return self__.meta30055;
}));

(cljs.core.async.t_cljs$core$async30054.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30054.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30054.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30054.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30054.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30055","meta30055",-1357710379,null)], null);
}));

(cljs.core.async.t_cljs$core$async30054.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30054.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30054");

(cljs.core.async.t_cljs$core$async30054.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30054");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30054.
 */
cljs.core.async.__GT_t_cljs$core$async30054 = (function cljs$core$async$__GT_t_cljs$core$async30054(f__$1,blockable__$1,meta30055){
return (new cljs.core.async.t_cljs$core$async30054(f__$1,blockable__$1,meta30055));
});

}

return (new cljs.core.async.t_cljs$core$async30054(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30072 = arguments.length;
switch (G__30072) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30084 = arguments.length;
switch (G__30084) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30094 = arguments.length;
switch (G__30094) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32706 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32706) : fn1.call(null,val_32706));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32706) : fn1.call(null,val_32706));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30101 = arguments.length;
switch (G__30101) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___32725 = n;
var x_32726 = (0);
while(true){
if((x_32726 < n__4613__auto___32725)){
(a[x_32726] = x_32726);

var G__32732 = (x_32726 + (1));
x_32726 = G__32732;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30115 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30115 = (function (flag,meta30116){
this.flag = flag;
this.meta30116 = meta30116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30117,meta30116__$1){
var self__ = this;
var _30117__$1 = this;
return (new cljs.core.async.t_cljs$core$async30115(self__.flag,meta30116__$1));
}));

(cljs.core.async.t_cljs$core$async30115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30117){
var self__ = this;
var _30117__$1 = this;
return self__.meta30116;
}));

(cljs.core.async.t_cljs$core$async30115.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30115.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30115.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30115.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30116","meta30116",-637466473,null)], null);
}));

(cljs.core.async.t_cljs$core$async30115.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30115");

(cljs.core.async.t_cljs$core$async30115.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30115");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30115.
 */
cljs.core.async.__GT_t_cljs$core$async30115 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30115(flag__$1,meta30116){
return (new cljs.core.async.t_cljs$core$async30115(flag__$1,meta30116));
});

}

return (new cljs.core.async.t_cljs$core$async30115(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30124 = (function (flag,cb,meta30125){
this.flag = flag;
this.cb = cb;
this.meta30125 = meta30125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30126,meta30125__$1){
var self__ = this;
var _30126__$1 = this;
return (new cljs.core.async.t_cljs$core$async30124(self__.flag,self__.cb,meta30125__$1));
}));

(cljs.core.async.t_cljs$core$async30124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30126){
var self__ = this;
var _30126__$1 = this;
return self__.meta30125;
}));

(cljs.core.async.t_cljs$core$async30124.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30124.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30125","meta30125",1716462200,null)], null);
}));

(cljs.core.async.t_cljs$core$async30124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30124");

(cljs.core.async.t_cljs$core$async30124.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30124.
 */
cljs.core.async.__GT_t_cljs$core$async30124 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30124(flag__$1,cb__$1,meta30125){
return (new cljs.core.async.t_cljs$core$async30124(flag__$1,cb__$1,meta30125));
});

}

return (new cljs.core.async.t_cljs$core$async30124(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30149_SHARP_){
var G__30159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30149_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30159) : fret.call(null,G__30159));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30150_SHARP_){
var G__30160 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30150_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30160) : fret.call(null,G__30160));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32760 = (i + (1));
i = G__32760;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32766 = arguments.length;
var i__4737__auto___32767 = (0);
while(true){
if((i__4737__auto___32767 < len__4736__auto___32766)){
args__4742__auto__.push((arguments[i__4737__auto___32767]));

var G__32768 = (i__4737__auto___32767 + (1));
i__4737__auto___32767 = G__32768;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30172){
var map__30173 = p__30172;
var map__30173__$1 = (((((!((map__30173 == null))))?(((((map__30173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30173):map__30173);
var opts = map__30173__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30167){
var G__30168 = cljs.core.first(seq30167);
var seq30167__$1 = cljs.core.next(seq30167);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30168,seq30167__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30194 = arguments.length;
switch (G__30194) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29903__auto___32777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29904__auto__ = (function (){var switch__29761__auto__ = (function (state_30243){
var state_val_30245 = (state_30243[(1)]);
if((state_val_30245 === (7))){
var inst_30237 = (state_30243[(2)]);
var state_30243__$1 = state_30243;
var statearr_30256_32778 = state_30243__$1;
(statearr_30256_32778[(2)] = inst_30237);

(statearr_30256_32778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30245 === (1))){
var state_30243__$1 = state_30243;
var statearr_30259_32781 = state_30243__$1;
(statearr_30259_32781[(2)] = null);

(statearr_30259_32781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30245 === (4))){
var inst_30202 = (state_30243[(7)]);
var inst_30202__$1 = (state_30243[(2)]);
var inst_30204 = (inst_30202__$1 == null);
var state_30243__$1 = (function (){var statearr_30262 = state_30243;
(statearr_30262[(7)] = inst_30202__$1);

return statearr_30262;
})();
if(cljs.core.truth_(inst_30204)){
var statearr_30267_32784 = state_30243__$1;
(statearr_30267_32784[(1)] = (5));

} else {
var statearr_30269_32787 = state_30243__$1;
(statearr_30269_32787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30245 === (13))){
var state_30243__$1 = state_30243;
var statearr_30271_32788 = state_30243__$1;
(statearr_30271_32788[(2)] = null);

(statearr_30271_32788[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30245 === (6))){
var inst_30202 = (state_30243[(7)]);
var state_30243__$1 = state_30243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30243__$1,(11),to,inst_30202);
} else {
if((state_val_30245 === (3))){
var inst_30239 = (state_30243[(2)]);
var state_30243__$1 = state_30243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30243__$1,inst_30239);
} else {
if((state_val_30245 === (12))){
var state_30243__$1 = state_30243;
var statearr_30276_32800 = state_30243__$1;
(statearr_30276_32800[(2)] = null);

(statearr_30276_32800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30245 === (2))){
var state_30243__$1 = state_30243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30243__$1,(4),from);
} else {
if((state_val_30245 === (11))){
var inst_30226 = (state_30243[(2)]);
var state_30243__$1 = state_30243;
if(cljs.core.truth_(inst_30226)){
var statearr_30277_32804 = state_30243__$1;
(statearr_30277_32804[(1)] = (12));

} else {
var statearr_30278_32805 = state_30243__$1;
(statearr_30278_32805[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30245 === (9))){
var state_30243__$1 = state_30243;
var statearr_30279_32806 = state_30243__$1;
(statearr_30279_32806[(2)] = null);

(statearr_30279_32806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30245 === (5))){
var state_30243__$1 = state_30243;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30285_32807 = state_30243__$1;
(statearr_30285_32807[(1)] = (8));

} else {
var statearr_30286_32808 = state_30243__$1;
(statearr_30286_32808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30245 === (14))){
var inst_30235 = (state_30243[(2)]);
var state_30243__$1 = state_30243;
var statearr_30287_32813 = state_30243__$1;
(statearr_30287_32813[(2)] = inst_30235);

(statearr_30287_32813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30245 === (10))){
var inst_30223 = (state_30243[(2)]);
var state_30243__$1 = state_30243;
var statearr_30289_32814 = state_30243__$1;
(statearr_30289_32814[(2)] = inst_30223);

(statearr_30289_32814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30245 === (8))){
var inst_30209 = cljs.core.async.close_BANG_(to);
var state_30243__$1 = state_30243;
var statearr_30290_32819 = state_30243__$1;
(statearr_30290_32819[(2)] = inst_30209);

(statearr_30290_32819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29762__auto__ = null;
var cljs$core$async$state_machine__29762__auto____0 = (function (){
var statearr_30292 = [null,null,null,null,null,null,null,null];
(statearr_30292[(0)] = cljs$core$async$state_machine__29762__auto__);

(statearr_30292[(1)] = (1));

return statearr_30292;
});
var cljs$core$async$state_machine__29762__auto____1 = (function (state_30243){
while(true){
var ret_value__29763__auto__ = (function (){try{while(true){
var result__29764__auto__ = switch__29761__auto__(state_30243);
if(cljs.core.keyword_identical_QMARK_(result__29764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29764__auto__;
}
break;
}
}catch (e30293){var ex__29765__auto__ = e30293;
var statearr_30294_32824 = state_30243;
(statearr_30294_32824[(2)] = ex__29765__auto__);


if(cljs.core.seq((state_30243[(4)]))){
var statearr_30296_32825 = state_30243;
(statearr_30296_32825[(1)] = cljs.core.first((state_30243[(4)])));

} else {
throw ex__29765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32826 = state_30243;
state_30243 = G__32826;
continue;
} else {
return ret_value__29763__auto__;
}
break;
}
});
cljs$core$async$state_machine__29762__auto__ = function(state_30243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29762__auto____1.call(this,state_30243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29762__auto____0;
cljs$core$async$state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29762__auto____1;
return cljs$core$async$state_machine__29762__auto__;
})()
})();
var state__29905__auto__ = (function (){var statearr_30297 = f__29904__auto__();
(statearr_30297[(6)] = c__29903__auto___32777);

return statearr_30297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29905__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30308){
var vec__30310 = p__30308;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30310,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30310,(1),null);
var job = vec__30310;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29903__auto___32830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29904__auto__ = (function (){var switch__29761__auto__ = (function (state_30322){
var state_val_30323 = (state_30322[(1)]);
if((state_val_30323 === (1))){
var state_30322__$1 = state_30322;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30322__$1,(2),res,v);
} else {
if((state_val_30323 === (2))){
var inst_30319 = (state_30322[(2)]);
var inst_30320 = cljs.core.async.close_BANG_(res);
var state_30322__$1 = (function (){var statearr_30326 = state_30322;
(statearr_30326[(7)] = inst_30319);

return statearr_30326;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30322__$1,inst_30320);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____0 = (function (){
var statearr_30327 = [null,null,null,null,null,null,null,null];
(statearr_30327[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__);

(statearr_30327[(1)] = (1));

return statearr_30327;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____1 = (function (state_30322){
while(true){
var ret_value__29763__auto__ = (function (){try{while(true){
var result__29764__auto__ = switch__29761__auto__(state_30322);
if(cljs.core.keyword_identical_QMARK_(result__29764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29764__auto__;
}
break;
}
}catch (e30329){var ex__29765__auto__ = e30329;
var statearr_30331_32832 = state_30322;
(statearr_30331_32832[(2)] = ex__29765__auto__);


if(cljs.core.seq((state_30322[(4)]))){
var statearr_30336_32834 = state_30322;
(statearr_30336_32834[(1)] = cljs.core.first((state_30322[(4)])));

} else {
throw ex__29765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32835 = state_30322;
state_30322 = G__32835;
continue;
} else {
return ret_value__29763__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__ = function(state_30322){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____1.call(this,state_30322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__;
})()
})();
var state__29905__auto__ = (function (){var statearr_30337 = f__29904__auto__();
(statearr_30337[(6)] = c__29903__auto___32830);

return statearr_30337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29905__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30343){
var vec__30344 = p__30343;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30344,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30344,(1),null);
var job = vec__30344;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___32837 = n;
var __32838 = (0);
while(true){
if((__32838 < n__4613__auto___32837)){
var G__30349_32839 = type;
var G__30349_32840__$1 = (((G__30349_32839 instanceof cljs.core.Keyword))?G__30349_32839.fqn:null);
switch (G__30349_32840__$1) {
case "compute":
var c__29903__auto___32842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32838,c__29903__auto___32842,G__30349_32839,G__30349_32840__$1,n__4613__auto___32837,jobs,results,process,async){
return (function (){
var f__29904__auto__ = (function (){var switch__29761__auto__ = ((function (__32838,c__29903__auto___32842,G__30349_32839,G__30349_32840__$1,n__4613__auto___32837,jobs,results,process,async){
return (function (state_30364){
var state_val_30365 = (state_30364[(1)]);
if((state_val_30365 === (1))){
var state_30364__$1 = state_30364;
var statearr_30368_32845 = state_30364__$1;
(statearr_30368_32845[(2)] = null);

(statearr_30368_32845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (2))){
var state_30364__$1 = state_30364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30364__$1,(4),jobs);
} else {
if((state_val_30365 === (3))){
var inst_30362 = (state_30364[(2)]);
var state_30364__$1 = state_30364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30364__$1,inst_30362);
} else {
if((state_val_30365 === (4))){
var inst_30354 = (state_30364[(2)]);
var inst_30355 = process(inst_30354);
var state_30364__$1 = state_30364;
if(cljs.core.truth_(inst_30355)){
var statearr_30371_32848 = state_30364__$1;
(statearr_30371_32848[(1)] = (5));

} else {
var statearr_30372_32849 = state_30364__$1;
(statearr_30372_32849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (5))){
var state_30364__$1 = state_30364;
var statearr_30373_32850 = state_30364__$1;
(statearr_30373_32850[(2)] = null);

(statearr_30373_32850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (6))){
var state_30364__$1 = state_30364;
var statearr_30374_32852 = state_30364__$1;
(statearr_30374_32852[(2)] = null);

(statearr_30374_32852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (7))){
var inst_30360 = (state_30364[(2)]);
var state_30364__$1 = state_30364;
var statearr_30376_32853 = state_30364__$1;
(statearr_30376_32853[(2)] = inst_30360);

(statearr_30376_32853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32838,c__29903__auto___32842,G__30349_32839,G__30349_32840__$1,n__4613__auto___32837,jobs,results,process,async))
;
return ((function (__32838,switch__29761__auto__,c__29903__auto___32842,G__30349_32839,G__30349_32840__$1,n__4613__auto___32837,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____0 = (function (){
var statearr_30382 = [null,null,null,null,null,null,null];
(statearr_30382[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__);

(statearr_30382[(1)] = (1));

return statearr_30382;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____1 = (function (state_30364){
while(true){
var ret_value__29763__auto__ = (function (){try{while(true){
var result__29764__auto__ = switch__29761__auto__(state_30364);
if(cljs.core.keyword_identical_QMARK_(result__29764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29764__auto__;
}
break;
}
}catch (e30384){var ex__29765__auto__ = e30384;
var statearr_30385_32857 = state_30364;
(statearr_30385_32857[(2)] = ex__29765__auto__);


if(cljs.core.seq((state_30364[(4)]))){
var statearr_30386_32858 = state_30364;
(statearr_30386_32858[(1)] = cljs.core.first((state_30364[(4)])));

} else {
throw ex__29765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32859 = state_30364;
state_30364 = G__32859;
continue;
} else {
return ret_value__29763__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__ = function(state_30364){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____1.call(this,state_30364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__;
})()
;})(__32838,switch__29761__auto__,c__29903__auto___32842,G__30349_32839,G__30349_32840__$1,n__4613__auto___32837,jobs,results,process,async))
})();
var state__29905__auto__ = (function (){var statearr_30387 = f__29904__auto__();
(statearr_30387[(6)] = c__29903__auto___32842);

return statearr_30387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29905__auto__);
});})(__32838,c__29903__auto___32842,G__30349_32839,G__30349_32840__$1,n__4613__auto___32837,jobs,results,process,async))
);


break;
case "async":
var c__29903__auto___32862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32838,c__29903__auto___32862,G__30349_32839,G__30349_32840__$1,n__4613__auto___32837,jobs,results,process,async){
return (function (){
var f__29904__auto__ = (function (){var switch__29761__auto__ = ((function (__32838,c__29903__auto___32862,G__30349_32839,G__30349_32840__$1,n__4613__auto___32837,jobs,results,process,async){
return (function (state_30400){
var state_val_30401 = (state_30400[(1)]);
if((state_val_30401 === (1))){
var state_30400__$1 = state_30400;
var statearr_30402_32866 = state_30400__$1;
(statearr_30402_32866[(2)] = null);

(statearr_30402_32866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30401 === (2))){
var state_30400__$1 = state_30400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30400__$1,(4),jobs);
} else {
if((state_val_30401 === (3))){
var inst_30398 = (state_30400[(2)]);
var state_30400__$1 = state_30400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30400__$1,inst_30398);
} else {
if((state_val_30401 === (4))){
var inst_30390 = (state_30400[(2)]);
var inst_30391 = async(inst_30390);
var state_30400__$1 = state_30400;
if(cljs.core.truth_(inst_30391)){
var statearr_30413_32870 = state_30400__$1;
(statearr_30413_32870[(1)] = (5));

} else {
var statearr_30414_32872 = state_30400__$1;
(statearr_30414_32872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30401 === (5))){
var state_30400__$1 = state_30400;
var statearr_30415_32874 = state_30400__$1;
(statearr_30415_32874[(2)] = null);

(statearr_30415_32874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30401 === (6))){
var state_30400__$1 = state_30400;
var statearr_30416_32877 = state_30400__$1;
(statearr_30416_32877[(2)] = null);

(statearr_30416_32877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30401 === (7))){
var inst_30396 = (state_30400[(2)]);
var state_30400__$1 = state_30400;
var statearr_30417_32879 = state_30400__$1;
(statearr_30417_32879[(2)] = inst_30396);

(statearr_30417_32879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32838,c__29903__auto___32862,G__30349_32839,G__30349_32840__$1,n__4613__auto___32837,jobs,results,process,async))
;
return ((function (__32838,switch__29761__auto__,c__29903__auto___32862,G__30349_32839,G__30349_32840__$1,n__4613__auto___32837,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____0 = (function (){
var statearr_30418 = [null,null,null,null,null,null,null];
(statearr_30418[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__);

(statearr_30418[(1)] = (1));

return statearr_30418;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____1 = (function (state_30400){
while(true){
var ret_value__29763__auto__ = (function (){try{while(true){
var result__29764__auto__ = switch__29761__auto__(state_30400);
if(cljs.core.keyword_identical_QMARK_(result__29764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29764__auto__;
}
break;
}
}catch (e30419){var ex__29765__auto__ = e30419;
var statearr_30420_32880 = state_30400;
(statearr_30420_32880[(2)] = ex__29765__auto__);


if(cljs.core.seq((state_30400[(4)]))){
var statearr_30421_32882 = state_30400;
(statearr_30421_32882[(1)] = cljs.core.first((state_30400[(4)])));

} else {
throw ex__29765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32885 = state_30400;
state_30400 = G__32885;
continue;
} else {
return ret_value__29763__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__ = function(state_30400){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____1.call(this,state_30400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__;
})()
;})(__32838,switch__29761__auto__,c__29903__auto___32862,G__30349_32839,G__30349_32840__$1,n__4613__auto___32837,jobs,results,process,async))
})();
var state__29905__auto__ = (function (){var statearr_30423 = f__29904__auto__();
(statearr_30423[(6)] = c__29903__auto___32862);

return statearr_30423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29905__auto__);
});})(__32838,c__29903__auto___32862,G__30349_32839,G__30349_32840__$1,n__4613__auto___32837,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30349_32840__$1)].join('')));

}

var G__32886 = (__32838 + (1));
__32838 = G__32886;
continue;
} else {
}
break;
}

var c__29903__auto___32887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29904__auto__ = (function (){var switch__29761__auto__ = (function (state_30450){
var state_val_30451 = (state_30450[(1)]);
if((state_val_30451 === (7))){
var inst_30446 = (state_30450[(2)]);
var state_30450__$1 = state_30450;
var statearr_30456_32888 = state_30450__$1;
(statearr_30456_32888[(2)] = inst_30446);

(statearr_30456_32888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (1))){
var state_30450__$1 = state_30450;
var statearr_30457_32889 = state_30450__$1;
(statearr_30457_32889[(2)] = null);

(statearr_30457_32889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (4))){
var inst_30428 = (state_30450[(7)]);
var inst_30428__$1 = (state_30450[(2)]);
var inst_30429 = (inst_30428__$1 == null);
var state_30450__$1 = (function (){var statearr_30458 = state_30450;
(statearr_30458[(7)] = inst_30428__$1);

return statearr_30458;
})();
if(cljs.core.truth_(inst_30429)){
var statearr_30459_32891 = state_30450__$1;
(statearr_30459_32891[(1)] = (5));

} else {
var statearr_30460_32892 = state_30450__$1;
(statearr_30460_32892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (6))){
var inst_30428 = (state_30450[(7)]);
var inst_30436 = (state_30450[(8)]);
var inst_30436__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30437 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30438 = [inst_30428,inst_30436__$1];
var inst_30439 = (new cljs.core.PersistentVector(null,2,(5),inst_30437,inst_30438,null));
var state_30450__$1 = (function (){var statearr_30461 = state_30450;
(statearr_30461[(8)] = inst_30436__$1);

return statearr_30461;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30450__$1,(8),jobs,inst_30439);
} else {
if((state_val_30451 === (3))){
var inst_30448 = (state_30450[(2)]);
var state_30450__$1 = state_30450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30450__$1,inst_30448);
} else {
if((state_val_30451 === (2))){
var state_30450__$1 = state_30450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30450__$1,(4),from);
} else {
if((state_val_30451 === (9))){
var inst_30443 = (state_30450[(2)]);
var state_30450__$1 = (function (){var statearr_30463 = state_30450;
(statearr_30463[(9)] = inst_30443);

return statearr_30463;
})();
var statearr_30465_32896 = state_30450__$1;
(statearr_30465_32896[(2)] = null);

(statearr_30465_32896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (5))){
var inst_30431 = cljs.core.async.close_BANG_(jobs);
var state_30450__$1 = state_30450;
var statearr_30468_32897 = state_30450__$1;
(statearr_30468_32897[(2)] = inst_30431);

(statearr_30468_32897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (8))){
var inst_30436 = (state_30450[(8)]);
var inst_30441 = (state_30450[(2)]);
var state_30450__$1 = (function (){var statearr_30469 = state_30450;
(statearr_30469[(10)] = inst_30441);

return statearr_30469;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30450__$1,(9),results,inst_30436);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____0 = (function (){
var statearr_30470 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30470[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__);

(statearr_30470[(1)] = (1));

return statearr_30470;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____1 = (function (state_30450){
while(true){
var ret_value__29763__auto__ = (function (){try{while(true){
var result__29764__auto__ = switch__29761__auto__(state_30450);
if(cljs.core.keyword_identical_QMARK_(result__29764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29764__auto__;
}
break;
}
}catch (e30474){var ex__29765__auto__ = e30474;
var statearr_30475_32902 = state_30450;
(statearr_30475_32902[(2)] = ex__29765__auto__);


if(cljs.core.seq((state_30450[(4)]))){
var statearr_30476_32903 = state_30450;
(statearr_30476_32903[(1)] = cljs.core.first((state_30450[(4)])));

} else {
throw ex__29765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32905 = state_30450;
state_30450 = G__32905;
continue;
} else {
return ret_value__29763__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__ = function(state_30450){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____1.call(this,state_30450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__;
})()
})();
var state__29905__auto__ = (function (){var statearr_30477 = f__29904__auto__();
(statearr_30477[(6)] = c__29903__auto___32887);

return statearr_30477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29905__auto__);
}));


var c__29903__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29904__auto__ = (function (){var switch__29761__auto__ = (function (state_30519){
var state_val_30520 = (state_30519[(1)]);
if((state_val_30520 === (7))){
var inst_30515 = (state_30519[(2)]);
var state_30519__$1 = state_30519;
var statearr_30523_32907 = state_30519__$1;
(statearr_30523_32907[(2)] = inst_30515);

(statearr_30523_32907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (20))){
var state_30519__$1 = state_30519;
var statearr_30524_32908 = state_30519__$1;
(statearr_30524_32908[(2)] = null);

(statearr_30524_32908[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (1))){
var state_30519__$1 = state_30519;
var statearr_30526_32909 = state_30519__$1;
(statearr_30526_32909[(2)] = null);

(statearr_30526_32909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (4))){
var inst_30480 = (state_30519[(7)]);
var inst_30480__$1 = (state_30519[(2)]);
var inst_30481 = (inst_30480__$1 == null);
var state_30519__$1 = (function (){var statearr_30529 = state_30519;
(statearr_30529[(7)] = inst_30480__$1);

return statearr_30529;
})();
if(cljs.core.truth_(inst_30481)){
var statearr_30532_32910 = state_30519__$1;
(statearr_30532_32910[(1)] = (5));

} else {
var statearr_30533_32915 = state_30519__$1;
(statearr_30533_32915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (15))){
var inst_30493 = (state_30519[(8)]);
var state_30519__$1 = state_30519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30519__$1,(18),to,inst_30493);
} else {
if((state_val_30520 === (21))){
var inst_30510 = (state_30519[(2)]);
var state_30519__$1 = state_30519;
var statearr_30537_32916 = state_30519__$1;
(statearr_30537_32916[(2)] = inst_30510);

(statearr_30537_32916[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (13))){
var inst_30512 = (state_30519[(2)]);
var state_30519__$1 = (function (){var statearr_30539 = state_30519;
(statearr_30539[(9)] = inst_30512);

return statearr_30539;
})();
var statearr_30540_32918 = state_30519__$1;
(statearr_30540_32918[(2)] = null);

(statearr_30540_32918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (6))){
var inst_30480 = (state_30519[(7)]);
var state_30519__$1 = state_30519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30519__$1,(11),inst_30480);
} else {
if((state_val_30520 === (17))){
var inst_30505 = (state_30519[(2)]);
var state_30519__$1 = state_30519;
if(cljs.core.truth_(inst_30505)){
var statearr_30545_32920 = state_30519__$1;
(statearr_30545_32920[(1)] = (19));

} else {
var statearr_30546_32922 = state_30519__$1;
(statearr_30546_32922[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (3))){
var inst_30517 = (state_30519[(2)]);
var state_30519__$1 = state_30519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30519__$1,inst_30517);
} else {
if((state_val_30520 === (12))){
var inst_30490 = (state_30519[(10)]);
var state_30519__$1 = state_30519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30519__$1,(14),inst_30490);
} else {
if((state_val_30520 === (2))){
var state_30519__$1 = state_30519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30519__$1,(4),results);
} else {
if((state_val_30520 === (19))){
var state_30519__$1 = state_30519;
var statearr_30552_32925 = state_30519__$1;
(statearr_30552_32925[(2)] = null);

(statearr_30552_32925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (11))){
var inst_30490 = (state_30519[(2)]);
var state_30519__$1 = (function (){var statearr_30556 = state_30519;
(statearr_30556[(10)] = inst_30490);

return statearr_30556;
})();
var statearr_30557_32926 = state_30519__$1;
(statearr_30557_32926[(2)] = null);

(statearr_30557_32926[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (9))){
var state_30519__$1 = state_30519;
var statearr_30558_32927 = state_30519__$1;
(statearr_30558_32927[(2)] = null);

(statearr_30558_32927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (5))){
var state_30519__$1 = state_30519;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30562_32928 = state_30519__$1;
(statearr_30562_32928[(1)] = (8));

} else {
var statearr_30564_32929 = state_30519__$1;
(statearr_30564_32929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (14))){
var inst_30493 = (state_30519[(8)]);
var inst_30493__$1 = (state_30519[(2)]);
var inst_30497 = (inst_30493__$1 == null);
var inst_30498 = cljs.core.not(inst_30497);
var state_30519__$1 = (function (){var statearr_30565 = state_30519;
(statearr_30565[(8)] = inst_30493__$1);

return statearr_30565;
})();
if(inst_30498){
var statearr_30566_32930 = state_30519__$1;
(statearr_30566_32930[(1)] = (15));

} else {
var statearr_30567_32931 = state_30519__$1;
(statearr_30567_32931[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (16))){
var state_30519__$1 = state_30519;
var statearr_30572_32932 = state_30519__$1;
(statearr_30572_32932[(2)] = false);

(statearr_30572_32932[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (10))){
var inst_30487 = (state_30519[(2)]);
var state_30519__$1 = state_30519;
var statearr_30573_32935 = state_30519__$1;
(statearr_30573_32935[(2)] = inst_30487);

(statearr_30573_32935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (18))){
var inst_30502 = (state_30519[(2)]);
var state_30519__$1 = state_30519;
var statearr_30574_32936 = state_30519__$1;
(statearr_30574_32936[(2)] = inst_30502);

(statearr_30574_32936[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (8))){
var inst_30484 = cljs.core.async.close_BANG_(to);
var state_30519__$1 = state_30519;
var statearr_30578_32937 = state_30519__$1;
(statearr_30578_32937[(2)] = inst_30484);

(statearr_30578_32937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____0 = (function (){
var statearr_30580 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30580[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__);

(statearr_30580[(1)] = (1));

return statearr_30580;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____1 = (function (state_30519){
while(true){
var ret_value__29763__auto__ = (function (){try{while(true){
var result__29764__auto__ = switch__29761__auto__(state_30519);
if(cljs.core.keyword_identical_QMARK_(result__29764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29764__auto__;
}
break;
}
}catch (e30581){var ex__29765__auto__ = e30581;
var statearr_30582_32938 = state_30519;
(statearr_30582_32938[(2)] = ex__29765__auto__);


if(cljs.core.seq((state_30519[(4)]))){
var statearr_30586_32939 = state_30519;
(statearr_30586_32939[(1)] = cljs.core.first((state_30519[(4)])));

} else {
throw ex__29765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32941 = state_30519;
state_30519 = G__32941;
continue;
} else {
return ret_value__29763__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__ = function(state_30519){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____1.call(this,state_30519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29762__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29762__auto__;
})()
})();
var state__29905__auto__ = (function (){var statearr_30590 = f__29904__auto__();
(statearr_30590[(6)] = c__29903__auto__);

return statearr_30590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29905__auto__);
}));

return c__29903__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30597 = arguments.length;
switch (G__30597) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30602 = arguments.length;
switch (G__30602) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30604 = arguments.length;
switch (G__30604) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29903__auto___32966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29904__auto__ = (function (){var switch__29761__auto__ = (function (state_30636){
var state_val_30638 = (state_30636[(1)]);
if((state_val_30638 === (7))){
var inst_30631 = (state_30636[(2)]);
var state_30636__$1 = state_30636;
var statearr_30639_32971 = state_30636__$1;
(statearr_30639_32971[(2)] = inst_30631);

(statearr_30639_32971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30638 === (1))){
var state_30636__$1 = state_30636;
var statearr_30642_32972 = state_30636__$1;
(statearr_30642_32972[(2)] = null);

(statearr_30642_32972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30638 === (4))){
var inst_30607 = (state_30636[(7)]);
var inst_30607__$1 = (state_30636[(2)]);
var inst_30612 = (inst_30607__$1 == null);
var state_30636__$1 = (function (){var statearr_30646 = state_30636;
(statearr_30646[(7)] = inst_30607__$1);

return statearr_30646;
})();
if(cljs.core.truth_(inst_30612)){
var statearr_30647_32978 = state_30636__$1;
(statearr_30647_32978[(1)] = (5));

} else {
var statearr_30648_32980 = state_30636__$1;
(statearr_30648_32980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30638 === (13))){
var state_30636__$1 = state_30636;
var statearr_30649_32981 = state_30636__$1;
(statearr_30649_32981[(2)] = null);

(statearr_30649_32981[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30638 === (6))){
var inst_30607 = (state_30636[(7)]);
var inst_30617 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30607) : p.call(null,inst_30607));
var state_30636__$1 = state_30636;
if(cljs.core.truth_(inst_30617)){
var statearr_30650_32988 = state_30636__$1;
(statearr_30650_32988[(1)] = (9));

} else {
var statearr_30651_32989 = state_30636__$1;
(statearr_30651_32989[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30638 === (3))){
var inst_30633 = (state_30636[(2)]);
var state_30636__$1 = state_30636;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30636__$1,inst_30633);
} else {
if((state_val_30638 === (12))){
var state_30636__$1 = state_30636;
var statearr_30654_32993 = state_30636__$1;
(statearr_30654_32993[(2)] = null);

(statearr_30654_32993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30638 === (2))){
var state_30636__$1 = state_30636;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30636__$1,(4),ch);
} else {
if((state_val_30638 === (11))){
var inst_30607 = (state_30636[(7)]);
var inst_30621 = (state_30636[(2)]);
var state_30636__$1 = state_30636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30636__$1,(8),inst_30621,inst_30607);
} else {
if((state_val_30638 === (9))){
var state_30636__$1 = state_30636;
var statearr_30657_32994 = state_30636__$1;
(statearr_30657_32994[(2)] = tc);

(statearr_30657_32994[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30638 === (5))){
var inst_30614 = cljs.core.async.close_BANG_(tc);
var inst_30615 = cljs.core.async.close_BANG_(fc);
var state_30636__$1 = (function (){var statearr_30658 = state_30636;
(statearr_30658[(8)] = inst_30614);

return statearr_30658;
})();
var statearr_30659_32998 = state_30636__$1;
(statearr_30659_32998[(2)] = inst_30615);

(statearr_30659_32998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30638 === (14))){
var inst_30628 = (state_30636[(2)]);
var state_30636__$1 = state_30636;
var statearr_30660_33000 = state_30636__$1;
(statearr_30660_33000[(2)] = inst_30628);

(statearr_30660_33000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30638 === (10))){
var state_30636__$1 = state_30636;
var statearr_30661_33001 = state_30636__$1;
(statearr_30661_33001[(2)] = fc);

(statearr_30661_33001[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30638 === (8))){
var inst_30623 = (state_30636[(2)]);
var state_30636__$1 = state_30636;
if(cljs.core.truth_(inst_30623)){
var statearr_30662_33003 = state_30636__$1;
(statearr_30662_33003[(1)] = (12));

} else {
var statearr_30663_33005 = state_30636__$1;
(statearr_30663_33005[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29762__auto__ = null;
var cljs$core$async$state_machine__29762__auto____0 = (function (){
var statearr_30664 = [null,null,null,null,null,null,null,null,null];
(statearr_30664[(0)] = cljs$core$async$state_machine__29762__auto__);

(statearr_30664[(1)] = (1));

return statearr_30664;
});
var cljs$core$async$state_machine__29762__auto____1 = (function (state_30636){
while(true){
var ret_value__29763__auto__ = (function (){try{while(true){
var result__29764__auto__ = switch__29761__auto__(state_30636);
if(cljs.core.keyword_identical_QMARK_(result__29764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29764__auto__;
}
break;
}
}catch (e30665){var ex__29765__auto__ = e30665;
var statearr_30666_33009 = state_30636;
(statearr_30666_33009[(2)] = ex__29765__auto__);


if(cljs.core.seq((state_30636[(4)]))){
var statearr_30667_33011 = state_30636;
(statearr_30667_33011[(1)] = cljs.core.first((state_30636[(4)])));

} else {
throw ex__29765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33012 = state_30636;
state_30636 = G__33012;
continue;
} else {
return ret_value__29763__auto__;
}
break;
}
});
cljs$core$async$state_machine__29762__auto__ = function(state_30636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29762__auto____1.call(this,state_30636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29762__auto____0;
cljs$core$async$state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29762__auto____1;
return cljs$core$async$state_machine__29762__auto__;
})()
})();
var state__29905__auto__ = (function (){var statearr_30668 = f__29904__auto__();
(statearr_30668[(6)] = c__29903__auto___32966);

return statearr_30668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29905__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29903__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29904__auto__ = (function (){var switch__29761__auto__ = (function (state_30697){
var state_val_30698 = (state_30697[(1)]);
if((state_val_30698 === (7))){
var inst_30693 = (state_30697[(2)]);
var state_30697__$1 = state_30697;
var statearr_30704_33014 = state_30697__$1;
(statearr_30704_33014[(2)] = inst_30693);

(statearr_30704_33014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (1))){
var inst_30675 = init;
var inst_30676 = inst_30675;
var state_30697__$1 = (function (){var statearr_30705 = state_30697;
(statearr_30705[(7)] = inst_30676);

return statearr_30705;
})();
var statearr_30707_33016 = state_30697__$1;
(statearr_30707_33016[(2)] = null);

(statearr_30707_33016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (4))){
var inst_30679 = (state_30697[(8)]);
var inst_30679__$1 = (state_30697[(2)]);
var inst_30680 = (inst_30679__$1 == null);
var state_30697__$1 = (function (){var statearr_30725 = state_30697;
(statearr_30725[(8)] = inst_30679__$1);

return statearr_30725;
})();
if(cljs.core.truth_(inst_30680)){
var statearr_30726_33020 = state_30697__$1;
(statearr_30726_33020[(1)] = (5));

} else {
var statearr_30728_33021 = state_30697__$1;
(statearr_30728_33021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (6))){
var inst_30684 = (state_30697[(9)]);
var inst_30676 = (state_30697[(7)]);
var inst_30679 = (state_30697[(8)]);
var inst_30684__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30676,inst_30679) : f.call(null,inst_30676,inst_30679));
var inst_30685 = cljs.core.reduced_QMARK_(inst_30684__$1);
var state_30697__$1 = (function (){var statearr_30731 = state_30697;
(statearr_30731[(9)] = inst_30684__$1);

return statearr_30731;
})();
if(inst_30685){
var statearr_30734_33023 = state_30697__$1;
(statearr_30734_33023[(1)] = (8));

} else {
var statearr_30735_33024 = state_30697__$1;
(statearr_30735_33024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (3))){
var inst_30695 = (state_30697[(2)]);
var state_30697__$1 = state_30697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30697__$1,inst_30695);
} else {
if((state_val_30698 === (2))){
var state_30697__$1 = state_30697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30697__$1,(4),ch);
} else {
if((state_val_30698 === (9))){
var inst_30684 = (state_30697[(9)]);
var inst_30676 = inst_30684;
var state_30697__$1 = (function (){var statearr_30737 = state_30697;
(statearr_30737[(7)] = inst_30676);

return statearr_30737;
})();
var statearr_30739_33028 = state_30697__$1;
(statearr_30739_33028[(2)] = null);

(statearr_30739_33028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (5))){
var inst_30676 = (state_30697[(7)]);
var state_30697__$1 = state_30697;
var statearr_30740_33030 = state_30697__$1;
(statearr_30740_33030[(2)] = inst_30676);

(statearr_30740_33030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (10))){
var inst_30691 = (state_30697[(2)]);
var state_30697__$1 = state_30697;
var statearr_30745_33031 = state_30697__$1;
(statearr_30745_33031[(2)] = inst_30691);

(statearr_30745_33031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (8))){
var inst_30684 = (state_30697[(9)]);
var inst_30687 = cljs.core.deref(inst_30684);
var state_30697__$1 = state_30697;
var statearr_30747_33032 = state_30697__$1;
(statearr_30747_33032[(2)] = inst_30687);

(statearr_30747_33032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29762__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29762__auto____0 = (function (){
var statearr_30748 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30748[(0)] = cljs$core$async$reduce_$_state_machine__29762__auto__);

(statearr_30748[(1)] = (1));

return statearr_30748;
});
var cljs$core$async$reduce_$_state_machine__29762__auto____1 = (function (state_30697){
while(true){
var ret_value__29763__auto__ = (function (){try{while(true){
var result__29764__auto__ = switch__29761__auto__(state_30697);
if(cljs.core.keyword_identical_QMARK_(result__29764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29764__auto__;
}
break;
}
}catch (e30749){var ex__29765__auto__ = e30749;
var statearr_30750_33033 = state_30697;
(statearr_30750_33033[(2)] = ex__29765__auto__);


if(cljs.core.seq((state_30697[(4)]))){
var statearr_30753_33034 = state_30697;
(statearr_30753_33034[(1)] = cljs.core.first((state_30697[(4)])));

} else {
throw ex__29765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33035 = state_30697;
state_30697 = G__33035;
continue;
} else {
return ret_value__29763__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29762__auto__ = function(state_30697){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29762__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29762__auto____1.call(this,state_30697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29762__auto____0;
cljs$core$async$reduce_$_state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29762__auto____1;
return cljs$core$async$reduce_$_state_machine__29762__auto__;
})()
})();
var state__29905__auto__ = (function (){var statearr_30757 = f__29904__auto__();
(statearr_30757[(6)] = c__29903__auto__);

return statearr_30757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29905__auto__);
}));

return c__29903__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29903__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29904__auto__ = (function (){var switch__29761__auto__ = (function (state_30766){
var state_val_30767 = (state_30766[(1)]);
if((state_val_30767 === (1))){
var inst_30760 = cljs.core.async.reduce(f__$1,init,ch);
var state_30766__$1 = state_30766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30766__$1,(2),inst_30760);
} else {
if((state_val_30767 === (2))){
var inst_30762 = (state_30766[(2)]);
var inst_30764 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30762) : f__$1.call(null,inst_30762));
var state_30766__$1 = state_30766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30766__$1,inst_30764);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29762__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29762__auto____0 = (function (){
var statearr_30775 = [null,null,null,null,null,null,null];
(statearr_30775[(0)] = cljs$core$async$transduce_$_state_machine__29762__auto__);

(statearr_30775[(1)] = (1));

return statearr_30775;
});
var cljs$core$async$transduce_$_state_machine__29762__auto____1 = (function (state_30766){
while(true){
var ret_value__29763__auto__ = (function (){try{while(true){
var result__29764__auto__ = switch__29761__auto__(state_30766);
if(cljs.core.keyword_identical_QMARK_(result__29764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29764__auto__;
}
break;
}
}catch (e30779){var ex__29765__auto__ = e30779;
var statearr_30780_33043 = state_30766;
(statearr_30780_33043[(2)] = ex__29765__auto__);


if(cljs.core.seq((state_30766[(4)]))){
var statearr_30782_33044 = state_30766;
(statearr_30782_33044[(1)] = cljs.core.first((state_30766[(4)])));

} else {
throw ex__29765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33045 = state_30766;
state_30766 = G__33045;
continue;
} else {
return ret_value__29763__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29762__auto__ = function(state_30766){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29762__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29762__auto____1.call(this,state_30766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29762__auto____0;
cljs$core$async$transduce_$_state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29762__auto____1;
return cljs$core$async$transduce_$_state_machine__29762__auto__;
})()
})();
var state__29905__auto__ = (function (){var statearr_30785 = f__29904__auto__();
(statearr_30785[(6)] = c__29903__auto__);

return statearr_30785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29905__auto__);
}));

return c__29903__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30788 = arguments.length;
switch (G__30788) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29903__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29904__auto__ = (function (){var switch__29761__auto__ = (function (state_30821){
var state_val_30822 = (state_30821[(1)]);
if((state_val_30822 === (7))){
var inst_30802 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
var statearr_30823_33059 = state_30821__$1;
(statearr_30823_33059[(2)] = inst_30802);

(statearr_30823_33059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (1))){
var inst_30795 = cljs.core.seq(coll);
var inst_30796 = inst_30795;
var state_30821__$1 = (function (){var statearr_30824 = state_30821;
(statearr_30824[(7)] = inst_30796);

return statearr_30824;
})();
var statearr_30826_33063 = state_30821__$1;
(statearr_30826_33063[(2)] = null);

(statearr_30826_33063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (4))){
var inst_30796 = (state_30821[(7)]);
var inst_30800 = cljs.core.first(inst_30796);
var state_30821__$1 = state_30821;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30821__$1,(7),ch,inst_30800);
} else {
if((state_val_30822 === (13))){
var inst_30814 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
var statearr_30829_33068 = state_30821__$1;
(statearr_30829_33068[(2)] = inst_30814);

(statearr_30829_33068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (6))){
var inst_30805 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
if(cljs.core.truth_(inst_30805)){
var statearr_30834_33073 = state_30821__$1;
(statearr_30834_33073[(1)] = (8));

} else {
var statearr_30835_33074 = state_30821__$1;
(statearr_30835_33074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (3))){
var inst_30818 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30821__$1,inst_30818);
} else {
if((state_val_30822 === (12))){
var state_30821__$1 = state_30821;
var statearr_30838_33079 = state_30821__$1;
(statearr_30838_33079[(2)] = null);

(statearr_30838_33079[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (2))){
var inst_30796 = (state_30821[(7)]);
var state_30821__$1 = state_30821;
if(cljs.core.truth_(inst_30796)){
var statearr_30839_33080 = state_30821__$1;
(statearr_30839_33080[(1)] = (4));

} else {
var statearr_30840_33081 = state_30821__$1;
(statearr_30840_33081[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (11))){
var inst_30811 = cljs.core.async.close_BANG_(ch);
var state_30821__$1 = state_30821;
var statearr_30843_33082 = state_30821__$1;
(statearr_30843_33082[(2)] = inst_30811);

(statearr_30843_33082[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (9))){
var state_30821__$1 = state_30821;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30845_33083 = state_30821__$1;
(statearr_30845_33083[(1)] = (11));

} else {
var statearr_30846_33084 = state_30821__$1;
(statearr_30846_33084[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (5))){
var inst_30796 = (state_30821[(7)]);
var state_30821__$1 = state_30821;
var statearr_30847_33086 = state_30821__$1;
(statearr_30847_33086[(2)] = inst_30796);

(statearr_30847_33086[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (10))){
var inst_30816 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
var statearr_30848_33090 = state_30821__$1;
(statearr_30848_33090[(2)] = inst_30816);

(statearr_30848_33090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (8))){
var inst_30796 = (state_30821[(7)]);
var inst_30807 = cljs.core.next(inst_30796);
var inst_30796__$1 = inst_30807;
var state_30821__$1 = (function (){var statearr_30853 = state_30821;
(statearr_30853[(7)] = inst_30796__$1);

return statearr_30853;
})();
var statearr_30854_33096 = state_30821__$1;
(statearr_30854_33096[(2)] = null);

(statearr_30854_33096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29762__auto__ = null;
var cljs$core$async$state_machine__29762__auto____0 = (function (){
var statearr_30860 = [null,null,null,null,null,null,null,null];
(statearr_30860[(0)] = cljs$core$async$state_machine__29762__auto__);

(statearr_30860[(1)] = (1));

return statearr_30860;
});
var cljs$core$async$state_machine__29762__auto____1 = (function (state_30821){
while(true){
var ret_value__29763__auto__ = (function (){try{while(true){
var result__29764__auto__ = switch__29761__auto__(state_30821);
if(cljs.core.keyword_identical_QMARK_(result__29764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29764__auto__;
}
break;
}
}catch (e30862){var ex__29765__auto__ = e30862;
var statearr_30863_33099 = state_30821;
(statearr_30863_33099[(2)] = ex__29765__auto__);


if(cljs.core.seq((state_30821[(4)]))){
var statearr_30864_33100 = state_30821;
(statearr_30864_33100[(1)] = cljs.core.first((state_30821[(4)])));

} else {
throw ex__29765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33104 = state_30821;
state_30821 = G__33104;
continue;
} else {
return ret_value__29763__auto__;
}
break;
}
});
cljs$core$async$state_machine__29762__auto__ = function(state_30821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29762__auto____1.call(this,state_30821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29762__auto____0;
cljs$core$async$state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29762__auto____1;
return cljs$core$async$state_machine__29762__auto__;
})()
})();
var state__29905__auto__ = (function (){var statearr_30869 = f__29904__auto__();
(statearr_30869[(6)] = c__29903__auto__);

return statearr_30869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29905__auto__);
}));

return c__29903__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33109 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33109(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33116 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33116(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33117 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33117(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33118 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33118(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30898 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30898 = (function (ch,cs,meta30899){
this.ch = ch;
this.cs = cs;
this.meta30899 = meta30899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30900,meta30899__$1){
var self__ = this;
var _30900__$1 = this;
return (new cljs.core.async.t_cljs$core$async30898(self__.ch,self__.cs,meta30899__$1));
}));

(cljs.core.async.t_cljs$core$async30898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30900){
var self__ = this;
var _30900__$1 = this;
return self__.meta30899;
}));

(cljs.core.async.t_cljs$core$async30898.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30898.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30898.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30898.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30898.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30898.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30899","meta30899",-663134514,null)], null);
}));

(cljs.core.async.t_cljs$core$async30898.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30898");

(cljs.core.async.t_cljs$core$async30898.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30898");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30898.
 */
cljs.core.async.__GT_t_cljs$core$async30898 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30898(ch__$1,cs__$1,meta30899){
return (new cljs.core.async.t_cljs$core$async30898(ch__$1,cs__$1,meta30899));
});

}

return (new cljs.core.async.t_cljs$core$async30898(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29903__auto___33138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29904__auto__ = (function (){var switch__29761__auto__ = (function (state_31058){
var state_val_31059 = (state_31058[(1)]);
if((state_val_31059 === (7))){
var inst_31053 = (state_31058[(2)]);
var state_31058__$1 = state_31058;
var statearr_31060_33139 = state_31058__$1;
(statearr_31060_33139[(2)] = inst_31053);

(statearr_31060_33139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (20))){
var inst_30952 = (state_31058[(7)]);
var inst_30964 = cljs.core.first(inst_30952);
var inst_30965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30964,(0),null);
var inst_30966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30964,(1),null);
var state_31058__$1 = (function (){var statearr_31066 = state_31058;
(statearr_31066[(8)] = inst_30965);

return statearr_31066;
})();
if(cljs.core.truth_(inst_30966)){
var statearr_31067_33140 = state_31058__$1;
(statearr_31067_33140[(1)] = (22));

} else {
var statearr_31068_33141 = state_31058__$1;
(statearr_31068_33141[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (27))){
var inst_30921 = (state_31058[(9)]);
var inst_31006 = (state_31058[(10)]);
var inst_31001 = (state_31058[(11)]);
var inst_30999 = (state_31058[(12)]);
var inst_31006__$1 = cljs.core._nth(inst_30999,inst_31001);
var inst_31008 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31006__$1,inst_30921,done);
var state_31058__$1 = (function (){var statearr_31070 = state_31058;
(statearr_31070[(10)] = inst_31006__$1);

return statearr_31070;
})();
if(cljs.core.truth_(inst_31008)){
var statearr_31071_33142 = state_31058__$1;
(statearr_31071_33142[(1)] = (30));

} else {
var statearr_31072_33143 = state_31058__$1;
(statearr_31072_33143[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (1))){
var state_31058__$1 = state_31058;
var statearr_31073_33144 = state_31058__$1;
(statearr_31073_33144[(2)] = null);

(statearr_31073_33144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (24))){
var inst_30952 = (state_31058[(7)]);
var inst_30974 = (state_31058[(2)]);
var inst_30975 = cljs.core.next(inst_30952);
var inst_30930 = inst_30975;
var inst_30931 = null;
var inst_30932 = (0);
var inst_30933 = (0);
var state_31058__$1 = (function (){var statearr_31074 = state_31058;
(statearr_31074[(13)] = inst_30931);

(statearr_31074[(14)] = inst_30930);

(statearr_31074[(15)] = inst_30933);

(statearr_31074[(16)] = inst_30974);

(statearr_31074[(17)] = inst_30932);

return statearr_31074;
})();
var statearr_31075_33145 = state_31058__$1;
(statearr_31075_33145[(2)] = null);

(statearr_31075_33145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (39))){
var state_31058__$1 = state_31058;
var statearr_31079_33150 = state_31058__$1;
(statearr_31079_33150[(2)] = null);

(statearr_31079_33150[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (4))){
var inst_30921 = (state_31058[(9)]);
var inst_30921__$1 = (state_31058[(2)]);
var inst_30922 = (inst_30921__$1 == null);
var state_31058__$1 = (function (){var statearr_31080 = state_31058;
(statearr_31080[(9)] = inst_30921__$1);

return statearr_31080;
})();
if(cljs.core.truth_(inst_30922)){
var statearr_31081_33155 = state_31058__$1;
(statearr_31081_33155[(1)] = (5));

} else {
var statearr_31082_33156 = state_31058__$1;
(statearr_31082_33156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (15))){
var inst_30931 = (state_31058[(13)]);
var inst_30930 = (state_31058[(14)]);
var inst_30933 = (state_31058[(15)]);
var inst_30932 = (state_31058[(17)]);
var inst_30948 = (state_31058[(2)]);
var inst_30949 = (inst_30933 + (1));
var tmp31076 = inst_30931;
var tmp31077 = inst_30930;
var tmp31078 = inst_30932;
var inst_30930__$1 = tmp31077;
var inst_30931__$1 = tmp31076;
var inst_30932__$1 = tmp31078;
var inst_30933__$1 = inst_30949;
var state_31058__$1 = (function (){var statearr_31083 = state_31058;
(statearr_31083[(13)] = inst_30931__$1);

(statearr_31083[(14)] = inst_30930__$1);

(statearr_31083[(15)] = inst_30933__$1);

(statearr_31083[(18)] = inst_30948);

(statearr_31083[(17)] = inst_30932__$1);

return statearr_31083;
})();
var statearr_31086_33162 = state_31058__$1;
(statearr_31086_33162[(2)] = null);

(statearr_31086_33162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (21))){
var inst_30978 = (state_31058[(2)]);
var state_31058__$1 = state_31058;
var statearr_31090_33163 = state_31058__$1;
(statearr_31090_33163[(2)] = inst_30978);

(statearr_31090_33163[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (31))){
var inst_31006 = (state_31058[(10)]);
var inst_31011 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31006);
var state_31058__$1 = state_31058;
var statearr_31096_33165 = state_31058__$1;
(statearr_31096_33165[(2)] = inst_31011);

(statearr_31096_33165[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (32))){
var inst_31000 = (state_31058[(19)]);
var inst_30998 = (state_31058[(20)]);
var inst_31001 = (state_31058[(11)]);
var inst_30999 = (state_31058[(12)]);
var inst_31013 = (state_31058[(2)]);
var inst_31014 = (inst_31001 + (1));
var tmp31087 = inst_31000;
var tmp31088 = inst_30998;
var tmp31089 = inst_30999;
var inst_30998__$1 = tmp31088;
var inst_30999__$1 = tmp31089;
var inst_31000__$1 = tmp31087;
var inst_31001__$1 = inst_31014;
var state_31058__$1 = (function (){var statearr_31097 = state_31058;
(statearr_31097[(19)] = inst_31000__$1);

(statearr_31097[(21)] = inst_31013);

(statearr_31097[(20)] = inst_30998__$1);

(statearr_31097[(11)] = inst_31001__$1);

(statearr_31097[(12)] = inst_30999__$1);

return statearr_31097;
})();
var statearr_31098_33173 = state_31058__$1;
(statearr_31098_33173[(2)] = null);

(statearr_31098_33173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (40))){
var inst_31026 = (state_31058[(22)]);
var inst_31030 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31026);
var state_31058__$1 = state_31058;
var statearr_31099_33174 = state_31058__$1;
(statearr_31099_33174[(2)] = inst_31030);

(statearr_31099_33174[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (33))){
var inst_31017 = (state_31058[(23)]);
var inst_31019 = cljs.core.chunked_seq_QMARK_(inst_31017);
var state_31058__$1 = state_31058;
if(inst_31019){
var statearr_31100_33177 = state_31058__$1;
(statearr_31100_33177[(1)] = (36));

} else {
var statearr_31101_33179 = state_31058__$1;
(statearr_31101_33179[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (13))){
var inst_30942 = (state_31058[(24)]);
var inst_30945 = cljs.core.async.close_BANG_(inst_30942);
var state_31058__$1 = state_31058;
var statearr_31103_33180 = state_31058__$1;
(statearr_31103_33180[(2)] = inst_30945);

(statearr_31103_33180[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (22))){
var inst_30965 = (state_31058[(8)]);
var inst_30971 = cljs.core.async.close_BANG_(inst_30965);
var state_31058__$1 = state_31058;
var statearr_31106_33181 = state_31058__$1;
(statearr_31106_33181[(2)] = inst_30971);

(statearr_31106_33181[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (36))){
var inst_31017 = (state_31058[(23)]);
var inst_31021 = cljs.core.chunk_first(inst_31017);
var inst_31022 = cljs.core.chunk_rest(inst_31017);
var inst_31023 = cljs.core.count(inst_31021);
var inst_30998 = inst_31022;
var inst_30999 = inst_31021;
var inst_31000 = inst_31023;
var inst_31001 = (0);
var state_31058__$1 = (function (){var statearr_31110 = state_31058;
(statearr_31110[(19)] = inst_31000);

(statearr_31110[(20)] = inst_30998);

(statearr_31110[(11)] = inst_31001);

(statearr_31110[(12)] = inst_30999);

return statearr_31110;
})();
var statearr_31111_33185 = state_31058__$1;
(statearr_31111_33185[(2)] = null);

(statearr_31111_33185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (41))){
var inst_31017 = (state_31058[(23)]);
var inst_31032 = (state_31058[(2)]);
var inst_31033 = cljs.core.next(inst_31017);
var inst_30998 = inst_31033;
var inst_30999 = null;
var inst_31000 = (0);
var inst_31001 = (0);
var state_31058__$1 = (function (){var statearr_31112 = state_31058;
(statearr_31112[(19)] = inst_31000);

(statearr_31112[(25)] = inst_31032);

(statearr_31112[(20)] = inst_30998);

(statearr_31112[(11)] = inst_31001);

(statearr_31112[(12)] = inst_30999);

return statearr_31112;
})();
var statearr_31113_33186 = state_31058__$1;
(statearr_31113_33186[(2)] = null);

(statearr_31113_33186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (43))){
var state_31058__$1 = state_31058;
var statearr_31115_33188 = state_31058__$1;
(statearr_31115_33188[(2)] = null);

(statearr_31115_33188[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (29))){
var inst_31041 = (state_31058[(2)]);
var state_31058__$1 = state_31058;
var statearr_31117_33191 = state_31058__$1;
(statearr_31117_33191[(2)] = inst_31041);

(statearr_31117_33191[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (44))){
var inst_31050 = (state_31058[(2)]);
var state_31058__$1 = (function (){var statearr_31118 = state_31058;
(statearr_31118[(26)] = inst_31050);

return statearr_31118;
})();
var statearr_31119_33195 = state_31058__$1;
(statearr_31119_33195[(2)] = null);

(statearr_31119_33195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (6))){
var inst_30989 = (state_31058[(27)]);
var inst_30988 = cljs.core.deref(cs);
var inst_30989__$1 = cljs.core.keys(inst_30988);
var inst_30991 = cljs.core.count(inst_30989__$1);
var inst_30992 = cljs.core.reset_BANG_(dctr,inst_30991);
var inst_30997 = cljs.core.seq(inst_30989__$1);
var inst_30998 = inst_30997;
var inst_30999 = null;
var inst_31000 = (0);
var inst_31001 = (0);
var state_31058__$1 = (function (){var statearr_31120 = state_31058;
(statearr_31120[(27)] = inst_30989__$1);

(statearr_31120[(28)] = inst_30992);

(statearr_31120[(19)] = inst_31000);

(statearr_31120[(20)] = inst_30998);

(statearr_31120[(11)] = inst_31001);

(statearr_31120[(12)] = inst_30999);

return statearr_31120;
})();
var statearr_31122_33200 = state_31058__$1;
(statearr_31122_33200[(2)] = null);

(statearr_31122_33200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (28))){
var inst_31017 = (state_31058[(23)]);
var inst_30998 = (state_31058[(20)]);
var inst_31017__$1 = cljs.core.seq(inst_30998);
var state_31058__$1 = (function (){var statearr_31123 = state_31058;
(statearr_31123[(23)] = inst_31017__$1);

return statearr_31123;
})();
if(inst_31017__$1){
var statearr_31125_33203 = state_31058__$1;
(statearr_31125_33203[(1)] = (33));

} else {
var statearr_31126_33204 = state_31058__$1;
(statearr_31126_33204[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (25))){
var inst_31000 = (state_31058[(19)]);
var inst_31001 = (state_31058[(11)]);
var inst_31003 = (inst_31001 < inst_31000);
var inst_31004 = inst_31003;
var state_31058__$1 = state_31058;
if(cljs.core.truth_(inst_31004)){
var statearr_31128_33205 = state_31058__$1;
(statearr_31128_33205[(1)] = (27));

} else {
var statearr_31130_33207 = state_31058__$1;
(statearr_31130_33207[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (34))){
var state_31058__$1 = state_31058;
var statearr_31131_33210 = state_31058__$1;
(statearr_31131_33210[(2)] = null);

(statearr_31131_33210[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (17))){
var state_31058__$1 = state_31058;
var statearr_31132_33211 = state_31058__$1;
(statearr_31132_33211[(2)] = null);

(statearr_31132_33211[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (3))){
var inst_31055 = (state_31058[(2)]);
var state_31058__$1 = state_31058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31058__$1,inst_31055);
} else {
if((state_val_31059 === (12))){
var inst_30983 = (state_31058[(2)]);
var state_31058__$1 = state_31058;
var statearr_31141_33212 = state_31058__$1;
(statearr_31141_33212[(2)] = inst_30983);

(statearr_31141_33212[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (2))){
var state_31058__$1 = state_31058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31058__$1,(4),ch);
} else {
if((state_val_31059 === (23))){
var state_31058__$1 = state_31058;
var statearr_31146_33216 = state_31058__$1;
(statearr_31146_33216[(2)] = null);

(statearr_31146_33216[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (35))){
var inst_31039 = (state_31058[(2)]);
var state_31058__$1 = state_31058;
var statearr_31148_33217 = state_31058__$1;
(statearr_31148_33217[(2)] = inst_31039);

(statearr_31148_33217[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (19))){
var inst_30952 = (state_31058[(7)]);
var inst_30956 = cljs.core.chunk_first(inst_30952);
var inst_30957 = cljs.core.chunk_rest(inst_30952);
var inst_30958 = cljs.core.count(inst_30956);
var inst_30930 = inst_30957;
var inst_30931 = inst_30956;
var inst_30932 = inst_30958;
var inst_30933 = (0);
var state_31058__$1 = (function (){var statearr_31159 = state_31058;
(statearr_31159[(13)] = inst_30931);

(statearr_31159[(14)] = inst_30930);

(statearr_31159[(15)] = inst_30933);

(statearr_31159[(17)] = inst_30932);

return statearr_31159;
})();
var statearr_31160_33220 = state_31058__$1;
(statearr_31160_33220[(2)] = null);

(statearr_31160_33220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (11))){
var inst_30952 = (state_31058[(7)]);
var inst_30930 = (state_31058[(14)]);
var inst_30952__$1 = cljs.core.seq(inst_30930);
var state_31058__$1 = (function (){var statearr_31166 = state_31058;
(statearr_31166[(7)] = inst_30952__$1);

return statearr_31166;
})();
if(inst_30952__$1){
var statearr_31167_33221 = state_31058__$1;
(statearr_31167_33221[(1)] = (16));

} else {
var statearr_31168_33222 = state_31058__$1;
(statearr_31168_33222[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (9))){
var inst_30985 = (state_31058[(2)]);
var state_31058__$1 = state_31058;
var statearr_31169_33223 = state_31058__$1;
(statearr_31169_33223[(2)] = inst_30985);

(statearr_31169_33223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (5))){
var inst_30928 = cljs.core.deref(cs);
var inst_30929 = cljs.core.seq(inst_30928);
var inst_30930 = inst_30929;
var inst_30931 = null;
var inst_30932 = (0);
var inst_30933 = (0);
var state_31058__$1 = (function (){var statearr_31170 = state_31058;
(statearr_31170[(13)] = inst_30931);

(statearr_31170[(14)] = inst_30930);

(statearr_31170[(15)] = inst_30933);

(statearr_31170[(17)] = inst_30932);

return statearr_31170;
})();
var statearr_31171_33227 = state_31058__$1;
(statearr_31171_33227[(2)] = null);

(statearr_31171_33227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (14))){
var state_31058__$1 = state_31058;
var statearr_31173_33231 = state_31058__$1;
(statearr_31173_33231[(2)] = null);

(statearr_31173_33231[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (45))){
var inst_31047 = (state_31058[(2)]);
var state_31058__$1 = state_31058;
var statearr_31174_33232 = state_31058__$1;
(statearr_31174_33232[(2)] = inst_31047);

(statearr_31174_33232[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (26))){
var inst_30989 = (state_31058[(27)]);
var inst_31043 = (state_31058[(2)]);
var inst_31044 = cljs.core.seq(inst_30989);
var state_31058__$1 = (function (){var statearr_31175 = state_31058;
(statearr_31175[(29)] = inst_31043);

return statearr_31175;
})();
if(inst_31044){
var statearr_31176_33236 = state_31058__$1;
(statearr_31176_33236[(1)] = (42));

} else {
var statearr_31177_33237 = state_31058__$1;
(statearr_31177_33237[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (16))){
var inst_30952 = (state_31058[(7)]);
var inst_30954 = cljs.core.chunked_seq_QMARK_(inst_30952);
var state_31058__$1 = state_31058;
if(inst_30954){
var statearr_31178_33238 = state_31058__$1;
(statearr_31178_33238[(1)] = (19));

} else {
var statearr_31179_33239 = state_31058__$1;
(statearr_31179_33239[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (38))){
var inst_31036 = (state_31058[(2)]);
var state_31058__$1 = state_31058;
var statearr_31180_33240 = state_31058__$1;
(statearr_31180_33240[(2)] = inst_31036);

(statearr_31180_33240[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (30))){
var state_31058__$1 = state_31058;
var statearr_31181_33241 = state_31058__$1;
(statearr_31181_33241[(2)] = null);

(statearr_31181_33241[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (10))){
var inst_30931 = (state_31058[(13)]);
var inst_30933 = (state_31058[(15)]);
var inst_30941 = cljs.core._nth(inst_30931,inst_30933);
var inst_30942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30941,(0),null);
var inst_30943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30941,(1),null);
var state_31058__$1 = (function (){var statearr_31182 = state_31058;
(statearr_31182[(24)] = inst_30942);

return statearr_31182;
})();
if(cljs.core.truth_(inst_30943)){
var statearr_31183_33242 = state_31058__$1;
(statearr_31183_33242[(1)] = (13));

} else {
var statearr_31184_33243 = state_31058__$1;
(statearr_31184_33243[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (18))){
var inst_30981 = (state_31058[(2)]);
var state_31058__$1 = state_31058;
var statearr_31185_33245 = state_31058__$1;
(statearr_31185_33245[(2)] = inst_30981);

(statearr_31185_33245[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (42))){
var state_31058__$1 = state_31058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31058__$1,(45),dchan);
} else {
if((state_val_31059 === (37))){
var inst_31017 = (state_31058[(23)]);
var inst_30921 = (state_31058[(9)]);
var inst_31026 = (state_31058[(22)]);
var inst_31026__$1 = cljs.core.first(inst_31017);
var inst_31027 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31026__$1,inst_30921,done);
var state_31058__$1 = (function (){var statearr_31190 = state_31058;
(statearr_31190[(22)] = inst_31026__$1);

return statearr_31190;
})();
if(cljs.core.truth_(inst_31027)){
var statearr_31194_33246 = state_31058__$1;
(statearr_31194_33246[(1)] = (39));

} else {
var statearr_31195_33247 = state_31058__$1;
(statearr_31195_33247[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (8))){
var inst_30933 = (state_31058[(15)]);
var inst_30932 = (state_31058[(17)]);
var inst_30935 = (inst_30933 < inst_30932);
var inst_30936 = inst_30935;
var state_31058__$1 = state_31058;
if(cljs.core.truth_(inst_30936)){
var statearr_31196_33248 = state_31058__$1;
(statearr_31196_33248[(1)] = (10));

} else {
var statearr_31197_33253 = state_31058__$1;
(statearr_31197_33253[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29762__auto__ = null;
var cljs$core$async$mult_$_state_machine__29762__auto____0 = (function (){
var statearr_31203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31203[(0)] = cljs$core$async$mult_$_state_machine__29762__auto__);

(statearr_31203[(1)] = (1));

return statearr_31203;
});
var cljs$core$async$mult_$_state_machine__29762__auto____1 = (function (state_31058){
while(true){
var ret_value__29763__auto__ = (function (){try{while(true){
var result__29764__auto__ = switch__29761__auto__(state_31058);
if(cljs.core.keyword_identical_QMARK_(result__29764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29764__auto__;
}
break;
}
}catch (e31204){var ex__29765__auto__ = e31204;
var statearr_31205_33254 = state_31058;
(statearr_31205_33254[(2)] = ex__29765__auto__);


if(cljs.core.seq((state_31058[(4)]))){
var statearr_31208_33255 = state_31058;
(statearr_31208_33255[(1)] = cljs.core.first((state_31058[(4)])));

} else {
throw ex__29765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33256 = state_31058;
state_31058 = G__33256;
continue;
} else {
return ret_value__29763__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29762__auto__ = function(state_31058){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29762__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29762__auto____1.call(this,state_31058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29762__auto____0;
cljs$core$async$mult_$_state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29762__auto____1;
return cljs$core$async$mult_$_state_machine__29762__auto__;
})()
})();
var state__29905__auto__ = (function (){var statearr_31209 = f__29904__auto__();
(statearr_31209[(6)] = c__29903__auto___33138);

return statearr_31209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29905__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31215 = arguments.length;
switch (G__31215) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33258 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33258(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33266 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33266(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33270 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33270(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33274 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33274(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33278 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33278(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33283 = arguments.length;
var i__4737__auto___33284 = (0);
while(true){
if((i__4737__auto___33284 < len__4736__auto___33283)){
args__4742__auto__.push((arguments[i__4737__auto___33284]));

var G__33285 = (i__4737__auto___33284 + (1));
i__4737__auto___33284 = G__33285;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31250){
var map__31251 = p__31250;
var map__31251__$1 = (((((!((map__31251 == null))))?(((((map__31251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31251):map__31251);
var opts = map__31251__$1;
var statearr_31255_33286 = state;
(statearr_31255_33286[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31256_33287 = state;
(statearr_31256_33287[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31257_33288 = state;
(statearr_31257_33288[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31245){
var G__31246 = cljs.core.first(seq31245);
var seq31245__$1 = cljs.core.next(seq31245);
var G__31247 = cljs.core.first(seq31245__$1);
var seq31245__$2 = cljs.core.next(seq31245__$1);
var G__31248 = cljs.core.first(seq31245__$2);
var seq31245__$3 = cljs.core.next(seq31245__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31246,G__31247,G__31248,seq31245__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31286 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31286 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31287){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31287 = meta31287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31288,meta31287__$1){
var self__ = this;
var _31288__$1 = this;
return (new cljs.core.async.t_cljs$core$async31286(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31287__$1));
}));

(cljs.core.async.t_cljs$core$async31286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31288){
var self__ = this;
var _31288__$1 = this;
return self__.meta31287;
}));

(cljs.core.async.t_cljs$core$async31286.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31286.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31286.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31286.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31286.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31286.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31286.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31286.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31287","meta31287",-482560313,null)], null);
}));

(cljs.core.async.t_cljs$core$async31286.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31286");

(cljs.core.async.t_cljs$core$async31286.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31286");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31286.
 */
cljs.core.async.__GT_t_cljs$core$async31286 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31286(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31287){
return (new cljs.core.async.t_cljs$core$async31286(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31287));
});

}

return (new cljs.core.async.t_cljs$core$async31286(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29903__auto___33295 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29904__auto__ = (function (){var switch__29761__auto__ = (function (state_31415){
var state_val_31416 = (state_31415[(1)]);
if((state_val_31416 === (7))){
var inst_31309 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
var statearr_31450_33296 = state_31415__$1;
(statearr_31450_33296[(2)] = inst_31309);

(statearr_31450_33296[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (20))){
var inst_31321 = (state_31415[(7)]);
var state_31415__$1 = state_31415;
var statearr_31452_33297 = state_31415__$1;
(statearr_31452_33297[(2)] = inst_31321);

(statearr_31452_33297[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (27))){
var state_31415__$1 = state_31415;
var statearr_31453_33306 = state_31415__$1;
(statearr_31453_33306[(2)] = null);

(statearr_31453_33306[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (1))){
var inst_31296 = (state_31415[(8)]);
var inst_31296__$1 = calc_state();
var inst_31298 = (inst_31296__$1 == null);
var inst_31299 = cljs.core.not(inst_31298);
var state_31415__$1 = (function (){var statearr_31456 = state_31415;
(statearr_31456[(8)] = inst_31296__$1);

return statearr_31456;
})();
if(inst_31299){
var statearr_31457_33307 = state_31415__$1;
(statearr_31457_33307[(1)] = (2));

} else {
var statearr_31458_33308 = state_31415__$1;
(statearr_31458_33308[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (24))){
var inst_31349 = (state_31415[(9)]);
var inst_31376 = (state_31415[(10)]);
var inst_31358 = (state_31415[(11)]);
var inst_31376__$1 = (inst_31349.cljs$core$IFn$_invoke$arity$1 ? inst_31349.cljs$core$IFn$_invoke$arity$1(inst_31358) : inst_31349.call(null,inst_31358));
var state_31415__$1 = (function (){var statearr_31460 = state_31415;
(statearr_31460[(10)] = inst_31376__$1);

return statearr_31460;
})();
if(cljs.core.truth_(inst_31376__$1)){
var statearr_31461_33310 = state_31415__$1;
(statearr_31461_33310[(1)] = (29));

} else {
var statearr_31463_33312 = state_31415__$1;
(statearr_31463_33312[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (4))){
var inst_31312 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
if(cljs.core.truth_(inst_31312)){
var statearr_31464_33317 = state_31415__$1;
(statearr_31464_33317[(1)] = (8));

} else {
var statearr_31465_33318 = state_31415__$1;
(statearr_31465_33318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (15))){
var inst_31341 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
if(cljs.core.truth_(inst_31341)){
var statearr_31466_33319 = state_31415__$1;
(statearr_31466_33319[(1)] = (19));

} else {
var statearr_31467_33320 = state_31415__$1;
(statearr_31467_33320[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (21))){
var inst_31348 = (state_31415[(12)]);
var inst_31348__$1 = (state_31415[(2)]);
var inst_31349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31348__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31348__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31348__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31415__$1 = (function (){var statearr_31470 = state_31415;
(statearr_31470[(12)] = inst_31348__$1);

(statearr_31470[(9)] = inst_31349);

(statearr_31470[(13)] = inst_31350);

return statearr_31470;
})();
return cljs.core.async.ioc_alts_BANG_(state_31415__$1,(22),inst_31351);
} else {
if((state_val_31416 === (31))){
var inst_31388 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
if(cljs.core.truth_(inst_31388)){
var statearr_31474_33321 = state_31415__$1;
(statearr_31474_33321[(1)] = (32));

} else {
var statearr_31475_33322 = state_31415__$1;
(statearr_31475_33322[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (32))){
var inst_31357 = (state_31415[(14)]);
var state_31415__$1 = state_31415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31415__$1,(35),out,inst_31357);
} else {
if((state_val_31416 === (33))){
var inst_31348 = (state_31415[(12)]);
var inst_31321 = inst_31348;
var state_31415__$1 = (function (){var statearr_31476 = state_31415;
(statearr_31476[(7)] = inst_31321);

return statearr_31476;
})();
var statearr_31477_33323 = state_31415__$1;
(statearr_31477_33323[(2)] = null);

(statearr_31477_33323[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (13))){
var inst_31321 = (state_31415[(7)]);
var inst_31329 = inst_31321.cljs$lang$protocol_mask$partition0$;
var inst_31330 = (inst_31329 & (64));
var inst_31332 = inst_31321.cljs$core$ISeq$;
var inst_31333 = (cljs.core.PROTOCOL_SENTINEL === inst_31332);
var inst_31334 = ((inst_31330) || (inst_31333));
var state_31415__$1 = state_31415;
if(cljs.core.truth_(inst_31334)){
var statearr_31479_33324 = state_31415__$1;
(statearr_31479_33324[(1)] = (16));

} else {
var statearr_31480_33326 = state_31415__$1;
(statearr_31480_33326[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (22))){
var inst_31357 = (state_31415[(14)]);
var inst_31358 = (state_31415[(11)]);
var inst_31356 = (state_31415[(2)]);
var inst_31357__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31356,(0),null);
var inst_31358__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31356,(1),null);
var inst_31359 = (inst_31357__$1 == null);
var inst_31360 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31358__$1,change);
var inst_31361 = ((inst_31359) || (inst_31360));
var state_31415__$1 = (function (){var statearr_31481 = state_31415;
(statearr_31481[(14)] = inst_31357__$1);

(statearr_31481[(11)] = inst_31358__$1);

return statearr_31481;
})();
if(cljs.core.truth_(inst_31361)){
var statearr_31482_33327 = state_31415__$1;
(statearr_31482_33327[(1)] = (23));

} else {
var statearr_31483_33329 = state_31415__$1;
(statearr_31483_33329[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (36))){
var inst_31348 = (state_31415[(12)]);
var inst_31321 = inst_31348;
var state_31415__$1 = (function (){var statearr_31484 = state_31415;
(statearr_31484[(7)] = inst_31321);

return statearr_31484;
})();
var statearr_31485_33330 = state_31415__$1;
(statearr_31485_33330[(2)] = null);

(statearr_31485_33330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (29))){
var inst_31376 = (state_31415[(10)]);
var state_31415__$1 = state_31415;
var statearr_31486_33332 = state_31415__$1;
(statearr_31486_33332[(2)] = inst_31376);

(statearr_31486_33332[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (6))){
var state_31415__$1 = state_31415;
var statearr_31487_33333 = state_31415__$1;
(statearr_31487_33333[(2)] = false);

(statearr_31487_33333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (28))){
var inst_31368 = (state_31415[(2)]);
var inst_31369 = calc_state();
var inst_31321 = inst_31369;
var state_31415__$1 = (function (){var statearr_31488 = state_31415;
(statearr_31488[(7)] = inst_31321);

(statearr_31488[(15)] = inst_31368);

return statearr_31488;
})();
var statearr_31489_33334 = state_31415__$1;
(statearr_31489_33334[(2)] = null);

(statearr_31489_33334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (25))){
var inst_31402 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
var statearr_31490_33338 = state_31415__$1;
(statearr_31490_33338[(2)] = inst_31402);

(statearr_31490_33338[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (34))){
var inst_31400 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
var statearr_31491_33339 = state_31415__$1;
(statearr_31491_33339[(2)] = inst_31400);

(statearr_31491_33339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (17))){
var state_31415__$1 = state_31415;
var statearr_31492_33341 = state_31415__$1;
(statearr_31492_33341[(2)] = false);

(statearr_31492_33341[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (3))){
var state_31415__$1 = state_31415;
var statearr_31493_33343 = state_31415__$1;
(statearr_31493_33343[(2)] = false);

(statearr_31493_33343[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (12))){
var inst_31408 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31415__$1,inst_31408);
} else {
if((state_val_31416 === (2))){
var inst_31296 = (state_31415[(8)]);
var inst_31301 = inst_31296.cljs$lang$protocol_mask$partition0$;
var inst_31302 = (inst_31301 & (64));
var inst_31303 = inst_31296.cljs$core$ISeq$;
var inst_31304 = (cljs.core.PROTOCOL_SENTINEL === inst_31303);
var inst_31305 = ((inst_31302) || (inst_31304));
var state_31415__$1 = state_31415;
if(cljs.core.truth_(inst_31305)){
var statearr_31494_33344 = state_31415__$1;
(statearr_31494_33344[(1)] = (5));

} else {
var statearr_31495_33345 = state_31415__$1;
(statearr_31495_33345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (23))){
var inst_31357 = (state_31415[(14)]);
var inst_31363 = (inst_31357 == null);
var state_31415__$1 = state_31415;
if(cljs.core.truth_(inst_31363)){
var statearr_31496_33346 = state_31415__$1;
(statearr_31496_33346[(1)] = (26));

} else {
var statearr_31497_33347 = state_31415__$1;
(statearr_31497_33347[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (35))){
var inst_31391 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
if(cljs.core.truth_(inst_31391)){
var statearr_31498_33349 = state_31415__$1;
(statearr_31498_33349[(1)] = (36));

} else {
var statearr_31499_33350 = state_31415__$1;
(statearr_31499_33350[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (19))){
var inst_31321 = (state_31415[(7)]);
var inst_31345 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31321);
var state_31415__$1 = state_31415;
var statearr_31500_33351 = state_31415__$1;
(statearr_31500_33351[(2)] = inst_31345);

(statearr_31500_33351[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (11))){
var inst_31321 = (state_31415[(7)]);
var inst_31325 = (inst_31321 == null);
var inst_31326 = cljs.core.not(inst_31325);
var state_31415__$1 = state_31415;
if(inst_31326){
var statearr_31501_33354 = state_31415__$1;
(statearr_31501_33354[(1)] = (13));

} else {
var statearr_31502_33355 = state_31415__$1;
(statearr_31502_33355[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (9))){
var inst_31296 = (state_31415[(8)]);
var state_31415__$1 = state_31415;
var statearr_31504_33357 = state_31415__$1;
(statearr_31504_33357[(2)] = inst_31296);

(statearr_31504_33357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (5))){
var state_31415__$1 = state_31415;
var statearr_31505_33358 = state_31415__$1;
(statearr_31505_33358[(2)] = true);

(statearr_31505_33358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (14))){
var state_31415__$1 = state_31415;
var statearr_31506_33359 = state_31415__$1;
(statearr_31506_33359[(2)] = false);

(statearr_31506_33359[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (26))){
var inst_31358 = (state_31415[(11)]);
var inst_31365 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31358);
var state_31415__$1 = state_31415;
var statearr_31508_33360 = state_31415__$1;
(statearr_31508_33360[(2)] = inst_31365);

(statearr_31508_33360[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (16))){
var state_31415__$1 = state_31415;
var statearr_31509_33361 = state_31415__$1;
(statearr_31509_33361[(2)] = true);

(statearr_31509_33361[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (38))){
var inst_31396 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
var statearr_31510_33362 = state_31415__$1;
(statearr_31510_33362[(2)] = inst_31396);

(statearr_31510_33362[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (30))){
var inst_31349 = (state_31415[(9)]);
var inst_31350 = (state_31415[(13)]);
var inst_31358 = (state_31415[(11)]);
var inst_31383 = cljs.core.empty_QMARK_(inst_31349);
var inst_31384 = (inst_31350.cljs$core$IFn$_invoke$arity$1 ? inst_31350.cljs$core$IFn$_invoke$arity$1(inst_31358) : inst_31350.call(null,inst_31358));
var inst_31385 = cljs.core.not(inst_31384);
var inst_31386 = ((inst_31383) && (inst_31385));
var state_31415__$1 = state_31415;
var statearr_31513_33363 = state_31415__$1;
(statearr_31513_33363[(2)] = inst_31386);

(statearr_31513_33363[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (10))){
var inst_31296 = (state_31415[(8)]);
var inst_31317 = (state_31415[(2)]);
var inst_31318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31317,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31317,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31317,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31321 = inst_31296;
var state_31415__$1 = (function (){var statearr_31514 = state_31415;
(statearr_31514[(16)] = inst_31318);

(statearr_31514[(17)] = inst_31319);

(statearr_31514[(18)] = inst_31320);

(statearr_31514[(7)] = inst_31321);

return statearr_31514;
})();
var statearr_31515_33367 = state_31415__$1;
(statearr_31515_33367[(2)] = null);

(statearr_31515_33367[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (18))){
var inst_31338 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
var statearr_31516_33372 = state_31415__$1;
(statearr_31516_33372[(2)] = inst_31338);

(statearr_31516_33372[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (37))){
var state_31415__$1 = state_31415;
var statearr_31517_33374 = state_31415__$1;
(statearr_31517_33374[(2)] = null);

(statearr_31517_33374[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (8))){
var inst_31296 = (state_31415[(8)]);
var inst_31314 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31296);
var state_31415__$1 = state_31415;
var statearr_31518_33375 = state_31415__$1;
(statearr_31518_33375[(2)] = inst_31314);

(statearr_31518_33375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29762__auto__ = null;
var cljs$core$async$mix_$_state_machine__29762__auto____0 = (function (){
var statearr_31519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31519[(0)] = cljs$core$async$mix_$_state_machine__29762__auto__);

(statearr_31519[(1)] = (1));

return statearr_31519;
});
var cljs$core$async$mix_$_state_machine__29762__auto____1 = (function (state_31415){
while(true){
var ret_value__29763__auto__ = (function (){try{while(true){
var result__29764__auto__ = switch__29761__auto__(state_31415);
if(cljs.core.keyword_identical_QMARK_(result__29764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29764__auto__;
}
break;
}
}catch (e31520){var ex__29765__auto__ = e31520;
var statearr_31521_33376 = state_31415;
(statearr_31521_33376[(2)] = ex__29765__auto__);


if(cljs.core.seq((state_31415[(4)]))){
var statearr_31522_33377 = state_31415;
(statearr_31522_33377[(1)] = cljs.core.first((state_31415[(4)])));

} else {
throw ex__29765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33379 = state_31415;
state_31415 = G__33379;
continue;
} else {
return ret_value__29763__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29762__auto__ = function(state_31415){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29762__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29762__auto____1.call(this,state_31415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29762__auto____0;
cljs$core$async$mix_$_state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29762__auto____1;
return cljs$core$async$mix_$_state_machine__29762__auto__;
})()
})();
var state__29905__auto__ = (function (){var statearr_31523 = f__29904__auto__();
(statearr_31523[(6)] = c__29903__auto___33295);

return statearr_31523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29905__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33385 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33385(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33387 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33387(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33389 = (function() {
var G__33390 = null;
var G__33390__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33390__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33390 = function(p,v){
switch(arguments.length){
case 1:
return G__33390__1.call(this,p);
case 2:
return G__33390__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33390.cljs$core$IFn$_invoke$arity$1 = G__33390__1;
G__33390.cljs$core$IFn$_invoke$arity$2 = G__33390__2;
return G__33390;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31538 = arguments.length;
switch (G__31538) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33389(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33389(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31541 = arguments.length;
switch (G__31541) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31539_SHARP_){
if(cljs.core.truth_((p1__31539_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31539_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31539_SHARP_.call(null,topic)))){
return p1__31539_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31539_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31542 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31542 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31543){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31543 = meta31543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31544,meta31543__$1){
var self__ = this;
var _31544__$1 = this;
return (new cljs.core.async.t_cljs$core$async31542(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31543__$1));
}));

(cljs.core.async.t_cljs$core$async31542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31544){
var self__ = this;
var _31544__$1 = this;
return self__.meta31543;
}));

(cljs.core.async.t_cljs$core$async31542.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31542.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31542.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31542.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31542.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31542.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31542.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31542.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31543","meta31543",386019511,null)], null);
}));

(cljs.core.async.t_cljs$core$async31542.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31542.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31542");

(cljs.core.async.t_cljs$core$async31542.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31542");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31542.
 */
cljs.core.async.__GT_t_cljs$core$async31542 = (function cljs$core$async$__GT_t_cljs$core$async31542(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31543){
return (new cljs.core.async.t_cljs$core$async31542(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31543));
});

}

return (new cljs.core.async.t_cljs$core$async31542(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29903__auto___33445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29904__auto__ = (function (){var switch__29761__auto__ = (function (state_31632){
var state_val_31633 = (state_31632[(1)]);
if((state_val_31633 === (7))){
var inst_31628 = (state_31632[(2)]);
var state_31632__$1 = state_31632;
var statearr_31634_33447 = state_31632__$1;
(statearr_31634_33447[(2)] = inst_31628);

(statearr_31634_33447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31633 === (20))){
var state_31632__$1 = state_31632;
var statearr_31639_33449 = state_31632__$1;
(statearr_31639_33449[(2)] = null);

(statearr_31639_33449[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31633 === (1))){
var state_31632__$1 = state_31632;
var statearr_31640_33450 = state_31632__$1;
(statearr_31640_33450[(2)] = null);

(statearr_31640_33450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31633 === (24))){
var inst_31611 = (state_31632[(7)]);
var inst_31620 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31611);
var state_31632__$1 = state_31632;
var statearr_31643_33451 = state_31632__$1;
(statearr_31643_33451[(2)] = inst_31620);

(statearr_31643_33451[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31633 === (4))){
var inst_31563 = (state_31632[(8)]);
var inst_31563__$1 = (state_31632[(2)]);
var inst_31564 = (inst_31563__$1 == null);
var state_31632__$1 = (function (){var statearr_31647 = state_31632;
(statearr_31647[(8)] = inst_31563__$1);

return statearr_31647;
})();
if(cljs.core.truth_(inst_31564)){
var statearr_31648_33453 = state_31632__$1;
(statearr_31648_33453[(1)] = (5));

} else {
var statearr_31649_33454 = state_31632__$1;
(statearr_31649_33454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31633 === (15))){
var inst_31605 = (state_31632[(2)]);
var state_31632__$1 = state_31632;
var statearr_31650_33457 = state_31632__$1;
(statearr_31650_33457[(2)] = inst_31605);

(statearr_31650_33457[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31633 === (21))){
var inst_31625 = (state_31632[(2)]);
var state_31632__$1 = (function (){var statearr_31651 = state_31632;
(statearr_31651[(9)] = inst_31625);

return statearr_31651;
})();
var statearr_31652_33459 = state_31632__$1;
(statearr_31652_33459[(2)] = null);

(statearr_31652_33459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31633 === (13))){
var inst_31587 = (state_31632[(10)]);
var inst_31589 = cljs.core.chunked_seq_QMARK_(inst_31587);
var state_31632__$1 = state_31632;
if(inst_31589){
var statearr_31653_33460 = state_31632__$1;
(statearr_31653_33460[(1)] = (16));

} else {
var statearr_31654_33461 = state_31632__$1;
(statearr_31654_33461[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31633 === (22))){
var inst_31617 = (state_31632[(2)]);
var state_31632__$1 = state_31632;
if(cljs.core.truth_(inst_31617)){
var statearr_31655_33462 = state_31632__$1;
(statearr_31655_33462[(1)] = (23));

} else {
var statearr_31656_33463 = state_31632__$1;
(statearr_31656_33463[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31633 === (6))){
var inst_31563 = (state_31632[(8)]);
var inst_31611 = (state_31632[(7)]);
var inst_31613 = (state_31632[(11)]);
var inst_31611__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31563) : topic_fn.call(null,inst_31563));
var inst_31612 = cljs.core.deref(mults);
var inst_31613__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31612,inst_31611__$1);
var state_31632__$1 = (function (){var statearr_31662 = state_31632;
(statearr_31662[(7)] = inst_31611__$1);

(statearr_31662[(11)] = inst_31613__$1);

return statearr_31662;
})();
if(cljs.core.truth_(inst_31613__$1)){
var statearr_31663_33464 = state_31632__$1;
(statearr_31663_33464[(1)] = (19));

} else {
var statearr_31664_33465 = state_31632__$1;
(statearr_31664_33465[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31633 === (25))){
var inst_31622 = (state_31632[(2)]);
var state_31632__$1 = state_31632;
var statearr_31665_33466 = state_31632__$1;
(statearr_31665_33466[(2)] = inst_31622);

(statearr_31665_33466[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31633 === (17))){
var inst_31587 = (state_31632[(10)]);
var inst_31596 = cljs.core.first(inst_31587);
var inst_31597 = cljs.core.async.muxch_STAR_(inst_31596);
var inst_31598 = cljs.core.async.close_BANG_(inst_31597);
var inst_31599 = cljs.core.next(inst_31587);
var inst_31573 = inst_31599;
var inst_31574 = null;
var inst_31575 = (0);
var inst_31576 = (0);
var state_31632__$1 = (function (){var statearr_31669 = state_31632;
(statearr_31669[(12)] = inst_31576);

(statearr_31669[(13)] = inst_31575);

(statearr_31669[(14)] = inst_31598);

(statearr_31669[(15)] = inst_31573);

(statearr_31669[(16)] = inst_31574);

return statearr_31669;
})();
var statearr_31670_33467 = state_31632__$1;
(statearr_31670_33467[(2)] = null);

(statearr_31670_33467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31633 === (3))){
var inst_31630 = (state_31632[(2)]);
var state_31632__$1 = state_31632;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31632__$1,inst_31630);
} else {
if((state_val_31633 === (12))){
var inst_31607 = (state_31632[(2)]);
var state_31632__$1 = state_31632;
var statearr_31671_33468 = state_31632__$1;
(statearr_31671_33468[(2)] = inst_31607);

(statearr_31671_33468[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31633 === (2))){
var state_31632__$1 = state_31632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31632__$1,(4),ch);
} else {
if((state_val_31633 === (23))){
var state_31632__$1 = state_31632;
var statearr_31672_33474 = state_31632__$1;
(statearr_31672_33474[(2)] = null);

(statearr_31672_33474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31633 === (19))){
var inst_31563 = (state_31632[(8)]);
var inst_31613 = (state_31632[(11)]);
var inst_31615 = cljs.core.async.muxch_STAR_(inst_31613);
var state_31632__$1 = state_31632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31632__$1,(22),inst_31615,inst_31563);
} else {
if((state_val_31633 === (11))){
var inst_31587 = (state_31632[(10)]);
var inst_31573 = (state_31632[(15)]);
var inst_31587__$1 = cljs.core.seq(inst_31573);
var state_31632__$1 = (function (){var statearr_31681 = state_31632;
(statearr_31681[(10)] = inst_31587__$1);

return statearr_31681;
})();
if(inst_31587__$1){
var statearr_31682_33483 = state_31632__$1;
(statearr_31682_33483[(1)] = (13));

} else {
var statearr_31683_33485 = state_31632__$1;
(statearr_31683_33485[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31633 === (9))){
var inst_31609 = (state_31632[(2)]);
var state_31632__$1 = state_31632;
var statearr_31685_33487 = state_31632__$1;
(statearr_31685_33487[(2)] = inst_31609);

(statearr_31685_33487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31633 === (5))){
var inst_31570 = cljs.core.deref(mults);
var inst_31571 = cljs.core.vals(inst_31570);
var inst_31572 = cljs.core.seq(inst_31571);
var inst_31573 = inst_31572;
var inst_31574 = null;
var inst_31575 = (0);
var inst_31576 = (0);
var state_31632__$1 = (function (){var statearr_31686 = state_31632;
(statearr_31686[(12)] = inst_31576);

(statearr_31686[(13)] = inst_31575);

(statearr_31686[(15)] = inst_31573);

(statearr_31686[(16)] = inst_31574);

return statearr_31686;
})();
var statearr_31687_33492 = state_31632__$1;
(statearr_31687_33492[(2)] = null);

(statearr_31687_33492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31633 === (14))){
var state_31632__$1 = state_31632;
var statearr_31691_33493 = state_31632__$1;
(statearr_31691_33493[(2)] = null);

(statearr_31691_33493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31633 === (16))){
var inst_31587 = (state_31632[(10)]);
var inst_31591 = cljs.core.chunk_first(inst_31587);
var inst_31592 = cljs.core.chunk_rest(inst_31587);
var inst_31593 = cljs.core.count(inst_31591);
var inst_31573 = inst_31592;
var inst_31574 = inst_31591;
var inst_31575 = inst_31593;
var inst_31576 = (0);
var state_31632__$1 = (function (){var statearr_31692 = state_31632;
(statearr_31692[(12)] = inst_31576);

(statearr_31692[(13)] = inst_31575);

(statearr_31692[(15)] = inst_31573);

(statearr_31692[(16)] = inst_31574);

return statearr_31692;
})();
var statearr_31693_33494 = state_31632__$1;
(statearr_31693_33494[(2)] = null);

(statearr_31693_33494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31633 === (10))){
var inst_31576 = (state_31632[(12)]);
var inst_31575 = (state_31632[(13)]);
var inst_31573 = (state_31632[(15)]);
var inst_31574 = (state_31632[(16)]);
var inst_31581 = cljs.core._nth(inst_31574,inst_31576);
var inst_31582 = cljs.core.async.muxch_STAR_(inst_31581);
var inst_31583 = cljs.core.async.close_BANG_(inst_31582);
var inst_31584 = (inst_31576 + (1));
var tmp31688 = inst_31575;
var tmp31689 = inst_31573;
var tmp31690 = inst_31574;
var inst_31573__$1 = tmp31689;
var inst_31574__$1 = tmp31690;
var inst_31575__$1 = tmp31688;
var inst_31576__$1 = inst_31584;
var state_31632__$1 = (function (){var statearr_31697 = state_31632;
(statearr_31697[(12)] = inst_31576__$1);

(statearr_31697[(13)] = inst_31575__$1);

(statearr_31697[(15)] = inst_31573__$1);

(statearr_31697[(16)] = inst_31574__$1);

(statearr_31697[(17)] = inst_31583);

return statearr_31697;
})();
var statearr_31699_33498 = state_31632__$1;
(statearr_31699_33498[(2)] = null);

(statearr_31699_33498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31633 === (18))){
var inst_31602 = (state_31632[(2)]);
var state_31632__$1 = state_31632;
var statearr_31700_33499 = state_31632__$1;
(statearr_31700_33499[(2)] = inst_31602);

(statearr_31700_33499[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31633 === (8))){
var inst_31576 = (state_31632[(12)]);
var inst_31575 = (state_31632[(13)]);
var inst_31578 = (inst_31576 < inst_31575);
var inst_31579 = inst_31578;
var state_31632__$1 = state_31632;
if(cljs.core.truth_(inst_31579)){
var statearr_31701_33501 = state_31632__$1;
(statearr_31701_33501[(1)] = (10));

} else {
var statearr_31702_33502 = state_31632__$1;
(statearr_31702_33502[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29762__auto__ = null;
var cljs$core$async$state_machine__29762__auto____0 = (function (){
var statearr_31703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31703[(0)] = cljs$core$async$state_machine__29762__auto__);

(statearr_31703[(1)] = (1));

return statearr_31703;
});
var cljs$core$async$state_machine__29762__auto____1 = (function (state_31632){
while(true){
var ret_value__29763__auto__ = (function (){try{while(true){
var result__29764__auto__ = switch__29761__auto__(state_31632);
if(cljs.core.keyword_identical_QMARK_(result__29764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29764__auto__;
}
break;
}
}catch (e31704){var ex__29765__auto__ = e31704;
var statearr_31705_33505 = state_31632;
(statearr_31705_33505[(2)] = ex__29765__auto__);


if(cljs.core.seq((state_31632[(4)]))){
var statearr_31706_33506 = state_31632;
(statearr_31706_33506[(1)] = cljs.core.first((state_31632[(4)])));

} else {
throw ex__29765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33508 = state_31632;
state_31632 = G__33508;
continue;
} else {
return ret_value__29763__auto__;
}
break;
}
});
cljs$core$async$state_machine__29762__auto__ = function(state_31632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29762__auto____1.call(this,state_31632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29762__auto____0;
cljs$core$async$state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29762__auto____1;
return cljs$core$async$state_machine__29762__auto__;
})()
})();
var state__29905__auto__ = (function (){var statearr_31707 = f__29904__auto__();
(statearr_31707[(6)] = c__29903__auto___33445);

return statearr_31707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29905__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31709 = arguments.length;
switch (G__31709) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31713 = arguments.length;
switch (G__31713) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31718 = arguments.length;
switch (G__31718) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29903__auto___33515 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29904__auto__ = (function (){var switch__29761__auto__ = (function (state_31798){
var state_val_31799 = (state_31798[(1)]);
if((state_val_31799 === (7))){
var state_31798__$1 = state_31798;
var statearr_31805_33516 = state_31798__$1;
(statearr_31805_33516[(2)] = null);

(statearr_31805_33516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (1))){
var state_31798__$1 = state_31798;
var statearr_31806_33520 = state_31798__$1;
(statearr_31806_33520[(2)] = null);

(statearr_31806_33520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (4))){
var inst_31722 = (state_31798[(7)]);
var inst_31728 = (state_31798[(8)]);
var inst_31730 = (inst_31728 < inst_31722);
var state_31798__$1 = state_31798;
if(cljs.core.truth_(inst_31730)){
var statearr_31807_33521 = state_31798__$1;
(statearr_31807_33521[(1)] = (6));

} else {
var statearr_31808_33522 = state_31798__$1;
(statearr_31808_33522[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (15))){
var inst_31784 = (state_31798[(9)]);
var inst_31789 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31784);
var state_31798__$1 = state_31798;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31798__$1,(17),out,inst_31789);
} else {
if((state_val_31799 === (13))){
var inst_31784 = (state_31798[(9)]);
var inst_31784__$1 = (state_31798[(2)]);
var inst_31785 = cljs.core.some(cljs.core.nil_QMARK_,inst_31784__$1);
var state_31798__$1 = (function (){var statearr_31809 = state_31798;
(statearr_31809[(9)] = inst_31784__$1);

return statearr_31809;
})();
if(cljs.core.truth_(inst_31785)){
var statearr_31810_33531 = state_31798__$1;
(statearr_31810_33531[(1)] = (14));

} else {
var statearr_31811_33532 = state_31798__$1;
(statearr_31811_33532[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (6))){
var state_31798__$1 = state_31798;
var statearr_31812_33533 = state_31798__$1;
(statearr_31812_33533[(2)] = null);

(statearr_31812_33533[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (17))){
var inst_31791 = (state_31798[(2)]);
var state_31798__$1 = (function (){var statearr_31827 = state_31798;
(statearr_31827[(10)] = inst_31791);

return statearr_31827;
})();
var statearr_31828_33534 = state_31798__$1;
(statearr_31828_33534[(2)] = null);

(statearr_31828_33534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (3))){
var inst_31796 = (state_31798[(2)]);
var state_31798__$1 = state_31798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31798__$1,inst_31796);
} else {
if((state_val_31799 === (12))){
var _ = (function (){var statearr_31829 = state_31798;
(statearr_31829[(4)] = cljs.core.rest((state_31798[(4)])));

return statearr_31829;
})();
var state_31798__$1 = state_31798;
var ex31826 = (state_31798__$1[(2)]);
var statearr_31830_33538 = state_31798__$1;
(statearr_31830_33538[(5)] = ex31826);


if((ex31826 instanceof Object)){
var statearr_31831_33539 = state_31798__$1;
(statearr_31831_33539[(1)] = (11));

(statearr_31831_33539[(5)] = null);

} else {
throw ex31826;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (2))){
var inst_31721 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31722 = cnt;
var inst_31728 = (0);
var state_31798__$1 = (function (){var statearr_31832 = state_31798;
(statearr_31832[(7)] = inst_31722);

(statearr_31832[(11)] = inst_31721);

(statearr_31832[(8)] = inst_31728);

return statearr_31832;
})();
var statearr_31833_33540 = state_31798__$1;
(statearr_31833_33540[(2)] = null);

(statearr_31833_33540[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (11))){
var inst_31761 = (state_31798[(2)]);
var inst_31763 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31798__$1 = (function (){var statearr_31834 = state_31798;
(statearr_31834[(12)] = inst_31761);

return statearr_31834;
})();
var statearr_31835_33544 = state_31798__$1;
(statearr_31835_33544[(2)] = inst_31763);

(statearr_31835_33544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (9))){
var inst_31728 = (state_31798[(8)]);
var _ = (function (){var statearr_31836 = state_31798;
(statearr_31836[(4)] = cljs.core.cons((12),(state_31798[(4)])));

return statearr_31836;
})();
var inst_31770 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31728) : chs__$1.call(null,inst_31728));
var inst_31771 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31728) : done.call(null,inst_31728));
var inst_31772 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31770,inst_31771);
var ___$1 = (function (){var statearr_31837 = state_31798;
(statearr_31837[(4)] = cljs.core.rest((state_31798[(4)])));

return statearr_31837;
})();
var state_31798__$1 = state_31798;
var statearr_31840_33545 = state_31798__$1;
(statearr_31840_33545[(2)] = inst_31772);

(statearr_31840_33545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (5))){
var inst_31782 = (state_31798[(2)]);
var state_31798__$1 = (function (){var statearr_31842 = state_31798;
(statearr_31842[(13)] = inst_31782);

return statearr_31842;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31798__$1,(13),dchan);
} else {
if((state_val_31799 === (14))){
var inst_31787 = cljs.core.async.close_BANG_(out);
var state_31798__$1 = state_31798;
var statearr_31843_33549 = state_31798__$1;
(statearr_31843_33549[(2)] = inst_31787);

(statearr_31843_33549[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (16))){
var inst_31794 = (state_31798[(2)]);
var state_31798__$1 = state_31798;
var statearr_31844_33568 = state_31798__$1;
(statearr_31844_33568[(2)] = inst_31794);

(statearr_31844_33568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (10))){
var inst_31728 = (state_31798[(8)]);
var inst_31775 = (state_31798[(2)]);
var inst_31776 = (inst_31728 + (1));
var inst_31728__$1 = inst_31776;
var state_31798__$1 = (function (){var statearr_31845 = state_31798;
(statearr_31845[(14)] = inst_31775);

(statearr_31845[(8)] = inst_31728__$1);

return statearr_31845;
})();
var statearr_31846_33570 = state_31798__$1;
(statearr_31846_33570[(2)] = null);

(statearr_31846_33570[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (8))){
var inst_31780 = (state_31798[(2)]);
var state_31798__$1 = state_31798;
var statearr_31847_33571 = state_31798__$1;
(statearr_31847_33571[(2)] = inst_31780);

(statearr_31847_33571[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29762__auto__ = null;
var cljs$core$async$state_machine__29762__auto____0 = (function (){
var statearr_31855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31855[(0)] = cljs$core$async$state_machine__29762__auto__);

(statearr_31855[(1)] = (1));

return statearr_31855;
});
var cljs$core$async$state_machine__29762__auto____1 = (function (state_31798){
while(true){
var ret_value__29763__auto__ = (function (){try{while(true){
var result__29764__auto__ = switch__29761__auto__(state_31798);
if(cljs.core.keyword_identical_QMARK_(result__29764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29764__auto__;
}
break;
}
}catch (e31856){var ex__29765__auto__ = e31856;
var statearr_31858_33573 = state_31798;
(statearr_31858_33573[(2)] = ex__29765__auto__);


if(cljs.core.seq((state_31798[(4)]))){
var statearr_31859_33581 = state_31798;
(statearr_31859_33581[(1)] = cljs.core.first((state_31798[(4)])));

} else {
throw ex__29765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33582 = state_31798;
state_31798 = G__33582;
continue;
} else {
return ret_value__29763__auto__;
}
break;
}
});
cljs$core$async$state_machine__29762__auto__ = function(state_31798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29762__auto____1.call(this,state_31798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29762__auto____0;
cljs$core$async$state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29762__auto____1;
return cljs$core$async$state_machine__29762__auto__;
})()
})();
var state__29905__auto__ = (function (){var statearr_31861 = f__29904__auto__();
(statearr_31861[(6)] = c__29903__auto___33515);

return statearr_31861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29905__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31868 = arguments.length;
switch (G__31868) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29903__auto___33584 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29904__auto__ = (function (){var switch__29761__auto__ = (function (state_31905){
var state_val_31906 = (state_31905[(1)]);
if((state_val_31906 === (7))){
var inst_31883 = (state_31905[(7)]);
var inst_31882 = (state_31905[(8)]);
var inst_31882__$1 = (state_31905[(2)]);
var inst_31883__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31882__$1,(0),null);
var inst_31884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31882__$1,(1),null);
var inst_31885 = (inst_31883__$1 == null);
var state_31905__$1 = (function (){var statearr_31910 = state_31905;
(statearr_31910[(7)] = inst_31883__$1);

(statearr_31910[(9)] = inst_31884);

(statearr_31910[(8)] = inst_31882__$1);

return statearr_31910;
})();
if(cljs.core.truth_(inst_31885)){
var statearr_31911_33593 = state_31905__$1;
(statearr_31911_33593[(1)] = (8));

} else {
var statearr_31912_33594 = state_31905__$1;
(statearr_31912_33594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (1))){
var inst_31872 = cljs.core.vec(chs);
var inst_31873 = inst_31872;
var state_31905__$1 = (function (){var statearr_31914 = state_31905;
(statearr_31914[(10)] = inst_31873);

return statearr_31914;
})();
var statearr_31915_33601 = state_31905__$1;
(statearr_31915_33601[(2)] = null);

(statearr_31915_33601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (4))){
var inst_31873 = (state_31905[(10)]);
var state_31905__$1 = state_31905;
return cljs.core.async.ioc_alts_BANG_(state_31905__$1,(7),inst_31873);
} else {
if((state_val_31906 === (6))){
var inst_31901 = (state_31905[(2)]);
var state_31905__$1 = state_31905;
var statearr_31916_33603 = state_31905__$1;
(statearr_31916_33603[(2)] = inst_31901);

(statearr_31916_33603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (3))){
var inst_31903 = (state_31905[(2)]);
var state_31905__$1 = state_31905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31905__$1,inst_31903);
} else {
if((state_val_31906 === (2))){
var inst_31873 = (state_31905[(10)]);
var inst_31875 = cljs.core.count(inst_31873);
var inst_31876 = (inst_31875 > (0));
var state_31905__$1 = state_31905;
if(cljs.core.truth_(inst_31876)){
var statearr_31918_33604 = state_31905__$1;
(statearr_31918_33604[(1)] = (4));

} else {
var statearr_31919_33605 = state_31905__$1;
(statearr_31919_33605[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (11))){
var inst_31873 = (state_31905[(10)]);
var inst_31894 = (state_31905[(2)]);
var tmp31917 = inst_31873;
var inst_31873__$1 = tmp31917;
var state_31905__$1 = (function (){var statearr_31920 = state_31905;
(statearr_31920[(10)] = inst_31873__$1);

(statearr_31920[(11)] = inst_31894);

return statearr_31920;
})();
var statearr_31921_33607 = state_31905__$1;
(statearr_31921_33607[(2)] = null);

(statearr_31921_33607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (9))){
var inst_31883 = (state_31905[(7)]);
var state_31905__$1 = state_31905;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31905__$1,(11),out,inst_31883);
} else {
if((state_val_31906 === (5))){
var inst_31899 = cljs.core.async.close_BANG_(out);
var state_31905__$1 = state_31905;
var statearr_31928_33608 = state_31905__$1;
(statearr_31928_33608[(2)] = inst_31899);

(statearr_31928_33608[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (10))){
var inst_31897 = (state_31905[(2)]);
var state_31905__$1 = state_31905;
var statearr_31934_33609 = state_31905__$1;
(statearr_31934_33609[(2)] = inst_31897);

(statearr_31934_33609[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (8))){
var inst_31883 = (state_31905[(7)]);
var inst_31884 = (state_31905[(9)]);
var inst_31873 = (state_31905[(10)]);
var inst_31882 = (state_31905[(8)]);
var inst_31887 = (function (){var cs = inst_31873;
var vec__31878 = inst_31882;
var v = inst_31883;
var c = inst_31884;
return (function (p1__31864_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31864_SHARP_);
});
})();
var inst_31888 = cljs.core.filterv(inst_31887,inst_31873);
var inst_31873__$1 = inst_31888;
var state_31905__$1 = (function (){var statearr_31936 = state_31905;
(statearr_31936[(10)] = inst_31873__$1);

return statearr_31936;
})();
var statearr_31937_33611 = state_31905__$1;
(statearr_31937_33611[(2)] = null);

(statearr_31937_33611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29762__auto__ = null;
var cljs$core$async$state_machine__29762__auto____0 = (function (){
var statearr_31938 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31938[(0)] = cljs$core$async$state_machine__29762__auto__);

(statearr_31938[(1)] = (1));

return statearr_31938;
});
var cljs$core$async$state_machine__29762__auto____1 = (function (state_31905){
while(true){
var ret_value__29763__auto__ = (function (){try{while(true){
var result__29764__auto__ = switch__29761__auto__(state_31905);
if(cljs.core.keyword_identical_QMARK_(result__29764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29764__auto__;
}
break;
}
}catch (e31939){var ex__29765__auto__ = e31939;
var statearr_31940_33613 = state_31905;
(statearr_31940_33613[(2)] = ex__29765__auto__);


if(cljs.core.seq((state_31905[(4)]))){
var statearr_31941_33614 = state_31905;
(statearr_31941_33614[(1)] = cljs.core.first((state_31905[(4)])));

} else {
throw ex__29765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33615 = state_31905;
state_31905 = G__33615;
continue;
} else {
return ret_value__29763__auto__;
}
break;
}
});
cljs$core$async$state_machine__29762__auto__ = function(state_31905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29762__auto____1.call(this,state_31905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29762__auto____0;
cljs$core$async$state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29762__auto____1;
return cljs$core$async$state_machine__29762__auto__;
})()
})();
var state__29905__auto__ = (function (){var statearr_31942 = f__29904__auto__();
(statearr_31942[(6)] = c__29903__auto___33584);

return statearr_31942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29905__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31944 = arguments.length;
switch (G__31944) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29903__auto___33620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29904__auto__ = (function (){var switch__29761__auto__ = (function (state_31968){
var state_val_31969 = (state_31968[(1)]);
if((state_val_31969 === (7))){
var inst_31950 = (state_31968[(7)]);
var inst_31950__$1 = (state_31968[(2)]);
var inst_31951 = (inst_31950__$1 == null);
var inst_31952 = cljs.core.not(inst_31951);
var state_31968__$1 = (function (){var statearr_31970 = state_31968;
(statearr_31970[(7)] = inst_31950__$1);

return statearr_31970;
})();
if(inst_31952){
var statearr_31971_33621 = state_31968__$1;
(statearr_31971_33621[(1)] = (8));

} else {
var statearr_31972_33623 = state_31968__$1;
(statearr_31972_33623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (1))){
var inst_31945 = (0);
var state_31968__$1 = (function (){var statearr_31973 = state_31968;
(statearr_31973[(8)] = inst_31945);

return statearr_31973;
})();
var statearr_31974_33625 = state_31968__$1;
(statearr_31974_33625[(2)] = null);

(statearr_31974_33625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (4))){
var state_31968__$1 = state_31968;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31968__$1,(7),ch);
} else {
if((state_val_31969 === (6))){
var inst_31963 = (state_31968[(2)]);
var state_31968__$1 = state_31968;
var statearr_31975_33626 = state_31968__$1;
(statearr_31975_33626[(2)] = inst_31963);

(statearr_31975_33626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (3))){
var inst_31965 = (state_31968[(2)]);
var inst_31966 = cljs.core.async.close_BANG_(out);
var state_31968__$1 = (function (){var statearr_31976 = state_31968;
(statearr_31976[(9)] = inst_31965);

return statearr_31976;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31968__$1,inst_31966);
} else {
if((state_val_31969 === (2))){
var inst_31945 = (state_31968[(8)]);
var inst_31947 = (inst_31945 < n);
var state_31968__$1 = state_31968;
if(cljs.core.truth_(inst_31947)){
var statearr_31977_33627 = state_31968__$1;
(statearr_31977_33627[(1)] = (4));

} else {
var statearr_31978_33628 = state_31968__$1;
(statearr_31978_33628[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (11))){
var inst_31945 = (state_31968[(8)]);
var inst_31955 = (state_31968[(2)]);
var inst_31956 = (inst_31945 + (1));
var inst_31945__$1 = inst_31956;
var state_31968__$1 = (function (){var statearr_31979 = state_31968;
(statearr_31979[(8)] = inst_31945__$1);

(statearr_31979[(10)] = inst_31955);

return statearr_31979;
})();
var statearr_31980_33629 = state_31968__$1;
(statearr_31980_33629[(2)] = null);

(statearr_31980_33629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (9))){
var state_31968__$1 = state_31968;
var statearr_31983_33636 = state_31968__$1;
(statearr_31983_33636[(2)] = null);

(statearr_31983_33636[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (5))){
var state_31968__$1 = state_31968;
var statearr_31984_33637 = state_31968__$1;
(statearr_31984_33637[(2)] = null);

(statearr_31984_33637[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (10))){
var inst_31960 = (state_31968[(2)]);
var state_31968__$1 = state_31968;
var statearr_31986_33638 = state_31968__$1;
(statearr_31986_33638[(2)] = inst_31960);

(statearr_31986_33638[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31969 === (8))){
var inst_31950 = (state_31968[(7)]);
var state_31968__$1 = state_31968;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31968__$1,(11),out,inst_31950);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29762__auto__ = null;
var cljs$core$async$state_machine__29762__auto____0 = (function (){
var statearr_31987 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31987[(0)] = cljs$core$async$state_machine__29762__auto__);

(statearr_31987[(1)] = (1));

return statearr_31987;
});
var cljs$core$async$state_machine__29762__auto____1 = (function (state_31968){
while(true){
var ret_value__29763__auto__ = (function (){try{while(true){
var result__29764__auto__ = switch__29761__auto__(state_31968);
if(cljs.core.keyword_identical_QMARK_(result__29764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29764__auto__;
}
break;
}
}catch (e31988){var ex__29765__auto__ = e31988;
var statearr_31989_33643 = state_31968;
(statearr_31989_33643[(2)] = ex__29765__auto__);


if(cljs.core.seq((state_31968[(4)]))){
var statearr_31990_33645 = state_31968;
(statearr_31990_33645[(1)] = cljs.core.first((state_31968[(4)])));

} else {
throw ex__29765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33646 = state_31968;
state_31968 = G__33646;
continue;
} else {
return ret_value__29763__auto__;
}
break;
}
});
cljs$core$async$state_machine__29762__auto__ = function(state_31968){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29762__auto____1.call(this,state_31968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29762__auto____0;
cljs$core$async$state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29762__auto____1;
return cljs$core$async$state_machine__29762__auto__;
})()
})();
var state__29905__auto__ = (function (){var statearr_31995 = f__29904__auto__();
(statearr_31995[(6)] = c__29903__auto___33620);

return statearr_31995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29905__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32002 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32002 = (function (f,ch,meta32003){
this.f = f;
this.ch = ch;
this.meta32003 = meta32003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32004,meta32003__$1){
var self__ = this;
var _32004__$1 = this;
return (new cljs.core.async.t_cljs$core$async32002(self__.f,self__.ch,meta32003__$1));
}));

(cljs.core.async.t_cljs$core$async32002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32004){
var self__ = this;
var _32004__$1 = this;
return self__.meta32003;
}));

(cljs.core.async.t_cljs$core$async32002.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32002.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32002.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32002.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32002.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32009 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32009 = (function (f,ch,meta32003,_,fn1,meta32010){
this.f = f;
this.ch = ch;
this.meta32003 = meta32003;
this._ = _;
this.fn1 = fn1;
this.meta32010 = meta32010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32011,meta32010__$1){
var self__ = this;
var _32011__$1 = this;
return (new cljs.core.async.t_cljs$core$async32009(self__.f,self__.ch,self__.meta32003,self__._,self__.fn1,meta32010__$1));
}));

(cljs.core.async.t_cljs$core$async32009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32011){
var self__ = this;
var _32011__$1 = this;
return self__.meta32010;
}));

(cljs.core.async.t_cljs$core$async32009.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32009.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32009.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32009.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31996_SHARP_){
var G__32013 = (((p1__31996_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31996_SHARP_) : self__.f.call(null,p1__31996_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32013) : f1.call(null,G__32013));
});
}));

(cljs.core.async.t_cljs$core$async32009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32003","meta32003",-434586424,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32002","cljs.core.async/t_cljs$core$async32002",954246291,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32010","meta32010",-1265895235,null)], null);
}));

(cljs.core.async.t_cljs$core$async32009.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32009.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32009");

(cljs.core.async.t_cljs$core$async32009.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32009");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32009.
 */
cljs.core.async.__GT_t_cljs$core$async32009 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32009(f__$1,ch__$1,meta32003__$1,___$2,fn1__$1,meta32010){
return (new cljs.core.async.t_cljs$core$async32009(f__$1,ch__$1,meta32003__$1,___$2,fn1__$1,meta32010));
});

}

return (new cljs.core.async.t_cljs$core$async32009(self__.f,self__.ch,self__.meta32003,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32017 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32017) : self__.f.call(null,G__32017));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32002.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32002.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32003","meta32003",-434586424,null)], null);
}));

(cljs.core.async.t_cljs$core$async32002.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32002");

(cljs.core.async.t_cljs$core$async32002.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32002");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32002.
 */
cljs.core.async.__GT_t_cljs$core$async32002 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32002(f__$1,ch__$1,meta32003){
return (new cljs.core.async.t_cljs$core$async32002(f__$1,ch__$1,meta32003));
});

}

return (new cljs.core.async.t_cljs$core$async32002(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32018 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32018 = (function (f,ch,meta32019){
this.f = f;
this.ch = ch;
this.meta32019 = meta32019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32020,meta32019__$1){
var self__ = this;
var _32020__$1 = this;
return (new cljs.core.async.t_cljs$core$async32018(self__.f,self__.ch,meta32019__$1));
}));

(cljs.core.async.t_cljs$core$async32018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32020){
var self__ = this;
var _32020__$1 = this;
return self__.meta32019;
}));

(cljs.core.async.t_cljs$core$async32018.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32018.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32018.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32018.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32018.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32018.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32019","meta32019",-153118801,null)], null);
}));

(cljs.core.async.t_cljs$core$async32018.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32018");

(cljs.core.async.t_cljs$core$async32018.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32018");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32018.
 */
cljs.core.async.__GT_t_cljs$core$async32018 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32018(f__$1,ch__$1,meta32019){
return (new cljs.core.async.t_cljs$core$async32018(f__$1,ch__$1,meta32019));
});

}

return (new cljs.core.async.t_cljs$core$async32018(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32021 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32021 = (function (p,ch,meta32022){
this.p = p;
this.ch = ch;
this.meta32022 = meta32022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32023,meta32022__$1){
var self__ = this;
var _32023__$1 = this;
return (new cljs.core.async.t_cljs$core$async32021(self__.p,self__.ch,meta32022__$1));
}));

(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32023){
var self__ = this;
var _32023__$1 = this;
return self__.meta32022;
}));

(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32022","meta32022",630855494,null)], null);
}));

(cljs.core.async.t_cljs$core$async32021.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32021");

(cljs.core.async.t_cljs$core$async32021.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32021");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32021.
 */
cljs.core.async.__GT_t_cljs$core$async32021 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32021(p__$1,ch__$1,meta32022){
return (new cljs.core.async.t_cljs$core$async32021(p__$1,ch__$1,meta32022));
});

}

return (new cljs.core.async.t_cljs$core$async32021(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32036 = arguments.length;
switch (G__32036) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29903__auto___33657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29904__auto__ = (function (){var switch__29761__auto__ = (function (state_32057){
var state_val_32058 = (state_32057[(1)]);
if((state_val_32058 === (7))){
var inst_32053 = (state_32057[(2)]);
var state_32057__$1 = state_32057;
var statearr_32059_33658 = state_32057__$1;
(statearr_32059_33658[(2)] = inst_32053);

(statearr_32059_33658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (1))){
var state_32057__$1 = state_32057;
var statearr_32060_33659 = state_32057__$1;
(statearr_32060_33659[(2)] = null);

(statearr_32060_33659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (4))){
var inst_32039 = (state_32057[(7)]);
var inst_32039__$1 = (state_32057[(2)]);
var inst_32040 = (inst_32039__$1 == null);
var state_32057__$1 = (function (){var statearr_32061 = state_32057;
(statearr_32061[(7)] = inst_32039__$1);

return statearr_32061;
})();
if(cljs.core.truth_(inst_32040)){
var statearr_32062_33667 = state_32057__$1;
(statearr_32062_33667[(1)] = (5));

} else {
var statearr_32063_33672 = state_32057__$1;
(statearr_32063_33672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (6))){
var inst_32039 = (state_32057[(7)]);
var inst_32044 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32039) : p.call(null,inst_32039));
var state_32057__$1 = state_32057;
if(cljs.core.truth_(inst_32044)){
var statearr_32064_33674 = state_32057__$1;
(statearr_32064_33674[(1)] = (8));

} else {
var statearr_32065_33679 = state_32057__$1;
(statearr_32065_33679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (3))){
var inst_32055 = (state_32057[(2)]);
var state_32057__$1 = state_32057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32057__$1,inst_32055);
} else {
if((state_val_32058 === (2))){
var state_32057__$1 = state_32057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32057__$1,(4),ch);
} else {
if((state_val_32058 === (11))){
var inst_32047 = (state_32057[(2)]);
var state_32057__$1 = state_32057;
var statearr_32070_33681 = state_32057__$1;
(statearr_32070_33681[(2)] = inst_32047);

(statearr_32070_33681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (9))){
var state_32057__$1 = state_32057;
var statearr_32075_33682 = state_32057__$1;
(statearr_32075_33682[(2)] = null);

(statearr_32075_33682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (5))){
var inst_32042 = cljs.core.async.close_BANG_(out);
var state_32057__$1 = state_32057;
var statearr_32076_33683 = state_32057__$1;
(statearr_32076_33683[(2)] = inst_32042);

(statearr_32076_33683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (10))){
var inst_32050 = (state_32057[(2)]);
var state_32057__$1 = (function (){var statearr_32081 = state_32057;
(statearr_32081[(8)] = inst_32050);

return statearr_32081;
})();
var statearr_32082_33684 = state_32057__$1;
(statearr_32082_33684[(2)] = null);

(statearr_32082_33684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (8))){
var inst_32039 = (state_32057[(7)]);
var state_32057__$1 = state_32057;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32057__$1,(11),out,inst_32039);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29762__auto__ = null;
var cljs$core$async$state_machine__29762__auto____0 = (function (){
var statearr_32083 = [null,null,null,null,null,null,null,null,null];
(statearr_32083[(0)] = cljs$core$async$state_machine__29762__auto__);

(statearr_32083[(1)] = (1));

return statearr_32083;
});
var cljs$core$async$state_machine__29762__auto____1 = (function (state_32057){
while(true){
var ret_value__29763__auto__ = (function (){try{while(true){
var result__29764__auto__ = switch__29761__auto__(state_32057);
if(cljs.core.keyword_identical_QMARK_(result__29764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29764__auto__;
}
break;
}
}catch (e32084){var ex__29765__auto__ = e32084;
var statearr_32085_33693 = state_32057;
(statearr_32085_33693[(2)] = ex__29765__auto__);


if(cljs.core.seq((state_32057[(4)]))){
var statearr_32086_33699 = state_32057;
(statearr_32086_33699[(1)] = cljs.core.first((state_32057[(4)])));

} else {
throw ex__29765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33700 = state_32057;
state_32057 = G__33700;
continue;
} else {
return ret_value__29763__auto__;
}
break;
}
});
cljs$core$async$state_machine__29762__auto__ = function(state_32057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29762__auto____1.call(this,state_32057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29762__auto____0;
cljs$core$async$state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29762__auto____1;
return cljs$core$async$state_machine__29762__auto__;
})()
})();
var state__29905__auto__ = (function (){var statearr_32087 = f__29904__auto__();
(statearr_32087[(6)] = c__29903__auto___33657);

return statearr_32087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29905__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32091 = arguments.length;
switch (G__32091) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29903__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29904__auto__ = (function (){var switch__29761__auto__ = (function (state_32153){
var state_val_32154 = (state_32153[(1)]);
if((state_val_32154 === (7))){
var inst_32149 = (state_32153[(2)]);
var state_32153__$1 = state_32153;
var statearr_32158_33729 = state_32153__$1;
(statearr_32158_33729[(2)] = inst_32149);

(statearr_32158_33729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (20))){
var inst_32119 = (state_32153[(7)]);
var inst_32130 = (state_32153[(2)]);
var inst_32131 = cljs.core.next(inst_32119);
var inst_32105 = inst_32131;
var inst_32106 = null;
var inst_32107 = (0);
var inst_32108 = (0);
var state_32153__$1 = (function (){var statearr_32159 = state_32153;
(statearr_32159[(8)] = inst_32105);

(statearr_32159[(9)] = inst_32106);

(statearr_32159[(10)] = inst_32130);

(statearr_32159[(11)] = inst_32108);

(statearr_32159[(12)] = inst_32107);

return statearr_32159;
})();
var statearr_32160_33733 = state_32153__$1;
(statearr_32160_33733[(2)] = null);

(statearr_32160_33733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (1))){
var state_32153__$1 = state_32153;
var statearr_32161_33734 = state_32153__$1;
(statearr_32161_33734[(2)] = null);

(statearr_32161_33734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (4))){
var inst_32094 = (state_32153[(13)]);
var inst_32094__$1 = (state_32153[(2)]);
var inst_32095 = (inst_32094__$1 == null);
var state_32153__$1 = (function (){var statearr_32162 = state_32153;
(statearr_32162[(13)] = inst_32094__$1);

return statearr_32162;
})();
if(cljs.core.truth_(inst_32095)){
var statearr_32163_33740 = state_32153__$1;
(statearr_32163_33740[(1)] = (5));

} else {
var statearr_32164_33742 = state_32153__$1;
(statearr_32164_33742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (15))){
var state_32153__$1 = state_32153;
var statearr_32168_33747 = state_32153__$1;
(statearr_32168_33747[(2)] = null);

(statearr_32168_33747[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (21))){
var state_32153__$1 = state_32153;
var statearr_32169_33753 = state_32153__$1;
(statearr_32169_33753[(2)] = null);

(statearr_32169_33753[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (13))){
var inst_32105 = (state_32153[(8)]);
var inst_32106 = (state_32153[(9)]);
var inst_32108 = (state_32153[(11)]);
var inst_32107 = (state_32153[(12)]);
var inst_32115 = (state_32153[(2)]);
var inst_32116 = (inst_32108 + (1));
var tmp32165 = inst_32105;
var tmp32166 = inst_32106;
var tmp32167 = inst_32107;
var inst_32105__$1 = tmp32165;
var inst_32106__$1 = tmp32166;
var inst_32107__$1 = tmp32167;
var inst_32108__$1 = inst_32116;
var state_32153__$1 = (function (){var statearr_32178 = state_32153;
(statearr_32178[(8)] = inst_32105__$1);

(statearr_32178[(9)] = inst_32106__$1);

(statearr_32178[(11)] = inst_32108__$1);

(statearr_32178[(12)] = inst_32107__$1);

(statearr_32178[(14)] = inst_32115);

return statearr_32178;
})();
var statearr_32179_33774 = state_32153__$1;
(statearr_32179_33774[(2)] = null);

(statearr_32179_33774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (22))){
var state_32153__$1 = state_32153;
var statearr_32180_33779 = state_32153__$1;
(statearr_32180_33779[(2)] = null);

(statearr_32180_33779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (6))){
var inst_32094 = (state_32153[(13)]);
var inst_32103 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32094) : f.call(null,inst_32094));
var inst_32104 = cljs.core.seq(inst_32103);
var inst_32105 = inst_32104;
var inst_32106 = null;
var inst_32107 = (0);
var inst_32108 = (0);
var state_32153__$1 = (function (){var statearr_32181 = state_32153;
(statearr_32181[(8)] = inst_32105);

(statearr_32181[(9)] = inst_32106);

(statearr_32181[(11)] = inst_32108);

(statearr_32181[(12)] = inst_32107);

return statearr_32181;
})();
var statearr_32182_33801 = state_32153__$1;
(statearr_32182_33801[(2)] = null);

(statearr_32182_33801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (17))){
var inst_32119 = (state_32153[(7)]);
var inst_32123 = cljs.core.chunk_first(inst_32119);
var inst_32124 = cljs.core.chunk_rest(inst_32119);
var inst_32125 = cljs.core.count(inst_32123);
var inst_32105 = inst_32124;
var inst_32106 = inst_32123;
var inst_32107 = inst_32125;
var inst_32108 = (0);
var state_32153__$1 = (function (){var statearr_32183 = state_32153;
(statearr_32183[(8)] = inst_32105);

(statearr_32183[(9)] = inst_32106);

(statearr_32183[(11)] = inst_32108);

(statearr_32183[(12)] = inst_32107);

return statearr_32183;
})();
var statearr_32184_33818 = state_32153__$1;
(statearr_32184_33818[(2)] = null);

(statearr_32184_33818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (3))){
var inst_32151 = (state_32153[(2)]);
var state_32153__$1 = state_32153;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32153__$1,inst_32151);
} else {
if((state_val_32154 === (12))){
var inst_32139 = (state_32153[(2)]);
var state_32153__$1 = state_32153;
var statearr_32188_33831 = state_32153__$1;
(statearr_32188_33831[(2)] = inst_32139);

(statearr_32188_33831[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (2))){
var state_32153__$1 = state_32153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32153__$1,(4),in$);
} else {
if((state_val_32154 === (23))){
var inst_32147 = (state_32153[(2)]);
var state_32153__$1 = state_32153;
var statearr_32190_33832 = state_32153__$1;
(statearr_32190_33832[(2)] = inst_32147);

(statearr_32190_33832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (19))){
var inst_32134 = (state_32153[(2)]);
var state_32153__$1 = state_32153;
var statearr_32191_33833 = state_32153__$1;
(statearr_32191_33833[(2)] = inst_32134);

(statearr_32191_33833[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (11))){
var inst_32105 = (state_32153[(8)]);
var inst_32119 = (state_32153[(7)]);
var inst_32119__$1 = cljs.core.seq(inst_32105);
var state_32153__$1 = (function (){var statearr_32194 = state_32153;
(statearr_32194[(7)] = inst_32119__$1);

return statearr_32194;
})();
if(inst_32119__$1){
var statearr_32196_33834 = state_32153__$1;
(statearr_32196_33834[(1)] = (14));

} else {
var statearr_32198_33835 = state_32153__$1;
(statearr_32198_33835[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (9))){
var inst_32141 = (state_32153[(2)]);
var inst_32142 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32153__$1 = (function (){var statearr_32200 = state_32153;
(statearr_32200[(15)] = inst_32141);

return statearr_32200;
})();
if(cljs.core.truth_(inst_32142)){
var statearr_32201_33836 = state_32153__$1;
(statearr_32201_33836[(1)] = (21));

} else {
var statearr_32202_33837 = state_32153__$1;
(statearr_32202_33837[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (5))){
var inst_32097 = cljs.core.async.close_BANG_(out);
var state_32153__$1 = state_32153;
var statearr_32206_33842 = state_32153__$1;
(statearr_32206_33842[(2)] = inst_32097);

(statearr_32206_33842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (14))){
var inst_32119 = (state_32153[(7)]);
var inst_32121 = cljs.core.chunked_seq_QMARK_(inst_32119);
var state_32153__$1 = state_32153;
if(inst_32121){
var statearr_32208_33843 = state_32153__$1;
(statearr_32208_33843[(1)] = (17));

} else {
var statearr_32209_33848 = state_32153__$1;
(statearr_32209_33848[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (16))){
var inst_32137 = (state_32153[(2)]);
var state_32153__$1 = state_32153;
var statearr_32212_33849 = state_32153__$1;
(statearr_32212_33849[(2)] = inst_32137);

(statearr_32212_33849[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (10))){
var inst_32106 = (state_32153[(9)]);
var inst_32108 = (state_32153[(11)]);
var inst_32113 = cljs.core._nth(inst_32106,inst_32108);
var state_32153__$1 = state_32153;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32153__$1,(13),out,inst_32113);
} else {
if((state_val_32154 === (18))){
var inst_32119 = (state_32153[(7)]);
var inst_32128 = cljs.core.first(inst_32119);
var state_32153__$1 = state_32153;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32153__$1,(20),out,inst_32128);
} else {
if((state_val_32154 === (8))){
var inst_32108 = (state_32153[(11)]);
var inst_32107 = (state_32153[(12)]);
var inst_32110 = (inst_32108 < inst_32107);
var inst_32111 = inst_32110;
var state_32153__$1 = state_32153;
if(cljs.core.truth_(inst_32111)){
var statearr_32216_33859 = state_32153__$1;
(statearr_32216_33859[(1)] = (10));

} else {
var statearr_32219_33860 = state_32153__$1;
(statearr_32219_33860[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29762__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29762__auto____0 = (function (){
var statearr_32221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32221[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29762__auto__);

(statearr_32221[(1)] = (1));

return statearr_32221;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29762__auto____1 = (function (state_32153){
while(true){
var ret_value__29763__auto__ = (function (){try{while(true){
var result__29764__auto__ = switch__29761__auto__(state_32153);
if(cljs.core.keyword_identical_QMARK_(result__29764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29764__auto__;
}
break;
}
}catch (e32224){var ex__29765__auto__ = e32224;
var statearr_32225_33862 = state_32153;
(statearr_32225_33862[(2)] = ex__29765__auto__);


if(cljs.core.seq((state_32153[(4)]))){
var statearr_32226_33863 = state_32153;
(statearr_32226_33863[(1)] = cljs.core.first((state_32153[(4)])));

} else {
throw ex__29765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33864 = state_32153;
state_32153 = G__33864;
continue;
} else {
return ret_value__29763__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29762__auto__ = function(state_32153){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29762__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29762__auto____1.call(this,state_32153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29762__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29762__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29762__auto__;
})()
})();
var state__29905__auto__ = (function (){var statearr_32227 = f__29904__auto__();
(statearr_32227[(6)] = c__29903__auto__);

return statearr_32227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29905__auto__);
}));

return c__29903__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32231 = arguments.length;
switch (G__32231) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32233 = arguments.length;
switch (G__32233) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32235 = arguments.length;
switch (G__32235) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29903__auto___33875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29904__auto__ = (function (){var switch__29761__auto__ = (function (state_32263){
var state_val_32264 = (state_32263[(1)]);
if((state_val_32264 === (7))){
var inst_32258 = (state_32263[(2)]);
var state_32263__$1 = state_32263;
var statearr_32265_33883 = state_32263__$1;
(statearr_32265_33883[(2)] = inst_32258);

(statearr_32265_33883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (1))){
var inst_32239 = null;
var state_32263__$1 = (function (){var statearr_32266 = state_32263;
(statearr_32266[(7)] = inst_32239);

return statearr_32266;
})();
var statearr_32267_33891 = state_32263__$1;
(statearr_32267_33891[(2)] = null);

(statearr_32267_33891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (4))){
var inst_32243 = (state_32263[(8)]);
var inst_32243__$1 = (state_32263[(2)]);
var inst_32244 = (inst_32243__$1 == null);
var inst_32245 = cljs.core.not(inst_32244);
var state_32263__$1 = (function (){var statearr_32268 = state_32263;
(statearr_32268[(8)] = inst_32243__$1);

return statearr_32268;
})();
if(inst_32245){
var statearr_32273_33902 = state_32263__$1;
(statearr_32273_33902[(1)] = (5));

} else {
var statearr_32274_33903 = state_32263__$1;
(statearr_32274_33903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (6))){
var state_32263__$1 = state_32263;
var statearr_32277_33904 = state_32263__$1;
(statearr_32277_33904[(2)] = null);

(statearr_32277_33904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (3))){
var inst_32260 = (state_32263[(2)]);
var inst_32261 = cljs.core.async.close_BANG_(out);
var state_32263__$1 = (function (){var statearr_32280 = state_32263;
(statearr_32280[(9)] = inst_32260);

return statearr_32280;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32263__$1,inst_32261);
} else {
if((state_val_32264 === (2))){
var state_32263__$1 = state_32263;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32263__$1,(4),ch);
} else {
if((state_val_32264 === (11))){
var inst_32243 = (state_32263[(8)]);
var inst_32252 = (state_32263[(2)]);
var inst_32239 = inst_32243;
var state_32263__$1 = (function (){var statearr_32286 = state_32263;
(statearr_32286[(10)] = inst_32252);

(statearr_32286[(7)] = inst_32239);

return statearr_32286;
})();
var statearr_32288_33912 = state_32263__$1;
(statearr_32288_33912[(2)] = null);

(statearr_32288_33912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (9))){
var inst_32243 = (state_32263[(8)]);
var state_32263__$1 = state_32263;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32263__$1,(11),out,inst_32243);
} else {
if((state_val_32264 === (5))){
var inst_32243 = (state_32263[(8)]);
var inst_32239 = (state_32263[(7)]);
var inst_32247 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32243,inst_32239);
var state_32263__$1 = state_32263;
if(inst_32247){
var statearr_32295_33935 = state_32263__$1;
(statearr_32295_33935[(1)] = (8));

} else {
var statearr_32296_33936 = state_32263__$1;
(statearr_32296_33936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (10))){
var inst_32255 = (state_32263[(2)]);
var state_32263__$1 = state_32263;
var statearr_32300_33937 = state_32263__$1;
(statearr_32300_33937[(2)] = inst_32255);

(statearr_32300_33937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (8))){
var inst_32239 = (state_32263[(7)]);
var tmp32294 = inst_32239;
var inst_32239__$1 = tmp32294;
var state_32263__$1 = (function (){var statearr_32304 = state_32263;
(statearr_32304[(7)] = inst_32239__$1);

return statearr_32304;
})();
var statearr_32305_33938 = state_32263__$1;
(statearr_32305_33938[(2)] = null);

(statearr_32305_33938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29762__auto__ = null;
var cljs$core$async$state_machine__29762__auto____0 = (function (){
var statearr_32306 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32306[(0)] = cljs$core$async$state_machine__29762__auto__);

(statearr_32306[(1)] = (1));

return statearr_32306;
});
var cljs$core$async$state_machine__29762__auto____1 = (function (state_32263){
while(true){
var ret_value__29763__auto__ = (function (){try{while(true){
var result__29764__auto__ = switch__29761__auto__(state_32263);
if(cljs.core.keyword_identical_QMARK_(result__29764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29764__auto__;
}
break;
}
}catch (e32307){var ex__29765__auto__ = e32307;
var statearr_32308_33940 = state_32263;
(statearr_32308_33940[(2)] = ex__29765__auto__);


if(cljs.core.seq((state_32263[(4)]))){
var statearr_32309_33941 = state_32263;
(statearr_32309_33941[(1)] = cljs.core.first((state_32263[(4)])));

} else {
throw ex__29765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33942 = state_32263;
state_32263 = G__33942;
continue;
} else {
return ret_value__29763__auto__;
}
break;
}
});
cljs$core$async$state_machine__29762__auto__ = function(state_32263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29762__auto____1.call(this,state_32263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29762__auto____0;
cljs$core$async$state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29762__auto____1;
return cljs$core$async$state_machine__29762__auto__;
})()
})();
var state__29905__auto__ = (function (){var statearr_32314 = f__29904__auto__();
(statearr_32314[(6)] = c__29903__auto___33875);

return statearr_32314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29905__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32324 = arguments.length;
switch (G__32324) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29903__auto___33945 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29904__auto__ = (function (){var switch__29761__auto__ = (function (state_32375){
var state_val_32376 = (state_32375[(1)]);
if((state_val_32376 === (7))){
var inst_32367 = (state_32375[(2)]);
var state_32375__$1 = state_32375;
var statearr_32386_33953 = state_32375__$1;
(statearr_32386_33953[(2)] = inst_32367);

(statearr_32386_33953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (1))){
var inst_32330 = (new Array(n));
var inst_32331 = inst_32330;
var inst_32332 = (0);
var state_32375__$1 = (function (){var statearr_32389 = state_32375;
(statearr_32389[(7)] = inst_32331);

(statearr_32389[(8)] = inst_32332);

return statearr_32389;
})();
var statearr_32390_33958 = state_32375__$1;
(statearr_32390_33958[(2)] = null);

(statearr_32390_33958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (4))){
var inst_32335 = (state_32375[(9)]);
var inst_32335__$1 = (state_32375[(2)]);
var inst_32336 = (inst_32335__$1 == null);
var inst_32337 = cljs.core.not(inst_32336);
var state_32375__$1 = (function (){var statearr_32391 = state_32375;
(statearr_32391[(9)] = inst_32335__$1);

return statearr_32391;
})();
if(inst_32337){
var statearr_32392_33960 = state_32375__$1;
(statearr_32392_33960[(1)] = (5));

} else {
var statearr_32393_33962 = state_32375__$1;
(statearr_32393_33962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (15))){
var inst_32357 = (state_32375[(2)]);
var state_32375__$1 = state_32375;
var statearr_32394_33965 = state_32375__$1;
(statearr_32394_33965[(2)] = inst_32357);

(statearr_32394_33965[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (13))){
var state_32375__$1 = state_32375;
var statearr_32395_33966 = state_32375__$1;
(statearr_32395_33966[(2)] = null);

(statearr_32395_33966[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (6))){
var inst_32332 = (state_32375[(8)]);
var inst_32353 = (inst_32332 > (0));
var state_32375__$1 = state_32375;
if(cljs.core.truth_(inst_32353)){
var statearr_32396_33968 = state_32375__$1;
(statearr_32396_33968[(1)] = (12));

} else {
var statearr_32401_33969 = state_32375__$1;
(statearr_32401_33969[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (3))){
var inst_32369 = (state_32375[(2)]);
var state_32375__$1 = state_32375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32375__$1,inst_32369);
} else {
if((state_val_32376 === (12))){
var inst_32331 = (state_32375[(7)]);
var inst_32355 = cljs.core.vec(inst_32331);
var state_32375__$1 = state_32375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32375__$1,(15),out,inst_32355);
} else {
if((state_val_32376 === (2))){
var state_32375__$1 = state_32375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32375__$1,(4),ch);
} else {
if((state_val_32376 === (11))){
var inst_32347 = (state_32375[(2)]);
var inst_32348 = (new Array(n));
var inst_32331 = inst_32348;
var inst_32332 = (0);
var state_32375__$1 = (function (){var statearr_32407 = state_32375;
(statearr_32407[(7)] = inst_32331);

(statearr_32407[(8)] = inst_32332);

(statearr_32407[(10)] = inst_32347);

return statearr_32407;
})();
var statearr_32409_33971 = state_32375__$1;
(statearr_32409_33971[(2)] = null);

(statearr_32409_33971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (9))){
var inst_32331 = (state_32375[(7)]);
var inst_32345 = cljs.core.vec(inst_32331);
var state_32375__$1 = state_32375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32375__$1,(11),out,inst_32345);
} else {
if((state_val_32376 === (5))){
var inst_32331 = (state_32375[(7)]);
var inst_32332 = (state_32375[(8)]);
var inst_32335 = (state_32375[(9)]);
var inst_32340 = (state_32375[(11)]);
var inst_32339 = (inst_32331[inst_32332] = inst_32335);
var inst_32340__$1 = (inst_32332 + (1));
var inst_32341 = (inst_32340__$1 < n);
var state_32375__$1 = (function (){var statearr_32416 = state_32375;
(statearr_32416[(11)] = inst_32340__$1);

(statearr_32416[(12)] = inst_32339);

return statearr_32416;
})();
if(cljs.core.truth_(inst_32341)){
var statearr_32421_33978 = state_32375__$1;
(statearr_32421_33978[(1)] = (8));

} else {
var statearr_32424_33979 = state_32375__$1;
(statearr_32424_33979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (14))){
var inst_32360 = (state_32375[(2)]);
var inst_32365 = cljs.core.async.close_BANG_(out);
var state_32375__$1 = (function (){var statearr_32434 = state_32375;
(statearr_32434[(13)] = inst_32360);

return statearr_32434;
})();
var statearr_32437_33984 = state_32375__$1;
(statearr_32437_33984[(2)] = inst_32365);

(statearr_32437_33984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (10))){
var inst_32351 = (state_32375[(2)]);
var state_32375__$1 = state_32375;
var statearr_32441_33988 = state_32375__$1;
(statearr_32441_33988[(2)] = inst_32351);

(statearr_32441_33988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (8))){
var inst_32331 = (state_32375[(7)]);
var inst_32340 = (state_32375[(11)]);
var tmp32433 = inst_32331;
var inst_32331__$1 = tmp32433;
var inst_32332 = inst_32340;
var state_32375__$1 = (function (){var statearr_32444 = state_32375;
(statearr_32444[(7)] = inst_32331__$1);

(statearr_32444[(8)] = inst_32332);

return statearr_32444;
})();
var statearr_32445_33991 = state_32375__$1;
(statearr_32445_33991[(2)] = null);

(statearr_32445_33991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29762__auto__ = null;
var cljs$core$async$state_machine__29762__auto____0 = (function (){
var statearr_32449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32449[(0)] = cljs$core$async$state_machine__29762__auto__);

(statearr_32449[(1)] = (1));

return statearr_32449;
});
var cljs$core$async$state_machine__29762__auto____1 = (function (state_32375){
while(true){
var ret_value__29763__auto__ = (function (){try{while(true){
var result__29764__auto__ = switch__29761__auto__(state_32375);
if(cljs.core.keyword_identical_QMARK_(result__29764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29764__auto__;
}
break;
}
}catch (e32450){var ex__29765__auto__ = e32450;
var statearr_32451_33992 = state_32375;
(statearr_32451_33992[(2)] = ex__29765__auto__);


if(cljs.core.seq((state_32375[(4)]))){
var statearr_32453_33993 = state_32375;
(statearr_32453_33993[(1)] = cljs.core.first((state_32375[(4)])));

} else {
throw ex__29765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33994 = state_32375;
state_32375 = G__33994;
continue;
} else {
return ret_value__29763__auto__;
}
break;
}
});
cljs$core$async$state_machine__29762__auto__ = function(state_32375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29762__auto____1.call(this,state_32375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29762__auto____0;
cljs$core$async$state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29762__auto____1;
return cljs$core$async$state_machine__29762__auto__;
})()
})();
var state__29905__auto__ = (function (){var statearr_32457 = f__29904__auto__();
(statearr_32457[(6)] = c__29903__auto___33945);

return statearr_32457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29905__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32464 = arguments.length;
switch (G__32464) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29903__auto___34013 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29904__auto__ = (function (){var switch__29761__auto__ = (function (state_32528){
var state_val_32529 = (state_32528[(1)]);
if((state_val_32529 === (7))){
var inst_32523 = (state_32528[(2)]);
var state_32528__$1 = state_32528;
var statearr_32535_34017 = state_32528__$1;
(statearr_32535_34017[(2)] = inst_32523);

(statearr_32535_34017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (1))){
var inst_32467 = [];
var inst_32472 = inst_32467;
var inst_32473 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32528__$1 = (function (){var statearr_32538 = state_32528;
(statearr_32538[(7)] = inst_32473);

(statearr_32538[(8)] = inst_32472);

return statearr_32538;
})();
var statearr_32541_34018 = state_32528__$1;
(statearr_32541_34018[(2)] = null);

(statearr_32541_34018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (4))){
var inst_32480 = (state_32528[(9)]);
var inst_32480__$1 = (state_32528[(2)]);
var inst_32481 = (inst_32480__$1 == null);
var inst_32482 = cljs.core.not(inst_32481);
var state_32528__$1 = (function (){var statearr_32542 = state_32528;
(statearr_32542[(9)] = inst_32480__$1);

return statearr_32542;
})();
if(inst_32482){
var statearr_32544_34020 = state_32528__$1;
(statearr_32544_34020[(1)] = (5));

} else {
var statearr_32546_34021 = state_32528__$1;
(statearr_32546_34021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (15))){
var inst_32517 = (state_32528[(2)]);
var state_32528__$1 = state_32528;
var statearr_32550_34022 = state_32528__$1;
(statearr_32550_34022[(2)] = inst_32517);

(statearr_32550_34022[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (13))){
var state_32528__$1 = state_32528;
var statearr_32553_34023 = state_32528__$1;
(statearr_32553_34023[(2)] = null);

(statearr_32553_34023[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (6))){
var inst_32472 = (state_32528[(8)]);
var inst_32512 = inst_32472.length;
var inst_32513 = (inst_32512 > (0));
var state_32528__$1 = state_32528;
if(cljs.core.truth_(inst_32513)){
var statearr_32557_34027 = state_32528__$1;
(statearr_32557_34027[(1)] = (12));

} else {
var statearr_32559_34028 = state_32528__$1;
(statearr_32559_34028[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (3))){
var inst_32525 = (state_32528[(2)]);
var state_32528__$1 = state_32528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32528__$1,inst_32525);
} else {
if((state_val_32529 === (12))){
var inst_32472 = (state_32528[(8)]);
var inst_32515 = cljs.core.vec(inst_32472);
var state_32528__$1 = state_32528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32528__$1,(15),out,inst_32515);
} else {
if((state_val_32529 === (2))){
var state_32528__$1 = state_32528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32528__$1,(4),ch);
} else {
if((state_val_32529 === (11))){
var inst_32480 = (state_32528[(9)]);
var inst_32484 = (state_32528[(10)]);
var inst_32500 = (state_32528[(2)]);
var inst_32506 = [];
var inst_32507 = inst_32506.push(inst_32480);
var inst_32472 = inst_32506;
var inst_32473 = inst_32484;
var state_32528__$1 = (function (){var statearr_32565 = state_32528;
(statearr_32565[(7)] = inst_32473);

(statearr_32565[(11)] = inst_32500);

(statearr_32565[(12)] = inst_32507);

(statearr_32565[(8)] = inst_32472);

return statearr_32565;
})();
var statearr_32566_34032 = state_32528__$1;
(statearr_32566_34032[(2)] = null);

(statearr_32566_34032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (9))){
var inst_32472 = (state_32528[(8)]);
var inst_32498 = cljs.core.vec(inst_32472);
var state_32528__$1 = state_32528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32528__$1,(11),out,inst_32498);
} else {
if((state_val_32529 === (5))){
var inst_32473 = (state_32528[(7)]);
var inst_32480 = (state_32528[(9)]);
var inst_32484 = (state_32528[(10)]);
var inst_32484__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32480) : f.call(null,inst_32480));
var inst_32490 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32484__$1,inst_32473);
var inst_32491 = cljs.core.keyword_identical_QMARK_(inst_32473,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32492 = ((inst_32490) || (inst_32491));
var state_32528__$1 = (function (){var statearr_32569 = state_32528;
(statearr_32569[(10)] = inst_32484__$1);

return statearr_32569;
})();
if(cljs.core.truth_(inst_32492)){
var statearr_32572_34033 = state_32528__$1;
(statearr_32572_34033[(1)] = (8));

} else {
var statearr_32573_34034 = state_32528__$1;
(statearr_32573_34034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (14))){
var inst_32520 = (state_32528[(2)]);
var inst_32521 = cljs.core.async.close_BANG_(out);
var state_32528__$1 = (function (){var statearr_32578 = state_32528;
(statearr_32578[(13)] = inst_32520);

return statearr_32578;
})();
var statearr_32580_34035 = state_32528__$1;
(statearr_32580_34035[(2)] = inst_32521);

(statearr_32580_34035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (10))){
var inst_32510 = (state_32528[(2)]);
var state_32528__$1 = state_32528;
var statearr_32585_34036 = state_32528__$1;
(statearr_32585_34036[(2)] = inst_32510);

(statearr_32585_34036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (8))){
var inst_32480 = (state_32528[(9)]);
var inst_32484 = (state_32528[(10)]);
var inst_32472 = (state_32528[(8)]);
var inst_32494 = inst_32472.push(inst_32480);
var tmp32575 = inst_32472;
var inst_32472__$1 = tmp32575;
var inst_32473 = inst_32484;
var state_32528__$1 = (function (){var statearr_32587 = state_32528;
(statearr_32587[(14)] = inst_32494);

(statearr_32587[(7)] = inst_32473);

(statearr_32587[(8)] = inst_32472__$1);

return statearr_32587;
})();
var statearr_32591_34042 = state_32528__$1;
(statearr_32591_34042[(2)] = null);

(statearr_32591_34042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29762__auto__ = null;
var cljs$core$async$state_machine__29762__auto____0 = (function (){
var statearr_32595 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32595[(0)] = cljs$core$async$state_machine__29762__auto__);

(statearr_32595[(1)] = (1));

return statearr_32595;
});
var cljs$core$async$state_machine__29762__auto____1 = (function (state_32528){
while(true){
var ret_value__29763__auto__ = (function (){try{while(true){
var result__29764__auto__ = switch__29761__auto__(state_32528);
if(cljs.core.keyword_identical_QMARK_(result__29764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29764__auto__;
}
break;
}
}catch (e32598){var ex__29765__auto__ = e32598;
var statearr_32600_34043 = state_32528;
(statearr_32600_34043[(2)] = ex__29765__auto__);


if(cljs.core.seq((state_32528[(4)]))){
var statearr_32603_34044 = state_32528;
(statearr_32603_34044[(1)] = cljs.core.first((state_32528[(4)])));

} else {
throw ex__29765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34045 = state_32528;
state_32528 = G__34045;
continue;
} else {
return ret_value__29763__auto__;
}
break;
}
});
cljs$core$async$state_machine__29762__auto__ = function(state_32528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29762__auto____1.call(this,state_32528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29762__auto____0;
cljs$core$async$state_machine__29762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29762__auto____1;
return cljs$core$async$state_machine__29762__auto__;
})()
})();
var state__29905__auto__ = (function (){var statearr_32607 = f__29904__auto__();
(statearr_32607[(6)] = c__29903__auto___34013);

return statearr_32607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29905__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
