import React, {Compenont} from 'react'

class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: '',
      city: '',
      temperature: '',
    }

  }

  getCity() {
    var xhr1 = new XMLHttpRequest()
    var log = console.log.bind(console)
    xhr1.open('GET', "//weixin.jirengu.com/weather?key=study_javascript_in_jirengu.com", false)

    var _this = this
    xhr1.onreadystatechange = function () {
      if (xhr1.readyState === 4 && (xhr1.status === 200 || xhr1.status === 304)) {
        var data = JSON.parse(xhr1.response)
        log(data)
        _this.setState({
          city: data.weather[0].city_name,
          weather: data.weather[0].now.text,
          temperature: data.weather[0].now.temperature,
        })
      }
    }
    xhr1.send()
  }


  componentDidMount() {
    this.getCity()
  }

  render() {
    return (
      <div className={"weather"}>
        <p className={"city"}>{this.state.city}</p>
        <p className={"wea"}>{this.state.weather}</p>
        <p className={"temperature"}>{this.state.temperature}℃</p>
      </div>
    )
  }
}

export default Weather