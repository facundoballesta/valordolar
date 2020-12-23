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
        fetch('https://api.mediastack.com/v1/news?access_key=431b5873489eaeb2a3b7014c34c4df19&categories=business')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    noticias: data.data.slice(0, 3),
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
                                        
                                        {noticia.image===null&&
                                            <img src="img/noimg.jpg" alt=""/>
                                        }
                                        {noticia.image!=null&&
                                            <img src={noticia.image}/>
                                        }
                                        <span className="card-title titulo-noticia">{noticia.title}</span>
                                        <a href={noticia.url} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">chevron_right</i></a>
                                    </div>
                                    <div className="card-content">
                                        <p>{noticia.description.substr(0, 250)}...</p>
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