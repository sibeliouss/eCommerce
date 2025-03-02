using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos;
using API.Entity;

namespace API.Extensions
{
     public static class OrderExtensions
    {
        public static IQueryable<OrderDto> OrderToDto(this IQueryable<Order> query)
        {
            return query.Select(i => new OrderDto
            {
                Id = i.Id,
                CustomerId = i.CustomerId,
                FirstName = i.FirstName,
                LastName = i.LastName,
                Phone = i.Phone,
                AddressLine= i.AddressLine,
                City = i.City,
                DeliveryFree = i.DeliveryFree,
                SubTotal = i.SubTotal,
                OrderDate = i.OrderDate,
                OrderStatus = i.OrderStatus,
                OrderItems = i.OrderItems!.Select(item => new OrderItemDto
                {
                    Id = item.Id,
                    ProductName = item.ProductName,
                    ProductId = item.ProductId,
                    ProductImage = item.ProductImage,
                    Price = item.Price,
                    Quantity = item.Quantity
                }).ToList()
            });
        }
    }
}