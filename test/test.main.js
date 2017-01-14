var tests = []
for (var file in window.__karma__.files) {
    if (!file.includes('node_modules')) {
        if (/spec\.js$/.test(file)) {
            tests.push(file)
        }
    }
}

requirejs.config({
    baseUrl: '/base',
    deps: tests,
    callback: window.__karma__.start
});
