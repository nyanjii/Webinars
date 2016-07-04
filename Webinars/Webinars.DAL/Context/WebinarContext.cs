using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Webinars.DAL.Model;

namespace Webinars.DAL.Context
{
    public class WebinarContext: DbContext
    {
        public WebinarContext() : base("WebinarDB") { }

        DbSet<Webinar> Webinars { get; set; }
        DbSet<Law> Laws { get; set; }

    }
}
