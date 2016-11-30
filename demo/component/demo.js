import React from 'react';
import {Modal} from '../../src/index';

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    handleModal() {
        this.setState({
            show: !this.state.show
        });
    }

    handleModalStatic() {
        Modal.render({
            show: true,
            children: <button>adf</button>,
            onHide: () => {
                Modal.render({
                    show: false
                });
            }
        });
    }

    render() {
        return (
            <div>
                <button onClick={::this.handleModal}>modal render</button>
                <button onClick={::this.handleModalStatic}>modal static render</button>

                <Modal
                    show={this.state.show}
                    onHide={::this.handleModal}
                >
                    <button>hahahaha</button>
                </Modal>
            </div>
        );
    }
}

export default Demo;