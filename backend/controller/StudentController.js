const StudentSignUp = async (req,res,next) => {
    console.log("res.json----------",req.body);
    res.json({data:req.body})
    // res.send("Student signup")
}

module.exports = StudentSignUp