import Purgecss from 'purgecss'
import purgeHtml from 'purge-from-html'

exports.handler = async function(event) {
  const purgeCss = new Purgecss({
    content: ['test.html'],
    css: ['test.css'],
    extractors: [
      {
        extractor: purgeHtml,
        extensions: ['html']
      }
    ]
  })
  const purgecssResult = JSON.stringify(purgeCss.purge());
  let cleanString = purgecssResult.substring(1,purgecssResult.length-1).replace(/[\\]/g, "");
  return {
    statusCode: 200,
    body: cleanString
  };
};