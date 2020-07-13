goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36591){
var map__36593 = p__36591;
var map__36593__$1 = (((((!((map__36593 == null))))?(((((map__36593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36593):map__36593);
var m = map__36593__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36593__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36593__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36596_36805 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36597_36806 = null;
var count__36598_36807 = (0);
var i__36599_36808 = (0);
while(true){
if((i__36599_36808 < count__36598_36807)){
var f_36809 = chunk__36597_36806.cljs$core$IIndexed$_nth$arity$2(null,i__36599_36808);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36809], 0));


var G__36810 = seq__36596_36805;
var G__36811 = chunk__36597_36806;
var G__36812 = count__36598_36807;
var G__36813 = (i__36599_36808 + (1));
seq__36596_36805 = G__36810;
chunk__36597_36806 = G__36811;
count__36598_36807 = G__36812;
i__36599_36808 = G__36813;
continue;
} else {
var temp__5735__auto___36814 = cljs.core.seq(seq__36596_36805);
if(temp__5735__auto___36814){
var seq__36596_36815__$1 = temp__5735__auto___36814;
if(cljs.core.chunked_seq_QMARK_(seq__36596_36815__$1)){
var c__4556__auto___36816 = cljs.core.chunk_first(seq__36596_36815__$1);
var G__36817 = cljs.core.chunk_rest(seq__36596_36815__$1);
var G__36818 = c__4556__auto___36816;
var G__36819 = cljs.core.count(c__4556__auto___36816);
var G__36820 = (0);
seq__36596_36805 = G__36817;
chunk__36597_36806 = G__36818;
count__36598_36807 = G__36819;
i__36599_36808 = G__36820;
continue;
} else {
var f_36821 = cljs.core.first(seq__36596_36815__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36821], 0));


var G__36822 = cljs.core.next(seq__36596_36815__$1);
var G__36823 = null;
var G__36824 = (0);
var G__36825 = (0);
seq__36596_36805 = G__36822;
chunk__36597_36806 = G__36823;
count__36598_36807 = G__36824;
i__36599_36808 = G__36825;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36826 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36826], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36826)))?cljs.core.second(arglists_36826):arglists_36826)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36602_36827 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36603_36828 = null;
var count__36604_36829 = (0);
var i__36605_36830 = (0);
while(true){
if((i__36605_36830 < count__36604_36829)){
var vec__36618_36831 = chunk__36603_36828.cljs$core$IIndexed$_nth$arity$2(null,i__36605_36830);
var name_36832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36618_36831,(0),null);
var map__36621_36833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36618_36831,(1),null);
var map__36621_36834__$1 = (((((!((map__36621_36833 == null))))?(((((map__36621_36833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36621_36833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36621_36833):map__36621_36833);
var doc_36835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36621_36834__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36621_36834__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36832], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36836], 0));

if(cljs.core.truth_(doc_36835)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36835], 0));
} else {
}


var G__36837 = seq__36602_36827;
var G__36838 = chunk__36603_36828;
var G__36839 = count__36604_36829;
var G__36840 = (i__36605_36830 + (1));
seq__36602_36827 = G__36837;
chunk__36603_36828 = G__36838;
count__36604_36829 = G__36839;
i__36605_36830 = G__36840;
continue;
} else {
var temp__5735__auto___36841 = cljs.core.seq(seq__36602_36827);
if(temp__5735__auto___36841){
var seq__36602_36842__$1 = temp__5735__auto___36841;
if(cljs.core.chunked_seq_QMARK_(seq__36602_36842__$1)){
var c__4556__auto___36843 = cljs.core.chunk_first(seq__36602_36842__$1);
var G__36844 = cljs.core.chunk_rest(seq__36602_36842__$1);
var G__36845 = c__4556__auto___36843;
var G__36846 = cljs.core.count(c__4556__auto___36843);
var G__36847 = (0);
seq__36602_36827 = G__36844;
chunk__36603_36828 = G__36845;
count__36604_36829 = G__36846;
i__36605_36830 = G__36847;
continue;
} else {
var vec__36624_36848 = cljs.core.first(seq__36602_36842__$1);
var name_36849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36624_36848,(0),null);
var map__36627_36850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36624_36848,(1),null);
var map__36627_36851__$1 = (((((!((map__36627_36850 == null))))?(((((map__36627_36850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36627_36850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36627_36850):map__36627_36850);
var doc_36852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36627_36851__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36627_36851__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36849], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36853], 0));

if(cljs.core.truth_(doc_36852)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36852], 0));
} else {
}


var G__36854 = cljs.core.next(seq__36602_36842__$1);
var G__36855 = null;
var G__36856 = (0);
var G__36857 = (0);
seq__36602_36827 = G__36854;
chunk__36603_36828 = G__36855;
count__36604_36829 = G__36856;
i__36605_36830 = G__36857;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36629 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36630 = null;
var count__36631 = (0);
var i__36632 = (0);
while(true){
if((i__36632 < count__36631)){
var role = chunk__36630.cljs$core$IIndexed$_nth$arity$2(null,i__36632);
var temp__5735__auto___36862__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36862__$1)){
var spec_36863 = temp__5735__auto___36862__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36863)], 0));
} else {
}


var G__36864 = seq__36629;
var G__36865 = chunk__36630;
var G__36866 = count__36631;
var G__36867 = (i__36632 + (1));
seq__36629 = G__36864;
chunk__36630 = G__36865;
count__36631 = G__36866;
i__36632 = G__36867;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36629);
if(temp__5735__auto____$1){
var seq__36629__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36629__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36629__$1);
var G__36868 = cljs.core.chunk_rest(seq__36629__$1);
var G__36869 = c__4556__auto__;
var G__36870 = cljs.core.count(c__4556__auto__);
var G__36871 = (0);
seq__36629 = G__36868;
chunk__36630 = G__36869;
count__36631 = G__36870;
i__36632 = G__36871;
continue;
} else {
var role = cljs.core.first(seq__36629__$1);
var temp__5735__auto___36874__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36874__$2)){
var spec_36875 = temp__5735__auto___36874__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36875)], 0));
} else {
}


