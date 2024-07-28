require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const errorMiddleware = require("./middlewares/error");
const notFoundMiddleware = require("./middlewares/not-found");
const limiter = require("./middlewares/rate-limit");
const authRouter = require("./routes/auth-route");
const profileRouter = require("./routes/profile-route");
const productsRouter = require("./routes/product-route");
const shapeRouter = require("./routes/shape-route");
const orderRouter = require("./routes/order-route");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(limiter);
app.use(express.json());

app.use("/auth", authRouter);
app.use("/profile", profileRouter);
app.use("/shape", shapeRouter);
app.use("/products", productsRouter);
app.use("/order", orderRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
