const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NeederSchema = new Schema(
  {
    company: { type: String, required: true, default: "albahren" },
    name: { type: String, required: true },
    nationalId: { type: String, required: true },
    wifeName: { type: String, required: true, default: "لا يوجد" },
    wifeNationalId: { type: String, required: true, default: "لا يوجد" },
    adress: { type: String, required: true, default: "لا يوجد" },
    phone: { type: String, required: true, default: "لا يوجد" },
    createdAt:{type:Date,default:Date.now}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Needer", NeederSchema);
