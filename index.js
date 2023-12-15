const app = require('./app')
const main = async()=>{
    port = process.env.PORT || process.argv[2] || 3000;
    console.log("graphql");
    app.listen(port,()=>{
        console.log(`http://localhost:${port}`);
    })
}
main();