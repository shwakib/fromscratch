const { Product, validate } = require('../models/product');
const _ = require('lodash');
const formidable = require('formidable');
const fs = require('fs');

module.exports.createProduct = async (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) return res.status(400).send("Something went wrong!!");

        const { error } = validate(_.pick(fields, ["name", 'description', 'price', 'category', 'quantity']));
        if (error) return res.status(400).send(error.details[0].message);

        const { name, description, price, category, quantity } = _.pick(fields, ["name", 'description', 'price', 'category', 'quantity']);

        const product = new Product({
            name: name,
            description: description,
            price: price,
            category: category,
            quantity: quantity,
            cartQuantity: quantity
        });

        if (files.photo) {
            fs.readFile(files.photo.filepath, (err, data) => {
                if (err) return res.status(400).send("Problem in file data!!");
                product.photo.data = data;
                product.photo.contentType = files.photo.mimetype;
                product.save((err, result) => {
                    if (err) return res.status(500).send("Internal server error!!");
                    else return res.status(201).send({
                        message: "Product uploaded successfully!",
                        data: _.pick(result, ["name", 'description', 'price', 'category', 'quantity'])
                    })
                })
            })
        }
        else {
            return res.status(400).send("No image provided!!");
        }
    })
}

module.exports.getProducts = async (req, res) => {
    // console.log(req.query);
    let order = req.query.order === 'desc' ? -1 : 1;
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id'; //If there is any sorting requirements given other wise it will be sorted based on _id
    let limit = req.query.limit ? parseInt(req.query.limit) : 10;
    let skip = parseInt(req.query.skip);
    const products = await Product.find().select({ photo: 0, description: 0 }).sort({ [sortBy]: order }).skip(skip).limit(limit).populate('category', 'name createdAt');
    return res.status(200).send(products);
}

module.exports.getProductsById = async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId).select({ photo: 0 }).populate('category', 'name');
    if (!product) return res.status(404).send("Not Found!!");
    return res.status(200).send(product);
}

module.exports.getPhoto = async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId).select({ photo: 1, _id: 0 })
    res.set('Content-Type', product.photo.contentType);
    return res.status(200).send(product.photo.data);
}

module.exports.updateProductsById = async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) return res.status(400).send("Something Wrong");
        const updatedFields = _.pick(fields, ["name", 'description', 'price', 'category', 'quantity']);
        _.assignIn(product, updatedFields);

        if (files.photo) {
            fs.readFile(files.photo.filepath, (err, data) => {
                if (err) return res.status(400).send("Problem in file data!!");
                product.photo.data = data;
                product.photo.contentType = files.photo.mimetype;
                product.save((err, result) => {
                    if (err) return res.status(500).send("Internal server error!!");
                    else return res.status(200).send({
                        message: "Product updated successfully!",
                    })
                })
            })
        } else {
            product.save((err, result) => {
                if (err) return res.status(500).send("Internal server error!!");
                else return res.status(200).send({
                    message: "Product updated successfully!",
                })
            })
        }
    })
}

module.exports.filterProducts = async (req, res) => {
    let order = req.body.order === 'desc' ? -1 : 1;
    let sortBy = req.body.sortBy ? req.body.sortBy : '_id';
    let limit = req.body.limit ? parseInt(req.body.limit) : 10;
    let skip = parseInt(req.body.skip);
    let filters = req.body.filters;
    let args = {};
    for (let key in filters) {
        if (filters[key].length > 0) {
            if (key === 'price') {
                //{price:{$gte:0,$lte:1000}}
                args['price'] = {
                    $gte: filters['price'][0],
                    $lte: filters['price'][1]
                }
            }
            if (key === 'category') {
                //category:$in['']
                args['category'] = {
                    $in: filters['category']
                }
                console.log(args);
            }
        }
    }

    const products = await Product.find(args).select({ photo: 0 }).populate('category', 'name').sort({ [sortBy]: order }).skip(skip).limit(limit);
    return res.status(200).send(products);
}

module.exports.updateProductCount = async (req, res) => {
    const { product_id, product_quantity } = _.pick(req.body, ["product_id", "product_quantity"]);
    const result = await Product.updateOne({ _id: product_id }, { cartQuantity: product_quantity });
    return res.status(200).send("Count updated");
}