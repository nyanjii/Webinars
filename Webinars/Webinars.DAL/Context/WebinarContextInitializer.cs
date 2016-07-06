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
           

            Law l1 = new Law() { Name = "356", Description = "Очень важный закон" };
            Law l2 = new Law() { Name = "328", Description = "Очень важный закон" };
            Law l3 = new Law() { Name = "328", Description = "Очень важный закон" };

            context.Laws.Add(l1);
            context.Laws.Add(l2);
            context.Laws.Add(l3);

            Webinar w1 = new Webinar() { Name = "Вебинар 1", VideoUrl = "https://www.youtube.com/embed/Col9Av1ydS4", Law = l1, LawId = l1.Id };
            Webinar w2 = new Webinar() { Name = "Вебинар 2", VideoUrl = "https://www.youtube.com/embed/478Hav_WDJY", Law = l2, LawId = l2.Id };
            Webinar w3 = new Webinar() { Name = "Вебинар 3", VideoUrl = "https://www.youtube.com/embed/INo_5WXov3A", Law = l1, LawId = l1.Id };
            Webinar w4 = new Webinar() { Name = "Вебинар 4", VideoUrl = "https://www.youtube.com/embed/OYX7srTAT6k", Law = l3, LawId = l3.Id };
            Webinar w5 = new Webinar() { Name = "Вебинар 5", VideoUrl = "https://www.youtube.com/embed/bZy8Nmf6f_Q", Law = l2, LawId = l2.Id };

            context.Webinars.Add(w1);
            context.Webinars.Add(w2);
            context.Webinars.Add(w3);
            context.Webinars.Add(w4);
            context.Webinars.Add(w5);

            context.SaveChanges();
        }
    }
}
