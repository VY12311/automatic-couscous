song1 = "";
song2 = "";
song3 = "";
song4 = "";

function preload() {
    song1 = loadSound("peter_pan.mp3");
    song2 = loadSound("frozen.mp3");
    song3 = loadSound("Disney_music.mp3");
}

function setup() {
  canvas = createCanvas(600,500);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();

  alert("E͎̮͔͈̪̟RR̤̣O͓̪R̷.̮̲͇͟ ͈̩V͉͕͚̥I̙̖͙̝͉͘R̠̹͜U͏̯S̫̦̺ ͙̝̦̺͜D̶̙͕E̠̗T̠̤͖͙̖̮̻E̵̩͉͖̫̣ͅC̸̞̭̳T͇͎̗̠͇͜E̡͇̝̹͎̟͍̼D͇̟̦͢.̗̠̗̼ ̱SY͟S҉͉̟͎͖̼ͅͅT̢̠͖̘͕ͅE̤̞̞̟͝M̧̙͎̞͎̞͍͙ ̗̻̞͇͚̗̫R͖̟̖͕̙E҉̹̤Q͙͇͍̭̥̘̝U̫̘̙I̶͕̼͎R̹̤͈E҉͙͇͕̱̯S ̹̯͇M̧̯͍̻̠̞A͎̘̘I̭͍̥͙͚͜Ǹ̘̠̭T̹͎̜͉̖̙͇Ḛ̸͉̟̳̮N҉̺̥͚̤E̝̣͓N̖C͙̯̭̼̰E̸͓̳ ");
  console.error("E͎̮͔͈̪̟RR̤̣O͓̪R̷.̮̲͇͟ ͈̩V͉͕͚̥I̙̖͙̝͉͘R̠̹͜U͏̯S̫̦̺ ͙̝̦̺͜D̶̙͕E̠̗T̠̤͖͙̖̮̻E̵̩͉͖̫̣ͅC̸̞̭̳T͇͎̗̠͇͜E̡͇̝̹͎̟͍̼D͇̟̦͢.̗̠̗̼ ̱SY͟S҉͉̟͎͖̼ͅͅT̢̠͖̘͕ͅE̤̞̞̟͝M̧̙͎̞͎̞͍͙ ̗̻̞͇͚̗̫R͖̟̖͕̙E҉̹̤Q͙͇͍̭̥̘̝U̫̘̙I̶͕̼͎R̹̤͈E҉͙͇͕̱̯S ̹̯͇M̧̯͍̻̠̞A͎̘̘I̭͍̥͙͚͜Ǹ̘̠̭T̹͎̜͉̖̙͇Ḛ̸͉̟̳̮N҉̺̥͚̤E̝̣͓N̖C͙̯̭̼̰E̸͓̳ ");
}
function draw() {
   image(video, 0, 0, 600, 500);
}
