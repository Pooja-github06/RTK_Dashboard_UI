export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  compareAtPrice: number | null;
  category: string;
  status: 'active' | 'draft' | 'out_of_stock';
  inventory: number;
  imageUrl: string;
  description: string;
  createdAt: string;
}

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export interface OrderHistory {
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  timestamp: string;
  note: string;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  date: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'paid' | 'unpaid' | 'refunded';
  items: OrderItem[];
  shippingAddress: string;
  trackingNumber: string | null;
  history: OrderHistory[];
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  ordersCount: number;
  totalSpend: number;
  status: 'active' | 'inactive';
  joinedDate: string;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  role: string;
  companyName: string;
  currency: string;
  taxRate: number;
  shippingRate: number;
  theme: 'light' | 'dark';
}

export interface DashboardStats {
  totalRevenue: number;
  revenueChange: number; // percentage
  totalOrders: number;
  ordersChange: number;
  totalCustomers: number;
  customersChange: number;
  conversionRate: number;
  conversionChange: number;
  salesData: { name: string; revenue: number; orders: number }[];
  categorySales: { name: string; value: number; color: string }[];
  recentActivity: { id: string; user: string; action: string; time: string; type: string }[];
}

// Initial Seed Data
const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Aether Chrono Smartwatch',
    sku: 'ATH-CRN-01',
    price: 249.99,
    compareAtPrice: 299.99,
    category: 'Electronics',
    status: 'active',
    inventory: 48,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'Next-generation smart wearable with biometric tracking, AMOLED display, and a seamless metallic finish. Features a 7-day battery life and titanium housing.',
    createdAt: '2026-05-15T10:00:00Z',
  },
  {
    id: 'prod-2',
    name: 'Luminary Active Noise Cancelling Headphones',
    sku: 'LMN-ANC-99',
    price: 189.50,
    compareAtPrice: 220.00,
    category: 'Electronics',
    status: 'active',
    inventory: 120,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'Experience pure audio bliss with active noise cancellation, custom high-fidelity drivers, and plush memory foam earcups for all-day luxury comfort.',
    createdAt: '2026-05-18T14:30:00Z',
  },
  {
    id: 'prod-3',
    name: 'Vortex Mechanical Keyboard',
    sku: 'VTX-MECH-87',
    price: 129.99,
    compareAtPrice: null,
    category: 'Electronics',
    status: 'active',
    inventory: 35,
    imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'Hot-swappable 87-key tenkeyless layout mechanical keyboard with customized linear switches, dynamic double-shot PBT keycaps, and customizable RGB backlighting.',
    createdAt: '2026-05-20T08:15:00Z',
  },
  {
    id: 'prod-4',
    name: 'Zenith Minimalist Leather Wallet',
    sku: 'ZTH-WL-BRN',
    price: 55.00,
    compareAtPrice: 75.00,
    category: 'Accessories',
    status: 'active',
    inventory: 210,
    imageUrl: 'https://images.unsplash.com/photo-1627124765138-b6b5cc936a27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'Handcrafted full-grain leather wallet designed for the modern minimalist. Blocks RFID scanners and accommodates up to 8 cards plus cash without bulk.',
    createdAt: '2026-05-22T16:00:00Z',
  },
  {
    id: 'prod-5',
    name: 'Apex Carbon Fiber Backpack',
    sku: 'APX-BP-07',
    price: 145.00,
    compareAtPrice: 175.00,
    category: 'Accessories',
    status: 'out_of_stock',
    inventory: 0,
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'Water-resistant, slash-proof carbon fiber armored commuter bag with integrated USB charging port, hidden security pocket, and laptop sleeve.',
    createdAt: '2026-05-24T11:45:00Z',
  },
  {
    id: 'prod-6',
    name: 'HydroFlow Matte Flask (32oz)',
    sku: 'HDF-FLK-BLK',
    price: 32.50,
    compareAtPrice: null,
    category: 'Fitness',
    status: 'active',
    inventory: 310,
    imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'Double-walled vacuum insulated stainless steel water bottle. Keeps drinks icy cold for up to 24 hours or steaming hot for up to 12 hours.',
    createdAt: '2026-05-25T09:20:00Z',
  },
  {
    id: 'prod-7',
    name: 'BioGrid Yoga Mat',
    sku: 'BGR-YGA-GRN',
    price: 68.00,
    compareAtPrice: 80.00,
    category: 'Fitness',
    status: 'draft',
    inventory: 15,
    imageUrl: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'Eco-friendly biodegradable natural tree rubber yoga mat offering unmatched dry-wet grip, alignment guidance grids, and premium extra cushioning.',
    createdAt: '2026-05-28T12:00:00Z',
  }
];

