import express from "express";
import students from './routes/student.js'
import products from "./products.js";
import userCredentials from './middlewares/logs.js'
import randomRoute from './routes/route.js'
import bodyParser from "body-parser";

import path, { join } from 'path'

const app = express();
const PORT = 8000;

// app.get('/student', (req, res) => {
//     res.send("All Students")
// })

// app.post("/student", (req,res) => {
//     res.send("Add New Student")
// })

// app.put('/student', (req,res) => {
//     res.send("Update Student");
// })

// app.delete("/student", (req,res) => {
//     res.send("Delete student");
// })

// refactor - with the help of app.route()

// app.route('/student')
// .get((req,res) => res.send("All Students"))
// .post((req,res) => res.send("Add new student"))
// .put((req,res) => res.send("Update student"))
// .delete((req,res) => res.send("Delete student"))

// Routes
// app.use("/api/student", router)
// app.use("/api/teacher", teacherRouter)

// **routes parameter -> Route params
// app.get("/student/delete/:id", (req,res) => {
//     // req.params
//     res.send(req.params.id);
// })

// app.get("/ecom/products/iphone/:model", (req, res) => {
//   const {model} = req.params;

//   res.send(`Iphon  ${model} Model Pro max`);
// }); 


// app.get("/products/:category/:id", (req,res) => {
//   const {category , id } = req.params;
//   res.send(`Product category : ${category} and product id : ${id}`);

// })

// app.get("/products/order/:day/:month/:year", (req,res) => {
//   const { day , month, year } = req.params;

//   res.send(`The ordered product of day : ${day} , month : ${month} and year: ${year}`);
// })

// ** App parameters -> App parameters 
// app.param("year", (req,res, next,id) => {
//       console.log(`id : ${id}`)
//       next()
// })


// app.get('/user/:id', (req,res) => {
//   console.log(`This is user id path`);
//   res.send("Response OK");
// })

// Routes 
// app.use('/students', students)


// Query String ->  ?name=pabitra&roll=12

// app.get('/product', (req,res) => {
//   res.send(`Response OK ${req.query.category}`)
// })
// we use query string to send the data from the client to the server 

// app.get('/product', (req,res) => {
//   const { category } = req.query;

//   res.send(`Product category: ${category}`)
// })

// ** Multiple query parameters 
// https://localhost:8000/product?category=iphone&id=2
// app.get('/product', (req,res) => {
//   const { category, id } = req.query;

//   res.send(`Product category: ${category} and the product ID: ${id}`)
// })


// send data from server to the client using JSON 
// app.get('/products', (req,res) => {
//   res.json(products)
// })


// Middlewares -> It is executed in the middle of the request and the response cycle 
// It takes threee parameters - req, res and next 

// app.use(userCredentials); // this allows us to run our middleware for every request 

// app.get('/', userCredentials, (req,res) => {
//     res.send("<h2>Hello Admin JIO</h2>")
// })
// // req ----> Middleware -----> res 

// app.get('/about', (req,res) => {
//     res.send("<h2>About Section</h2>")
// })

// app.get('/contact', (req,res) => {
//     res.send("<h2>From Contact Section</h2>")
// })


// app.use(express.static('./public')) // allows to server static files 
// app.get('/', (req,res) => {
//   res.sendFile(path.join(process.cwd(), './public/index.html'))
// })

// **Serve Template Engine -> EJS -> Embedded Javascript 

// app.set('view engine', "ejs")

// app.use("/",randomRoute);

app.use(bodyParser.json())

app.post('/post', (req,res) => {
    const { name, email, password } = req.body;
    res.send(`Name : ${name} , email : ${email} and password : ${password}`)
})



app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));








