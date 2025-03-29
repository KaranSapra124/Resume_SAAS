import { connect } from "mongoose";
type dbUrl = string;
const connectDB = async () => {
  const dbUrl = <dbUrl>process.env.DB_URL;
  try {
    const res = await connect(dbUrl);
    console.log("Db Connected!");
  } catch (err) {
    console.log(err);
  }
};
export { connectDB };