const INITIAL_ORDERS: Order[] = [
  {
    id: 'ord-3021',
    customerName: 'Sarah Jenkins',
    customerEmail: 'sarah.j@gmail.com',
    date: '2026-06-03T14:22:00Z',
    total: 439.49,
    status: 'processing',
    paymentStatus: 'paid',
    items: [
      { productId: 'prod-1', name: 'Aether Chrono Smartwatch', price: 249.99, quantity: 1, imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
      { productId: 'prod-2', name: 'Luminary Active Noise Cancelling Headphones', price: 189.50, quantity: 1, imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' }
    ],
    shippingAddress: '482 Maple Ave, Suite 3B, New York, NY 10003',
    trackingNumber: null,
    history: [
      { status: 'pending', timestamp: '2026-06-03T14:22:00Z', note: 'Order placed by customer.' },
      { status: 'processing', timestamp: '2026-06-03T16:05:00Z', note: 'Payment confirmed. Send to fulfillment.' }
    ]
  },
  {
    id: 'ord-3020',
    customerName: 'Michael Chen',
    customerEmail: 'mchen.codes@yahoo.com',
    date: '2026-06-02T09:12:00Z',
    total: 129.99,
    status: 'shipped',
    paymentStatus: 'paid',
    items: [
      { productId: 'prod-3', name: 'Vortex Mechanical Keyboard', price: 129.99, quantity: 1, imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' }
    ],
    shippingAddress: '1540 Westwood Blvd, Los Angeles, CA 90024',
    trackingNumber: '1Z999AA10123456784',
    history: [
      { status: 'pending', timestamp: '2026-06-02T09:12:00Z', note: 'Order placed by customer.' },
      { status: 'processing', timestamp: '2026-06-02T11:40:00Z', note: 'Items picked and packaged.' },
      { status: 'shipped', timestamp: '2026-06-02T15:20:00Z', note: 'Carrier scanned package. Tracking active.' }
    ]
  },
  {
    id: 'ord-3019',
    customerName: 'Emma Watson',
    customerEmail: 'emma@watsongroup.co',
    date: '2026-06-01T17:45:00Z',
    total: 345.00,
    status: 'delivered',
    paymentStatus: 'paid',
    items: [
      { productId: 'prod-4', name: 'Zenith Minimalist Leather Wallet', price: 55.00, quantity: 1, imageUrl: 'https://images.unsplash.com/photo-1627124765138-b6b5cc936a27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
      { productId: 'prod-5', name: 'Apex Carbon Fiber Backpack', price: 145.00, quantity: 2, imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' }
    ],
    shippingAddress: '88 King Rd, London, SW1W 9SZ',
    trackingNumber: 'GB987654321',
    history: [
      { status: 'pending', timestamp: '2026-06-01T17:45:00Z', note: 'Order placed.' },
      { status: 'processing', timestamp: '2026-06-02T08:30:00Z', note: 'Packed at UK Hub.' },
      { status: 'shipped', timestamp: '2026-06-02T11:00:00Z', note: 'Out for local delivery.' },
      { status: 'delivered', timestamp: '2026-06-02T16:18:00Z', note: 'Delivered. Handed to receptionist.' }
    ]
  },
  {
    id: 'ord-3018',
    customerName: 'Marcus Aurelius',
    customerEmail: 'stoic.marcus@rome.org',
    date: '2026-05-30T10:10:00Z',
    total: 65.00,
    status: 'cancelled',
    paymentStatus: 'refunded',
    items: [
      { productId: 'prod-6', name: 'HydroFlow Matte Flask (32oz)', price: 32.50, quantity: 2, imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' }
    ],
    shippingAddress: '1 Palatine Hill, Rome, IT 00186',
    trackingNumber: null,
    history: [
      { status: 'pending', timestamp: '2026-05-30T10:10:00Z', note: 'Order placed.' },
      { status: 'cancelled', timestamp: '2026-05-30T11:15:00Z', note: 'Customer requested cancellation. Fully refunded.' }
    ]
  },
  {
    id: 'ord-3017',
    customerName: 'Aria Montgomery',
    customerEmail: 'aria.m@rosewood.com',
    date: '2026-05-29T19:30:00Z',
    total: 304.99,
    status: 'delivered',
    paymentStatus: 'paid',
    items: [
      { productId: 'prod-1', name: 'Aether Chrono Smartwatch', price: 249.99, quantity: 1, imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
      { productId: 'prod-4', name: 'Zenith Minimalist Leather Wallet', price: 55.00, quantity: 1, imageUrl: 'https://images.unsplash.com/photo-1627124765138-b6b5cc936a27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' }
    ],
    shippingAddress: '782 Rosewood Dr, Rosewood, PA 19001',
    trackingNumber: '1Z999AA10123459990',
    history: [
      { status: 'pending', timestamp: '2026-05-29T19:30:00Z', note: 'Order placed.' },
      { status: 'processing', timestamp: '2026-05-30T09:00:00Z', note: 'Order processed.' },
      { status: 'shipped', timestamp: '2026-05-30T14:00:00Z', note: 'Shipped from PA Facility.' },
      { status: 'delivered', timestamp: '2026-06-01T13:45:00Z', note: 'Delivered at front door.' }
    ]
  }
];

const INITIAL_CUSTOMERS: Customer[] = [
  { id: 'cust-1', name: 'Sarah Jenkins', email: 'sarah.j@gmail.com', avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80', ordersCount: 4, totalSpend: 1120.50, status: 'active', joinedDate: '2026-01-14T10:00:00Z' },
  { id: 'cust-2', name: 'Michael Chen', email: 'mchen.codes@yahoo.com', avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80', ordersCount: 2, totalSpend: 310.00, status: 'active', joinedDate: '2026-03-22T14:30:00Z' },
  { id: 'cust-3', name: 'Emma Watson', email: 'emma@watsongroup.co', avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80', ordersCount: 8, totalSpend: 2450.00, status: 'active', joinedDate: '2025-11-05T08:15:00Z' },
  { id: 'cust-4', name: 'Marcus Aurelius', email: 'stoic.marcus@rome.org', avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80', ordersCount: 1, totalSpend: 65.00, status: 'inactive', joinedDate: '2026-05-10T16:00:00Z' },
  { id: 'cust-5', name: 'Aria Montgomery', email: 'aria.m@rosewood.com', avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80', ordersCount: 3, totalSpend: 845.20, status: 'active', joinedDate: '2026-02-18T11:45:00Z' }
];

const INITIAL_PROFILE: UserProfile = {
  name: 'Aurelia Vance',
  email: 'aurelia.vance@aether.com',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  role: 'Administrator',
  companyName: 'Aether Industries',
  currency: 'USD',
  taxRate: 8.5,
  shippingRate: 15.00,
  theme: 'dark',
};

// Database utilities using localStorage
export const mockDb = {
  init: () => {
    if (!localStorage.getItem('aether_products')) {
      localStorage.setItem('aether_products', JSON.stringify(INITIAL_PRODUCTS));
    }
    if (!localStorage.getItem('aether_orders')) {
      localStorage.setItem('aether_orders', JSON.stringify(INITIAL_ORDERS));
    }
    if (!localStorage.getItem('aether_customers')) {
      localStorage.setItem('aether_customers', JSON.stringify(INITIAL_CUSTOMERS));
    }
    if (!localStorage.getItem('aether_profile')) {
      localStorage.setItem('aether_profile', JSON.stringify(INITIAL_PROFILE));
    }
  },

  getProducts: (): Product[] => {
    mockDb.init();
    return JSON.parse(localStorage.getItem('aether_products') || '[]');
  },

  getProductById: (id: string): Product | undefined => {
    return mockDb.getProducts().find(p => p.id === id);
  },

  saveProduct: (product: Product): Product => {
    const products = mockDb.getProducts();
    const idx = products.findIndex(p => p.id === product.id);
    
    if (idx >= 0) {
      products[idx] = product;
    } else {
      products.push(product);
    }
    
    localStorage.setItem('aether_products', JSON.stringify(products));
    return product;
  },

  deleteProduct: (id: string): boolean => {
    const products = mockDb.getProducts();
    const filtered = products.filter(p => p.id !== id);
    localStorage.setItem('aether_products', JSON.stringify(filtered));
    return products.length !== filtered.length;
  },

  getOrders: (): Order[] => {
    mockDb.init();
    return JSON.parse(localStorage.getItem('aether_orders') || '[]');
  },

  getOrderById: (id: string): Order | undefined => {
    return mockDb.getOrders().find(o => o.id === id);
  },

  saveOrder: (order: Order): Order => {
    const orders = mockDb.getOrders();
    const idx = orders.findIndex(o => o.id === order.id);
    
    if (idx >= 0) {
      orders[idx] = order;
    } else {
      orders.push(order);
    }
    
    localStorage.setItem('aether_orders', JSON.stringify(orders));
    return order;
  },

  getCustomers: (): Customer[] => {
    mockDb.init();
    return JSON.parse(localStorage.getItem('aether_customers') || '[]');
  },

  getProfile: (): UserProfile => {
    mockDb.init();
    return JSON.parse(localStorage.getItem('aether_profile') || JSON.stringify(INITIAL_PROFILE));
  },

  saveProfile: (profile: UserProfile): UserProfile => {
    localStorage.setItem('aether_profile', JSON.stringify(profile));
    return profile;
  },

  getStats: (): DashboardStats => {
    const products = mockDb.getProducts();
    const orders = mockDb.getOrders();
    const customers = mockDb.getCustomers();

    // calculate total revenue from completed / paid orders
    const completedOrders = orders.filter(o => o.status !== 'cancelled');
    const totalRevenue = completedOrders.reduce((sum, o) => sum + o.total, 0);
    const totalOrdersCount = orders.length;
    const totalCustomersCount = customers.length;

    // Static conversion metrics mock
    const conversionRate = 3.42;

    // Form chart data for the past 6 days
    const salesData = [
      { name: 'May 30', revenue: 1450, orders: 8 },
      { name: 'May 31', revenue: 1850, orders: 12 },
      { name: 'Jun 01', revenue: 2200, orders: 15 },
      { name: 'Jun 02', revenue: 1950, orders: 10 },
      { name: 'Jun 03', revenue: 2600, orders: 18 },
      { name: 'Jun 04', revenue: totalRevenue > 0 ? Math.round(totalRevenue % 5000) : 1200, orders: totalOrdersCount }
    ];

    // Count categories
    const categoryCounts: { [key: string]: number } = {};
    products.forEach(p => {
      categoryCounts[p.category] = (categoryCounts[p.category] || 0) + (p.inventory > 0 ? 1 : 0);
    });

    const categoryColors = {
      'Electronics': '#8b5cf6',
      'Accessories': '#06b6d4',
      'Fitness': '#ec4899',
      'Default': '#64748b'
    };

    const categorySales = Object.keys(categoryCounts).map(cat => ({
      name: cat,
      value: categoryCounts[cat],
      color: categoryColors[cat as keyof typeof categoryColors] || categoryColors.Default
    }));

    // Form recent activities
    const recentActivity = [
      { id: 'act-1', user: 'Sarah Jenkins', action: 'placed order ord-3021', time: '5 mins ago', type: 'order' },
      { id: 'act-2', user: 'Admin', action: 'updated product: BioGrid Yoga Mat', time: '1 hour ago', type: 'product' },
      { id: 'act-3', user: 'Michael Chen', action: 'registered as customer', time: '2 hours ago', type: 'user' },
      { id: 'act-4', user: 'Emma Watson', action: 'payment received: ord-3019', time: '1 day ago', type: 'payment' },
      { id: 'act-5', user: 'Admin', action: 'added new product: Aether Chrono Smartwatch', time: '3 days ago', type: 'product' }
    ];

    return {
      totalRevenue: Number(totalRevenue.toFixed(2)),
      revenueChange: +12.4,
      totalOrders: totalOrdersCount,
      ordersChange: +8.2,
      totalCustomers: totalCustomersCount,
      customersChange: +5.3,
      conversionRate,
      conversionChange: -0.4,
      salesData,
      categorySales,
      recentActivity
    };
  }
};
