import dbConnect from '../utils/dbConnect.js';
import Product from '../models/ProductModel.js';

const productController = async (req, res) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const gettingProduct = await Product.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: gettingProduct });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'POST':
      try {
        const PostingProduct = await Product.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: PostingProduct });
      } catch (error) {
        res.status(400).json({ success: false });
      }
    default:
      res.send('not rout');
      break;
  }
};

export default productController;
