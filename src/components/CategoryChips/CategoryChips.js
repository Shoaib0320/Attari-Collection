// @/components/CategoryChips/CategoryChips.js

import { Button } from "@/components/ui/button";

const CategoryChips = ({ categories, onCategoryClick }) => {
  // Check if categories is an array
  if (!Array.isArray(categories)) {
    return <div>Error: categories is not an array.</div>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button className="inline-block text-normal bg-gray-200 text-gray-700 px-3 py-1 border-gray-200 mb-2 hover:bg-gray-300"
          key={category._id}
          onClick={() => onCategoryClick(category)}
        >
          {category.title}
        </Button>
      ))}
    </div>
  );
};

export default CategoryChips;
