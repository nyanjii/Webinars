using Webinars.DAL.Context;
using Webinars.DAL.Core;
using Webinars.DAL.Model;

namespace Webinars.DAL.Repositories
{
    public class WebinarRepository: RepositoryBase<Webinar>
    {
        WebinarRepository(WebinarContext context) : base(context) { }
    }
}
