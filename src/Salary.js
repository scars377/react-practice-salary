import React, { Component } from 'react';

class Salary extends Component {
  state = {
    month: 0,
    startTime: Date.now(),
    currentTime: Date.now(),
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentTime: Date.now(),
      });
    }, 100);
  }

  onChangeMonth = (e) => {
    this.setState({
      month: parseInt(e.target.value, 10),
    });
  };
  render() {
    const { month, startTime, currentTime } = this.state;
    const hour = month / 240;
    const minute = hour / 60;
    const second = minute / 60;
    const time = (currentTime - startTime) / 1000;
    return (
      <div>
        <label>月薪</label>
        <input
          type="number"
          value={month}
          onChange={this.onChangeMonth}
        />
        <br />
        <label>時薪</label>
        <input type="number" value={hour.toFixed(2)} />
        <br />
        <label>分薪</label>
        <input type="number" value={minute.toFixed(2)} />
        <br />
        <label>秒薪</label>
        <input type="number" value={second.toFixed(2)} />
        <br />
        <label>經過時間</label>
        <span>{time.toFixed(1)}</span>
        <br />
        <label>偷取薪水</label>
        <span>{(time * second).toFixed(2)}</span>
      </div>
    );
  }
}

export default Salary;
