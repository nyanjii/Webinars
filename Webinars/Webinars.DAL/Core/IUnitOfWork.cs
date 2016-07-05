using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Webinars.DAL.RepositoryInterfaces;

namespace Webinars.DAL.Core
{ 
    public interface IUnitOfWork
    {
            ILawRepository LawRepository { get; }
            IWebinarRepository WebinarRepository { get; }
            void Save();
     
    }
}
