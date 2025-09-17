// Comprehensive categories and subcategories for expense tracking
export const EXPENSE_CATEGORIES = {
  "Food & Dining": [
    "Groceries",
    "Restaurants",
    "Fast Food",
    "Coffee & Tea",
    "Bars & Alcohol",
    "Food Delivery",
    "Snacks",
    "Lunch",
    "Breakfast",
    "Dinner"
  ],
  
  "Transportation": [
    "Gas & Fuel",
    "Public Transportation",
    "Taxi & Rideshare",
    "Car Payment",
    "Car Insurance",
    "Car Maintenance",
    "Car Registration",
    "Parking",
    "Tolls",
    "Auto Parts",
    "Car Rental",
    "Flight",
    "Train",
    "Bus"
  ],
  
  "Shopping": [
    "Clothing",
    "Electronics",
    "Books",
    "Hobbies",
    "Sporting Goods",
    "General Merchandise",
    "Online Shopping",
    "Gifts",
    "Home Improvement",
    "Tools",
    "Jewelry",
    "Shoes",
    "Accessories"
  ],
  
  "Entertainment": [
    "Movies & Theater",
    "Music",
    "Games",
    "Recreation",
    "Amusement Parks",
    "Concerts",
    "Sports Events",
    "Streaming Services",
    "Subscriptions",
    "Books & Magazines",
    "Art & Culture",
    "Hobbies"
  ],
  
  "Bills & Utilities": [
    "Electricity",
    "Gas",
    "Water",
    "Internet",
    "Phone",
    "Cable TV",
    "Trash & Recycling",
    "Security System",
    "HOA Fees",
    "Property Tax",
    "Insurance"
  ],
  
  "Healthcare": [
    "Doctor Visits",
    "Dentist",
    "Eye Care",
    "Pharmacy",
    "Health Insurance",
    "Medical Supplies",
    "Mental Health",
    "Veterinary",
    "Health & Fitness",
    "Alternative Medicine"
  ],
  
  "Housing": [
    "Rent",
    "Mortgage",
    "Home Insurance",
    "Property Tax",
    "Maintenance & Repairs",
    "Home Supplies",
    "Furniture",
    "Appliances",
    "Decoration",
    "Garden & Lawn",
    "Cleaning Supplies"
  ],
  
  "Personal Care": [
    "Hair Care",
    "Cosmetics",
    "Skincare",
    "Spa & Massage",
    "Personal Hygiene",
    "Clothing Care",
    "Salon Services",
    "Barbershop"
  ],
  
  "Education": [
    "Tuition",
    "Books & Supplies",
    "Student Loans",
    "Online Courses",
    "Workshops",
    "Certification",
    "School Activities",
    "Tutoring"
  ],
  
  "Travel": [
    "Flights",
    "Hotels",
    "Car Rental",
    "Travel Insurance",
    "Vacation",
    "Business Travel",
    "Souvenirs",
    "Travel Gear",
    "Visa & Passport",
    "Tours & Activities"
  ],
  
  "Financial": [
    "Bank Fees",
    "Credit Card Fees",
    "Investment Fees",
    "Tax Preparation",
    "Financial Advisor",
    "Late Fees",
    "Interest Charges",
    "ATM Fees"
  ],
  
  "Business": [
    "Office Supplies",
    "Business Travel",
    "Professional Services",
    "Business Insurance",
    "Equipment",
    "Software",
    "Marketing",
    "Legal Fees",
    "Accounting",
    "Business Meals"
  ],
  
  "Family & Kids": [
    "Childcare",
    "School Fees",
    "Baby Supplies",
    "Toys",
    "Children's Clothing",
    "Kids Activities",
    "Babysitting",
    "Child Support",
    "Kids Healthcare",
    "Family Entertainment"
  ],
  
  "Pets": [
    "Pet Food",
    "Veterinary",
    "Pet Supplies",
    "Pet Insurance",
    "Grooming",
    "Pet Training",
    "Pet Boarding",
    "Pet Toys",
    "Pet Medication"
  ],
  
  "Charity & Donations": [
    "Religious Donations",
    "Charitable Giving",
    "Political Donations",
    "Fundraising",
    "Sponsorship",
    "Volunteer Expenses"
  ],
  
  "Investments": [
    "Stocks",
    "Bonds",
    "Mutual Funds",
    "ETFs",
    "Real Estate",
    "Cryptocurrency",
    "Retirement Savings",
    "Emergency Fund",
    "Savings Account"
  ],
  
  "Insurance": [
    "Life Insurance",
    "Health Insurance",
    "Auto Insurance",
    "Home Insurance",
    "Travel Insurance",
    "Pet Insurance",
    "Disability Insurance",
    "Umbrella Insurance"
  ],
  
  "Subscriptions": [
    "Streaming Services",
    "Software Subscriptions",
    "Magazine Subscriptions",
    "Gym Membership",
    "Club Memberships",
    "Professional Memberships",
    "Premium Apps",
    "Cloud Storage"
  ],
  
  "Miscellaneous": [
    "Cash Withdrawal",
    "Uncategorized",
    "Other Expenses",
    "Emergency Expenses",
    "One-time Purchases",
    "Unexpected Costs"
  ]
};

