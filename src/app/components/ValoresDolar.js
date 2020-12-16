import React, { Component } from 'react';

export default class ValoresDolar extends Component {
    constructor() {
        super();
        this.state = {
            valoresLoad: "Loading",
            dolaroficial: {
                compra: "",
                venta: "",
            },
            dolarblue: {
                compra: "",
                venta: ""
            },
            dolarsoja: {
                compra: "",
                venta: ""
            },
            dolarccl: {
                compra: "",
                venta: ""
            },
            dolarbolsa: {
                compra: "",
                venta: ""
            },
            bitcoin: {
                compra: "",
                venta: ""
            },
            dolarturista: {
                compra: ""
            },
            dolarpromedio: {
                compra: "",
                venta: ""
            },
            riesgopais: {
                valor: "",
                variacion: ""
            }
        }
        this.fetchValores = this.fetchValores.bind(this);
    }
    fetchValores() {
        fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    dolaroficial: {
                        compra: data[0].casa.compra,
                        venta: data[0].casa.venta,
                    },
                    dolarblue: {
                        compra: data[1].casa.compra,
                        venta: data[1].casa.venta,
                    },
                    dolarsoja: {
                        compra: data[2].casa.compra,
                        venta: data[2].casa.venta
                    },
                    dolarccl: {
                        compra: data[3].casa.compra,
                        venta: data[3].casa.venta
                    },
                    dolarbolsa: {
                        compra: data[4].casa.compra,
                        venta: data[4].casa.venta
                    },
                    bitcoin: {
                        compra: data[5].casa.compra,
                        venta: data[5].casa.venta
                    },
                    dolarturista: {
                        venta: data[6].casa.venta
                    },
                    dolarpromedio: {
                        compra: data[7].casa.compra,
                        venta: data[7].casa.venta
                    },
                    riesgopais: {
                        valor: data[8].casa.compra,
                        variacion: data[8].casa.venta
                    },
                    valoresLoad: "Done"
                });
            })
    }
    componentDidMount() {
        this.fetchValores();

    }
    render() {
        return (
            <div className="section">
                <div className="container">
                    <h2>Valores del Dolar</h2>


                    {this.state.valoresLoad === "Loading" &&
                        <div className="preloader-wrapper big active">
                            <div className="spinner-layer spinner-blue-only">
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div><div className="gap-patch">
                                    <div className="circle"></div>
                                </div><div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                            </div>
                        </div>
                    }

                    {this.state.valoresLoad === "Done" &&
                        <div className="row">

                            {/* //Dolar Oficial */}
                            <div className="col m4">
                                <div className="card">
                                    <div className="card-content">
                                        <span className="card-title">Dolar Oficial</span>
                                        <div className="row">
                                            <div className="col m6">
                                                <h4 className="titulo-dolar">Compra</h4>
                                                <p className="valor-dolar">{this.state.dolaroficial.compra}</p>
                                            </div>
                                            <div className="col m6">
                                                <h4 className="titulo-dolar">Venta</h4>
                                                <p className="valor-dolar">{this.state.dolaroficial.venta}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* //Dolar Blue */}
                            <div className="col m4">
                                <div className="card">
                                    <div className="card-content">
                                        <span className="card-title">Dolar Blue</span>
                                        <div className="row">
                                            <div className="col m6">
                                                <h4 className="titulo-dolar">Compra</h4>
                                                <p className="valor-dolar">{this.state.dolarblue.compra}</p>
                                            </div>
                                            <div className="col m6">
                                                <h4 className="titulo-dolar">Venta</h4>
                                                <p className="valor-dolar">{this.state.dolarblue.venta}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    }


                </div>
            </div>
        )
    }
}