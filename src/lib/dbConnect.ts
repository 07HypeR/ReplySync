<<<<<<< HEAD
import mongoose from 'mongoose';
=======
import mongoose from "mongoose";
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  // Check if we have a connection to the database or if it's currently connecting
  if (connection.isConnected) {
<<<<<<< HEAD
    console.log('Already connected to the database');
=======
    console.log("Already connected to the database");
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
    return;
  }

  try {
    // Attempt to connect to the database
<<<<<<< HEAD
    const db = await mongoose.connect(process.env.MONGODB_URI || '', {});

    connection.isConnected = db.connections[0].readyState;

    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
=======
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});

    connection.isConnected = db.connections[0].readyState;

    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec

    // Graceful exit in case of a connection error
    process.exit(1);
  }
}

export default dbConnect;
