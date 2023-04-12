// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./Form.css";
// import * as yup from "yup";
// import axios from "axios";

// const initialValues = {
//   name: "",
//   boyut: "",
//   hamur: "",
//   secenekler: [],
//   instructions: "",
//   adet: 1,
//   ücret: 85.5,
//   ekücret: "",
//   rate: 0,
//   comments: 0,
// };

// const secenekler = [
//   "Pepperoni",
//   "Sosis",
//   "Knada Jambonu",
//   "Tavuk Izgara",
//   "Soğan",
//   "Domates",
//   "Mısır",
//   "Sucuk",
//   "Jalepeno",
//   "Sarımsak",
//   "Biber",
//   "Sucuk",
//   "Ananas",
//   "Kabak",
// ];

// const Form = () => {
//   //   useEffect(() => {
//   //     axios
//   //       .post("https://reqres.in/api/users", postData)
//   //       .then((response) => {
//   //         console.log(response.data);
//   //         setData(response.data);
//   //       })
//   //       .catch((error) => {
//   //         console.log(error);
//   //       });
//   //   }, []);

//   return (
//     <form id="pizza-form" className="form-container">
//       {/* Navigation */}
//       <div className="navbar">
//         <img className="logo" src="./logo.svg" alt="teknolojik yemekler" />
//         <div className="all-links">
//           <nav>
//             <NavLink activeClassName="active" className="links" to="/">
//               Anasayfa
//             </NavLink>
//             <NavLink
//               activeClassName="active"
//               className="secenekler"
//               to="/pizza"
//             >
//               Seçenekler
//             </NavLink>

//             <NavLink
//               activeClassName="active"
//               id="order-pizza"
//               className="links"
//               to="/pizza"
//             >
//               Sipariş oluştur
//             </NavLink>
//           </nav>
//         </div>
//       </div>
//       {/* Navigation */}

//       {/* Nav Sonrasi Ana Div */}
//       <div className="icerik-container">
//         <h2> Position Absolute Acı Pizza</h2>
//         <div className="pizza-info">
//           <span>{initialValues.ücret} TL</span>
//           <div className="rate-comment">
//             <span>{initialValues.rate}</span>
//             <span>({initialValues.comments})</span>
//           </div>
//         </div>
//         <p>
//           Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
//           pizza tam sana göre.Pizza, domates, peynir ve genellikle çeşitli diğer
//           malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
//           fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
//           düzleştirilmiş mayalı buğday bazlı hamurdan oluşanİtalyan kökenli
//           lezzetli bir yemektir. Küçük bir pizzaya bazen pizetta denir.{" "}
//         </p>

//         <form>
//           <label>
//             <h3>İsim: </h3>
//             <input
//               name="name"
//               placeholder="isim yazınız"
//               type="text"
//               value={initialValues.name}
//               data-cy="name-input"
//             />
//           </label>
//           <button type="submit">Gönder</button>
//         </form>

//         <div className="choices">
//           <div className="boy">
//             <label htmlFor="size-dropdown" sm={2}>
//               <h3>Boy:</h3>
//             </label>

//             <label htmlFor="size-dropdown">
//               <input
//                 type="radio"
//                 name="boyut"
//                 id="size-dropdown"
//                 value="Küçük"
//                 data-cy="size-dropdown"
//                 required
//               />
//               Küçük
//             </label>

//             <label htmlFor="size-dropdown">
//               <input
//                 type="radio"
//                 name="boyut"
//                 id="size-dropdown"
//                 value="Orta"
//                 data-cy="size-dropdown"
//                 required
//               />
//               Orta
//             </label>

//             <label htmlFor="size-dropdown">
//               <input
//                 type="radio"
//                 name="boyut"
//                 id="size-dropdown"
//                 value="Büyük"
//                 data-cy="size-dropdown"
//                 required
//               />
//               Büyük
//             </label>

//             <div>
//               <label htmlFor="dough-dropdown">
//                 <h3>Hamur: </h3>
//               </label>
//               <select
//                 id="dough-dropdown"
//                 name="hamur"
//                 value={initialValues.hamur}
//                 data-cy="dough-dropdown"
//               >
//                 <option value="">---Hangi hamur olsun?---</option>
//                 <option value="ince">ince</option>
//                 <option value="orta">orta</option>
//                 <option value="kalın">kalın</option>
//               </select>
//             </div>
//           </div>

//           <div>
//             <h3>Ek Malzemeler:</h3>
//             <p>En fazla 3 malzeme seçebilirsiniz. 5tl</p>
//             {secenekler.map((e, index) => {
//               return (
//                 <div key={index} className="checkbox-group">
//                   <label>
//                     <input type="checkbox" name={e} />
//                     {e}
//                   </label>
//                 </div>
//               );
//             })}
//           </div>

//           <div>
//             <label htmlFor="special-text">
//               <h3>Sipariş Notu : </h3>
//             </label>
//             <input
//               id="special-text"
//               name="instructions"
//               placeholder="notunuzu yazınız"
//               type="text"
//               value={initialValues.instructions}
//               data-cy="special-text"
//             />
//           </div>

//           <hr style={{ size: "2", border: "solid", width: "100%" }} />

//           <div className="ozetSol">
//             <div class="altButton">
//               <button>-</button>
//               <input type="number" id="count" value={0} />
//               <button>+</button>
//             </div>

//             <div>
//               <div className="siparis-toplami">
//                 <h4>Sipariş Toplamı</h4>
//                 <h5>Seçimler: {1 * 2} TL</h5>
//                 <h5>Toplam: {1} TL</h5>
//               </div>
//               {/* {disabled ? ( */}
//               <button disabled={true} className="secondary-button">
//                 Sipariş Ver
//               </button>
//               ) : (
//               <NavLink to="/order">
//                 <button className="primary-button">Sipariş Ver</button>
//               </NavLink>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Nav Sonrasi Ana Div */}
//     </form>
//   );
// };

// export default Form;
