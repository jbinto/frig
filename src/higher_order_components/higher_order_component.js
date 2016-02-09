import delegatesPublicFunctions from "./delegates_public_functions.js"

/*
 * Returns a higher order function version of the component.
 *
 * Adds a ComponentClass() function and an opts() function to the component
 * for accessing the child component and the options argument to the higher
 * order function.
 */
module.exports = function() {
  return function(hocClass) {
    return function(opts) {
      return function(ComponentClass) { //eslint-disable-line react/display-name
        /*
         * Creating a subclass of the higher order component with getters for
         * the component class and opts.
         */
        return (
          @delegatesPublicFunctions(opts)
          class extends hocClass {
            static originalClass = (
              ComponentClass.originalClass || ComponentClass
            )

            ComponentClass() {
              return ComponentClass
            }

            opts() {
              return opts
            }
          }
        )
      }
    }
  }
}