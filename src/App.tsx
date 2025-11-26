import { useState } from "react";
import styles from "./App.module.css";

const EuroChangeCalculator: React.FC = () => {
  const [given, setGiven] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [error, setError] = useState<string>("");

 const handleGivenMoney = (value: string) => {
  if (value.charCodeAt(value.length - 1) === 44) {
    setError("Моля използвайте точка (.) за десетичен знак.");
  }
  else{
  setGiven( value || "");
  setError("");
  }
};

const handleTotalPrice = (value: string) => {
   if (value.charCodeAt(value.length - 1) === 44) {
    setError("Моля използвайте точка (.) за десетичен знак.");
  }
  else{
  setPrice( value || "");
  setError("");
  }
};



  const rate:number = 1.95583;

  const changeBGN:number = Number(given) - Number(price);
  const changeEUR:number = changeBGN > 0 ? changeBGN / rate : 0;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Ресто (лв → €)</h1>

      <input
        className={styles.input}
        placeholder="Дадена сума (лв)"
        value={given}
        onChange={(e) => handleGivenMoney(e.target.value)}
        type="text"
        inputMode="numeric"
        step="0.01"
      />

      <input
        className={styles.input}
        placeholder="Цена (лв)"
        value={price}
        onChange={(e) => handleTotalPrice(e.target.value)}
        type="text"
        inputMode="numeric"
        step="0.01"
      />

      <div className={styles.resultBox}>
        <p>Ресто в лева: <strong>{changeBGN > 0 ? changeBGN.toFixed(2) : "0.00"} лв</strong></p>
        <p>Ресто в евро: <strong>{changeEUR > 0 ? changeEUR.toFixed(2) : "0.00"} €</strong></p>
      </div>
      <button className={styles.resetButton} onClick={() => { setGiven(""); setPrice(""); }}>Изчисти</button>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default EuroChangeCalculator;
