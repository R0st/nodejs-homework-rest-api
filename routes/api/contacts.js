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
const { NotFound, BadRequest } = require("http-errors");

// const createError = require("http-errors");
const Joi = require("joi");

const contactsOperations = require("../../model/contacts");

const joiShema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.number().required()
})

const router = express.Router();

router.get("/", async(req, res, next) => {
    try {
        const contacts = await contactsOperations.listContacts();
        // throw new Error("не удалось прочитать файл");
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

router.get("/:contactId", async (req, res, next) => {
    try {
        const { contactId } = req.params;
        const contact = await contactsOperations.getContactById(Number(contactId));
        if (!contact) {
            throw new NotFound("Not Found");
            // throw new createError(404, `Contact with id=${id} not found`);

            // const error = new Error(`Contact with id=${id} not found`);
            // error.status = 404;
            // throw error;

            // res.status(404).json({
            //     status: "error",
            //     code: 404,
            //     message: `Contact with id=${id} not found`
            // });
            // return
        }
        res.json(contact);
    }
    catch (error) {
        next(error)
    }
});

router.post("/", async(req, res, next) => {
    try {
        const { error } = joiShema.validate(req.body);
        if (error) {
            throw new BadRequest(error.message);
        }
        const result = await contactsOperations.addContact(req.body);
        res.status(201).json({
            status: "success",
            code: 201,
            data: {
                result
            }
        })
    }
    catch (error) {
        next(error);
    }
})

router.put("/:contactId", async (req, res, next) => {
    try {
        const { error } = joiShema.validate(req.body);
        if (error) {
            throw new BadRequest({"message": "missing fields"});
        }
        const { contactId } = req.params;
        const result = await contactsOperations.updateById(contactId, req.body);
        if (!result) {
            throw new NotFound("Not found");
        }
        res.json({
            status: "success",
            code: 200,
            data: {
                result
            }
        })
    }
    catch (error) {
        next(error);
    }
})

router.delete("/:contactId", async (req, res, next) => {
    try {
        const { contactId } = req.params;
        const result = await contactsOperations.removeContact(Number(contactId));
        if (!result) {
            throw new NotFound("Not Found");
        }
        res.json({
            status: "success",
            code: 200,
            message: "contact deleted"
        })
    }
    catch (error) {
        next(error)
    }
})

module.exports = router;
