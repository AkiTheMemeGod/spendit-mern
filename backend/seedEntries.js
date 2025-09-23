import mongoose from 'mongoose';
import Entry from './src/models/Entry.js';
import connectDB from './src/utils/db.js';
import dotenv from 'dotenv';

dotenv.config();
import { EXPENSE_CATEGORIES, INCOME_CATEGORIES } from './src/utils/categories.js';

const userId1 = '68d2f1b3eef55cb84c1796fa'; // First user

function generateEntries() {
  const entries = [];

  // Expense categories
  Object.entries(EXPENSE_CATEGORIES).forEach(([category, subCategories]) => {
    subCategories.forEach(subCategory => {
      for (let i = 1; i <= 2; i++) {
        entries.push({
          userId: userId1,
          type: "expense",
          category,
          subCategory,
          amount: Number((Math.random() * 100 + 10).toFixed(2)),
          description: `Expense for ${category} - ${subCategory} (${i})`
        });
      }
    });
  });

  // Income categories
  Object.entries(INCOME_CATEGORIES).forEach(([category, subCategories]) => {
    subCategories.forEach(subCategory => {
      for (let i = 1; i <= 2; i++) {
        entries.push({
          userId: userId1,
          type: "income",
          category,
          subCategory,
          amount: Number((Math.random() * 1000 + 100).toFixed(2)),
          description: `Income from ${category} - ${subCategory} (${i})`
        });
      }
    });
  });

  return entries;
}
const sampleEntries = generateEntries();

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