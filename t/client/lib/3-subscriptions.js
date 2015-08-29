//console.log("3-subscriptions.js");
// subscribe to the two collections we use
if (Meteor.status().connected) {
    Meteor.subscribe('Projects');
    Meteor.subscribe('Tasks');
    Meteor.subscribe('Spielorte');
}
