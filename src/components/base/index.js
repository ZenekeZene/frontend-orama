import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

// Path: The relative path of the components folder
// Whether or not to look in subfolders
// The regular expression used to match base component filenames
const requireComponent = require.context(
  "./",
  false,
  /(Base|The)[A-Z]\w+\.(vue|js)$/
);

export default {
  install(Vue) {
    requireComponent.keys().forEach(fileName => {
      // Get component config
      const componentConfig = requireComponent(fileName);

      // Get PascalCase name of component
      const componentName = upperFirst(
        camelCase(
          // Strip the leading `./` and extension from the filename
          fileName.replace(/^\.\/(.*)\.\w+$/, "$1")
        )
      );

      // Register component globally
      Vue.component(
        componentName,
        // Look for the component options on `.default`, which will
        // exist if the component was exported with `export default`,
        // otherwise fall back to module's root.
        componentConfig.default || componentConfig
      );
    });
  }
};
