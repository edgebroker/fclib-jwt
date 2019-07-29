function handler(In) {
    var clone = stream.create().message().copyMessage(In);

    var token = subProps(In, this.props["token"]);

    var id = this.authToken.setToken(token).decodeJwt().getId();
    clone.property("id").set(id);
    this.executeOutputLink("Out", clone);

    function subProps(msg, value) {
        var result = value;
        msg.properties().forEach(function (p) {
            result = replaceAll(result, "\\{" + p.name() + "\\}", p.value().toString());
        });
        return result;
    }
}