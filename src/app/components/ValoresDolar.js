import React, { Component } from 'react';

export default class ValoresDolar extends Component {
    constructor() {
        super();
        this.state = {
            valoresLoad: "Loading",
            dolaroficial: {
                compra: "",
                venta: "",
                variacion: "",
            },
            dolarblue: {
                compra: "",
                venta: "",
                variacion: ""
            },
            dolarsoja: {
                compra: "",
                venta: "",
                variacion: ""
            },
            dolarccl: {
                compra: "",
                venta: "",
                variacion: ""
            },
            dolarbolsa: {
                compra: "",
                venta: "",
                variacion: ""
            },
            bitcoin: {
                compra: "",
                venta: "",
                variacion: ""
            },
            dolarturista: {
                compra: "",
                variacion: ""
            },
            dolarpromedio: {
                compra: "",
                venta: "",
                variacion: ""
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
                        variacion: parseFloat(data[0].casa.variacion.replace(',', '.')),
                    },
                    dolarblue: {
                        compra: data[1].casa.compra,
                        venta: data[1].casa.venta,
                        variacion: parseFloat(data[1].casa.variacion.replace(',', '.'))
                    },
                    dolarsoja: {
                        compra: data[2].casa.compra,
                        venta: data[2].casa.venta,
                        variacion: parseFloat(data[2].casa.variacion.replace(',', '.'))
                    },
                    dolarccl: {
                        compra: data[3].casa.compra,
                        venta: data[3].casa.venta,
                        variacion: parseFloat(data[3].casa.variacion.replace(',', '.'))
                    },
                    dolarbolsa: {
                        compra: data[4].casa.compra,
                        venta: data[4].casa.venta,
                        variacion: parseFloat(data[4].casa.variacion.replace(',', '.'))
                    },
                    bitcoin: {
                        compra: data[5].casa.compra,
                        venta: data[5].casa.venta,
                        variacion: parseFloat(data[5].casa.variacion.replace(',', '.'))
                    },
                    dolarturista: {
                        venta: data[6].casa.venta,
                        variacion: parseFloat(data[6].casa.variacion.replace(',', '.'))
                    },
                    dolarpromedio: {
                        compra: data[7].casa.compra,
                        venta: data[7].casa.venta,
                    },
                    riesgopais: {
                        valor: data[8].casa.compra,
                        variacion: data[8].casa.venta,
                        variacion: parseFloat(data[8].casa.venta.replace(',', '.'))
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
            <div className="section" id="valores">
                    <h2>Valores del Dolar</h2>


                    {this.state.valoresLoad === "Loading" &&
                        <div className="preloader-wrapper big active">
                            <div className="spinner-layer spinner-green-only">
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
                        <div className="row" data-aos="fade-right">
                            {/* //Dolar Oficial */}
                            <div className="col s12 m6 l4">
                                <div className="card green darken-4 white-text center-align">
                                    <div className="card-content">
                                        <span className="card-title">Dolar Oficial <span className="variacion">{this.state.dolaroficial.variacion}</span></span>
                                        <div className="row">
                                            <div className="col 6">
                                                <h4 className="titulo-dolar">Compra</h4>
                                                <p className="valor-dolar">{this.state.dolaroficial.compra}</p>
                                            </div>
                                            <div className="col 6">
                                                <h4 className="titulo-dolar">Venta</h4>
                                                <p className="valor-dolar">{this.state.dolaroficial.venta}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* //Dolar Blue */}
                            <div className="col s12 m6 l4">
                                <div className="card blue darken-4 white-text center-align">
                                    <div className="card-content">
                                        <span className="card-title">Dolar Blue <span className="variacion">{this.state.dolarblue.variacion}</span></span>
                                        <div className="row">
                                            <div className="col s6">
                                                <h4 className="titulo-dolar">Compra</h4>
                                                <p className="valor-dolar">{this.state.dolarblue.compra}</p>
                                            </div>
                                            <div className="col s6">
                                                <h4 className="titulo-dolar">Venta</h4>
                                                <p className="valor-dolar">{this.state.dolarblue.venta}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* //Dolar CCL */}
                            <div className="col s12 m6 l4">
                                <div className="card green white-text center-align">
                                    <div className="card-content">
                                        <span className="card-title">Dolar CCL <span className="variacion">{this.state.dolarccl.variacion}</span></span>
                                        <div className="row">
                                            <div className="col s6">
                                                <h4 className="titulo-dolar">Compra</h4>
                                                <p className="valor-dolar">{this.state.dolarccl.compra}</p>
                                            </div>
                                            <div className="col s6">
                                                <h4 className="titulo-dolar">Venta</h4>
                                                <p className="valor-dolar">{this.state.dolarccl.venta}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* //Dolar Bolsa */}
                            <div className="col s12 m6 l4">
                                <div className="card yellow darken-4 white-text center-align">
                                    <div className="card-content">
                                        <span className="card-title">Dolar Bolsa <span className="variacion">{this.state.dolarbolsa.variacion}</span></span>
                                        <div className="row">
                                            <div className="col s6">
                                                <h4 className="titulo-dolar">Compra</h4>
                                                <p className="valor-dolar">{this.state.dolarbolsa.compra}</p>
                                            </div>
                                            <div className="col s6">
                                                <h4 className="titulo-dolar">Venta</h4>
                                                <p className="valor-dolar">{this.state.dolarbolsa.venta}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* //Bitcoin */}
                            <div className="col s12 m6 l4">
                                <div className="card yellow center-align">
                                    <div className="card-content">
                                        <span className="card-title">Bitcoin <span className="variacion">{this.state.bitcoin.variacion}</span></span>
                                        <div className="row">
                                            <div className="col s6">
                                                <h4 className="titulo-dolar">Compra</h4>
                                                <p className="valor-dolar">{this.state.bitcoin.compra}</p>
                                            </div>
                                            <div className="col s6">
                                                <h4 className="titulo-dolar">Venta</h4>
                                                <p className="valor-dolar">{this.state.bitcoin.venta}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* //Dolar Turista */}
                            <div className="col s12 m6 l4">
                                <div className="card blue darken-2 white-text">
                                    <div className="card-content center-align">
                                        <span className="card-title">Dolar Turista <span className="variacion">{this.state.dolarturista.variacion}</span></span>
                                        <div className="row">
                                            <div className="col s12">
                                                <h4 className="titulo-dolar">Venta</h4>
                                                <p className="valor-dolar">{this.state.dolarturista.venta}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* //Dolar Promedio */}
                            <div className="col s12 m6 l6">
                                <div className="card green darken-2 white-text">
                                    <div className="card-content center-align">
                                        <span className="card-title">Dolar Promedio</span>
                                        <div className="row">
                                            <div className="col s6">
                                                <h4 className="titulo-dolar">Compra</h4>
                                                <p className="valor-dolar">{this.state.dolarpromedio.compra}</p>
                                            </div>
                                            <div className="col s6">
                                                <h4 className="titulo-dolar">Venta</h4>
                                                <p className="valor-dolar">{this.state.dolarpromedio.venta}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* //Riesgo Pais */}
                            <div className="col col s12 m6 l6">
                                <div className="card  blue darken-1 center-align white-text">
                                    <div className="card-content">
                                        <span className="card-title">Riesgo Pais <span className="variacion">{this.state.riesgopais.variacion}</span></span>
                                        <div className="row">
                                            <div className="col s12">
                                                <h4 className="titulo-dolar">Valor</h4>
                                                <p className="valor-dolar">{this.state.riesgopais.valor}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    }


            </div>
        )
    }
}