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
    self.GetAllWebinarsByLaw = function (data) {
        $.get('/Home/GetWebinarsByLaw', { id: data.Id }, function (data) {
            var res = ko.mapping.fromJS(data)
            $.each(res(), function (index, value) {
                value.VideoImageUrl = ko.computed(function () {
                    url = this.VideoUrl();
                    var start = url.indexOf("embed/") + 6;
                    var videoId = url.substring(start, url.length);
                    var result = "http://img.youtube.com/vi/" + videoId + "/1.jpg";
                    console.log(result);
                    return result;
                }, value);
            });
            self.currentWebinarsArray(res());
            self.chosenWebinar(self.currentWebinarsArray()[0]);
        });
    };
    self.chosenWebinar = ko.observable({
        VideoUrl: ko.observable(""),
    });

    self.PlayWebinar = function (data) {
        self.chosenWebinar()
            .VideoUrl(data.VideoUrl());
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
    //LawWebinarsViewModel.getAllWebinars(0);
});