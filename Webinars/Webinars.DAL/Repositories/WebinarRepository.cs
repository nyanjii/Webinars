using Webinars.DAL.Context;
using Webinars.DAL.Core;
using Webinars.DAL.Model;
using Webinars.DAL.RepositoryInterfaces;

namespace Webinars.DAL.Repositories
{
    public class WebinarRepository: RepositoryBase<Webinar>,IWebinarRepository
    {
       public WebinarRepository(WebinarContext context) : base(context) { }
    }
}
