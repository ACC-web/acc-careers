import React, { Component } from 'react'
import * as typeformEmbed from '@typeform/embed'

class Typeform extends Component({ link }){

    componentDidMount(){
        // url = link
        // console.log( {link} )
        const popup1 = typeformEmbed.makePopup(
            '{link}',
            {
                mode: 'popup',
                autoClose: 3000,
                hideHeaders: true,
                hideFooters: true,
                onSubmit: function() {
                    console.log('Job application successfully submitted #64hf')
                }
            }
        )
        document.getElementById('bt-popup').addEventListener('click', function () {
            popup1.open();
        });
    };

    render(){

        return (
            <div style={{ marginTop: "2rem" }}>
                <button id="bt-popup">APPLY HERE</button>
            </div>
        )
    }
}

export default Typeform;