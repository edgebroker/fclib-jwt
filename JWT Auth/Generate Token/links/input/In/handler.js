function handler(In) {

    var clone = stream.create().message().copyMessage(In);

    var id = this.props["id"];
    var token = this.authToken.fromId(id);
    clone.property("token").set(token);

    this.executeOutputLink("Out", clone);
}