import mongoose from 'mongoose';
import Entry from './src/models/Entry.js';
import connectDB from './src/utils/db.js';
import dotenv from 'dotenv';

dotenv.config();
import { EXPENSE_CATEGORIES, INCOME_CATEGORIES } from './src/utils/categories.js';

const userId1 = '68d2f1b3eef55cb84c1796fa';

function generateEntries() {
  const entries = [];

  // Expense categories
  Object.entries(EXPENSE_CATEGORIES).forEach(([category, subCategories]) => {
    subCategories.forEach(subCategory => {
      for (let i = 1; i <= 1; i+=2) {
        entries.push({
          userId: userId1,
          type: "expense",
          category,
          subCategory,
          amount: Number((Math.random() * 100 + 10).toFixed(2)),
          description: `Expense for ${category} - ${subCategory}`
        });
      }
    });
  });

  // Income categories
  Object.entries(INCOME_CATEGORIES).forEach(([category, subCategories]) => {
    subCategories.forEach(subCategory => {
      for (let i = 1; i <= 1; i+=2) {
        entries.push({
          userId: userId1,
          type: "income",
          category,
          subCategory,
          amount: Number((Math.random() * 1000 + 100).toFixed(2)),
          description: `Income from ${category} - ${subCategory}`
        });
      }
    });
  });

  return entries;
}
const sampleEntries = generateEntries();

const seedEntries = async () => {
  try {
    await connectDB();
    console.log('Connected to MongoDB');

    await Entry.deleteMany({});
    console.log('Cleared existing entries');

    const insertedEntries = await Entry.insertMany(sampleEntries);
    console.log(`Successfully seeded ${insertedEntries.length} entries`);

    console.log('\nSeeding Summary:');
    console.log(`User 1 (${userId1}): 10 entries`);
    console.log('Total: 20 entries');

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

seedEntries();