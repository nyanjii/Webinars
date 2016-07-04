using Webinars.DAL.Context;
using Webinars.DAL.Core;
using Webinars.DAL.Model;
using Webinars.DAL.RepositoryInterfaces;

namespace Webinars.DAL.Repositories
{
    public class LawRepository: RepositoryBase<Law>, ILawRepository
    {
        LawRepository(WebinarContext context) : base(context) { }
    }
}
