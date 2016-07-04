using System.Collections.Generic;
using System.Linq;
using Webinars.DAL.Model;
using Webinars.DAL.Context;
using System.Data.Entity;

namespace Webinars.DAL.Core
{
    public class RepositoryBase<T> where T : EntityBase
    {
        protected WebinarContext context;
        protected DbSet<T> entities;

        protected RepositoryBase(WebinarContext context)
        {
            this.context = context;
            this.entities = context.Set<T>();
        }

        public void Add(T item)
        {
            entities.Add(item);
        }

        public void Update(T item)
        {
            context.Entry(item).State = EntityState.Modified;
        }

        public void Delete(T item)
        {
            context.Entry(item).State = EntityState.Deleted;
        }

        public T Get(int id)
        {
            return entities.Find(id);
        }

        public IEnumerable<T> GetAll()
        {
            return entities.AsEnumerable();
        }

        public void SaveChanges()
        {
            context.SaveChanges();
        }

    }
}
