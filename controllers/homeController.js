const homeController = (req, res) => {

  const data = {
    name : "Pabitra",
    userId: 40
  }

  res.render("index", data);
};

export { homeController };
