module.exports = {
    landingRender: (req, res) => {
        const collection = db.collection('lists');

        collection.find({}).toArray(function (err, lists) {
            if (err) throw err;
            res.render('pages/index.ejs', { 'lists': lists })
        });
    }

}