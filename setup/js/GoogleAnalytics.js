function setGoogleAnalytics() {
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-19326700-3', 'auto');
ga('send', 'pageview');
} // setGoogleAnalytics()

/*
<script src="https://cdn.jsdelivr.net/ga-lite/latest/ga-lite.min.js" async></script>
<script>
// https://thejunkland.com/blog/fixing-last-point-on-google-pagespeed-insights.html
var galite = galite || {};
galite.UA = 'UA-19326700-3';
</script>
*/

document.addEventListener('load', setGoogleAnalytics, false);
