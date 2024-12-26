import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: {
    list: null,
    today: null,
    merged: null
  },
  products: {
    list: null,
    top: null
  },
  sales: {
    today: null,
    total: null
  }
}

// payload é a lista de produtos

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {

    populateOrders: (state, { payload }) => {

      const today = new Date().toLocaleDateString();
      const todayOrders = payload?.filter(order => new Date(order.date).toLocaleDateString === today) || [];

      state.orders.list = payload;          // lista de orders
      state.orders.today = todayOrders;     // orders feitas no dia de hoje
    },

    populatePRoducts: (state, { payload }) => {

      const products = payload ? [...payload] : []; // se payload existir retorne a lista se nao um array vazio
      const topProducts = products?.sort((a, b) => b.orders - a.orders).slice(0, 3) || [];

      state.products.list = payload;          // popular a lista de produtos
      state.products.top = topProducts;       // top produtos
    },

    createOrdersWithProduct: (state) => {

      const {list: products} = state.products;
      const {list: orders} = state.orders;

      const orderWithProducts = orders?.map(order => {
        const product = products.find(product => product._id === order.product._ref);

        return {  // retornar um novo objeto
          ...order,
          product: product.name,
          amount: product.price * order.amount,
          
        }
      })
    }

  },
});