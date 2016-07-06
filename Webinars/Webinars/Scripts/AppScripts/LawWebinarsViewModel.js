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
    self.GetAllWebinarsByLaw = function (data) {
        $.get('/Home/GetWebinarsByLaw', { id: data.Id() }, function (data) {
            var res = ko.mapping.fromJS(data)
            $.each(res(), function (index, value) {
                console.log(value);
                value.VideoImageUrl = ko.computed(function () {
                    url = this.VideoUrl();
                    var start = url.indexOf("embed/") + 6;
                    var videoId = url.substring(start, url.length);
                    var result = "http://img.youtube.com/vi/" + videoId + "/1.jpg";
                    return result;
                }, value);
            });
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
        webinars: self.currentWebinarsArray,
        getAllLaws: self.GetAllLaws,
        getAllWebinars: self.GetAllWebinarsByLaw,
        webinar: self.chosenWebinar,
        playWebinar: self.PlayWebinar,
        getVideoUrlImage: self.GetVideoUrlImage
    };
}()

$(document).ready(function () {
    ko.applyBindings(LawWebinarsViewModel);
    LawWebinarsViewModel.getAllLaws();
    LawWebinarsViewModel.getAllWebinars(2);
});