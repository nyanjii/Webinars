using System.Data.Entity;
using Webinars.DAL.Core;
using Webinars.DAL.Model;
using Webinars.DAL.Repositories;

namespace Webinars.DAL.Context
{
    public class WebinarContextInitializer: CreateDatabaseIfNotExists<WebinarContext>
    {
        protected override void Seed(WebinarContext context)
        {
           

            Law l1 = new Law() { Name = "123", Description = "dfgkhlskghsflghdfgh" };
            Law l2 = new Law() { Name = "321", Description = "dfsdksjdflksdjf" };
            Law l3 = new Law() { Name = "231", Description = "fgjkdddxflkdtsroiltusritso" };

            context.Laws.Add(l1);
            context.Laws.Add(l2);
            context.Laws.Add(l3);

            Webinar w1 = new Webinar() { Name = "webi1", VideoUrl = "https://www.youtube.com/embed/Col9Av1ydS4", Law = l1, LawId = l1.Id };
            Webinar w2 = new Webinar() { Name = "webi2", VideoUrl = "https://www.youtube.com/embed/478Hav_WDJY", Law = l2, LawId = l2.Id };
            Webinar w3 = new Webinar() { Name = "webi3", VideoUrl = "https://www.youtube.com/embed/INo_5WXov3A", Law = l1, LawId = l1.Id };
            Webinar w4 = new Webinar() { Name = "webi4", VideoUrl = "https://www.youtube.com/embed/OYX7srTAT6k", Law = l3, LawId = l3.Id };
            Webinar w5 = new Webinar() { Name = "webi5", VideoUrl = "https://www.youtube.com/embed/bZy8Nmf6f_Q", Law = l2, LawId = l2.Id };

            context.Webinars.Add(w1);
            context.Webinars.Add(w2);
            context.Webinars.Add(w3);
            context.Webinars.Add(w4);
            context.Webinars.Add(w5);

            context.SaveChanges();
        }
    }
}
