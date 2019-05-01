module.exports = () => {

    this.index = (req, res) => {
        res.send('Hello from action');
    };

    return this;

};