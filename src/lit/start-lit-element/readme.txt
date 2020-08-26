-- Start a dev server -- 
npm install -g polymer-cli
cd start-lit-element
npm install
polymer serve

-- Set up new app-- 

* In index.html, update metadata stuff:
 
<!-- Change stuff here for your app -->
<meta name="description" content="start-lit-element">
<meta name="theme-color" content="#ffffff">
<title>start-lit-element</title>

* In index.html, uncomment the service worker registration code:
 
<!-- Register service worker if supported. -->
<!--
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }
</script> -->

* In manifest.json, update the app description, etc:
"description": "start-lit-element",
"start_url": "index.html",
"name": "start-lit-element",
"short_name": "start-lit-el",
"background_color": "#ffffff",
"theme_color":"#ffffff",

* Update your package.json if required

* In polymer.json, update your shell & entrypoint if required

"shell": "src/start-lit-element.js",
"entrypoint": "index.html",

* Remember to update firebase.json and .firebaserc for a real deployment!

-- Build for production and serve locally -- 

* Build your project and serve the build locally:

polymer build
polymer serve build/default

* If you changed significant stuff (e.g. filenames, folder structure, installed other modules, etc), edit your polymer.json file to configure your build correctly. See the Polymer CLI documentation for more info.

-- Deploy -- 

https://github.com/PolymerLabs/start-lit-element#start-a-dev-server