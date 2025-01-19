const asyncHandler = require("express-async-handler");
const Needer = require("../models/Needer");

const createNeeder = asyncHandler(async (req, res) => {
  try {
    const {
      company,
      name,
      nationalId,
      wifeName,
      wifeNationalId,
      adress,
      phone,
    } = req.body;

    const currentYear = new Date().getFullYear();    
    const existingNeeder = await Needer.findOne({
      $or: [
        { nationalId },
        { wifeNationalId },
      ],
      createdAt: {
        $gte: new Date(`${currentYear}-01-01`), // Start of the year
        $lte: new Date(`${currentYear}-12-31`), // End of the year
      },
    });

    if (existingNeeder) {
      return res.status(400).json({
        message:
          existingNeeder.nationalId === nationalId
            ? "الرقم القومي للزوج مسجل بالفعل لهذا العام!"
            : "الرقم القومي للزوجه مسجل بالفعل لهذا العام!",
      });
    }

    // Create and save a new Needer record
    const newNeeder = new Needer({
      company,
      name,
      nationalId,
      wifeName,
      wifeNationalId,
      adress,
      phone,
    });
    await newNeeder.save();

    res
      .status(201)
      .json({ message: "تمت الأضافه لقائمه المنتفعين بنجاح.", status: 201 });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ status: false, message: err.message });
  }
});

// get by company as /:company 
const getAllNeeder = asyncHandler(async (req, res) => {
  try {
    const { company, year } = req.params;

    // Calculate the start and end of the year
    const startOfYear = new Date(`${year}-01-01T00:00:00.000Z`);
    const endOfYear = new Date(`${Number(year) + 1}-01-01T00:00:00.000Z`);

    // Query needers by company and createdAt range
    const needers = await Needer.find({
      company,
      createdAt: { $gte: startOfYear, $lt: endOfYear },
    }).select("-company");

    res.status(200).json(needers);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: false, message: err.message });
  }
});


// delete by id 
const deleteNeeder = asyncHandler(async (req, res) => {
    try {
        await Needer.findByIdAndDelete(req.params.id);
        res.status(201).json("تم الحذف بنجاح");
  } catch (err) {
    console.log(err);
    return res.status(500).json({ status: false, message: err.message });
  }
});

module.exports = {createNeeder, getAllNeeder, deleteNeeder };