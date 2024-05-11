const { firsthandler, secondhandler } = require('./index')

describe('firsthandler', () => {
  it('should return status code 200 and the correct message', async () => {
    const event = {};
    const expectedResponse = {
      statusCode: 200,
      body: JSON.stringify({
        message: "Go Serverless v3.0! Your function /get executed successfully!"
      }, null, 2),
    };
    const result = await firsthandler(event);
    expect(result).toEqual(expectedResponse);
  });
});
describe('secondhandler', () => {
  it('should return status code 200 and the correct message', async () => {
    const event = {};
    const expectedResponse = {
      statusCode: 200,
      body: JSON.stringify({
        message: "Go Serverless v3.0! Your function /post executed successfully!"
      }, null, 2),
    };
    const result = await secondhandler(event);
    expect(result).toEqual(expectedResponse);
  });
});
