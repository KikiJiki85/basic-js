const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  for (let i = 0; i < domains.length; i++) {

    const domain = domains[i].split('.').reverse();

    for (let j = 0; j < domain.length; j++) {
      const dns = '.' + domain.slice(0, j + 1).join('.');
      if (!obj[dns]) obj[dns] = 1;
      else obj[dns]++;
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
