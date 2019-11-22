const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const query = `
        SELECT * from "quarterbacks"
        ORDER BY "score" DESC;
    `;

    pool.query(query)
        .then((response) => {
            console.log('compare GET response', response);
            res.send(response.rows)
        })
        .catch((error) => {
            console.log('compare GET error', error);
        })
});

module.exports = router;