var G__36878 = cljs.core.next(seq__36629__$1);
var G__36879 = null;
var G__36880 = (0);
var G__36881 = (0);
seq__36629 = G__36878;
chunk__36630 = G__36879;
count__36631 = G__36880;
i__36632 = G__36881;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36882 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36883 = cljs.core.ex_cause(t);
via = G__36882;
t = G__36883;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36661 = datafied_throwable;
var map__36661__$1 = (((((!((map__36661 == null))))?(((((map__36661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36661):map__36661);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36661__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36661__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36661__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36662 = cljs.core.last(via);
var map__36662__$1 = (((((!((map__36662 == null))))?(((((map__36662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36662):map__36662);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36662__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36662__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36662__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36663 = data;
var map__36663__$1 = (((((!((map__36663 == null))))?(((((map__36663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36663):map__36663);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36663__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36663__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36663__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36664 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36664__$1 = (((((!((map__36664 == null))))?(((((map__36664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36664):map__36664);
var top_data = map__36664__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36664__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36698 = phase;
var G__36698__$1 = (((G__36698 instanceof cljs.core.Keyword))?G__36698.fqn:null);
switch (G__36698__$1) {
case "read-source":
var map__36708 = data;
var map__36708__$1 = (((((!((map__36708 == null))))?(((((map__36708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36708):map__36708);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36708__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36708__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36710 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36710__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36710,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36710);
var G__36710__$2 = (cljs.core.truth_((function (){var fexpr__36711 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36711.cljs$core$IFn$_invoke$arity$1 ? fexpr__36711.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36711.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36710__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36710__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36710__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36710__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36714 = top_data;
var G__36714__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36714,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36714);
var G__36714__$2 = (cljs.core.truth_((function (){var fexpr__36720 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36720.cljs$core$IFn$_invoke$arity$1 ? fexpr__36720.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36720.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36714__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36714__$1);
var G__36714__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36714__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36714__$2);
var G__36714__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36714__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36714__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36714__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36714__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36721 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36721,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36721,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36721,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36721,(3),null);
var G__36728 = top_data;
var G__36728__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36728,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36728);
var G__36728__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36728__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36728__$1);
var G__36728__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36728__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36728__$2);
var G__36728__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36728__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36728__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36728__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36728__$4;
}

break;
case "execution":
var vec__36739 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36739,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36739,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36739,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36739,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36657_SHARP_){
var or__4126__auto__ = (p1__36657_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__36751 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36751.cljs$core$IFn$_invoke$arity$1 ? fexpr__36751.cljs$core$IFn$_invoke$arity$1(p1__36657_SHARP_) : fexpr__36751.call(null,p1__36657_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__36752 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36752__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36752,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36752);
var G__36752__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36752__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36752__$1);
var G__36752__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36752__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36752__$2);
var G__36752__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36752__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36752__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36752__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36752__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36698__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36760){
var map__36761 = p__36760;
var map__36761__$1 = (((((!((map__36761 == null))))?(((((map__36761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36761):map__36761);
var triage_data = map__36761__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36761__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36761__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36761__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36761__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36761__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36761__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36761__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36761__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36764 = phase;
var G__36764__$1 = (((G__36764 instanceof cljs.core.Keyword))?G__36764.fqn:null);
switch (G__36764__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36765 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36766 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36767 = loc;
var G__36768 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36769_36887 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36770_36888 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36771_36889 = true;
var _STAR_print_fn_STAR__temp_val__36772_36890 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36771_36889);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36772_36890);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36757_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36757_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36770_36888);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36769_36887);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36765,G__36766,G__36767,G__36768) : format.call(null,G__36765,G__36766,G__36767,G__36768));

break;
case "macroexpansion":
var G__36774 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36775 = cause_type;
var G__36776 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36777 = loc;
var G__36778 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36774,G__36775,G__36776,G__36777,G__36778) : format.call(null,G__36774,G__36775,G__36776,G__36777,G__36778));

break;
case "compile-syntax-check":
var G__36779 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36780 = cause_type;
var G__36781 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36782 = loc;
var G__36783 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36779,G__36780,G__36781,G__36782,G__36783) : format.call(null,G__36779,G__36780,G__36781,G__36782,G__36783));

break;
case "compilation":
var G__36784 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36785 = cause_type;
var G__36786 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36787 = loc;
var G__36788 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36784,G__36785,G__36786,G__36787,G__36788) : format.call(null,G__36784,G__36785,G__36786,G__36787,G__36788));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36789 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36790 = symbol;
var G__36791 = loc;
var G__36792 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36794_36892 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36795_36893 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36796_36894 = true;
var _STAR_print_fn_STAR__temp_val__36797_36895 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36796_36894);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36797_36895);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36759_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36759_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36795_36893);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36794_36892);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36789,G__36790,G__36791,G__36792) : format.call(null,G__36789,G__36790,G__36791,G__36792));
} else {
var G__36799 = "Execution error%s at %s(%s).\n%s\n";
var G__36800 = cause_type;
var G__36801 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36802 = loc;
var G__36803 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36799,G__36800,G__36801,G__36802,G__36803) : format.call(null,G__36799,G__36800,G__36801,G__36802,G__36803));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36764__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
