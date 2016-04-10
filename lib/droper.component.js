import React from 'react';
import Util from 'gm-util';

class Droper extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onClick = this.onClick.bind(this);
        this.onDragEnter = this.onDragEnter.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);

        this.state = {
            isDragActive: false,
            isWX: Util.is.weixin()
        };
    }

    componentDidMount() {
        this.enterCounter = 0;
    }

    accept(file, acceptedFiles) {
        if (file && acceptedFiles) {
            const acceptedFilesArray = acceptedFiles.split(',');
            const fileName = file.name || '';
            const mimeType = file.type || '';
            const baseMimeType = mimeType.replace(/\/.*$/, '');

            return acceptedFilesArray.some(type => {
                const validType = type.trim();
                if (validType.charAt(0) === '.') {
                    return fileName.toLowerCase().endsWith(validType.toLowerCase());
                } else if (/\/\*$/.test(validType)) {
                    // This is something like a image/* mime type
                    return baseMimeType === validType.replace(/\/.*$/, '');
                }
                return mimeType === validType;
            });
        }
        return true;

    }

    allFilesAccepted(files) {
        return files.every(file => this.accept(file, this.props.accept));
    }

    onDragEnter(e) {
        e.preventDefault();

        ++this.enterCounter;

        // This is tricky. During the drag even the dataTransfer.files is null
        // But Chrome implements some drag store, which is accesible via dataTransfer.items
        var dataTransferItems = e.dataTransfer && e.dataTransfer.items ? e.dataTransfer.items : [];

        // Now we need to convert the DataTransferList to Array
        var itemsArray = Array.prototype.slice.call(dataTransferItems);
        var allFilesAccepted = this.allFilesAccepted(itemsArray);

        this.setState({
            isDragActive: allFilesAccepted,
            isDragReject: !allFilesAccepted
        });

        if (this.props.onDragEnter) {
            this.props.onDragEnter(e);
        }
    }

    onDragOver(e) {
        e.preventDefault();
    }

    onDragLeave(e) {
        e.preventDefault();

        if (--this.enterCounter > 0) {
            return;
        }

        this.setState({
            isDragActive: false,
            isDragReject: false
        });

        if (this.props.onDragLeave) {
            this.props.onDragLeave(e);
        }
    }

    onDrop(e) {
        e.preventDefault();

        // Reset the counter along with the drag on a drop.
        this.enterCounter = 0;

        this.setState({
            isDragActive: false,
            isDragReject: false
        });

        var droppedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files;
        var max = this.props.multiple ? droppedFiles.length : 1;
        var files = [];

        for (var i = 0; i < max; i++) {
            var file = droppedFiles[i];
            file.preview = window.URL.createObjectURL(file);
            files.push(file);
        }

        if (this.props.onDrop) {
            this.props.onDrop(files, e);
        }

        if (this.allFilesAccepted(files)) {
            if (this.props.onDropAccepted) {
                this.props.onDropAccepted(files, e);
            }
        } else {
            if (this.props.onDropRejected) {
                this.props.onDropRejected(files, e);
            }
        }
    }

    onClick() {
        if (!this.props.disableClick) {
            this.open();
        }
    }

    open() {
        var fileInput = this.refs.fileInput;
        fileInput.value = null;
        fileInput.click();
    }

    render() {
        var className = 'gm-droper ';
        className += (this.props.className ? this.props.className : ' gm-droper-default ');

        return (
            <div>
                <div
                    className={className}
                    onClick={this.onClick}
                    onDragEnter={this.onDragEnter}
                    onDragOver={this.onDragOver}
                    onDragLeave={this.onDragLeave}
                    onDrop={this.onDrop}
                >
                    {this.props.children}
                </div>
                {this.state.isWX ? <input
                    type="file"
                    ref="fileInput"
                    className="gm-droper-input"
                    accept={this.props.accept}
                    onChange={this.onDrop}
                /> : <input
                    type="file"
                    ref="fileInput"
                    className="gm-droper-input"
                    multiple={this.props.multiple}
                    accept={this.props.accept}
                    onChange={this.onDrop}
                />}
            </div>
        );
    }
}

Droper.defaultProps = {
    disableClick: false,
    multiple: true
};

Droper.propTypes = {
    onDrop: React.PropTypes.func,
    onDropAccepted: React.PropTypes.func,
    onDropRejected: React.PropTypes.func,
    onDragEnter: React.PropTypes.func,
    onDragLeave: React.PropTypes.func,

    disableClick: React.PropTypes.bool,
    multiple: React.PropTypes.bool,
    accept: React.PropTypes.string
};

export default Droper;
