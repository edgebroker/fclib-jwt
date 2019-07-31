function handler(In) {

    var clone = stream.create().message().copyMessage(In);
    var id = subProps(In, this.props["id"]);

    try {
        var token = this.authToken.fromId(id);
        clone.property("token").set(token);
    } catch (e) {
        // invalid id
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