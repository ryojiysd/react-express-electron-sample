var express = require('express')

var router = express.Router()

const kuji = ['大吉', '吉', '凶']

// A function to return a result of Omikuji
const get_kuji = () => {
  const rnd = Math.floor(Math.random() * kuji.length)
  return kuji[rnd]
}

// GET /api/kuji
router.get('/', (req, res) => {
  res.json({result: get_kuji()})
})

module.exports = router
