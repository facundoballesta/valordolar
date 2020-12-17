import React, { Component } from 'react';

export default class Conversor extends Component {
    constructor() {
        super();
        this.state = {
            valorLoad: "Loading",
            valordolar: 0,
            montoPesos: "",
            montoDolares: "",
        }
        this.fetchValor = this.fetchValor.bind(this);
        this.ARStoUSD = this.ARStoUSD.bind(this);
        this.USDtoARS = this.USDtoARS.bind(this);
    }
    fetchValor() {
        fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    valordolar: parseFloat(data[0].casa.venta.replace(',', '.')),
                    valorLoad: "Done"
                })
            })
    }
    componentDidMount() {
        this.fetchValor();
    }
    ARStoUSD(e) {
        var resultado = e.target.value / this.state.valordolar
        this.setState({
            montoPesos: e.target.value,
            montoDolares: resultado
        })
    }
    USDtoARS(e) {
        var resultado = e.target.value * this.state.valordolar
        this.setState({
            montoDolares: e.target.value,
            montoPesos: resultado
        })
    }
    render() {
        return (
            <div className="section" id="conversor">
                <h2>Conversor</h2>
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">De ARS a USD</span>
                                <form className="form">
                                    <div className="row">
                                        <div className="input-field col s12 m6">
                                            <input placeholder="Ingrese monto en ARS" name="montoPesos" type="number" value={this.state.montoPesos} onChange={this.ARStoUSD} />
                                            <label className="active" htmlFor="pesos">ARS</label>
                                        </div>
                                        <div className="input-field col s12 m6">
                                            <label className="active" htmlFor="dolares">USD</label>
                                            <input placeholder="" name="montoDolares" type="number" value={this.state.montoDolares} onChange={this.USDtoARS}/>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}