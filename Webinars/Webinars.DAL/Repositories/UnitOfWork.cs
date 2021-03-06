﻿using Webinars.DAL.Context;
using Webinars.DAL.Core;
using Webinars.DAL.RepositoryInterfaces;

namespace Webinars.DAL.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private WebinarContext _context;
        private IWebinarRepository webinarRepo;
        private ILawRepository lawRepo;

        public IWebinarRepository WebinarRepository
        {
            get
            {
                if (webinarRepo == null)
                {
                    webinarRepo = new WebinarRepository(_context);
                }
                return webinarRepo;
            }
        }

        public ILawRepository LawRepository
        {
            get
            {
                if (lawRepo == null)
                {
                    lawRepo = new LawRepository(_context);
                }
                return lawRepo;
            }

        }

        public UnitOfWork(WebinarContext context)
        {
            _context = context;
        }
        public void Save()
        {
            _context.SaveChanges();
        }

    }
}
