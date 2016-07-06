LawWebinarsViewModel = function () {
    var self = this;
    self.lawsArray = ko.observableArray();
    self.currentWebinarsArray = ko.observableArray();
    self.GetAllLaws = function () {
        $.get('/Law/GetAllLaws', function (data) {
            var res = ko.mapping.fromJS(data)
            self.lawsArray(res());
            self.GetAllWebinarsByLaw(self.lawsArray()[0]);
        });
    };
    self.chosenWebinar = ko.observable({
        VideoUrl: "",
    });
    self.GetAllWebinarsByLaw = function (data) {
        $.get('/Home/GetWebinarsByLaw', { id: data.Id() }, function (resdata)
        {
            var res = ko.mapping.fromJS(resdata);
            self.currentWebinarsArray(res());
            self.chosenWebinar(res()[0]);
        })};
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
    LawWebinarsViewModel.getAllLaws();
});