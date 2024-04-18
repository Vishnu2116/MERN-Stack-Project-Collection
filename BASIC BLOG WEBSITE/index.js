import express from "express";
import bodyParser from "body-parser";

const app=new express();
const port=3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

let posts=[]
let nextId=1;

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        posts:posts
    });
});


app.get("/create",(req,res)=>{
    res.render("partials/create.ejs");
});

app.post("/create",(req,res)=>{
    console.log(req.body);
    posts.push({
        id: nextId++,
        title: req.body.title,
        content: req.body.content
    });
    res.redirect("/");
});

app.get("/posts/:id/edit",(req,res)=>{
    const post = posts.find(p => p.id === parseInt(req.params.id));
    res.render("partials/edit.ejs",{
        post:post
    });
});

app.post("/posts/:id/edit",(req,res)=>{
    const index = posts.findIndex(p => p.id === parseInt(req.params.id));
  posts[index] = { id: posts[index].id, title: req.body.title, content: req.body.content };
    res.redirect("/");
});


app.post('/posts/:id/delete', (req, res) => {
    posts = posts.filter(p => p.id !== parseInt(req.params.id));
    res.redirect('/');
  });

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});