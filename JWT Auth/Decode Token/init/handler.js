function handler() {
    var secret = this.props["secret"];
    var issuer = this.props["issuer"];
    var AuthToken = Java.type("io.edgebroker.flowdirector.jwt.AuthToken");
    this.authToken = new AuthToken(secret, issuer);
}