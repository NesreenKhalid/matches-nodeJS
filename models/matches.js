const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// homeTeam, awayTeam, startTime, endTime, duration, homeTeamScore, awayTeamScore, isActive, league
let Matches = new Schema({
  homeTeam: {
    type: String,
  },
  awayTeam: {
    type: String,
  },
  startTime: {
    type: Date,
  },
  endTime: {
    type: Date,
  },
  homeTeamScore: {
    type: Number,
    default : 0
  },
  awayTeamScore: {
    type: Number,
    default : 0
  },
  league: {
    type: String,
  },
  isActive: {
    type: Boolean,
  },

});
module.exports = mongoose.model("Matches", Matches);
