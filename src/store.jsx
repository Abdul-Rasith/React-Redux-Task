import { configureStore, createSlice } from "@reduxjs/toolkit";

const products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail:
      "https://indianexpress.com/wp-content/uploads/2018/07/apple_iphonex_1.jpg",
    images: [
      "https://indianexpress.com/wp-content/uploads/2018/07/apple_iphonex_1.jpg",
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://m-cdn.phonearena.com/images/article/105823-wide-two_940/Samsung-will-release-a-Galaxy-Note-9-with-512GB-of-storage-in-certain-markets.webp?1529243768",
      "https://m.media-amazon.com/images/I/317eOgpBM7S._SX300_SY300_QL70_FMwebp_.jpg",
      "https://360view.3dmodels.org/zoom/Huawei/Huawei_P30_lite_Peacock_Blue_1000_0001.jpg",
    ],
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail:
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://indianexpress.com/wp-content/uploads/2018/07/apple_iphonex_1.jpg",
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://m-cdn.phonearena.com/images/article/105823-wide-two_940/Samsung-will-release-a-Galaxy-Note-9-with-512GB-of-storage-in-certain-markets.webp?1529243768",
      "https://m.media-amazon.com/images/I/317eOgpBM7S._SX300_SY300_QL70_FMwebp_.jpg",
      "https://360view.3dmodels.org/zoom/Huawei/Huawei_P30_lite_Peacock_Blue_1000_0001.jpg",
    ],
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    thumbnail:
      "https://m-cdn.phonearena.com/images/article/105823-wide-two_940/Samsung-will-release-a-Galaxy-Note-9-with-512GB-of-storage-in-certain-markets.webp?1529243768",
    images: [
      "https://m-cdn.phonearena.com/images/article/105823-wide-two_940/Samsung-will-release-a-Galaxy-Note-9-with-512GB-of-storage-in-certain-markets.webp?1529243768",
    ],
  },
  {
    id: 4,
    title: "OPPO F19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: "OPPO",
    category: "smartphones",
    thumbnail:
      "https://m.media-amazon.com/images/I/317eOgpBM7S._SX300_SY300_QL70_FMwebp_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/317eOgpBM7S._SX300_SY300_QL70_FMwebp_.jpg",
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://m-cdn.phonearena.com/images/article/105823-wide-two_940/Samsung-will-release-a-Galaxy-Note-9-with-512GB-of-storage-in-certain-markets.webp?1529243768",
      "https://360view.3dmodels.org/zoom/Huawei/Huawei_P30_lite_Peacock_Blue_1000_0001.jpg",
      "https://indianexpress.com/wp-content/uploads/2018/07/apple_iphonex_1.jpg",
    ],
  },
  {
    id: 5,
    title: "Huawei P30",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "smartphones",
    thumbnail:
      "https://360view.3dmodels.org/zoom/Huawei/Huawei_P30_lite_Peacock_Blue_1000_0001.jpg",
    images: [
      "https://360view.3dmodels.org/zoom/Huawei/Huawei_P30_lite_Peacock_Blue_1000_0001.jpg",
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://m-cdn.phonearena.com/images/article/105823-wide-two_940/Samsung-will-release-a-Galaxy-Note-9-with-512GB-of-storage-in-certain-markets.webp?1529243768",
    ],
  },
];

const productSlice = createSlice({
  name: "products",
  initialState: products,
  reducers: {},
});

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.push({ ...action.payload, quantity: action.payload.quantity });
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.find((item) => item.id === id);
      if (product) {
        product.quantity = quantity;
      }
    },
  },
});

export const { addToCart, updateQuantity } = cartSlice.actions;

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
