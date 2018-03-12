const request = require('request-promise');
const config = require('./config');

const generateDate = async (size) => {
  try {
    const options = {
      uri :config.url,
      qs: {
        amount: size || config.defaultSize,
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
