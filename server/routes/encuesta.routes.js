const { Router } = require('express')
const { pool } = require('../../db.js')


const router = Router()

router.post('/survey', (req, res) => {
    console.log(typeof req.body)
} )


module.exports = router