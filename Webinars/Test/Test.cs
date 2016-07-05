using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Webinars.DAL.Context;
using Webinars.DAL.Model;

namespace Test
{
    [TestClass]
    public class Test
    {
        [TestMethod]
        public void TestContext()
        {
            WebinarContext db = new WebinarContext();
            db.Laws.Add(new Law
            {
               Name="Law1",
               Description="dhfdjfj"
            });
            db.SaveChanges();
        }
    }
}
