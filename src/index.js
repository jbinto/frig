import Form from "./components/form.js"
import Input from "./components/input.js"
import Submit from "./components/submit.js"
import FormErrorList from "./components/form_error_list.js"
import Fieldset from "./components/fieldset.js"
import FieldsetText from "./components/fieldset_text.js"
import ValueLinkedSelect from "./components/value_linked_select.js"
import util from "./util.js"
import typeMapping from "./type_mapping.js"

const HigherOrderComponents = {
  Boolean: require("./higher_order_components/boolean.js"),
  Focusable: require("./higher_order_components/focusable.js"),
}

// Setter and getter for the Frig default theme
function defaultTheme(theme) {
  if (theme == null) return Form.defaultProps.theme
  if (theme.component == null) throw "Invalid theme. Expected an object"
  Form.originalClass.defaultProps.theme = theme
  Input.originalClass.defaultProps.theme = theme
}

export default {
  defaultTheme,
  Form,
  Input,
  Submit,
  FormErrorList,
  Fieldset,
  FieldsetText,
  ValueLinkedSelect,
  HigherOrderComponents,
  util,
  typeMapping,
}