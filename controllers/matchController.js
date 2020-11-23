const { query } = require("express");
const Matches = require("../models/Matches");
const moment = require("moment");

module.exports.list = async (req, res) => {
  try {
    console.log("req.query", req.query);
    const start = req.query.date;

    console.log("start", start);
    const end = moment(start).add(1, "days");
    const dateQuery = start
      ? { startTime: { $gte: start, $lt: end } }
      : {};
    const matches = await Matches.find(dateQuery);
    res.status(200).json(matches);
  } catch (err) {
    console.log("err all matches", err);
    res.status(500).json(err);
  }
};

module.exports.create = async (req, res) => {
  try {
    const match = await Matches.create(req.body);
    console.log("match", match);
    res.status(201).json(match);
  } catch (err) {
    console.log("err create", err);
    res.status(400).json({ error: err });
  }
};

module.exports.update = async (req, res) => {
  // console.log('msg edit req.body', req.body)

  try {
    var match = await Matches.findById(req.params.id).exec();
    match.set(req.body);
    var result = await match.save();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports.delete = async (req, res) => {
  try {
    console.log("deleted", req.params.id);
    const result = await Matches.deleteOne({ _id: req.params.id }).exec();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
