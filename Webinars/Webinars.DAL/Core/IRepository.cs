using System.Collections.Generic;

namespace Webinars.DAL.Core
{
    public interface IRepository<T>
    {
        void Add(T item);

        void Update(T item);

        void Delete(int id);

        T Get(int id);

        IEnumerable<T> GetAll();
    }
}
