import express from "express";
import ProductController from "../controllers/product_controller";

const productRouter = express.Router();

productRouter
  .route("/products")
  .get(ProductController.getAllProducts)
  .post(ProductController.createProduct);

productRouter
  .route("/products/:id")
  .get(ProductController.getOneProduct)
  .patch(ProductController.updateProduct)
  .delete(ProductController.deleteOneProduct);

export default productRouter;
