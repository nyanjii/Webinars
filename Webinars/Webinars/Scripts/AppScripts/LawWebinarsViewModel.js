LawWebinarsViewModel = function () {
    var self = this;
    self.lawsArray = ko.observableArray();
    self.currentWebinarsArray = ko.observableArray();
    self.GetAllLaws = function () {
        $.get('/Law/GetAllLaws', function (data) {
            var res = ko.mapping.fromJS(data);
            self.lawsArray(res());
            self.GetAllWebinarsByLaw(self.lawsArray()[0]);
        });
    };
    self.GetAllWebinarsByLaw = function (data) {
        $.get('/Home/GetWebinarsByLaw', { id: data.Id }, function (data) {
            var res = ko.mapping.fromJS(data)
            $.each(res(), function (index, value) {
                value.VideoImageUrl = ko.computed(function () {
                    return self.GetVideoImage(this.VideoUrl());

                }, value);
                if (index === 0)
                    value.isChosen = ko.observable(true);
                else value.isChosen = ko.observable(false);
            });
            self.currentWebinarsArray(res());
            var d = self.currentWebinarsArray()[0];
            self.chosenWebinar({ VideoUrl: (d.VideoUrl()), Id: (d.Id()) });
  
        });
    };
    self.chosenWebinar = ko.observable({
        VideoUrl: ko.observable(""),
        Id: ko.observable("")
    });
    self.PlayWebinar = function (data) {
        $.each(self.currentWebinarsArray(), function (index, value) {
            if (value.Id() === self.chosenWebinar().Id)
                value.isChosen(false);
            if (value.Id() === data.Id())
                value.isChosen(true);
        });
        self.chosenWebinar({ VideoUrl: (data.VideoUrl()), Id: (data.Id()) });



    };
    self.GetVideoId = function (url) {
        var start = url.indexOf("embed/") + 6;
        var videoId = url.substring(start, url.length);
        return videoId;
    };
    self.GetVideoImage = function (videoUrl) {
        var videoId = self.GetVideoId(videoUrl);
        var result = "http://img.youtube.com/vi/" + videoId + "/1.jpg";
        return result;
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
});