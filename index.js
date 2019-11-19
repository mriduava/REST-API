let express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

    friendRoutes = require('./routes/friends');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    //res.send('Hi Friends!');
    res.json({
        friends: [
        {name: 'Maruf Ahmed', country: 'Sweden'}, 
        {name: 'Deepthy Nair', country: 'India'}
    ]})
});

app.use('/api/friends', friendRoutes);

let port = process.env.PORT;
app.listen(port || 3000, function(){
    console.log(`Friends server is running...`);    
})

