var express = require('express');
var router = express.Router();
const persone = require('../public/database/person.json');
const fs = require('fs');
const path = require('path');
const { writeFile } = require('../scripts/scripts');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/notes', (req, res) => {
  res.status(200).send(persone)
})

router.post('/notes', (req, res) => {

  let obj = persone.slice()
  obj.push({
    id: obj.length + 1,
    title: req.body.title
  })

  write(obj)

  res.status(200).send(`I received your POST request. This is what you sent me: ${req.body.title}`)
})


router.get('/notes/:id', (req, res) => {

  let obj = persone.slice()
  let note = obj.filter(item => item.id === +req.params.id)

  res.status(200).send(note)
})

router.put('/notes/:id', (req, res) => {

  let obj = persone.slice()

  // if (req.body === undefind || req.body.title === undefind || req.body.text === undefind || req.param.id === undefind) {
  //   return
  // }
  console.log(req.body.title);
  console.log(req.body.text);

  let note = obj.map(item => {
    if (item.id === +req.params.id) {
      item.title = req.body.title
      item.text = req.body.text
    }
    return item

  })

  writeFile(note)
  res.status(200).send(note)
})


router.delete('/notes/:id', (req, res) => {
  let obj = persone.slice()
  let note = obj.filter(item => item.id !== +req.params.id)

  writeFile(note)

  res.status(200).send(note)
})



module.exports = router;
