/**
 * 
 * @param {number} array 
 */
const read = (array) => {
    let res = {};

    array.forEach((el) => {
        const [count, domain] = el.split(',');
        getCount({[domain]: +count}, res);
    })
  return res;
}

/**
 * 
 * @param {*} ob 
 * @param {*} res 
 */
const getCount = (ob, res) => {
    let key = Object.getOwnPropertyNames(ob)[0];
    let count = ob[key];
    const highesDomain = key.slice(key.lastIndexOf('.') +1);
    while (key != highesDomain) {
        res[key] = (count + (res[key] || 0));
        const index = key.indexOf('.');
        key = key.slice(index+1);
    }
    res[highesDomain] = (count + (res[key] || 0));
}

const Ob = 
[ "900,google.com",
"60,mail.yahoo.com", 
"10,mobile.sports.yahoo.com", 
"40,sports.yahoo.com", 
"300,yahoo.com", 
"10,stackoverflow.com", 
"2,en.wikipedia.org", 
"1,es.wikipedia.org", 
"1,mobile.sports" ];

console.log(read(Ob));