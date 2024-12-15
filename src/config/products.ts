const PRODUCT_PRICES = {
  material: {
    silicone: 0,
    polycarbonate: 5_00,
  },
  finish: {
    smooth: 0,
    textured: 3_00,
  },
} as const;

const BASE_PRICE = 14_00;

export { PRODUCT_PRICES, BASE_PRICE };
