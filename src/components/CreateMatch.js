import React from 'react';

class CreateMatch extends React.Component {
    state = { name: '', max: '', prize: '', kill: '', type: '', version: '', map: '', fee: '', imgPreview: null, valid: false };

    previewImage = (event) => {
        this.setState({ imgPreview: URL.createObjectURL(event.target.files[0]) })
    }

    handleInput = (e) => {
        switch (e.type) {
            case 'name':
                this.setState({ name: e.value });
                break;
            case 'max':
                this.setState({ max: e.value });
                break;
            case 'prize':
                this.setState({ prize: e.value });
                break;
            case 'kill':
                this.setState({ kill: e.value });
                break;
            case 'type':
                this.setState({ type: e.value });
                break;
            case 'version':
                this.setState({ version: e.value });
                break;
            case 'map':
                this.setState({ map: e.value });
                break;
            case 'fee':
                this.setState({ fee: e.value });
                break
            default:
                break;
        }

        if(this.state.name!==''&&this.state.max!==''&&this.state.prize!==''&&this.state.type!==''&&this.state.version!==''&&this.state.kill!==''&&this.state.map!=='') {
            this.setState({valid:true});
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="card" style={{ padding: 10, margin: 10 }}>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={this.state.name}
                            onChange={(e) => this.handleInput({ type: 'name', value: e.target.value })}
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label htmlFor="entry">Max Entry</label>
                            <input
                                type="number"
                                className="form-control"
                                id="entry"
                                value={this.state.max}
                                onChange={(e) => this.handleInput({ type: 'max', value: e.target.value })}
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="prize">Win Prize</label>
                            <input
                                type="number"
                                className="form-control"
                                id="prize"
                                value={this.state.prize}
                                onChange={(e) => this.handleInput({ type: 'prize', value: e.target.value })}
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="kill">Per kill</label>
                            <input
                                type="number"
                                className="form-control"
                                id="kill"
                                value={this.state.kill}
                                onChange={(e) => this.handleInput({ type: 'kill', value: e.target.value })}
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="type">Type</label>
                            <input
                                type="text"
                                className="form-control"
                                id="type"
                                value={this.state.type}
                                onChange={(e) => this.handleInput({ type: 'type', value: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label htmlFor="version">Version</label>
                            <input
                                type="text"
                                className="form-control"
                                id="version"
                                value={this.state.version}
                                onChange={(e) => this.handleInput({ type: 'version', value: e.target.value })}
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="map">Map</label>
                            <input
                                type="text"
                                className="form-control"
                                id="map"
                                value={this.state.map}
                                onChange={(e) => this.handleInput({ type: 'map', value: e.target.value })}
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="fee">Entry Fee</label>
                            <input
                                type="number"
                                className="form-control"
                                id="fee"
                                value={this.state.fee}
                                onChange={(e) => this.handleInput({ type: 'fee', value: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-3">
                            <button
                                className="btn btn-primary"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('selectFile').click()
                                }
                                }
                            >
                                Select Image
                            </button>
                            <input type="file" style={{ visibility: "hidden" }} onChange={this.previewImage} id="selectFile" />
                        </div>
                        <div className="col-md-9">
                            {this.state.imgPreview ? <img src={this.state.imgPreview} alt="preview" style={{ height: 150, width: 200 }} /> : null}
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" disabled={!this.state.valid} className="btn btn-primary">Create a Match</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateMatch;