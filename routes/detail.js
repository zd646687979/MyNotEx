var express = require('express');
var router = express.Router();
var url = require("url");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  let a = req.originalUrl;
  let index = url.parse(a,true,true).query.month;
  res.json([[
    {
        "title":{"day":15,"weekday":5,"income":11111,"outmoney":11111},
        "content":[
                {"outname":"交通","iconname":"icon-jiaotong","outtime":"20:07","outmoney":-33.00},
                {"outname":"交通","iconname":"icon-jiaotong","outtime":"20:07","outmoney":-33.00},
                {"outname":"交通","iconname":"icon-jiaotong","outtime":"20:07","outmoney":-33.00},
                {"outname":"交通","iconname":"icon-jiaotong","outtime":"20:07","outmoney":-33.00},
                {"outname":"交通","iconname":"icon-jiaotong","outtime":"20:07","outmoney":-33.00}]
    },
    {
        "title":{"day":14,"weekday":4,"income":4322,"outmoney":2333},
        "content":[
                {"outname":"交通","iconname":"icon-jiaotong","outtime":"20:07","outmoney":-33.00}]
    },
    {
        "title":{"day":12,"weekday":3,"income":4322,"outmoney":2333},
        "content":[
                {"outname":"交通","iconname":"icon-jiaotong","outtime":"20:07","outmoney":-33.00}]
    }],[
        {
            "title":{"day":15,"weekday":5,"income":222222,"outmoney":222222},
            "content":[
                    {"outname":"交通","iconname":"icon-jiaotong","outtime":"20:07","outmoney":-33.00},
                    {"outname":"交通","iconname":"icon-jiaotong","outtime":"20:07","outmoney":-33.00},
                    {"outname":"交通","iconname":"icon-jiaotong","outtime":"20:07","outmoney":-33.00}]
        },
        {
            "title":{"day":14,"weekday":4,"income":4322,"outmoney":2333},
            "content":[
                    {"outname":"交通","iconname":"icon-jiaotong","outtime":"20:07","outmoney":-33.00}]
        },
        {
            "title":{"day":12,"weekday":3,"income":4322,"outmoney":2333},
            "content":[
                    {"outname":"交通","iconname":"icon-jiaotong","outtime":"20:07","outmoney":-33.00},
                    {"outname":"交通","iconname":"icon-jiaotong","outtime":"20:07","outmoney":-33.00},
                    {"outname":"交通","iconname":"icon-jiaotong","outtime":"20:07","outmoney":-33.00}]
        }],[
            {
                "title":{"day":15,"weekday":5,"income":33333,"outmoney":333333},
                "content":[
                        {"outname":"交通","iconname":"icon-jiaotong","outtime":"20:07","outmoney":-33.00}]
            },
            {
                "title":{"day":14,"weekday":4,"income":4322,"outmoney":2333},
                "content":[
                        {"outname":"交通","iconname":"icon-jiaotong","outtime":"20:07","outmoney":-33.00}]
            },
            {
                "title":{"day":12,"weekday":3,"income":4322,"outmoney":2333},
                "content":[
                        {"outname":"交通","iconname":"icon-jiaotong","outtime":"20:07","outmoney":-33.00},
                        {"outname":"交通","iconname":"icon-jiaotong","outtime":"20:07","outmoney":-33.00},
                        {"outname":"交通","iconname":"icon-jiaotong","outtime":"20:07","outmoney":-33.00}]
            }],[],[]][index]);
});

module.exports = router;
