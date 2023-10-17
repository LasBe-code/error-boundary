var express = require('express');
var app = express();
app.listen(8080, function () {
  console.log('start! express server on port 8080');
});

app.get('/', function (req, res) {
  res.send('<h1>hi friend!</h1>');
});

app.get('/error/:codeNum', function (req, res) {
  console.log('Call Error Api: ', req.hostname);
  const codeNum = req.params.codeNum;
  switch (codeNum) {
    case '400':
      res.status(400).json({ code: '400', message: 'Bad Request' });
      break;
    case '401':
      res.status(401).json({ code: '401', message: 'Unauthorized' });
      break;
    case '403':
      res.status(403).json({ code: '403', message: 'Forbidden' });
      break;
    case '404':
      res.status(404).json({ code: '404', message: 'Not Found' });
      break;
    case '500':
      res.status(500).json({ code: '500', message: 'Internal Server Error' });
      break;
    default:
      res.status(500).json({ code: '' });
      break;
  }
});
