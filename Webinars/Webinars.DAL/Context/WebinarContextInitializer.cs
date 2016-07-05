using System.Data.Entity;
using Webinars.DAL.Core;
using Webinars.DAL.Model;
using Webinars.DAL.Repositories;

namespace Webinars.DAL.Context
{
    public class WebinarContextInitializer: DropCreateDatabaseAlways<WebinarContext>
    {
        protected override void Seed(WebinarContext context)
        {
            IUnitOfWork uow = new UnitOfWork();

            Law l1 = new Law() { Name = "123", Description = "dfgkhlskghsflghdfgh" };
            Law l2 = new Law() { Name = "321", Description = "dfsdksjdflksdjf" };
            Law l3 = new Law() { Name = "231", Description = "fgjkdddxflkdtsroiltusritso" };

            uow.lawRepository.Add(l1);
            uow.lawRepository.Add(l2);
            uow.lawRepository.Add(l3);

            Webinar w1 = new Webinar() { Name = "webi1", VideoUrl = "", Law = l1, LawId = l1.Id };
            Webinar w2 = new Webinar() { Name = "webi2", VideoUrl = "", Law = l2, LawId = l2.Id };
            Webinar w3 = new Webinar() { Name = "webi3", VideoUrl = "", Law = l1, LawId = l1.Id };
            Webinar w4 = new Webinar() { Name = "webi4", VideoUrl = "", Law = l3, LawId = l3.Id };
            Webinar w5 = new Webinar() { Name = "webi5", VideoUrl = "", Law = l2, LawId = l2.Id };

            uow.webinarRepository.Add(w1);
            uow.webinarRepository.Add(w2);
            uow.webinarRepository.Add(w3);
            uow.webinarRepository.Add(w4);
            uow.webinarRepository.Add(w5);

            uow.Save();
        }
    }
}
