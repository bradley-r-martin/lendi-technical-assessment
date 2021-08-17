
const path = require("path");

const index = async (request, response)=>{
    response.sendFile(path.join(__dirname, "../../build", "index.html"));
}

module.exports = index