export const INCOME_CATEGORIES = {
  "Employment": [
    "Salary",
    "Hourly Wages",
    "Overtime",
    "Bonus",
    "Commission",
    "Tips",
    "Benefits",
    "Stock Options",
    "Severance Pay"
  ],
  
  "Business": [
    "Business Income",
    "Self-Employment",
    "Consulting",
    "Freelance",
    "Contract Work",
    "Business Profit",
    "Professional Services"
  ],
  
  "Investments": [
    "Dividends",
    "Interest",
    "Capital Gains",
    "Rental Income",
    "Investment Returns",
    "Cryptocurrency Gains",
    "Real Estate Income"
  ],
  
  "Government": [
    "Tax Refund",
    "Social Security",
    "Unemployment Benefits",
    "Disability Benefits",
    "Veterans Benefits",
    "Government Grants",
    "Stimulus Payments"
  ],
  
  "Side Income": [
    "Part-time Job",
    "Gig Economy",
    "Online Sales",
    "Tutoring",
    "Pet Sitting",
    "House Sitting",
    "Delivery Services",
    "Ride Sharing"
  ],
  
  "Gifts & Transfers": [
    "Gift Money",
    "Family Support",
    "Inheritance",
    "Prize Winnings",
    "Lottery",
    "Cashback",
    "Rebates",
    "Refunds"
  ],
  
  "Retirement": [
    "Pension",
    "401k Withdrawal",
    "IRA Withdrawal",
    "Retirement Benefits",
    "Social Security"
  ],
  
  "Other Income": [
    "Alimony",
    "Child Support",
    "Insurance Claims",
    "Legal Settlements",
    "Royalties",
    "Patent Income",
    "Miscellaneous Income"
  ]
};

export const ALL_CATEGORIES = {
  income: INCOME_CATEGORIES,
  expense: EXPENSE_CATEGORIES
};

export const getAllCategories = () => {
  return Object.keys({ ...EXPENSE_CATEGORIES, ...INCOME_CATEGORIES });
};

export const getSubCategories = (category, type = 'expense') => {
  const categories = type === 'income' ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;
  return categories[category] || [];
};


export const isValidCategorySubCategory = (category, subCategory, type = 'expense') => {
  const categories = type === 'income' ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;
  return categories[category] && categories[category].includes(subCategory);
};
// const foodSubs = getSubCategories('Food & Dining', 'expense');
// const isValid = isValidCategorySubCategory('Transportation', 'Gas & Fuel', 'expense');
export default ALL_CATEGORIES;