export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'ID',
        type: 'string',
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
       
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: Rule => Rule.required().min(10),
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        validation: Rule => Rule.min(0).max(5),
      },
      {
        name: 'stockLevel',
        title: 'Stock Level',
        type: 'number',
        validation: Rule => Rule.integer().min(0),
      },
     
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{ type: 'category' }], // Assuming you have a `category` document
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: Rule => Rule.min(0),
      },
      {
        name: 'discount',
        title: 'Discount (%)',
        type: 'number',
        validation: Rule => Rule.min(0).max(100),
      },
      {
        name: 'discountedPrice',
        title: 'Discounted Price',
        type: 'number',
        readOnly: true,
        description: 'Automatically calculated based on price and discount.',
      },
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'category.name',
        media: 'images.0',
      },
    },
  };
  