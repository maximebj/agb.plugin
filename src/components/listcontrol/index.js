const { Component, Fragment } = wp.element

export default class ListControl extends Component {

  state = {
    value: this.props.value
  }

  render() {

    const { value, options, onChange } = this.props

    return (
      <Fragment>
        <input 
          list="list" 
          value={this.state.value}
          onChange={ (e) => this.setState( { value: e.target.value } ) }
          onBlur={ (e) => onChange( e.target.value ) }
        />
        <dataList id="list">
          { options.map( option => {
            return (
              <option
                value={ option.label }
              />
            )
          } ) }
        </dataList>
      </Fragment>
    )
  }
}