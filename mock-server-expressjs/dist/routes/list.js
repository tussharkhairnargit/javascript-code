"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/months', (req, res) => {
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
router.get('/week', (req, res, next) => {
    if (Object.keys(req.query).length > 0)
        return res.status(400).send('Bad Request');
    res.json({ data: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'saterday'] });
});
exports.default = router;
