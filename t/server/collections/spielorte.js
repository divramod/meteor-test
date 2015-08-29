Meteor.publish('Spielorte', function() {
    return Spielorte.find({});
});

Spielorte.allow({
    insert: function() {
        return true;
    },
    update: function() {
        return true;
    },
    remove: function() {
        return true;
    }
});
