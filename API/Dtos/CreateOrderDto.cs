using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos
{
    public class CreateOrderDto
    {
        public string? FirstName{ get; set;}
        public string? LastName{ get; set;}
        public string? Phone { get; set; }
        public string? City { get; set; }
        public string? AddressLine { get; set; }
    }
}