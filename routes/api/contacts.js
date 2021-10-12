// const express = require('express')
// const router = express.Router()

// router.get('/', async (req, res, next) => {
//   res.json({ message: 'home work done!' })
// })

// router.get('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.post('/', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.delete('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.patch('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// module.exports = router


const express = require("express");

const contactsOperations = require("../../model/contacts");

const router = express.Router();

router.get("/", async(req, res, next) => {
    try {
        const contacts = await contactsOperations.listContacts();
        // throw new Error("rtrtrttrtrtrtr");
        res.json(contacts);
    }
    catch (error) {
        next(error);
        // res.status(500).json({
        //     status: "error",
        //     code: 500,
        //     message: error.message
        // })
    }
});

router.get("/:id", async(req, res) => {
    try {
        console.log(req.params)
    }
    catch (error) {
        next(error)
    }
});

router.post("/", async(req, res) => {
  
})

module.exports = router;
