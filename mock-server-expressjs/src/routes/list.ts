import { Router, Request, Response } from 'express';

const router = Router();

router.get('/months', (req: Request, res: Response) => {
  res.json({ data: [
    'January',
    'February',
    'March', 
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'   
  ] });
});

router.get('/week', (req: Request, res: Response, next) => {
  if (Object.keys(req.query).length > 0) 
    return res.status(400).send('Bad Request');
  
  res.json({ data: [ 'Sunday', 'Monday', 'Tuesday','Wednesday','Thurday', 'Friday', 'saterday' ] });
});


export default router;
