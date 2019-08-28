import Purgecss from 'purgecss'

exports.handler = async function(event) {
  const purgeCss = new Purgecss({
    content: ['test.html'],
    css: ['test.css']
  })
  const purgecssResult = JSON.stringify(purgeCss.purge());
  let cleanString = purgecssResult.substring(1,purgecssResult.length-1).replace(/[\\]/g, "");
  return {
    statusCode: 200,
    body: cleanString
  };
};