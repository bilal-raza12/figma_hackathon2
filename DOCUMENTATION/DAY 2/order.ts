export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'orderId',
        title: 'Order ID',
        type: 'string',
        
      },
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'productId',
                title: 'Product ID',
                type: 'reference',
                to: [{ type: 'product' }],
              },
              {
                name: 'productName',
                title: 'Product Name',
                type: 'string',
                // validation: Rule => Rule.required(),
              },
              {
                name: 'quantity',
                title: 'Quantity',
                type: 'number',
               
              },
              {
                name: 'price',
                title: 'Price',
                type: 'number',
                // validation: Rule => Rule.min(0),
              },
            ],
          },
        ],
      },
      {
        name: 'customerInfo',
        title: 'Customer Info',
        type: 'object',
        fields: [
          {
            name: 'name',
            title: 'Customer Name',
            type: 'string',
            // validation: Rule => Rule.required().min(3).max(100),
          },
          {
            name: 'email',
            title: 'Email',
            type: 'string',
            // validation: Rule =>
              // Rule.required().regex(
                // /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                // { name: 'email', invert: false },
              // ),
          },
          {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
            // validation: Rule => Rule.required().min(10).max(15),
          },
          {
            name: 'address',
            title: 'Address',
            type: 'text',
            // validation: Rule => Rule.required(),
          },
        ],
      },
      {
        name: 'totalPrice',
        title: 'Total Price',
        type: 'number',
        // validation: Rule => Rule.min(0),
        description: 'Automatically calculated based on product prices and quantities.',
      },
      {
        name: 'status',
        title: 'Order Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Processing', value: 'processing' },
            { title: 'Completed', value: 'completed' },
            { title: 'Cancelled', value: 'cancelled' },
          ],
        },
        initialValue: 'pending',
        // validation: Rule => Rule.required(),
      },
      {
        name: 'orderDate',
        title: 'Order Date',
        type: 'datetime',
        // validation: Rule => Rule.required(),
      },
    ],
    preview: {
      select: {
        title: 'orderId',
        subtitle: 'customerInfo.name',
        media: 'products.0.productId',
      },
    },
  };
  