import 'aurelia-polyfills';
import 'aurelia-loader-webpack';

// disable stacktrace limit so we do not loose any error information
Error.stackTraceLimit = Infinity;

// load and run tests:
const testModuleContexts = loadTestModules();
runTests(testModuleContexts);

function loadTestModules() {
    const srcContext = require.context(
        // directory:
        '../src',
        // recursive:
        true,
        // tests in /src folder regex:
        /\.spec\.[tj]s$/igm
    );

    const testContext = require.context(
        // directory:
        './unit',
        // recursive:
        true,
        // tests in ./unit folder regex:
        /\.spec\.[tj]s$/igm
    );

    return [srcContext, testContext];
}

function runTests(contexts) {
    contexts.forEach(requireAllInContext);
}

function requireAllInContext(requireContext) {
    return requireContext.keys().map(requireContext);
}
