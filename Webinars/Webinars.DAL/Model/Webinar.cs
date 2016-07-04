﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Webinars.DAL.Model
{
    public class Webinar:EntityBase
    {
        public string VideoUrl { get; set; }

        public int LawId { get; set; }
        public Law Law { get; set; }
    }
}
