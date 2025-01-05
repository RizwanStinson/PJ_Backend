exports.loginValidation = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email && email === "") {
      return res.status(400).json({
        staus: 400,
        message: "email is required",
      });
    } else if (!password && password === "") {
      return res.status(400).json({
        staus: 400,
        message: "password is required",
      });
    } else {
      next();
    }
  } catch (error) {
    return res.status(500).json({
      staus: 500,
      message: "server error",
    });
  }
};
