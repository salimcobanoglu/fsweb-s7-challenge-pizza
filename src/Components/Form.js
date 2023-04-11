import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Form.css";
import * as yup from "yup";
import axios from "axios";

const initialValues = {
  name: "",
  boyut: "",
  hamur: "",
  secenekler: [],
  instructions: "",
  adet: 1,
  ücret: 85.5,
  ekücret: "",
  rate: 0,
  comments: 0,
};

const postData = {
  name: "",
  boyut: "",
  hamur: "",
  secenekler: [],
  instructions: "",
  adet: 1,
  ücret: 85.5,
  ekücret: "",
  rate: 8.9,
  comments: 200,
};

const initialErrors = {
  name: "",
  boyut: "",
  hamur: "",
  secenekler: [],
  instructions: "",
};

const secenekler = [
  "Pepperoni",
  "Sosis",
  "Knada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Sucuk",
  "Ananas",
  "Kabak",
];

const Form = () => {
  const [data, setData] = useState(initialValues);
  const [malzemeSayısı, setMalzemeSayısı] = useState(0);
  const [price, setPrice] = useState(data.ücret);

  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(true);
  const [submit, setSubmit] = useState(false);

  const [counter, setCounter] = useState(1);
  const perCost = 5;
  const ekücret = perCost * malzemeSayısı;
  const totalPrice = price * counter;

  useEffect(() => {
    axios
      .post("https://reqres.in/api/users", postData)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
  };

  const kontrol = (e) => {
    setData({ ...data, [e.target.name]: e.target.checked });
    if (e.target.checked === true) {
      setMalzemeSayısı(malzemeSayısı + 1);
      setPrice(price + perCost);
    } else {
      setMalzemeSayısı(malzemeSayısı - 1);
      setPrice(price - perCost);
    }
  };

  const arttır = (e) => {
    setCounter(counter + 1);
  };

  const azalt = (e) => {
    if (counter >= 1) setCounter(counter - 1);
    if (counter <= 1) setCounter(1);
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("bu alanı doldurmak zorunludur.")
      .min(2, "isim en az 2 karakter olmalıdır")
      .default(data.name),
    secenekler: yup
      .array()
      .max(10, "En fazla 10 tane seçebilirsiniz.")
      .default(data.secenekler),
    instructions: yup
      .string()
      .required("bu alanı doldurmak zorunludur.")
      .default(data.instructions),
    adet: yup.number().required().default(data.adet),
    ücret: yup.number().required().default(data.ücret),
    ekücret: yup.number().required().default(data.ekücret),
    rate: yup.number().required().default(data.rate),
    comments: yup.number().required().default(data.comments),
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

    yup
      .reach(schema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };

  useEffect(() => {
    schema.isValid(data).then((valid) => setDisabled(!valid));
  }, [data, schema]);

  useEffect(() => {
    setData({ ...data, count: counter });
  }, [counter]);

  useEffect(() => {
    setData({
      ...data,
      price: price,
      ekücret: malzemeSayısı * perCost,
    });
  }, [totalPrice]);

  return (
    <form id="pizza-form" className="form-container" onSubmit={onSubmit}>
      {/* Navigation */}
      <div className="navbar">
        <img className="logo" src="./logo.svg" alt="teknolojik yemekler" />
        <div className="direction">
          <NavLink className="links" to="/">
            Anasayfa
          </NavLink>

          <NavLink className="secenekler" to="/pizza">
            Seçenekler
          </NavLink>

          <NavLink id="order-pizza" className="links" to="/pizza">
            Sipariş oluştur
          </NavLink>
        </div>
      </div>
      {/* Navigation */}

      {/* Nav Sonrasi Ana Div */}
      <div className="icerik-container">
        <h2> Position Absolute Acı Pizza</h2>
        <div className="pizza-info">
          <span>{data.ücret} TL</span>
          <div className="ek">
            <span>{data.rate}</span>
            <span>({data.comments})</span>
          </div>
        </div>
        <p>
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre.Pizza, domates, peynir ve genellikle çeşitli diğer
          malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
          fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşanİtalyan kökenli
          lezzetli bir yemektir. Küçük bir pizzaya bazen pizetta denir.{" "}
        </p>

        <form>
          <label>
            <h3>İsim: </h3>
            <input
              name="name"
              placeholder="isim yazınız"
              type="text"
              onChange={changeHandler}
              value={data.name}
              className={errors.name ? "is-invalid" : ""}
              data-cy="name-input"
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </label>
          <button type="submit">Gönder</button>
        </form>

        <div className="seçimler">
          <div className="seçim-1">
            <label htmlFor="size-dropdown" sm={2}>
              <h3>Boy:</h3>
            </label>

            <label htmlFor="size-dropdown">
              <input
                type="radio"
                name="boyut"
                id="size-dropdown"
                value="Küçük"
                data-cy="size-dropdown"
                required
                onChange={changeHandler}
              />
              Küçük
            </label>

            <label htmlFor="size-dropdown">
              <input
                type="radio"
                name="boyut"
                id="size-dropdown"
                value="Orta"
                data-cy="size-dropdown"
                required
                onChange={changeHandler}
              />
              Orta
            </label>

            <label htmlFor="size-dropdown">
              <input
                type="radio"
                name="boyut"
                id="size-dropdown"
                value="Büyük"
                data-cy="size-dropdown"
                required
                onChange={changeHandler}
              />
              Büyük
            </label>
            {errors.boyut && <div>{errors.boyut}</div>}
          </div>

          <div>
            <label htmlFor="dough-dropdown">
              <h3>Hamur: </h3>
            </label>
            <select
              id="dough-dropdown"
              name="hamur"
              value={data.hamur}
              onChange={changeHandler}
              data-cy="dough-dropdown"
            >
              <option value="">---Hangi hamur olsun?---</option>
              <option value="ince">ince</option>
              <option value="orta">orta</option>
              <option value="kalın">kalın</option>
            </select>
            {errors.hamur && <div>{errors.hamur}</div>}
          </div>
        </div>

        <div>
          <h3>Ek Malzemeler:</h3>
          <p>En fazla 10 malzeme seçebilirsiniz. 5tl</p>
          {secenekler.map((e, index) => {
            return (
              <div key={index} className="checkbox-group">
                <label>
                  <input type="checkbox" name={e} onChange={kontrol} />
                  {e}
                </label>
                {errors.secenekler && <div>{errors.secenekler}</div>}
              </div>
            );
          })}
        </div>

        <div>
          <label htmlFor="special-text">
            <h3>Sipariş Notu : </h3>
          </label>
          <input
            id="special-text"
            name="instructions"
            placeholder="notunuzu yazınız"
            type="text"
            onChange={changeHandler}
            value={data.instructions}
            className={errors.instructions ? "is-invalid" : ""}
            data-cy="special-text"
          />
          {errors.instructions && (
            <div className="invalid-feedback">{errors.instructions}</div>
          )}
        </div>

        <hr style={{ size: "2", border: "solid", width: "100%" }} />

        <div className="sayısal">
          <div class="altButton">
            <button onClick={azalt}>-</button>
            <input type="number" id="count" value={counter} />
            <button onClick={arttır}>+</button>
          </div>

          <div className="seçim-2">
            <div
              className="my-5"
              style={{
                width: "8rem",
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <h4 style={{ marginTop: 0 }}>Sipariş Toplamı</h4>
              <h5>Seçimler: {ekücret * counter} TL</h5>
              <h5>Toplam: {totalPrice} TL</h5>
            </div>

            <Link to="/order">
              <button
                id="order-button"
                data-cy="order-button"
                disabled={disabled}
                className="btn btn-primary"
              >
                Sipariş ver!
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Nav Sonrasi Ana Div */}
    </form>
  );
};

export default Form;
