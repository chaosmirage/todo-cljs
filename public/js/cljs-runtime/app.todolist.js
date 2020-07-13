goog.provide('app.todolist');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clojure.string');
if((typeof app !== 'undefined') && (typeof app.todolist !== 'undefined') && (typeof app.todolist.todos !== 'undefined')){
} else {
app.todolist.todos = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
}
if((typeof app !== 'undefined') && (typeof app.todolist !== 'undefined') && (typeof app.todolist.counter !== 'undefined')){
} else {
app.todolist.counter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
app.todolist.add_todo = (function app$todolist$add_todo(text){
var id = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.todolist.counter,cljs.core.inc);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.todolist.todos,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),text,new cljs.core.Keyword(null,"done","done",-889844188),false], null));
});
app.todolist.toggle = (function app$todolist$toggle(id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.todolist.todos,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"done","done",-889844188)], null),cljs.core.not);
});
app.todolist.save = (function app$todolist$save(id,title){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.todolist.todos,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null),title);
});
app.todolist.delete$ = (function app$todolist$delete(id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.todolist.todos,cljs.core.dissoc,id);
});
app.todolist.mmap = (function app$todolist$mmap(m,f,a){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(m),(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(a,m) : f.call(null,a,m)));
});
app.todolist.complete_all = (function app$todolist$complete_all(v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.todolist.todos,app.todolist.mmap,cljs.core.map,(function (p1__27239_SHARP_){
return cljs.core.assoc_in(p1__27239_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"done","done",-889844188)], null),v);
}));
});
app.todolist.clear_done = (function app$todolist$clear_done(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.todolist.todos,app.todolist.mmap,cljs.core.remove,(function (p1__27240_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__27240_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"done","done",-889844188)], null));
}));
});
if((typeof app !== 'undefined') && (typeof app.todolist !== 'undefined') && (typeof app.todolist.init !== 'undefined')){
} else {
app.todolist.init = (function (){
app.todolist.add_todo("Rename Cloact to Reagent");

app.todolist.add_todo("Add undo demo");

app.todolist.add_todo("Make all rendering async");

app.todolist.add_todo("Allow any arguments to component functions");

return app.todolist.complete_all(true);
})()
;
}
app.todolist.todo_input = (function app$todolist$todo_input(p__27243){
var map__27244 = p__27243;
var map__27244__$1 = (((((!((map__27244 == null))))?(((((map__27244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27244):map__27244);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27244__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_save = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27244__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var on_stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27244__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
var val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(title);
var stop = (function (){
cljs.core.reset_BANG_(val,"");

if(cljs.core.truth_(on_stop)){
return (on_stop.cljs$core$IFn$_invoke$arity$0 ? on_stop.cljs$core$IFn$_invoke$arity$0() : on_stop.call(null));
} else {
return null;
}
});
var save = (function (){
var v = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(val)));
if((!(cljs.core.empty_QMARK_(v)))){
(on_save.cljs$core$IFn$_invoke$arity$1 ? on_save.cljs$core$IFn$_invoke$arity$1(v) : on_save.call(null,v));
} else {
}

return stop();
});
return (function (p__27246){
var map__27247 = p__27246;
var map__27247__$1 = (((((!((map__27247 == null))))?(((((map__27247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27247):map__27247);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27247__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27247__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27247__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(val),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),save,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27241_SHARP_){
return cljs.core.reset_BANG_(val,p1__27241_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__27242_SHARP_){
var G__27249 = p1__27242_SHARP_.which;
switch (G__27249) {
case (13):
return save();

break;
case (27):
return stop();

break;
default:
return null;

}
})], null)], null);
});
});
app.todolist.todo_edit = cljs.core.with_meta(app.todolist.todo_input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (p1__27250_SHARP_){
return reagent.dom.dom_node(p1__27250_SHARP_).focus();
})], null));
app.todolist.todo_stats = (function app$todolist$todo_stats(p__27251){
var map__27252 = p__27251;
var map__27252__$1 = (((((!((map__27252 == null))))?(((((map__27252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27252):map__27252);
var filt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27252__$1,new cljs.core.Keyword(null,"filt","filt",169229082));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27252__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27252__$1,new cljs.core.Keyword(null,"done","done",-889844188));
var props_for = (function (name){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.deref(filt)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(filt,name);
})], null);
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#todo-count","span#todo-count",-1116128108),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),active], null)," ",(function (){var G__27254 = active;
switch (G__27254) {
case (1):
return "item";

break;
default:
return "items";

}
})()," left"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#filters","ul#filters",-899831395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),props_for(new cljs.core.Keyword(null,"all","all",892129742)),"All"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),props_for(new cljs.core.Keyword(null,"active","active",1895962068)),"Active"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),props_for(new cljs.core.Keyword(null,"done","done",-889844188)),"Completed"], null)], null)], null),(((done > (0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#clear-completed","button#clear-completed",-1698725142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),app.todolist.clear_done], null),"Clear completed ",done], null):null)], null);
});
app.todolist.todo_item = (function app$todolist$todo_item(){
var editing = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (p__27256){
var map__27257 = p__27256;
var map__27257__$1 = (((((!((map__27257 == null))))?(((((map__27257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27257):map__27257);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27257__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27257__$1,new cljs.core.Keyword(null,"done","done",-889844188));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27257__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[(cljs.core.truth_(done)?"completed ":null),(cljs.core.truth_(cljs.core.deref(editing))?"editing":null)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view","div.view",-1680900976),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),done,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return app.todolist.toggle(id);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),(function (){
return cljs.core.reset_BANG_(editing,true);
})], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.destroy","button.destroy",1044866871),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.todolist.delete$(id);
})], null)], null)], null),(cljs.core.truth_(cljs.core.deref(editing))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.todolist.todo_edit,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"edit",new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"on-save","on-save",1618176266),(function (p1__27255_SHARP_){
return app.todolist.save(id,p1__27255_SHARP_);
}),new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),(function (){
return cljs.core.reset_BANG_(editing,false);
})], null)], null):null)], null);
});
});
app.todolist.todolist = (function app$todolist$todolist(props){
var filt = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"all","all",892129742));
return (function (){
var items = cljs.core.vals(cljs.core.deref(app.todolist.todos));
var done = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"done","done",-889844188),items));
var active = (cljs.core.count(items) - done);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#todoapp","section#todoapp",41606040),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header#header","header#header",1650878621),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"todos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.todolist.todo_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"new-todo",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"on-save","on-save",1618176266),app.todolist.add_todo], null)], null)], null),(((cljs.core.count(items) > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#main","section#main",559170339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#toggle-all","input#toggle-all",-512330812),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),(active === (0)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return app.todolist.complete_all((active > (0)));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all"], null),"Mark all as complete"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#todo-list","ul#todo-list",-1648361723),(function (){var iter__4529__auto__ = (function app$todolist$todolist_$_iter__27259(s__27260){
return (new cljs.core.LazySeq(null,(function (){
var s__27260__$1 = s__27260;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27260__$1);
if(temp__5735__auto__){
var s__27260__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27260__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27260__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27262 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27261 = (0);
while(true){
if((i__27261 < size__4528__auto__)){
var todo = cljs.core._nth(c__4527__auto__,i__27261);
cljs.core.chunk_append(b__27262,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.todolist.todo_item,todo], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)));

var G__27266 = (i__27261 + (1));
i__27261 = G__27266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27262),app$todolist$todolist_$_iter__27259(cljs.core.chunk_rest(s__27260__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27262),null);
}
} else {
var todo = cljs.core.first(s__27260__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.todolist.todo_item,todo], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)),app$todolist$todolist_$_iter__27259(cljs.core.rest(s__27260__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var G__27263 = cljs.core.deref(filt);
var G__27263__$1 = (((G__27263 instanceof cljs.core.Keyword))?G__27263.fqn:null);
switch (G__27263__$1) {
case "active":
return cljs.core.complement(new cljs.core.Keyword(null,"done","done",-889844188));

break;
case "done":
return new cljs.core.Keyword(null,"done","done",-889844188);

break;
case "all":
return cljs.core.identity;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27263__$1)].join('')));

}
})(),items));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer#footer","footer#footer",-1164052935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.todolist.todo_stats,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),active,new cljs.core.Keyword(null,"done","done",-889844188),done,new cljs.core.Keyword(null,"filt","filt",169229082),filt], null)], null)], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer#info","footer#info",1634811413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Double-click to edit a todo"], null)], null)], null);
});
});

//# sourceMappingURL=app.todolist.js.map
