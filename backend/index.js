const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => 
{
    const { username } = req.body;
    
    try {
        const response = await axios.put(
          "https://api.chatengine.io/users/",
          { username: username, secret: username, first_name: username },
          { headers: { "private-key": "1605c5da-6e66-4fd1-9d6e-e440b17fa884" } }
        );
        return res.status(response.status).json(response.data);
      } catch (e) {
        if (e.response) {
          return res.status(e.response.status).json(e.response.data);
        } else {
          return res.status(500).json({ message: "An error occurred" });
        }
      }
});

app.listen(3001);