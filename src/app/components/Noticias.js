import React, { Component } from 'react';

export default class Noticias extends Component {
    constructor() {
        super();
        this.state = {
            noticias: ["",""],
            noticiasLoad: "Loading"
        }
        this.fetchNoticias = this.fetchNoticias.bind(this);
    }
    fetchNoticias() {
        fetch('https://api.jornalia.net/api/v1/articles?apiKey=2999c4958d2f43f3bb385a98026dc4c3&search=d%C3%B3lar')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    noticias: data.articles.slice(0, 3),
                    noticiasLoad: "Done"
                })
            })
    }
    componentDidMount() {
        this.fetchNoticias();
    }
    render() {
        return (
            <div className="section scrollspy" id="noticias">
                <h2>Noticias</h2>
                <div className="row">

                    {this.state.noticiasLoad==="Loading"&&
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

                    {this.state.noticiasLoad==="Done"&&
                    this.state.noticias.map(noticia => {
                        return(
                            <div className="col s12 m4" data-aos="fade-right">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={noticia.imageUrl} />
                                        <span className="card-title titulo-noticia">{noticia.title}</span>
                                        <a href={noticia.sourceUrl} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">chevron_right</i></a>
                                    </div>
                                    <div className="card-content">
                                        <p>{noticia.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}