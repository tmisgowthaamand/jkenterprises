import { Product } from '../types';

export const products: Product[] = [
  // Scrap Products
  {
    id: 1,
    name: 'Aluminum Scrap',
    category: 'metal',
    type: 'scrap',
    image: '/Sell Scrap/1.png',
    description: 'High-quality aluminum scrap for recycling',
    specifications: {
      'Purity': '95%+',
      'Type': 'Clean aluminum',
      'Form': 'Mixed pieces'
    },
    slug: 'aluminum-scrap'
  },
  {
    id: 2,
    name: 'Steel Scrap',
    category: 'metal',
    type: 'scrap',
    image: '/Sell Scrap/2.png',
    description: 'Industrial steel scrap for recycling',
    specifications: {
      'Grade': 'MS Grade',
      'Condition': 'Clean, rust-free',
      'Size': 'Mixed'
    },
    slug: 'steel-scrap'
  },
  {
    id: 3,
    name: 'Copper Scrap',
    category: 'metal',
    type: 'scrap',
    image: '/Sell Scrap/3.png',
    description: 'Pure copper scrap with high conductivity',
    specifications: {
      'Purity': '99%+',
      'Type': 'Bare bright copper',
      'Form': 'Wire/pipe'
    },
    slug: 'copper-scrap'
  },
  {
    id: 4,
    name: 'PET Plastic Scrap',
    category: 'plastic',
    type: 'scrap',
    image: '/Sell Scrap/4.png',
    description: 'Clean PET bottles for recycling',
    specifications: {
      'Type': 'PET bottles',
      'Condition': 'Clean, label removed',
      'Color': 'Clear/Mixed'
    },
    slug: 'pet-plastic-scrap'
  },
  {
    id: 5,
    name: 'HDPE Plastic Scrap',
    category: 'plastic',
    type: 'scrap',
    image: '/Sell Scrap/5.png',
    description: 'High-density polyethylene scrap',
    specifications: {
      'Type': 'HDPE containers',
      'Condition': 'Clean, crushed',
      'Grade': 'Industrial grade'
    },
    slug: 'hdpe-plastic-scrap'
  },

  // Granule Products
  {
    id: 6,
    name: 'PP Granules Natural',
    category: 'pp',
    type: 'granule',
    unit_price: 85,
    image: '/Buy Granules/e.png',
    description: 'High-quality polypropylene granules - natural color',
    specifications: {
      'Grade': 'Injection molding',
      'MFI': '12 g/10min',
      'Color': 'Natural/White'
    },
    slug: 'pp-granules-natural'
  },
  {
    id: 7,
    name: 'PP Granules Black',
    category: 'pp',
    type: 'granule',
    unit_price: 88,
    image: '/Buy Granules/d.png',
    description: 'Premium black polypropylene granules',
    specifications: {
      'Grade': 'Injection molding',
      'MFI': '15 g/10min',
      'Color': 'Carbon black'
    },
    slug: 'pp-granules-black'
  },
  {
    id: 8,
    name: 'Nylon 6 Granules',
    category: 'nylon',
    type: 'granule',
    unit_price: 145,
    image: '/Buy Granules/a.png',
    description: 'Engineering grade Nylon 6 granules',
    specifications: {
      'Type': 'PA6',
      'Viscosity': 'Medium',
      'Application': 'Automotive, Textiles'
    },
    slug: 'nylon-6-granules'
  },
  {
    id: 9,
    name: 'Nylon 66 Granules',
    category: 'nylon',
    type: 'granule',
    unit_price: 165,
    image: '/Buy Granules/b.png',
    description: 'High-performance Nylon 66 granules',
    specifications: {
      'Type': 'PA66',
      'Reinforcement': 'Glass filled available',
      'Temperature': 'High heat resistance'
    },
    slug: 'nylon-66-granules'
  },
  {
    id: 10,
    name: 'PET Granules Recycled',
    category: 'pet',
    type: 'granule',
    unit_price: 92,
    image: '/Buy Granules/c.png',
    description: 'Recycled PET granules for packaging',
    specifications: {
      'IV Value': '0.72-0.76',
      'Color': 'Crystal clear',
      'Application': 'Bottles, Containers'
    },
    slug: 'pet-granules-recycled'
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductsByType(type: 'scrap' | 'granule'): Product[] {
  return products.filter(product => product.type === type);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}