import { FaPepperHot as icon, FaLeaf } from 'react-icons/fa';

export default {
  // Computer name
  name: 'Topping',
  // visible name
  title: 'Toppings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Nombre del topping',
      type: 'string',
      description: 'Cual es el noombre del topping?',
    },
    {
      name: 'vegetarian',
      title: 'Vegetariana',
      type: 'boolean',
      description: 'Es una pizza vegetariana?',
      //   options: { layout: 'checkbox' },
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: (fields) => ({
      title: `${fields.name}`,
      media: fields.vegetarian ? FaLeaf : '',
    }),
  },
};
