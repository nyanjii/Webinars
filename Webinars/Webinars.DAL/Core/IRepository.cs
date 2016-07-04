using System.Collections.Generic;

namespace Webinars.DAL.Core
{
    interface IRepository<T>
    {
        void Add(T item);

        void Update(T item);

        void Delete(T item);

        T Get(int id);

        IEnumerable<T> GetAll();
    }
}
