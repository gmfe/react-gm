import React from 'react';

class Theme extends React.Component {
    render() {
        return (
            <div className="theme">
                <div>
                    <button className="btn btn-default">btn-default</button>
                    <button className="btn btn-primary">btn-primary</button>
                    <button className="btn btn-success">btn-success</button>
                    <button className="btn btn-info">btn-info</button>
                    <button className="btn btn-warning">btn-warning</button>
                    <button className="btn btn-danger">btn-danger</button>
                    <button className="btn btn-link">btn-link</button>
                </div>

                <div>
                    <p className="bg-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    <p className="bg-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                    <p className="bg-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                    <p className="bg-warning">Etiam porta sem malesuada magna mollis euismod.</p>
                    <p className="bg-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
                </div>
            </div>
        );
    }
}

export default Theme;