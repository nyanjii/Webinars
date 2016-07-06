using System.Web.Optimization;

namespace Webinars
{
    public class BundleConfig
    {
        
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/knockout").Include(
                       "~/Scripts/knockout-{version}.js",
                       "~/Scripts/knockout.mapping-latest.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/arcticmodal").Include(
                "~/Scripts/jquery.arcticmodal-0.3.min.js"));

            bundles.Add(new StyleBundle("~/bundles/arcticcss").Include(
                "~/Content/jquery.arcticmodal-0.3.css",
                "~/Content/themes/simple.css"));
        }
    }
}
