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
        public WebinarContext() : base("name=WebinarConnection") { }

        static WebinarContext()
        {
            Database.SetInitializer(new WebinarContextInitializer());
        }
        public DbSet<Webinar> Webinars { get; set; }
        public DbSet<Law> Laws { get; set; }

    }
}
