function handler(In) {

    var clone = stream.create().message().copyMessage(In);
    var token = subProps(In, this.props["token"]);

    try {
        var id = this.authToken.setToken(token).decodeJwt().getId();
        clone.property("decoded_auth_token_id").set(id);
    } catch (e) {
        // invalid token
    }

    this.executeOutputLink("Out", clone);

    function subProps(msg, value) {
        var result = value;
        msg.properties().forEach(function (p) {
            result = replaceAll(result, "\\{" + p.name() + "\\}", p.value().toString());
        });
        return result;
    }
}