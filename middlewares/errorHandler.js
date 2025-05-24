function errorHandler(err, req, res, next) {
  console.log(err);

  if (err.name === "Not Found") {
    return res.status(404).json({ message: err.message });
  }

  return res.status(500).json({ message: "Internal server error" });
}

module.exports = errorHandler;
