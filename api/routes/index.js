var express = require('express');
var router = express.Router();
const persone = require('../public/database/person.json');
const fs = require('fs');
const path = require('path');
const { writeFile } = require('../scripts/scripts');


let obj = [...persone];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/notes', (req, res) => {
  res.status(200).send(obj)
})

router.post('/notes', (req, res) => {
  const { title, text } = req.body
  if (!title || !text) {
    res.send({ status: "error", message: "Title and text is requared" })
  } else {
    obj.push({
      id: obj.length,
      title: title,
      text: text
    })

    writeFile(obj)

    res.status(200).send(obj)
  }

})


router.get('/notes/:id', (req, res) => {
  let note = obj.filter(item => item.id === +req.params.id)
  res.status(200).send(note)
})

router.put('/notes/:id', (req, res) => {

  const { title, text } = req.body

  if (!title || !text) {
    res.send({ status: "error", message: "Title and text is requared" })
  } else {
    let note = obj.map(item => {
      if (item.id === +req.params.id) {
        item.title = title
        item.text = text
      }
      return item

    })

    writeFile(note)
    res.status(200).send(note)
  }
})


router.delete('/notes/:id', async (req, res) => {
  let note = obj.filter(item => item.id !== +req.params.id)

  writeFile(note)
  obj = [...note]
  res.status(200).send(note)
})



module.exports = router;
