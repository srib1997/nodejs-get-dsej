let Parser = require('rss-parser');
let parser = new Parser({
  defaultRSS: 2.0
});
 
(async () => {
 
  let feed = await parser.parseURL('https://www.dsej.gov.mo/~webdsej/typhoon/web_typhoon_rss.php?lang=c');
  console.log(feed.title);
 
  feed.items.forEach(item => {
    console.log(item)
    // console.log(item.title + ':' + item.link)
  });
 
})();