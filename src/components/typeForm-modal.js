import React from 'react';
import ReactTypeformEmbed from './ReactTypeformEmbed/ReactTypeformEmbed';

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
                <ReactTypeformEmbed
                    popup
                    autoOpen={false}
                    url={this.props.link}
                    hideHeaders
                    hideFooter
                    buttonText="Go!"
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
