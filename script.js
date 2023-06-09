q = '20.252346,85.802773';

function m() {
fetch('https://api.weatherapi.com/v1/current.json?q='+q+'&key=df1745f8c6cc4466bf545635232304')
  .then(response => response.json())
  .then(data => {
      loc = data.location;
      cur =data.current;
      as();
  })
  .catch(error => {
    alert(error);
  });
}

function as() {
   time();
   document.querySelector('.s1').innerHTML = loc.name+', '+loc.region+', '+loc.country;
   document.querySelector('.s2').innerHTML = loc.localtime;
   document.querySelector('.s3').innerHTML =  (d < 0) ? curr.last_updated : time();
   document.querySelector('.s4').innerHTML = cur.temp_c+'°C';
   document.querySelector('.s5').innerHTML = cur.condition.text;
   document.querySelector('.s6').innerHTML = cur.feelslike_c+'°C';
   document.querySelector('.s7').innerHTML = cur.wind_kph+' KMPH('+cur.wind_degree+'° -- '+cur.wind_dir+')';
   document.querySelector('.s8').innerHTML = cur.gust_kph+' KMPH';
   document.querySelector('.s9').innerHTML = cur.pressure_mb+' hPa';
   document.querySelector('.s10').innerHTML = cur.humidity+'%';
   document.querySelector('.s11').innerHTML = cur.cloud+'%';
   document.querySelector('.s12').innerHTML = cur.vis_km+' Km';
   document.querySelector('.s13').innerHTML = cur.uv;
   document.querySelector('.s14').innerHTML = cur.precip_mm+' mm';

   icon = cur.condition.icon;
   d3 = document.querySelector('.d3');
   d3.style.background = 'url(http:'+icon+')';
   if (screen.width <= 768)
      d3.style.margin = '-10px auto 0';
}

function get() {
   q = document.getElementById("txt").value;
   m();
   document.querySelector('#txt').value= '';
}

function time() {
   s = loc.localtime.split(' ')[1].split(':');
   s = s[0] + s[1];
   c = cur.last_updated.split(' ')[1].split(':');
   c = c[0] + c[1];
   d = +s - (+c);
   return d == 0 ? 'Now' : d == 1 ? d+' minute ago' : d+' minutes ago';
}

input = document.getElementById("txt");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector("button").click();
  }
});

m();
  
