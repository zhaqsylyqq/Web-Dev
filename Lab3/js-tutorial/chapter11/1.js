`Callbacks`

`
THe theoretical data is in obsidian http
`

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Cool, the script ${script.src} is loaded`);
  alert( _ ); // _ is a function declared in the loaded script
});


`Handling errors`
function loadScript2(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => {callback(null, script)};
  script.onerror = () => {callback(new Error(`Script load error for ${src}`))};

  document.head.append(script);
}

loadScript2('/my/scripts.js', function(error, script) {
  if (error) {

  } else {

  }
})
