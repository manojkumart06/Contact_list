const express = require('express');
const path = require('path');
const port = 8000;

//including the db config file
const db = require('./config/mongoose');
const Contact = require('./models/contact')

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.urlencoded());  //added a parser(which is middleware)
app.use(express.static('assets'));

/*//Middleware1
app.use(function(request,response,next){
    //console.log("Middleware 1");
    request.myname = "Hero";
    next();
});

//Middleware2
app.use(function(request,response,next){
    console.log("Name from Middleware 2 is :",request.myname);
    next();
});*/

var contactList = [
    {
        name : 'Manoj',
        phone : '8292920022'
    },
    {
        name : 'Kumar',
        phone : '7882920022'
    },
    {
        name : 'Gowda',
        phone : '2222920022'
    }
]

app.get('/',function(req,res){
    //console.log(__dirname);
    //console.log(req.myname);
    // res.send("<h1>cool you made it here or yes u did it!!</h1>");
    Contact.find({})
        .then(contactList =>{     
            return res.render('home',{
            title:'Contact_list',
            contact_list : contactList
             })
        })
        .catch(err =>{
            console.log("error in fecting the contacts from DB",err);
            return;
        });
    });

app.get('/pra',function(req,res){
    return res.render('practice',{
        title : 'playground_for_practice'
    })
});


//for creating a contact
app.post('/create-contact', function(req,res){
        //console.log(req.body);
        //console.log(req.body.name);
        //return res.redirect('/pra');
        /*contactList.push({
            name : req.body.name,
            phno : req.body.phno
        })*/
        //or
        //contactList.push(req.body);
        Contact.create({
            name: req.body.name,
            phone: req.body.phone
        })
        .then(newContact => {
            console.log("**********", newContact);
            return res.redirect('back');
        })
        .catch(err => {
            console.log("error in creating a contact!", err);
            return res.redirect('back');
        });
        //return res.redirect('back');  // back or followed back url(/)
});

/*req.params type
app.get('/delete-contact/:phone', function(req,res){
    console.log(req.params);
    let phone = req.params.phno;
});*/


/*for deleting a contact using phone, old method before mongodb used 
app.get('/delete-contact/', function(req,res){
    //console.log(req.query);
    //get the query from the url
    let phone = req.query.phone;

    let contactIndex = contactList.findIndex(contact => contact.phone == phone);

    console.log(contactIndex);

    if(contactIndex !=-1){
        contactList.splice(contactIndex,1);
    }

    return res.redirect('back');
})*/

//for deleting a contact
app.get('/delete-contact/',function(req,res){
    //get the query from url
    let id = req.query.id;
    
    Contact.findByIdAndDelete(id
    )
    .then((id)=>{
        return res.redirect('back');
    })
    .catch((err) =>{
        console.log('error in deleting an object from database');
        return;
    })
})

app.listen(port,function(err){
    if(err){
        console.log("Error in running the Server",err);
    }
    console.log("Yup! My express server running on port ",port);
})
