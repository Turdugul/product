// import { useEffect } from "react";
// import { LoadingIcon } from "../assets/icon/icon";
// import styles from "./Checkout.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../redux/slice/productSlice";

// const Product = ({
//   id,
//   name,
//   availableCount,
//   price,
//   orderedQuantity,
//   total,
//   incrementHandler,
//   decrementHandler,
// }) => {
//   //   const totalPrice = total.toFixed(2);
//   //   const enabled = total === 0;
//   //   const disable = availableCount === orderQuantity;
//   //   console.log(totalPrice, enabled, disable, orderQuantity);
//   return (
//     <tr>
//       <td>{id}</td>
//       <td>{name}</td>
//       <td>{availableCount}</td>
//       <td>${price}</td>
//       <td>{orderedQuantity}</td>
//       <td>${total}</td>
//       <td>
//         <button
//           className={styles.actionButton}
//           onClick={() => incrementHandler(id, price)}
//         >
//           +
//         </button>
//         <button
//           className={styles.actionButton}
//           onClick={() => decrementHandler(id, price)}
//         >
//           -
//         </button>
//       </td>
//     </tr>
//   );
// };

// const Checkout = () => {
//   const { products, isLoading, totalPrice } = useSelector(
//     (state) => state.product
//   );
//   const dispatch = useDispatch();
//   console.log(dispatch, products, isLoading);

//   useEffect(() => {
//     dispatch(getProducts());
//   }, [dispatch]);

//   const incrementHandler = (id, price) => {
//     // dispatch(productActions.incremet(id));
//     // dispatch(productActions.IncrementById(price));
//   };
//   const DecrementHandler = (id, price) => {
//     // dispatch(productActions.decrement(id));
//     // dispatch(productActions.DecrementById(price));
//   };
//   //   const totalDisCount = Price - Price * 10;
//   //   const discount = Price * 0.1;

//   //   const price = totalPrice.toFixed(2);
// //   let count = 0;
//   //   if (totalPrice > 1000) {
//   //     count = totalPrice * 0.1;
//   //   }
// //   const resultCount = count.toFixed(2);
//   return (
//     <div>
//       <header className={styles.header}>
//         <h1>Electro World</h1>
//       </header>
//       <main>
//         <LoadingIcon />
//         <h4 style={{ color: "red" }}>Some thing went wrong</h4>
//         <table className={styles.table}>
//           <thead>
//             <tr>
//               <th>Product ID</th>
//               <th>Product Name</th>
//               <th># Available</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Total</th>
//               <th></th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {isLoading ? (
//               <LoadingIcon />
//             ) : (
//                 products.map((product) => (
//                 <tr key={product.id}>
//                   <td>{product.id}</td>
//                   <td>{product.name}</td>
//                   <td>{product.availableCount}</td>
//                   <td>${product.price}</td>
//                   <td>{product.orderedQuantity}</td>
//                   <td>${product.total}</td>
//                   <td>
//                     <button
//                       className={styles.actionButton}
//                       incrementHandler={incrementHandler}
//                     >
//                       +
//                     </button>
//                     <button
//                       className={styles.actionButton}
//                       DecrementHandler={DecrementHandler}
//                     >
//                       -
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>

//         <h2>Order summary</h2>
//         <p>Discount: $ resultCount</p>
//         <p>Total: $ {totalPrice}</p>
//       </main>
//     </div>
//   );
// };

// export default Checkout;
