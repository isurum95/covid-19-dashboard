import React from 'react';

function News() {
    return(
        <div className="container">
            <br/>
                <h4>SOCIAL MEDIA</h4>
            <br/>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWHO%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=198787293900454"
                        style={{border:'none', overflow:'hidden'}}
                        width="100%" height="500" scrolling="no" frameBorder="0"
                        allowTransparency="true" allow="encrypted-media"></iframe>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4">
                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhpbsrilanka%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=198787293900454"
                        style={{border:'none', overflow:'hidden'}}
                        width="100%" height="500" scrolling="no" frameBorder="0"
                        allowTransparency="true" allow="encrypted-media"></iframe>
                </div>
                <div className="col-md-1"></div>
            </div>
            <br/>
        </div>
    );

}

export default News;
