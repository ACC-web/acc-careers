import React from 'react';
import ReactTypeformEmbedScript from './ReactTypeformEmbed/ReactTypeformEmbedScript.js';

class TypeFormModal extends React.Component {
    constructor(props) {
        super(props);
        this.openForm = this.openForm.bind(this);
    }

    openForm() {
        this.typeformEmbed.typeform.open();
    }

    render() {
       console.log( `heya this ${this.props.link}` )

        return (
            <div className="ExamplePopup">
                <ReactTypeformEmbedScript
                    popup
                    autoOpen={false}
                    // url={this.props.link}
                    url="https://australianchristiancollege.typeform.com/to/O7DT14"
                    hideHeaders
                    hideFooter
                    buttonText="Submit Application"
                    style={{ top: 100 }}
                    ref={tf => {
                        this.typeformEmbed = tf;
                    }}
                />
                <button className="btn" onClick={this.openForm} style={{ cursor: 'pointer', marginTop: "2rem" }}>
                    APPLY HERE
                </button>
            </div>
        );
    }
}

export default TypeFormModal;
