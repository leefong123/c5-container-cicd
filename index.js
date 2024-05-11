module.exports.firsthandler = async (event) => {
  console.log('lfchin_lambda')
  console.log(event)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function /get executed successfully!",
      },
      null,
      2
    ),
  };
};
module.exports.secondhandler = async (event) => {
  console.log('lfchin_lambda')
  console.log(event)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function /post executed successfully!",
      },
      null,
      2
    ),
  };
};
