import mongoose from 'mongoose';
import Entry from './src/models/Entry.js';
import connectDB from './src/utils/db.js';
import dotenv from 'dotenv';

dotenv.config();

// Sample user IDs - you should replace these with actual user IDs from your database
const userId1 = new mongoose.Types.ObjectId(); // First user
const userId2 = new mongoose.Types.ObjectId(); // Second user

const sampleEntries = [
  // Entries for User 1 (10 entries)
  {
    userId: userId1,
    type: "expense",
    category: "Food",
    subCategory: "Groceries",
    amount: 85.50,
    description: "Weekly grocery shopping at Walmart"
  },
  {
    userId: userId1,
    type: "expense",
    category: "Transportation",
    subCategory: "Gas",
    amount: 45.00,
    description: "Gas fill-up at Shell station"
  },
  {
    userId: userId1,
    type: "income",
    category: "Salary",
    subCategory: "Monthly Salary",
    amount: 3500.00,
    description: "Monthly salary payment"
  },
  {
    userId: userId1,
    type: "expense",
    category: "Entertainment",
    subCategory: "Movies",
    amount: 25.99,
    description: "Movie tickets for weekend show"
  },
  {
    userId: userId1,
    type: "expense",
    category: "Food",
    subCategory: "Dining Out",
    amount: 42.75,
    description: "Dinner at Italian restaurant"
  },
  {
    userId: userId1,
    type: "expense",
    category: "Utilities",
    subCategory: "Electricity",
    amount: 120.00,
    description: "Monthly electricity bill"
  },
  {
    userId: userId1,
    type: "expense",
    category: "Shopping",
    subCategory: "Clothing",
    amount: 89.99,
    description: "New shirt and jeans from mall"
  },
  {
    userId: userId1,
    type: "income",
    category: "Freelance",
    subCategory: "Web Development",
    amount: 500.00,
    description: "Website development project payment"
  },
  {
    userId: userId1,
    type: "expense",
    category: "Health",
    subCategory: "Pharmacy",
    amount: 18.50,
    description: "Prescription medication"
  },
  {
    userId: userId1,
    type: "expense",
    category: "Transportation",
    subCategory: "Public Transport",
    amount: 15.00,
    description: "Weekly bus pass"
  },

  // Entries for User 2 (10 entries)
  {
    userId: userId2,
    type: "expense",
    category: "Food",
    subCategory: "Groceries",
    amount: 95.25,
    description: "Organic groceries from Whole Foods"
  },
  {
    userId: userId2,
    type: "income",
    category: "Salary",
    subCategory: "Monthly Salary",
    amount: 4200.00,
    description: "Monthly salary deposit"
  },
  {
    userId: userId2,
    type: "expense",
    category: "Housing",
    subCategory: "Rent",
    amount: 1200.00,
    description: "Monthly apartment rent"
  },
  {
    userId: userId2,
    type: "expense",
    category: "Entertainment",
    subCategory: "Streaming",
    amount: 15.99,
    description: "Netflix monthly subscription"
  },
  {
    userId: userId2,
    type: "expense",
    category: "Transportation",
    subCategory: "Uber",
    amount: 28.45,
    description: "Uber ride to airport"
  },
  {
    userId: userId2,
    type: "expense",
    category: "Food",
    subCategory: "Coffee",
    amount: 12.50,
    description: "Coffee and pastry at Starbucks"
  },
  {
    userId: userId2,
    type: "income",
    category: "Investment",
    subCategory: "Dividends",
    amount: 75.00,
    description: "Quarterly dividend payment"
  },
  {
    userId: userId2,
    type: "expense",
    category: "Health",
    subCategory: "Gym",
    amount: 49.99,
    description: "Monthly gym membership"
  },
  {
    userId: userId2,
    type: "expense",
    category: "Shopping",
    subCategory: "Electronics",
    amount: 299.99,
    description: "Wireless headphones purchase"
  },
  {
    userId: userId2,
    type: "expense",
    category: "Utilities",
    subCategory: "Internet",
    amount: 79.99,
    description: "Monthly internet bill"
  }
];

const seedEntries = async () => {
  try {
    // Connect to database
    await connectDB();
    console.log('Connected to MongoDB');

    // Clear existing entries (optional - remove if you want to keep existing data)
    await Entry.deleteMany({});
    console.log('Cleared existing entries');

    // Insert sample entries
    const insertedEntries = await Entry.insertMany(sampleEntries);
    console.log(`Successfully seeded ${insertedEntries.length} entries`);
    
    // Display summary
    console.log('\nSeeding Summary:');
    console.log(`User 1 (${userId1}): 10 entries`);
    console.log(`User 2 (${userId2}): 10 entries`);
    console.log('Total: 20 entries');

    // Display sample of inserted data
    console.log('\nSample entries:');
    insertedEntries.slice(0, 3).forEach((entry, index) => {
      console.log(`${index + 1}. ${entry.type} - ${entry.category}/${entry.subCategory}: $${entry.amount}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('Error seeding entries:', error);
    process.exit(1);
  }
};

// Run the seeder
seedEntries();