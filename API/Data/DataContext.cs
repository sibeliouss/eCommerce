using API.Entity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext(DbContextOptions options) : IdentityDbContext<AppUser, AppRole, string>(options)
{
 //public DbSet<Product> Products {get;set;}
 public DbSet<Product> Products => Set<Product>(); //Products'ın artık boş olma durumu yok.
 public DbSet<Cart> Carts=> Set<Cart>();
 public DbSet<Order> Orders=> Set<Order>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Product>().HasData(
            new List<Product>{
                
                new Product{Id=1, Name="ABC", Description="Telefon Açıklaması", ImgUrl="1.jpg", Price=50000, IsActive=true, Stock=100}, 
                new Product{Id=2, Name="ABC 2", Description="Telefon Açıklaması", ImgUrl="2.jpg", Price=32000, IsActive=true, Stock=10},
                new Product{Id=3, Name="ABC 3", Description="Telefon Açıklaması", ImgUrl="3.jpg", Price=40000, IsActive=false, Stock=30},
            });
           
    }
}