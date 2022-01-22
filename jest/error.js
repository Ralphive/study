function myError() {
    this.getError = (err) => {
        return err;
    };
}


module.exports = new myError();
