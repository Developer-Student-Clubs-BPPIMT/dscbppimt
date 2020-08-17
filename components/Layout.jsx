import NavBar from './NavBar';
import React, { Component } from 'react';
import Head from 'next/head';

class Layout extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <style jsx>{`

                        *{
                            font-family: "roboto";
                            
                        }
                    `}
                </style>


                <Head>
                    <title>DSC BPPIMT</title>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

                </Head>
                <NavBar />

                

                { this.props.children }
            </div>
        );
    }
}

export default Layout;