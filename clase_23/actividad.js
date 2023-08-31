require('dotenv').config();
const express = require("express");

const Products = require("./schemas/UserSchema.js")
const { conectarDB , desconectarDB } = require("./connection");
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());