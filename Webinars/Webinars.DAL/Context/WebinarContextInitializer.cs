using System.Data.Entity;

namespace Webinars.DAL.Context
{
    public class WebinarContextInitializer: DropCreateDatabaseAlways<WebinarContext>
    {
        protected override void Seed(WebinarContext context)
        {
            base.Seed(context);
        }
    }
}
