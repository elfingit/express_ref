module.exports = (controller_path) => {

    let path = controller_path;

    this.instanceController = (name) => {

        return require(path + '/' + name + '.js')();

    };

    this.invokeAction = (actionPath, req, res) => {
        let parts = actionPath.split('@');
        let controllerInstance = this.instanceController(parts[0]);

        if (Reflect.has(controllerInstance, parts[1])) {

            let action = Reflect.get(controllerInstance, parts[1]);
            action.call(null, req, res);

        } else {
            res.send('Controller ' + parts[0] + ' does not have method ' + parts[1])
        }
    };

    return this;

};