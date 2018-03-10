const request = require('request-promise');

const generateDate = async (size) => {
  try {
    const options = {
      uri :'https://uinames.com/api/',
      qs: {
        amount: size || 1,
      },
    };
    const body = await request(options);
    if (body) {
      return JSON.parse(body);
    }
    return null;
  } catch (e) {
    throw new Error(e.error.message);
  }
}

exports.generateDate = generateDate;
