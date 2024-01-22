import { Router } from 'express';

import { default as emojis } from './emojis.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: 'API - 👋🌎🌍🌏',
    });
});

router.use('/emojis', emojis);

export default router;