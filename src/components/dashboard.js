import React, {Component} from "react";
const axios = require('axios');

class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            last_update: null,
            local_cases: null,
            local_deaths: null,
            local_recovered: null,
            global_cases: null,
            global_deaths: null,
            global_recovered: null,
            hospital_data: null


        }
    }

    componentDidMount() {

        axios.get('https://www.hpb.health.gov.lk/api/get-current-statistical')
            .then( (response)=> {
                // handle success
                console.log(response);

                this.setState({last_update: response.data.data.update_date_time});
                this.setState({local_cases: response.data.data.local_total_cases});
                this.setState({local_deaths: response.data.data.local_deaths});
                this.setState({local_recovered: response.data.data.local_recovered});
                this.setState({global_cases: response.data.data.global_total_cases});
                this.setState({global_deaths: response.data.data.global_deaths});
                this.setState({global_recovered: response.data.data.global_recovered});
                this.setState({hospital_data: response.data.data.hospital_data});

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }


    render() {

        console.log(this.state.hospital_data);
        let hospitallist;
        if (this.state.hospital_data !== null){
            hospitallist= this.state.hospital_data.map((h)=> {
                return(
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <p>{ h.hospital.name_si }</p>
                                    <p>{ h.hospital.name }</p>
                                </div>
                                <div className="card-body">
                                    <h4>{ h.treatment_local }</h4>
                                    <p>Sri Lankans on Treatment/observation</p>
                                    <h4>{ h.treatment_foreign}</h4>
                                    <p>Foreigners on Treatment/observation</p>
                                </div>
                            </div>
                            <br/>
                        </div>
                        <div className="col-md-3"></div>
                    </div>

                )
            });
        }

        //Convert updated time to YYYY-MM-dd format
        let t = new Date(this.state.last_update);
        let updatetime = t.toString();




        return(
            <div className="container">
                <p>Last Update : { updatetime }</p>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <h4>GLOBAL SUMMARY</h4>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-white bg-warning mb-3">
                            <div className="card-body">
                                <i className="fas fa-first-aid"></i>
                                <h5 className="card-title">TOTAL CASES</h5>
                                <h5>{ this.state.global_cases }</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-white bg-success mb-3">
                            <div className="card-body">
                                <i className="fas fa-walking"></i>
                                <h5 className="card-title">RECOVERED AND DISCHARGED</h5>
                                <h5>{ this.state.global_recovered }</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-white bg-danger mb-3">
                            <div className="card-body">
                                <i className="fas fa-bed"></i>
                                <h5 className="card-title">DEATHS</h5>
                                <h5>{ this.state.global_deaths }</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <h4>LOCAL SUMMARY</h4>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-white bg-warning mb-3">
                            <div className="card-body">
                                <i className="fas fa-first-aid"></i>
                                <h5 className="card-title">TOTAL CASES</h5>
                                <h5>{ this.state.local_cases }</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-white bg-success mb-3">
                            <div className="card-body">
                                <i className="fas fa-walking"></i>
                                <h5 className="card-title">RECOVERED AND DISCHARGED</h5>
                                <h5>{ this.state.local_recovered }</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-white bg-danger mb-3">
                            <div className="card-body">
                                <i className="fas fa-bed"></i>
                                <h5 className="card-title">DEATHS</h5>
                                <h5>{ this.state.local_deaths }</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <h4>CURRENT STATUS OF THE HOSPITALS</h4>
                <br/>
                <div>
                    { hospitallist }
                </div>
            </div>

        );
    }
}

export default Dashboard;

