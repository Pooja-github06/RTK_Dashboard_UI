import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { mockDb } from './mockDb';
import type { Product, Order, Customer, UserProfile, DashboardStats } from './mockDb';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Products', 'Orders', 'Customers', 'Profile', 'Stats'],
  endpoints: (builder) => ({
    // Stats Endpoint
    getDashboardStats: builder.query<DashboardStats, void>({
      async queryFn() {
        try {
          await delay(400);
          const stats = mockDb.getStats();
          return { data: stats };
        } catch (error: any) {
          return { error: { status: 'CUSTOM_ERROR', error: error.message } };
        }
      },
      providesTags: ['Stats', 'Products', 'Orders', 'Customers'],
    }),

    // Products Endpoints
    getProducts: builder.query<Product[], void>({
      async queryFn() {
        try {
          await delay(500);
          const products = mockDb.getProducts();
          return { data: products };
        } catch (error: any) {
          return { error: { status: 'CUSTOM_ERROR', error: error.message } };
        }
      },
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Products' as const, id })), { type: 'Products', id: 'LIST' }]
          : [{ type: 'Products', id: 'LIST' }],
    }),

    getProductById: builder.query<Product, string>({
      async queryFn(id) {
        try {
          await delay(300);
          const product = mockDb.getProductById(id);
          if (!product) {
            throw new Error(`Product with ID ${id} not found.`);
          }
          return { data: product };
        } catch (error: any) {
          return { error: { status: 'CUSTOM_ERROR', error: error.message } };
        }
      },
      providesTags: (_result, _error, id) => [{ type: 'Products', id }],
    }),

    createProduct: builder.mutation<Product, Omit<Product, 'id' | 'createdAt'>>({
      async queryFn(newProduct) {
        try {
          await delay(600);
          const id = `prod-${Date.now()}`;
          const createdAt = new Date().toISOString();
          const product: Product = { ...newProduct, id, createdAt };
          mockDb.saveProduct(product);
          return { data: product };
        } catch (error: any) {
          return { error: { status: 'CUSTOM_ERROR', error: error.message } };
        }
      },
      invalidatesTags: [{ type: 'Products', id: 'LIST' }, 'Stats'],
    }),

    updateProduct: builder.mutation<Product, Product>({
      async queryFn(updatedProduct) {
        try {
          await delay(600);
          mockDb.saveProduct(updatedProduct);
          return { data: updatedProduct };
        } catch (error: any) {
          return { error: { status: 'CUSTOM_ERROR', error: error.message } };
        }
      },
      invalidatesTags: (_result, _error, arg) => [
        { type: 'Products', id: arg.id },
        { type: 'Products', id: 'LIST' },
        'Stats',
      ],
    }),

    deleteProduct: builder.mutation<boolean, string>({
      async queryFn(id) {
        try {
          await delay(500);
          const success = mockDb.deleteProduct(id);
          if (!success) {
            throw new Error(`Failed to delete product ${id}`);
          }
          return { data: true };
        } catch (error: any) {
          return { error: { status: 'CUSTOM_ERROR', error: error.message } };
        }
      },
      invalidatesTags: [{ type: 'Products', id: 'LIST' }, 'Stats'],
    }),

    // Orders Endpoints
    getOrders: builder.query<Order[], void>({
      async queryFn() {
        try {
          await delay(500);
          const orders = mockDb.getOrders();
          return { data: orders };
        } catch (error: any) {
          return { error: { status: 'CUSTOM_ERROR', error: error.message } };
        }
      },
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Orders' as const, id })), { type: 'Orders', id: 'LIST' }]
          : [{ type: 'Orders', id: 'LIST' }],
    }),

    getOrderById: builder.query<Order, string>({
      async queryFn(id) {
        try {
          await delay(300);
          const order = mockDb.getOrderById(id);
          if (!order) {
            throw new Error(`Order with ID ${id} not found.`);
          }
          return { data: order };
        } catch (error: any) {
          return { error: { status: 'CUSTOM_ERROR', error: error.message } };
        }
      },
      providesTags: (_result, _error, id) => [{ type: 'Orders', id }],
    }),

    updateOrderStatus: builder.mutation<Order, { id: string; status: Order['status']; note?: string }>({
      async queryFn({ id, status, note }) {
        try {
          await delay(600);
          const order = mockDb.getOrderById(id);
          if (!order) {
            throw new Error(`Order with ID ${id} not found.`);
          }
          
          const historyEntry = {
            status,
            timestamp: new Date().toISOString(),
            note: note || `Order status updated to ${status}.`
          };

          const updatedOrder: Order = {
            ...order,
            status,
            history: [...order.history, historyEntry]
          };

          // If delivered, update customer's spend count
          if (status === 'delivered' && order.status !== 'delivered') {
            const customers = mockDb.getCustomers();
            const customerIdx = customers.findIndex(c => c.email.toLowerCase() === order.customerEmail.toLowerCase());
            if (customerIdx >= 0) {
              customers[customerIdx].ordersCount += 1;
              customers[customerIdx].totalSpend += order.total;
              localStorage.setItem('aether_customers', JSON.stringify(customers));
            }
          }

          mockDb.saveOrder(updatedOrder);
          return { data: updatedOrder };
        } catch (error: any) {
          return { error: { status: 'CUSTOM_ERROR', error: error.message } };
        }
      },
      invalidatesTags: (_result, _error, arg) => [
        { type: 'Orders', id: arg.id },
        { type: 'Orders', id: 'LIST' },
        'Stats',
        'Customers',
      ],
    }),

    // Customers Endpoints
    getCustomers: builder.query<Customer[], void>({
      async queryFn() {
        try {
          await delay(400);
          const customers = mockDb.getCustomers();
          return { data: customers };
        } catch (error: any) {
          return { error: { status: 'CUSTOM_ERROR', error: error.message } };
        }
      },
      providesTags: ['Customers'],
    }),

    // Settings / Profile Endpoints
    getProfile: builder.query<UserProfile, void>({
      async queryFn() {
        try {
          await delay(300);
          const profile = mockDb.getProfile();
          return { data: profile };
        } catch (error: any) {
          return { error: { status: 'CUSTOM_ERROR', error: error.message } };
        }
      },
      providesTags: ['Profile'],
    }),

    updateProfile: builder.mutation<UserProfile, UserProfile>({
      async queryFn(updatedProfile) {
        try {
          await delay(500);
          mockDb.saveProfile(updatedProfile);
          return { data: updatedProfile };
        } catch (error: any) {
          return { error: { status: 'CUSTOM_ERROR', error: error.message } };
        }
      },
      invalidatesTags: ['Profile'],
    }),
  }),
});

export const {
  useGetDashboardStatsQuery,
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetOrdersQuery,
  useGetOrderByIdQuery,
  useUpdateOrderStatusMutation,
  useGetCustomersQuery,
  useGetProfileQuery,
  useUpdateProfileMutation,
} = apiSlice;
