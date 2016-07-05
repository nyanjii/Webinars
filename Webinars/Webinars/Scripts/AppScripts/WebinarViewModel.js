WebinarViewModel = function () {
    this.webinarCollection = WebinarCollectionViewModel
}

WebinarCollectionViewModel = function () {
    this.webinars = ko.observableArray();
}


$(document).ready(function () {
    ko.applyBindings(WebinarViewModel);
    $.get('/Webinar/GetAllWebinars', function (data) {
        ko.mapping.fromJS(data, webinars);
    });

});