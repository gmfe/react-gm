import React, {PropTypes} from 'react';
import Util from 'gm-util';

class Dropper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDragActive: false,
            isWX: Util.is.weixin()
        };
        this.onClick = ::this.onClick;
        this.onDragEnter = ::this.onDragEnter;
        this.onDragLeave = ::this.onDragLeave;
        this.onDragOver = ::this.onDragOver;
        this.onDrop = ::this.onDrop;
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

        var dataTransferItems = e.dataTransfer && e.dataTransfer.items ? e.dataTransfer.items : [];

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

        const {multiple, onDrop, onDropAccepted, onDropRejected} = this.props;

        this.enterCounter = 0;

        this.setState({
            isDragActive: false,
            isDragReject: false
        });

        var droppedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files;
        var max = multiple ? droppedFiles.length : 1;
        var files = [];

        for (var i = 0; i < max; i++) {
            var file = droppedFiles[i];
            file.preview = window.URL.createObjectURL(file);
            files.push(file);
        }

        if (onDrop) {
            onDrop(files, e);
        }

        if (this.allFilesAccepted(files)) {
            if (onDropAccepted) {
                onDropAccepted(files, e);
            }
        } else {
            if (onDropRejected) {
                onDropRejected(files, e);
            }
        }
    }

    onClick() {
        this.open();
    }

    open() {
        var fileInput = this.refs.fileInput;
        fileInput.value = null;
        fileInput.click();
    }

    render() {
        const {className, children, accept, multiple} = this.props;
        const cn = className ? className : 'gm-dropper-default';

        return (
            <div className="gm-dropper">
                <div className={cn}
                     onClick={this.onClick}
                     onDragEnter={this.onDragEnter}
                     onDragOver={this.onDragOver}
                     onDragLeave={this.onDragLeave}
                     onDrop={this.onDrop}>{children}</div>
                {this.state.isWX ? <input
                    type="file"
                    ref="fileInput"
                    className="gm-dropper-input"
                    accept={accept}
                    onChange={this.onDrop}
                /> : <input
                    type="file"
                    ref="fileInput"
                    className="gm-dropper-input"
                    multiple={multiple}
                    accept={accept}
                    onChange={this.onDrop}
                />}
            </div>
        );
    }
}

Dropper.defaultProps = {
    multiple: false
};

Dropper.propTypes = {
    onDrop: PropTypes.func,
    onDropAccepted: PropTypes.func,
    onDropRejected: PropTypes.func,
    onDragEnter: PropTypes.func,
    onDragLeave: PropTypes.func,

    multiple: PropTypes.bool,
    accept: PropTypes.string,

    className: PropTypes.string
};

export default Dropper;
