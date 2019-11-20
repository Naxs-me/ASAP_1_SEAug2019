import React from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.get_time = this.get_time.bind(this);
        this.onLike = this.onLike.bind(this);
        this.state = {
            Problem: JSON.parse(localStorage.getItem("Problem"))
        }
        console.log("Popup Problem");
        console.log(this.state.Problem);
    }

    onLike(e){
        e.preventDefault();
        console.log("like");
        axios.post('http://localhost:4000/like', {id:this.state.Problem["_id"]})
      .then(res => {
          console.log("printf");
        console.log(res.data);
        this.setState({Problem: res.data});
        localStorage.setItem("Problem",JSON.stringify(res.data));
          //console.log(toString(localStorage.getItem("userData")));
    });}

    get_time() {
        var d = new Date();
        var n = d.getTime() / 1000;
        var newDate = new Date(this.state.Problem["TimeStamp"]);
        var newDateSeconds = newDate.getTime() / 1000;
        var difference = n - newDateSeconds;
        var time = "";
        if (difference < 60) {
            time = parseInt(difference / 1).toString();
            time = time.concat(" sec ago");
        }
        else if (difference < 3600) {
            time = parseInt(difference / 60).toString();
            time = time.concat(" min ago");
        }
        else if (difference < 86400) {
            time = parseInt(difference / 3600).toString();
            time = time.concat(" hr ago");
        }
        else if (difference < 2592000) {
            time = parseInt(difference / 86400).toString();
            time = time.concat(" day ago");
        }
        else if (difference < 31536000) {
            time = parseInt(difference / 2592000).toString();
            time = time.concat(" month ago");
        }
        else {
            time = parseInt(difference / 31536000).toString();
            time = time.concat(" year ago");
        }

        return time;
    }


    render() {
        return (
            <div className="backblur">
                <div className='popup'>
                    <div className='popup\_inner'>
                        <div className = "alignend">
                            <Button onClick={this.props.closePopup} variant="outline-light" type="submit" className="buttonend">X</Button>
                        </div>
                        <div className="popup_header">
                            <h3>{`${this.state.Problem["Problem"]}`}</h3>
                            <br/>
                        </div>
                        <br/>
                        <div>
                            <p>
                                {`${this.state.Problem["Problem_desc"]}`}
                            </p>
                        </div>
                        <div>
                            <p>
                                Location: {`${this.state.Problem["Address"]}`}
                            </p>
                        </div>
                        <div>
                            <p>
                            {`${this.get_time()}`}
                            </p>
                        </div>
                        <div>
                            <p>
                                {`${this.state.Problem["Name"]}`}
                            </p>
                        </div>
                        <div className="popup_header"></div>
                        <br/>
                        <div>
                            <Button variant="outline-light" type="submit" id="chb" onClick={this.onLike}>Like {`${this.state.Problem["Like"]}`}</Button>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;