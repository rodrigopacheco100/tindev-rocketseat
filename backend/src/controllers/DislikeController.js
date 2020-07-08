const Dev = require('../models/Dev')

module.exports = {
   async store(req, res) {
      const { idDev } = req.params
      const { user } = req.headers

      //GETTING DEV FROM MONGODB
      const loggedDev = await Dev.findById(user)
      const targetDev = await Dev.findById(idDev)

      //CHECK TARGETDEV
      if (!targetDev) {
         return res.status(400).json({ error: 'Dev not exists' })
      }

      //ADDING DISLIKE
      loggedDev.dislikes.push(targetDev._id)

      //SAVING DOCUMENT (MONGODB)
      await loggedDev.save()

      return res.json({ loggedDev, targetDev })
   }
}