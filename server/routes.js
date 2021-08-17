
const router = (app) =>{
    app.get('/', require('./controllers/index'))
    app.post('/', require('./controllers/submit'))
}

module.exports = router
