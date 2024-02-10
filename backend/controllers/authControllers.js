const express = require('express')

const test = (req, res) => {
    res.json("Tes is working")
}

module.exports = {
    test
}