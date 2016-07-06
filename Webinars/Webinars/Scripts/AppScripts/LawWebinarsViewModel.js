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
    self.chosenWebinar = ko.observable({
        Id: ko.observable("123"),
        Name: ko.observable("sdfrfwf"),
        VideoUrl: ko.observable("https://www.youtube.com/embed/Tv9YoYCKNoE"),
    });
    self.PlayWebinar = function () {
        self.chosenWebinar()
            .Id(this.Id)
            .Name(this.Name)
            .VideoUrl(this.VideoUrl);
    };
    return {
        laws: self.lawsArray,
        webinars: self.webinarsArray,
        getAllLaws: self.GetAllLaws,
        getAllWebinars: self.GetAllWebinarsByLaw,
        webinar: self.chosenWebinar,
        playWebinar: self.PlayWebinar
    };
}()

$(document).ready(function () {
    ko.applyBindings(LawWebinarsViewModel);
});