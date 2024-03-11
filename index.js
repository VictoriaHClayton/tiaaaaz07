function parseHTML(htmlString) {
  return htmlparser2.parseDocument(htmlString);
}

// 使用 XPath 查询 DOM 对象
function queryWithXPath(dom, xpathExpression) {
  return xpath.evaluate(xpathExpression, dom, null, xpath.XPathResult.ANY_TYPE, null);
}

// 使用 CSS 选择器查询 DOM 对象
function queryWithCSSSelector(dom, selector) {
  const $ = cheerio.load(dom.toString());
  return $(selector).html();
}

async function getTransactionInfo(txHash) {
  try {
      const transaction = await web3.eth.getTransaction(txHash);
      return transaction;
  } catch (error) {
      console.error('Error fetching transaction info:', error);
      return null;
  }
}

// 6. 获取当前 gas 价格（单位：Gwei）
async function getCurrentGasPrice() {
  try {
      const gasPrice = await web3.eth.getGasPrice();
      return web3.utils.fromWei(gasPrice, 'gwei');
  } catch (error) {
      console.error('Error fetching current gas price:', error);
      return null;
  }
}