import React from "react";
function HomeComponent(){
    return(
        <div >
                Hello world
                <div className="card vien" style={{ width: "18rem" }}>
                <img className="card-img-top" style={{width:"100%"}} src="https://th.bing.com/th/id/OIP.NPKgsDyStE3WtvrLXwKAzgHaFI?w=253&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                    Go somewhere
                    </a>
                </div>
            </div>
        </div>
    );
}
export default HomeComponent;