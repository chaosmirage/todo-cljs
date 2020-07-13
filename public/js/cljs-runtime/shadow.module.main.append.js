
shadow.cljs.devtools.client.env.module_loaded('main');

try { app.core.main(); } catch (e) { console.error("An error occurred when calling (app.core/main)"); throw(e); }