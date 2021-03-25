import React from 'react';
import './App.css';
import AreaTexto from './AreaTexto.js';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import Botao from './Botao.js';


export default class App extends React.Component{
  
  constructor(props) {
    super(props);      
    this.state={
      classeDiv:'hide',
      classeDiv2: 'hide',
      classeDiv3: 'hide',
      classeDiv4: 'hide',
      altura: 0,
      massa: 0,
      resultado: 0,
      resultTexto: "Aguardando valores...",
      resultGas: 0,
      resultGasTxt: "Aguardando valores...",
      medidaIN: 0,
      medidaOUT: 0,
      medidaOUTxt:"Aguardando valores..."

    };
     this.calcular = this.calcular.bind(this) 
     this.calcularKM = this.calcularKM.bind(this)
     this.calcularKG = this.calcularKG.bind(this)
     this.calcularCelsius = this.calcularCelsius.bind(this)
    }


  alterarEstado(){
    var Estado;
    if(this.state.classeDiv === 'hide'){
      Estado = 'show';
    }else{
      Estado = 'hide';
    }
    this.setState({
        classeDiv: Estado
    })
    }
  
    alterarEstado4(){
    var Estado;
    if(this.state.classeDiv4 === 'hide'){
      Estado = 'show';
    }else{
      Estado = 'hide';
    }
    this.setState({
        classeDiv4: Estado
    })
    }
  calcular(){
    this.state.resultado = (this.state.massa / (this.state.altura * this.state.altura))* 10000
    if(this.state.resultado < 16){
      this.state.resultTexto = 'Muito abaixo do peso!'
    }
    else if (this.state.resultado < 17){
     this.state.resultTexto = 'Moderadamente abaixo do peso!'
    }
    else if (this.state.resultado < 18.5){
     this.state.resultTexto = 'Abaixo do peso!'
    }
    else if (this.state.resultado < 25) {
     this.state.resultTexto = 'Saudável!'
    }
    else if (this.state.resultado < 30) {
     this.state.resultTexto = 'Sobrepeso!'
    }
    else if (this.state.resultado < 35) {
     this.state.resultTexto = 'Obesidade Grau 1°!'
    }
    else if (this.state.resultado < 40) {
      this.state.resultTexto = 'Obesidade Grau 2°!'
    }
    else{
      this.setState.resultTexto = 'Obesidade Grau 3°'
    }
   this.setState(this.state)
  }

  calcularKM(){
    this.state.medidaOUT = 1.609/this.state.medidaIN 
    this.state.medidaOUTxt = "Convertido de km para Milhas"
    
   this.setState(this.state)
  }

  calcularKG(){
    this.state.medidaOUT = 2.205*this.state.medidaIN 
   this.state.medidaOUTxt = "Convertido de kg para Pounds"
    
   this.setState(this.state)
  }
  
  calcularCelsius(){
    this.state.medidaOUT = (1.8*this.state.medidaIN)+32
    this.state.medidaOUTxt = "Convertido de Celsius para Fahrenheit"
    
   this.setState(this.state)
  }

  
  
  

render() {
  const {error, isLoaded, moedas} = this.state;
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora de Conversão</h1>
      </header>
      <div>
      <Botao funcao={this.alterarEstado.bind(this)} valor="IMC"/>
      <AreaTexto classeSecundaria={this.state.classeDiv} texto = 
      {<div>
      <label htmlFor="integeronly"> Insira seu peso (kg): </label><br></br>
        <InputNumber  id="peso" value={this.state.massa} onValueChange={(e) => this.setState({massa: e.value})} /><br></br>
        <label htmlFor="integeronly">Insira sua altura (cm):</label><br></br>
        <InputNumber  id="altura" value={this.state.altura} onValueChange={(e) => this.setState({altura: e.value})} /><br></br>
        <br></br>
        <div>
          <Button label="Calcular" onClick={this.calcular} className="Botao"> </Button>
        </div>
        <div>
          <h1>
            {this.state.resultado}
          </h1>
          <h1>
          {this.state.resultTexto}
        </h1>
        </div>
        </div>}/>
     </div>
     <br></br>
      <br></br>
      <div><Botao funcao={this.alterarEstado4.bind(this)} valor="MEDIDAS"/>
      <AreaTexto classeSecundaria={this.state.classeDiv4} texto = {
       <div>
      <label htmlFor="integeronly"> Insira o valor a ser convertido: </label><br></br>
        <InputNumber value={this.state.medidaIN} onValueChange={(e) => this.setState({medidaIN: e.value})} minFractionDigits={2} /><br></br>
        <br></br>
        <div>
            <tab>
            <Button label="Km -> Milhas" onClick={this.calcularKM} className="Botao"> </Button>
            </tab>
            <tab>
            <Button label="Kg -> Pounds" onClick={this.calcularKG} className="Botao"> </Button>
            </tab>
            <tab>
            <Button label="Cº -> Fº" onClick={this.calcularCelsius} className="Botao"> </Button>
            </tab>
           
         
        </div>
        <div>
        <h1> 
        {this.state.medidaOUT}
        </h1>
        <h1> 
        {this.state.medidaOUTxt}
        </h1>
        </div>
        </div>} /></div>
      <br></br>
   </div>
  );
  }

}
