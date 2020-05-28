import React, { Component } from 'react'

export default class Admin extends Component {
  constructor(props) {
    super(props);

    //Khai bao status va model de update du lieu
    this.state = {
      status: 0,
      model: "",
    }
  }

  componentDidMount() {
    //Trong phan nay se goi API de lay data
    //Cu moi 2s lai lay data 1 lan
    //Kiem tra xem co phai dung la vua tu trang Home qua day khong?
    const {startTrain} = this.props;
    if (startTrain) {
        //Neu dung, call api lay status
        this.getStatus = setInterval(() => {
            const newStatus = this.state.status + 1;

            //Update data
            this.setState({
                status: newStatus
            })

            //Call api lay model
            if (newStatus >= 3) {
                const newModel = "new Model no:" + newStatus;

                //Update data
                this.setState({
                    model: newModel
                })
            }
            //Khi ma train xong roi, thi khu cai nay di
            if (newStatus === 5) {

                //Huy tac vu lay data
                clearInterval(this.getStatus);

                //Call back lai cho thang kia biet la tao huy roi nhe
                this.props.callBack();
            }
        }, 1000)

        //Call api lay model

    }
  }

  componentWillUnmount() {
    //Khi chuyen trang thi minh cung huy luon
    if (this.getStatus) {
      clearInterval(this.getStatus);
    }
  }

  onClick = () => {
    this.setState({
      started: false
    })
    console.log("onClicked")
  }

  render() {
    const {back} = this.props;
    return (
      <div>
        <h1>Display status: {this.state.status}</h1>
        <h1>Display model: {this.state.model}</h1>
        <button onClick={back}>Back to Home Page</button>
      </div>
    )
  }
}
