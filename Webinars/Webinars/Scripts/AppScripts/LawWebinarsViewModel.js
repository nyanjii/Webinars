LawWebinarsViewModel = function () {
    var self = this;
    self.lawsArray = ko.observableArray();
    self.currentWebinarsArray = ko.observableArray();
    self.GetAllLaws = function () {
        $.get('/Law/GetAllLaws', function (data) {
            var res = ko.mapping.fromJS(data)
            self.lawsArray(res());
        });
    };
    self.GetAllWebinarsByLaw = function () {
        $.get('/Home/GetWebinarsByLaw', {id: this.Id}, function (data) {
            var res = ko.mapping.fromJS(data)
            self.currentWebinarsArray(res());
        });
    };
    return {
        laws: self.lawsArray,
        webinars: self.webinarsArray,
        getAllLaws: self.GetAllLaws,
        getAllWebinars: self.GetAllWebinarsByLaw
    };
}()

$(document).ready(function () {
    ko.applyBindings(LawWebinarsViewModel);
    LawWebinarsViewModel.getAllLaws();
});