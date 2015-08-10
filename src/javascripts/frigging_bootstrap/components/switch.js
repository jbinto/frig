var React                                    = require("react")
var cx                                       = require("classnames")

var {errorList, sizeClassNames, formGroupCx} = require("../util.js")

var {div, span, label, input}                = React.DOM

/*
 * Example 1) Using a switch for one input:
 *
 *   data = allIsWell: true
 *
 *   this.frig ref: "ex1", data: data ->
 *     f.input "allIsWell", template: "switch"

 * Example 2) Using switches as the default for all boolean inputs in a form:
 *
 *   data = allIsWell: true
 *
 *   this.frig ref: "ex2", data: data, typeMapping: {boolean: "switch"}, ->
 *     f.input "allisWell"

 * Example 3) Using switches as the default for all boolean inputs in all forms:
 *
 *   Frig.typeMapping.boolean.template = "switch"
 *
 *   data = allIsWell: true
 *
 *   this.frig ref: "ex2", data: data, ->
 *     f.input "allisWell"

 * This optional add-on component depends on BootstrapSwitch and jQuery
*/

export default class extends React.Component {

  static displayName = "Frig.friggingBootstrap.Switch"

  static defaultProps = Object.assign(require("../default_props.js"), {
    onColor:  "primary",
    onText:   "ON",
    offColor: "default",
    offText:  "OFF",
  })

  constructor(props) {
    super(props)

    this.state = {
      errors: undefined,
      checked: true,
    }
  }

  isChecked() {
    return this.state.checked
  }

  _inputHtml() {
    return div({
        className: `bootstrap-switch-container`,
        ref: "switchContainer",
        onClick: this._onClick.bind(this),
      },
      span({className: `bootstrap-switch-handle-on bootstrap-switch-${this.props.onColor}`}, this.props.onText),
      span({className: `bootstrap-switch-label`}, "\u00a0"),
      span({className: `bootstrap-switch-handle-off bootstrap-switch-${this.props.offColor}`}, this.props.offText),
    )
  }

  _onClick() {
    React.findDOMNode(this.refs.switchContainer).style.marginLeft = (this.state.checked === true) ? "-50px" : "0"
    this.setState({ checked: !this.state.checked })
  }

  _labelContainerCx() {
    return cx({
      "pull-left": this.props.layout === "horizontal",
    })
  }

  _inputContainerCx() {
    return cx({
      "pull-right": this.props.layout === "horizontal",
      "controls": this.props.layout === "vertical",
    })
  }

  _label() {
    if (this.props.label === null) return ""
    return label(this.props.labelHtml, this.props.label)
  }

  _errorList() {
    if (this.state.errors === null) return ""
    return errorList(this.state.errors)
  }

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: this._labelContainerCx()},
        this._label(),
      ),
      div({className: this._inputContainerCx()},
        div({className: `bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-on bootstrap-switch-id-switch-state bootstrap-switch-animate`},
          this._inputHtml(),
          this._errorList(),
        )
      )
    )
  }

}
