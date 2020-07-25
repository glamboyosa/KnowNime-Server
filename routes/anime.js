import { Router } from 'express';
import fetch from 'node-fetch';
import { client } from '../index';
const router = Router();
router.get('/', async (req, res) => {
  const data = await fetch(`${process.env.BASEURL}/anime`);
  const result = await data.json();
  /*remember that for something like characters you wanna replace the APIs route with yours incase 
you wanna go possibly fetch characters or a single post. maybe make it a helper since you might use it here and
in /:id
*/
  console.log(result.splice(0, 1));
  res.status(200).json({
    status: 'success',
    message: 'placeholder',
  });
});
router.get('/:id', async (req, res) => {
  const { id } = req.params;
});
export default router;
