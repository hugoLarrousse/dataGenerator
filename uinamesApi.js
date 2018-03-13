const request = require('request-promise');
const config = require('./config');

const generateDate = async ({ size, gender, minlen, maxlen, region, ext }) => {
  try {
    const options = {
      uri :config.url,
      qs: {
        amount: size || config.defaultSize,
      }
    };
    Object.assign(options.qs, gender, minlen, maxlen, region, ext)
    console.log('options :', options);
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
