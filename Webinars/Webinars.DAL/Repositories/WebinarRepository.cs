using System.Collections.Generic;
using System.Linq;
using Webinars.DAL.Context;
using Webinars.DAL.Core;
using Webinars.DAL.Model;
using Webinars.DAL.RepositoryInterfaces;

namespace Webinars.DAL.Repositories
{
    public class WebinarRepository: RepositoryBase<Webinar>,IWebinarRepository
    {
       public WebinarRepository(WebinarContext context) : base(context) { }
       public IEnumerable<Webinar> FindWebinarsByLawId(int id)
        {
            return entities.Where(w => w.LawId == id);
        }
    }
}
