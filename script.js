let selfportrait = document.getElementById("selfportrait");
selfportrait.addEventListener ('mouseover', function() {
  selfportrait.style= "width: 30em";
});
selfportrait.addEventListener ('mouseout', function() {
  selfportrait.style= "width: 25em";
});
  
let jobtitle = document.getElementById('jobtitle');
jobtitle.addEventListener
  ('mouseover', function() {
 jobtitle.style.color = '#d19c1b';
});
jobtitle.addEventListener
  ('mouseout', function() {
  jobtitle.style.color = '#6b7b47';
});