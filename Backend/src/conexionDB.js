const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/monolegal', {
    useUnifiedTopology: true,
    useNewUrlParser:true,
    useFindAndModify:false
})
.then(db => console.log('base de datos conectada'))
.catch((err) => console.error(err));

