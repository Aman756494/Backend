import express from 'express' 

const app = express()

const port = 3000

app.get("/", (req, res) => {
    res.send("Hello from Aman!")
})

app.get("/ice-tea", (req, res) => {
  res.send("What ice tea would you prefer?");
});

app.get("/twitter", (req, res) => {
  res.send("hiteshdotcom");
});



app.listen(port, () => {
    console.log(`Server is running at port: ${port}...`);
    
})
