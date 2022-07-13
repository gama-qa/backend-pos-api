import Product from "../models/product_model";

class ProductController {
  static getAllProducts(req, res) {
    Product.find({})
      .then((products) => {
        res.status(200).json({ products });
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  }

  static createProduct(req, res) {
    let attr = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    };

    let product = new Product(attr);
    product
      .save()
      .then((product) => {
        res.status(200).json({ product });
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  }

  static updateProduct(req, res) {
    const id = req.params.id;
    const update = { $set: req.body };

    Product.findByIdAndUpdate(id, update)
      .then((product) => {
        res.status(200).json({ product });
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  }

  static getOneProduct(req, res) {
    const id = req.params.id;

    Product.findById(id)
      .then((product) => {
        res.status(200).json({ product });
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  }

  static deleteOneProduct(req, res) {
    const id = req.params.id;

    Product.findByIdAndRemove(id)
      .then((_) => {
        res.status(200).json({ message: "Item Deleted" });
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  }
}

export default ProductController;
