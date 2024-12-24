import dotenv from "dotenv";
import users from "./data/users.js";
import User from "./models/userModel.js";
import connectDB from "./config/db.js";
import todos from "./data/todos.js";
import Todo from "./models/todoModel.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Todo.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const user1 = createdUsers[0]._id;

    const sampleTodos = todos.map((todo) => {
      return { ...todo, user: user1 };
    });

    await Todo.insertMany(sampleTodos);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Todo.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
