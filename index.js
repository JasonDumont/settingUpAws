const express = require('express')
const app = express()
const test = express();


app.get('/', (req, res) => {
  res.send('HEY! There Chicken we are now on develop branch')

})
app.listen(3000, () => console.log('Server running on port 3000'))


test.get('/', (req, res) => {
  res.send('HEY! There Chicken, this is the test site')

})
test.listen(4321, () => console.log('Server running on port 4321'))
