import Purgecss from 'purgecss'

exports.handler = async function(event) {
  const purgeCss = new Purgecss({
    content: ['test.html'],
    css: ['test.css']
  })
  const purgecssResult = purgeCss.purge()
 
  return {
    statusCode: 200,
    body: JSON.stringify(purgecssResult)
  };
};