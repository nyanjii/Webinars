using System.Collections.Generic;
using Webinars.DAL.Core;
using Webinars.DAL.Model;

namespace Webinars.DAL.RepositoryInterfaces
{
    public interface IWebinarRepository: IRepository<Webinar>
    {
      IEnumerable<Webinar> FindWebinarsByLawId(int id);
    }
}
