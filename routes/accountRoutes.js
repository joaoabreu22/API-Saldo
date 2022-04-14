const router = require('express').Router()
const Account = require('../models/account')


router.get('/:id', async (req, res) => {
    const id = req.params.id
  
    try {
      const account = await Account.findOne({ _id: id })
  
      if (!Account) {
        res.status(422).json({ message: 'Usuário não encontrado!' })
        return
      }
  
      res.status(200).json(account)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })




module.exports = router