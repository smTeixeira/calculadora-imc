import { useState } from 'react'
import './App.css';


function App() {

  const calcularIMC = (altura: number, peso: number): number => {
    return peso / Math.pow(altura, 2);
  };

  const classificarIMC = (imc: number): string => {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc < 24.9) {
      return 'Peso normal';
    } else if (imc < 29.9) {
      return 'Sobrepeso';
    } else if (imc < 34.9) {
      return 'Obesidade Grau 1';
    } else if (imc < 39.9) {
      return 'Obesidade Grau 2';
    } else {
      return 'Obesidade Grau 3';
    }
  };

  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [imc, setIMC] = useState(0);
  const [classificacao, setClassificacao] = useState<string>('');

  const CalcularIMC = () => {
    const resultadoIMC = calcularIMC(altura, peso);
    const classificacaoIMC = classificarIMC(resultadoIMC);
    setIMC(resultadoIMC);
    setClassificacao(classificacaoIMC);
  };

  return (
    <div className="container">

      <div>
        <h1>Calculadora de IMC</h1>
        <div>
          <label>Altura (m): </label>
          <input
            type="number"
            step="0.01"
            value={altura}
            onChange={(e) => setAltura(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label>Peso (kg): </label>
          <input
            type="number"
            step="0.01"
            value={peso}
            onChange={(e) => setPeso(parseFloat(e.target.value))}
          />
        </div>
        <button onClick={CalcularIMC}>Calcular</button>
        {imc > 0 && (
          <div>
            <h2>Resultado:</h2>
            <p>IMC: {imc.toFixed(2)}</p>
            <p>Classificação: {classificacao}</p>
          </div>
        )}
      </div>
    </div>
  )
}


export default App
