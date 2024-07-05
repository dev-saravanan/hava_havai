const cors = require("cors");

exports.cors = cors({
  corsOptions: {
    origin: true,
    credentials: true,
  },
});
