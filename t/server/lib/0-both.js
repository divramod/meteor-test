if (Meteor.isServer) {
    //console.log("both server");
}

if (Meteor.isClient) {
    //console.log("both client");
}

Projects = new Mongo.Collection("Projects");
//if (Meteor.isCordova) Ground.Collection(Projects);

Tasks = new Mongo.Collection("Tasks");
//if (Meteor.isCordova) Ground.Collection(Tasks);

Spielorte = new Mongo.Collection("Spielorte");
//if (Meteor.isCordova) Ground.Collection(Spielorte);

Meteor.methods({
    addSpielort: function(spielort) {
        // Make sure the user is logged in before inserting a task
        //if (!Meteor.userId()) {
        //throw new Meteor.Error('not-authorized');
        //}
        Spielorte.insert({
            name: spielort.name,
            strasse: spielort.strasse,
            ort: spielort.ort,
            plz: spielort.plz,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username
        });
    },
    updateSpielort: function(spielort) {
        console.log("update spielort");
        var id = spielort._id;
        delete spielort._id;
        console.log(id);
        var result = Spielorte.update({
            _id: id
        }, {
            $set: spielort
        });
        return result;
    },
    deleteSpielort: function(spielortId) {
        var spielort = Spielorte.findOne(spielortId);
        var result = Spielorte.remove(spielortId);
        return result;
    },
    getSpielort: function(spielortId) {
        var spielort = Spielorte.findOne(spielortId);
        return spielort;
    }
});
