using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Webinars.Startup))]
namespace Webinars
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
