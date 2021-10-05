const jwt = require('jsonwebtoken')
const APP_SECRET = 'bixgbHdfAH'

// function getUserId(context) {
//   const Authorization = context.request.get('Authorization')
//   if (Authorization) {
//     const token = Authorization.replace('Bearer ', '')
//     const { userId } = jwt.verify(token, APP_SECRET)
//     return userId
//   }

//   throw new Error('Not authenticated')
// }
function similar_text_regex(str1, str2) {
  //console.log(str1, str2);

  var regEx = new RegExp('[' + str2 + ']', 'gi');
  var matchCnt = str1.match(regEx).length;
  return matchCnt;
}

function similar(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  var counter = 0,
    find = -1;
  for (var i = 0; i < str1.length; i++) {
    find = str2.indexOf(str1.charAt(i));
    if (find > -1) {
      counter++;
      str2 = str2.substr(0, find) + str2.substr(find + 1);
    }
  }
  return counter
}

module.exports = {
  APP_SECRET,
  similar
}