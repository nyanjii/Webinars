using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Webinars.DAL.Model
{
    public class Law:EntityBase
    {
        public string Description { get; set; }
        IEnumerable<Webinar> Webinars { get; set; }
    }
}
